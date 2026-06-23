import { motion } from 'framer-motion';
import { ArrowRight,  } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">Computer Science Graduate ✿ AI + Full Stack</p>
        <h1>
          Hi, I’m <span>Megha Mohan</span> - I build backend, cloud and AI-powered software systems.
        </h1>
        <p className="hero-text">
          Computer Science graduate with hands-on experience across software development, cloud technologies, backend systems, and full-stack applications, with a strong interest in building scalable and practical solutions.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            View Projects <ArrowRight size={18} />
          </a>
          <a className="ghost-btn" href="https://github.com/meghamohan52021" target="_blank" rel="noreferrer">
            <GitHubIcon size={18} /> GitHub
          </a>
          <a className="ghost-btn" href="https://www.linkedin.com/in/2004meghamohan/" target="_blank" rel="noreferrer">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="sparkle sparkle-one">✦</div>
        <div className="sparkle sparkle-two">✧</div>
        <div className="glass-bottle">
          <div className="bottle-neck" />
          <div className="bottle-body">
            <span>AI</span>
            <span>ML</span>
            <span>☁</span>
            <span>JS</span>
            <span>♡</span>
          </div>
        </div>
        <div className="ribbon">projects · learning · building · growing</div>
        <div className="checker-strip" />
      </motion.div>
    </section>
  );
}
