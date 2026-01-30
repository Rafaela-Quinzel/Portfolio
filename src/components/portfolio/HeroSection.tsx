import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from 'components/ui/button';

export default function HeroSection() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg">
            {/* Background gradient orbs (refinados para coincidir com os prints) */}
            <div className="absolute top-1/5 -left-44 w-[28rem] h-[28rem] bg-blue-500/25 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-36 w-[26rem] h-[26rem] bg-violet-500/15 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
                            👋 Disponível para novos projetos
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-white">Olá, sou </span>
                        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                            Dev Full Stack
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transformo ideias em experiências digitais excepcionais.
                        Especializado em React, Node.js e arquiteturas escaláveis.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center justify-center mb-16"
                    >
                        <Button
                            onClick={scrollToProjects}
                            size="pill"
                            className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white transition-all duration-300 hover:scale-105 shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/25 rounded-[200px]"
                        >
                            Ver Projetos
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <a
                            href="https://github.com/Rafaela-Quinzel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rafaela-quinzel-008799132/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="LinkedIn"
                            title="LinkedIn"

                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:email@example.com"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Email"
                            title="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href={`${process.env.PUBLIC_URL}/Rafaela_Quinzel_Desenvolvedora.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Baixar Currículo"
                            title="Baixar Currículo"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <Download className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                aria-label="Email"
                title="Email"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-500"
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}