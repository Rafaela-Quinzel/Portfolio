import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from 'components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { getUserProjects } from 'services/github';
import { Carousel } from 'components/ui/carousel';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

type Project = {
  id: string | number;
  title: string;
  description?: string;
  category?: 'frontend' | 'backend' | 'fullstack';
  technologies?: string[];
  image_url?: string;
  live_url?: string;
  github_url?: string;
  stars?: number;
  language?: string;
  updatedAt?: string;
};

export default function ProjectsSection({ projects = [], githubUser }: { projects?: Project[]; githubUser?: string }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const { data: fetchedProjects, isLoading, isError } = useQuery({
    queryKey: ['github-projects', githubUser],
    queryFn: () => getUserProjects(githubUser as string),
    enabled: !!githubUser,
  });

  const sourceProjects = githubUser && !isError && fetchedProjects ? fetchedProjects : projects;

  const filteredProjects = activeCategory === 'all'
    ? sourceProjects
    : sourceProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative bg-brand-surface overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos em{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos, demonstrando habilidades 
            em diferentes tecnologias e domínios.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Loading / Error States */}
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
            <p className="text-gray-500">Carregando projetos do GitHub...</p>
          </motion.div>
        )}

        {isError && githubUser && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
            <p className="text-gray-500">Não foi possível carregar os projetos do GitHub. Mostrando lista padrão.</p>
          </motion.div>
        )}

        {/* Projects Carousel */}
        <Carousel key={activeCategory} className="mt-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative min-w-[300px] sm:min-w-[380px] md:min-w-[460px] lg:min-w-[520px] h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image_url || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {(project as any).language || project.category ? (
                    <Badge 
                      variant="secondary" 
                      className="bg-white/10 text-gray-300 border-0 text-xs"
                    >
                      {project.category ?? (project as any).language}
                    </Badge>
                  ) : null}
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies / Stars */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project as any).stars !== undefined && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      ⭐ {(project as any).stars}
                    </span>
                  )}
                </div>
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {project.updatedAt && (
                    <span>Atualizado: {new Date(project.updatedAt).toLocaleDateString()}</span>
                  )}
                  {project.live_url && (
                    <span className="text-green-400">Tem Demo</span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500">Nenhum projeto encontrado nesta categoria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}