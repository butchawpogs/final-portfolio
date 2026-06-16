import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import profilePhoto from './assets/profile.png';
import './styles.css';

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Responsive Design',
  'Git',
  'UI Design',
  'Problem Solving',
];

const projects = [
  {
    title: 'KenShaneStore',
    description:
      'KenShane is a lightweight, PHP-based online ordering system designed for small businesses. It includes user authentication, product management, shopping cart functionality, and an admin dashboard for handling orders.',
    tags: ['MySQL', 'PHP', 'Infinityfree'],
  },
  {
    title: 'CacaoTrack Capstone',
    description:
      'This capstone project, entitled “CacaoTrack: An IoT-Driven Prototype for Real-Time Monitoring and Control of Cacao Fermentation”, prepared and submitted by James Mathew Cabrera, Ed Joshua Ligan, Meljay Cullamat, and Ham Pugoy in partial fulfillment of the requirements for the degree, Bachelor of Science in Information Technology, has been examined and is hereby recommended for oral examination, approval, and acceptance..',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  
];

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#about" aria-label="Go to about section">
          <span>JP</span>
          Portfolio
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            React Developer Portfolio
          </p>
          <h1>Hello, I&apos;m Ham P. Pugoy.</h1>
          <p className="intro">
            I build clean, responsive websites and simple digital experiences
            that feel fast, useful, and easy to understand.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="profile-panel" aria-label="Profile summary">
          <div className="portrait">
            <img src={profilePhoto} alt="Pugoy profile" />
          </div>
          <div>
            <h2>About Me</h2>
            <p>
              I am a motivated developer focused on creating websites with
              thoughtful layouts, readable code, and practical user experiences.
            </p>
          </div>
          <div className="quick-facts">
            <span>
              <MapPin size={16} aria-hidden="true" />
              Philippines
            </span>
            <span>
              <Code2 size={16} aria-hidden="true" />
              Frontend
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">
            <Layers3 size={16} aria-hidden="true" />
            Skills
          </p>
          <h2>Tools and strengths I use to build better interfaces.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">
            <Code2 size={16} aria-hidden="true" />
            Projects
          </p>
          <h2>Selected work and practice projects.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                <Code2 size={36} aria-hidden="true" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <Mail size={16} aria-hidden="true" />
            Contact
          </p>
          <h2>Let&apos;s build something clear and useful.</h2>
          <p>
            Send a message for collaborations, school projects, freelance work,
            or frontend development opportunities.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">
            <Mail size={20} aria-hidden="true" />
            butchawpogs@gmail.com
          </a>
          <a href="tel:+639000000000">
            <Phone size={20} aria-hidden="true" />
            +63 9518617031
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <ExternalLink size={20} aria-hidden="true" />
            Lin Github
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
