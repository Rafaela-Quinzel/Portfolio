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
    id: 'landing-page-builder',
    title: 'Landing Page Builder',
    description:
      'Editor visual drag-and-drop para criação de landing pages responsivas sem necessidade de código.',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image_url:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description:
      'Aplicação de gerenciamento de tarefas com drag-and-drop, colaboração em tempo real e integração com calendário.',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets'],
    image_url:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description:
      'Dashboard interativo para visualização de dados com gráficos avançados, filtros dinâmicos e exportação de relatórios.',
    category: 'frontend',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'Chart.js'],
    image_url:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Plataforma de e-commerce completa com carrinho, pagamentos via Stripe e painel administrativo.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image_url:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description:
      'Painel unificado para gerenciamento de múltiplas redes sociais com agendamento de posts e análise de métricas.',
    category: 'fullstack',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    image_url:
      'https://images.unsplash.com/photo-1522120693462-1f9a1ec29818?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
  {
    id: 'rest-api-microservices',
    title: 'REST API Microservices',
    description:
      'Arquitetura de microserviços escalável com autenticação JWT e documentação Swagger completa.',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'Docker', 'MongoDB'],
    image_url:
      'https://images.unsplash.com/photo-1581093588401-16a89f24bd60?w=1200&h=800&fit=crop',
    live_url: '#',
    github_url: '#',
  },
];
