import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo" aria-label="Go to home">
        <span className="logo-mark">✦</span>
        Megha
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="nav-icons" aria-label="Social links">
        <a href="https://github.com/meghamohan52021" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon size={18} />
        </a>
        <a href="https://www.linkedin.com/in/2004meghamohan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon size={18} />
        </a>
        <a href="mailto:meghamohan52021@gmail.com" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}
