import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 py-8 text-sm text-gray-500 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
        <span>© 2024 Dev.folio. Todos os direitos reservados.</span>
        <span>
          Feito com <span className="text-violet-400">❤</span> e muito código
        </span>
      </div>
    </footer>
  );
}
