export type GitHubRepo = {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  homepage: string | null
  html_url: string
  owner?: { login: string }
  fork: boolean
  archived: boolean
  disabled?: boolean
  updated_at: string
}

export async function getUserRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  const token = process.env.REACT_APP_GITHUB_TOKEN
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }
  const repos: GitHubRepo[] = await res.json()
  // Filter out forks, archived, disabled repos
  return repos.filter((r) => !r.fork && !r.archived && !r.disabled)
}

async function getRepoLanguages(owner: string, repo: string): Promise<string[]> {
  const token = process.env.REACT_APP_GITHUB_TOKEN
  const url = `https://api.github.com/repos/${owner}/${repo}/languages`
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!res.ok) return []
  const json = await res.json()
  return Object.keys(json || {})
}

async function getRepoTopics(owner: string, repo: string): Promise<string[]> {
  const token = process.env.REACT_APP_GITHUB_TOKEN
  const url = `https://api.github.com/repos/${owner}/${repo}`
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!res.ok) return []
  const json = await res.json()
  return Array.isArray(json.topics) ? json.topics : []
}

export type ProjectCardData = {
  id: string
  title: string
  description?: string
  category?: 'frontend' | 'backend' | 'fullstack'
  technologies?: string[]
  image_url?: string
  live_url?: string
  github_url?: string
  stars?: number
  language?: string
  updatedAt?: string
}

function mapLanguageToCategory(lang: string | null): 'frontend' | 'backend' | 'fullstack' | undefined {
  if (!lang) return undefined
  const l = lang.toLowerCase()
  const frontend = ['html', 'css']
  const backend = ['python', 'java', 'go', 'ruby', 'php', 'c#', 'rust', 'kotlin']
  if (frontend.includes(l)) return 'frontend'
  if (backend.includes(l)) return 'backend'
  if (l === 'javascript' || l === 'typescript' || l === 'dart') return 'fullstack'
  return undefined
}

function inferCategory(repo: GitHubRepo, techs: string[]): 'frontend' | 'backend' | 'fullstack' | undefined {
  const base = mapLanguageToCategory(repo.language)
  const text = `${repo.name} ${repo.description || ''}`.toLowerCase()
  const backendKeywords = [
    'api', 'server', 'backend', 'nest', 'nestjs', 'express', 'fastify',
    'spring', 'django', 'flask', 'adonis', 'laravel', 'graphql', 'prisma',
    'typeorm', 'kafka', 'microservice', 'queue', 'worker'
  ]
  const frontendKeywords = [
    'frontend', 'web', 'ui', 'spa', 'pwa', 'react', 'next', 'vite', 'tailwind',
    'chakra', 'mui', 'svelte', 'vue', 'angular', 'storybook'
  ]
  const allText = `${text} ${techs.join(' ').toLowerCase()}`
  for (const kw of backendKeywords) {
    if (allText.includes(kw)) {
      return 'backend'
    }
  }
  for (const kw of frontendKeywords) {
    if (allText.includes(kw)) {
      return 'frontend'
    }
  }
  return base
}

export function mapReposToProjects(repos: GitHubRepo[], techMap: Record<string, string[]>): ProjectCardData[] {
  return repos.map((r) => {
    const techs = techMap[r.name] || []
    const uniqTechs = Array.from(new Set([...(r.language ? [r.language] : []), ...techs]))
    return {
      id: r.html_url,
      title: r.name,
      description: r.description || undefined,
      category: inferCategory(r, uniqTechs),
      technologies: uniqTechs,
      image_url: undefined,
      live_url: r.homepage || undefined,
      github_url: r.html_url,
      stars: r.stargazers_count,
      language: r.language || undefined,
      updatedAt: r.updated_at,
    }
  })
}

export async function getUserProjects(username: string): Promise<ProjectCardData[]> {
  // Simple cache in localStorage to avoid rate limit issues
  const cacheKey = `gh_projects_${username}`
  const cachedRaw = typeof window !== 'undefined' ? window.localStorage.getItem(cacheKey) : null
  const cached: ProjectCardData[] | null = cachedRaw ? JSON.parse(cachedRaw) : null

  try {
    const repos = await getUserRepos(username)
    const limited = repos.slice(0, 24)
    const projects = mapReposToProjects(limited, {}) // tecnologias virão do campo language
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(cacheKey, JSON.stringify(projects))
    }
    return projects
  } catch (e) {
    // On failure, serve cached data if present
    if (cached) return cached
    return []
  }
}
