import { motion } from 'framer-motion';
import { HeroScene } from './components/HeroScene';
import { ProjectSlider } from './components/ProjectSlider';
import { skills } from './data/skills';

const navItems = ['Projects', 'About', 'Skills', 'Contact'];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          YN<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="scene">
            <HeroScene />
          </div>
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="eyebrow">Independent creative / 2026</p>
            <h1 id="hero-heading">
              A place for work
              <br />
              with a point of view.
            </h1>
            <p className="hero-intro">
              A placeholder introduction for a designer and developer making
              considered digital experiences.
            </p>
          </motion.div>
        </section>
        <section
          id="projects"
          className="section projects-section"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading container">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading">Projects</h2>
          </div>
          <ProjectSlider />
        </section>
        <section
          id="about"
          className="section container split-section"
          aria-labelledby="about-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">A little context</p>
            <h2 id="about-heading">About</h2>
          </div>
          <div className="about-content">
            <div
              className="avatar-placeholder"
              aria-label="Placeholder portrait"
            >
              YN
            </div>
            <div className="prose">
              <p>
                I’m a curious designer and developer who found their way here by
                following a long-running interest in how ideas become useful
                things.
              </p>
              <p>
                This is room for a more human story: the winding path, the small
                obsessions, and the kind of collaborators and problems that make
                the work meaningful.
              </p>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="section container split-section"
          aria-labelledby="skills-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">Tools of the trade</p>
            <h2 id="skills-heading">Skills</h2>
          </div>
          <ul className="skills-grid">
            {skills.map((skill) => (
              <li key={skill.name}>
                <span>{skill.label}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
        <section
          id="contact"
          className="section container contact-section"
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-heading">Have something in mind?</h2>
          <p>Use this space for a short invitation to get in touch.</p>
          <div className="contact-actions">
            <a className="button" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <a className="button button-secondary" href="/resume.pdf" download>
              Download résumé
            </a>
          </div>
          <div className="social-links">
            <a href="#">GitHub ↗</a>
            <a href="#">LinkedIn ↗</a>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Your Name</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
