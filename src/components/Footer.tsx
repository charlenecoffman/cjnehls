import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 flex justify-center items-center gap-6 bg-[#060e1f] text-white">
      <a
        href="https://www.facebook.com/profile.php?id=61577154191694"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-[#FFB966] transition-colors"
      >
        <Facebook size={28} />
      </a>
      <a
        href="https://www.instagram.com/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-[#FFB966] transition-colors"
      >
        <Instagram size={28} />
      </a>
    </footer>
  );
};
