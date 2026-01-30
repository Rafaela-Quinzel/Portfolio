import React from 'react';

export default function Navbar() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-brand-bg to-brand-surface border-b border-white/10 shadow-lg shadow-black/20">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="font-semibold">
          <span className="text-blue-400">&lt; </span>
          <span className="text-white">Rafaela Quinzel</span>
          <span className="text-blue-400"> /&gt;</span>
        </div>
        <ul className="flex gap-8 text-sm text-gray-400">
          <li><button className="hover:text-white" onClick={() => goTo('home')}>Início</button></li>
          <li><button className="hover:text-white" onClick={() => goTo('about')}>Sobre</button></li>
          <li><button className="hover:text-white" onClick={() => goTo('projects')}>Projetos</button></li>
        </ul>
      </nav>
    </header>
  );
}
