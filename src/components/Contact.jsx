import { Mail, FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';

export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect ✿</h2>
        <p>
          I’m open to internships, project collaborations and software engineering opportunities related to AI, cloud and full-stack development.
        </p>
        <div className="contact-links">
          <a href="mailto:meghamohan52021@gmail.com"><Mail size={18} /> Email</a>
          <a href="https://github.com/meghamohan52021" target="_blank" rel="noreferrer"><GitHubIcon size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/2004meghamohan/" target="_blank" rel="noreferrer"><LinkedInIcon size={18} /> LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={18} /> Resume</a>
        </div>
      </div>
    </section>
  );
}
