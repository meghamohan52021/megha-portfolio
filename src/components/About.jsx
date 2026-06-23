import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="about section-shell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <p className="eyebrow">About me</p>
        <h2>Curious and driven to learn.</h2>
      </div>
      <div className="about-grid">
        <div className="paper-card">
          <p>
            I’m a BSc Computing Science student at the University of East Anglia who enjoys building and understanding how software systems work behind the scenes. I’m particularly interested in backend development, cloud technologies and artificial intelligence, and I like exploring how these areas come together to create practical, real-world solutions.<br />
            Outside of coursework, I enjoy experimenting with new tools and technologies, working on personal projects and improving my problem-solving skills through coding challenges. I’m especially drawn to designing systems that are efficient, scalable and intuitive, and I’m always curious about how technology can be used to make everyday processes simpler and more effective.<br />
            I’m motivated by continuous learning and enjoy taking on challenges that push me to think critically and grow as a developer.
          </p>
        </div>
        <div className="mini-notes">
          <div>✦ Full-stack development</div>
          <div>☁ Cloud Engineering</div>
          <div>🖇 AI and Machine Learning</div>
          <div>⌁ Software Engineering</div>
        </div>
      </div>
    </motion.section>
  );
}
