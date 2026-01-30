import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Cloud } from 'lucide-react';

const skills = [
  { icon: Layout, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server, name: 'Backend', items: ['Node.js', 'Python', 'Express', 'NestJS'] },
  { icon: Database, name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { icon: Cloud, name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-brand-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About text */}
            <div>
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Sobre Mim
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Desenvolvedora apaixonada por{' '}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  criar soluções
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Com 4 anos de experiência em desenvolvimento web, 
                  especializo-me em criar aplicações robustas e escaláveis 
                  para empresas de diversos setores.
                </p>
                <p>
                  Minha abordagem combina código limpo, arquitetura sólida 
                  e foco em soluções que geram valor real para o negócio.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '4', label: 'Anos de Exp.' },
                  { value: '40+', label: 'Projetos' },
                  { value: '5+', label: 'Empresas' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}