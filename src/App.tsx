import { motion } from 'framer-motion';
import { Experience } from './components/Experience';
import { HeroScene } from './components/HeroScene';
import { ProjectSlider } from './components/ProjectSlider';

const navItems = ['Projects', 'About', 'Experience', 'Contact'];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          Adhithi Maran<span>.</span>
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
            <p className="eyebrow">
              Computer Science @ University of Minnesota | Class of 2026
            </p>
            <h1 id="hero-heading">My Portfolio</h1>
            <p className="hero-intro">
              Hello! I'm a recent CS grad, welcome to my personal portfolio!
            </p>
          </motion.div>
        </section>
        <section
          id="projects"
          className="section projects-section"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading container">
            <p className="eyebrow">My work</p>
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
            <p className="eyebrow">Introduction</p>
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
                Hi there! I'm a recent computer science graduate, with a strong
                skillset in programming and problem-solving. I enjoy immersing
                myself in projects and collaborating with others!
              </p>
              <p>
                I've gained experience through both personal projects and formal
                internships, and I always want to keep learning. I'm currently
                interning on the Platform team at Western Insurance, where I
                work on infrastructure automation and ensuring system's are
                reliable for development teams and end users.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section container split-section"
          aria-labelledby="experience-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">Where I've been</p>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <Experience />
        </section>
        <section
          id="contact"
          className="section container contact-section"
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">Connect with me!</p>
          <h2 id="contact-heading">Contact</h2>
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
