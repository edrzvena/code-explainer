import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-[#1A1A1A] bg-[#0F0F0F] px-8 py-6 flex justify-between items-center">
      <span className="font-mono text-[1.4rem] font-semibold text-[#C0C0C0] tracking-tight">
        Pedro Widya - Code Explainer
      </span>
    </nav>
  );
};

export default Navbar;