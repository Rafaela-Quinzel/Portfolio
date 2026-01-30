// Import da imagem local do projeto (corrigido nome do arquivo)
import portfolioCapa from '../assets/projects/portfolio_capa.png';
import pokecionCapa from '../assets/projects/pokecoin.png';

export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack';
  technologies: string[];
  image_url?: string;
  live_url?: string;
  github_url?: string;
};

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio',
    description: 'Meu portfólio de Desenvolvedora Web 👩‍💻',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image_url: portfolioCapa,
    // image_url:
    //   'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Portfolio',
  },
  {
    id: 'weather-app-nextjs',
    title: 'Weather App (Next.js)',
    description: 'Aplicativo de clima desenvolvido com Next.js, consumindo API de previsão do tempo com UI responsiva.',
    category: 'frontend',
    technologies: ['Next.js', 'React'],
    image_url:
      'https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/weather-app-nextjs',
  },
  {
    id: 'cursos-ti-desafio-batalha-naval',
    title: 'Desafio Batalha Naval',
    description: 'Desafio de programação em C para o jogo Batalha Naval (GitHub Classroom).',
    category: 'backend',
    technologies: ['C'],
    image_url:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/cursos-ti-desafio-batalha-naval-Rafaela-Quinzel',
  },
  {
    id: 'cursos-ti-desafio-xadrez',
    title: 'Desafio Xadrez',
    description: 'Desafio de programação em C para o jogo Xadrez (GitHub Classroom).',
    category: 'backend',
    technologies: ['C'],
    image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/cursos-ti-desafio-xadrez-DesafioXadrez-Rafaela-Quinzel',
  },
  {
    id: 'estacio',
    title: 'Estácio',
    description: 'Repositório para entrega de trabalhos e atividades referentes ao curso Engenharia de Software.',
    category: 'backend',
    technologies: ['C'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Estacio',
  },
  {
    id: 'controlle-challenge',
    title: 'Controlle Challenge',
    description: '',
    category: 'frontend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1522120693462-1f9a1ec29818?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/controlle-challenge',
  },
  {
    id: 'pokecoin-challenge-web',
    title: 'Pokecoin Challenge Web',
    description: '',
    category: 'frontend',
    technologies: ['JavaScript'],
    image_url:pokecionCapa,
    // image_url:
    //   'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: 'https://pokecoin-challenge-web.netlify.app/login',
    github_url: 'https://github.com/Rafaela-Quinzel/pokecoin-challenge-web',
  },
  {
    id: 'pokecoin-challenge-server',
    title: 'Pokecoin Challenge Server',
    description: '',
    category: 'backend',
    technologies: ['JavaScript'],
    image_url:
      'https://images.unsplash.com/photo-1522120693462-1f9a1ec29818?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/pokecoin-challenge-server',
  },
  {
    id: 'financial-manager',
    title: 'Financial Manager',
    description: 'Projeto desenvolvido no curso de Angular Avançado.',
    category: 'frontend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Financial-Manager',
  },
  {
    id: 'nlw-together',
    title: 'NLW Together',
    description: 'Projeto desenvolvido em Nodejs no evento NLW 6 da Rocketseat.',
    category: 'backend',
    technologies: ['TypeScript', 'Node.js'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/NLW-Together',
  },
  {
    id: 'tic-tac-toe-challenge',
    title: 'Tic Tac Toe Challenge',
    description: '',
    category: 'frontend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/tic-tac-toe-challenge',
  },
  {
    id: 'labeddit',
    title: 'LabEddit',
    description: 'Projeto desenvolvido no curso da LABENU',
    category: 'frontend',
    technologies: ['JavaScript'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/LabEddit',
  },
  {
    id: 'labex',
    title: 'LabeX',
    description: 'Projeto desenvolvido no curso da LABENU',
    category: 'frontend',
    technologies: ['JavaScript'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/LabeX',
  },
  {
    id: 'labenu-dumont',
    title: 'Labenu Dumont',
    description: '',
    category: 'frontend',
    technologies: ['JavaScript'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Labenu-Dumont',
  },
  {
    id: 'frontend-project',
    title: 'Frontend Project',
    description: 'Projeto Fullstack - Repositório Frontend',
    category: 'frontend',
    technologies: ['JavaScript'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Frontend-Project',
  },
  {
    id: 'backend-project',
    title: 'Backend Project',
    description: 'Projeto Fullstack - Repositório Backend',
    category: 'backend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Backend-Project',
  },
  {
    id: 'lama',
    title: 'LAMA',
    description: 'Projeto desenvolvido no curso da LABENU',
    category: 'backend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/LAMA',
  },
  {
    id: 'cookenu',
    title: 'Cookenu',
    description: 'Projeto desenvolvido no curso da LABENU',
    category: 'backend',
    technologies: ['TypeScript'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: 'https://github.com/Rafaela-Quinzel/Cookenu',
  },
];
