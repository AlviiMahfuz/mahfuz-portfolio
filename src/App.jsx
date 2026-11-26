import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, BriefcaseBusiness,
  Code2, Download, ExternalLink, Github, Instagram, Linkedin, Mail, MapPin,
  Menu, Palette, Phone, Send, Sparkles, X, GraduationCap, BadgeCheck,
  MonitorSmartphone, Megaphone, Layers3, Dribbble
} from 'lucide-react'

const profile = {
  name: 'Mahfuz Ahammed Muzahid',
  role: 'Frontend Engineer',
  email: 'alviimahfuz@gmail.com',
  phone: '01751-797996',
  intro: 'I build thoughtful digital experiences with clean interfaces, purposeful interactions and a strong eye for design.',
}

const socials = [
  { label: 'GitHub', handle: '@alviimahfuz', href: 'https://github.com/alviimahfuz', Icon: Github },
  { label: 'LinkedIn', handle: '@MahfuzAhammed', href: 'https://www.linkedin.com/in/MahfuzAhammed', Icon: Linkedin },
  { label: 'Instagram', handle: '@alviimahfuz', href: 'https://www.instagram.com/alviimahfuz', Icon: Instagram },
  { label: 'X / Twitter', handle: '@AlviiMahfuz', href: 'https://x.com/AlviiMahfuz', Icon: AtSign },
  { label: 'Pinterest', handle: '@AlviiMahfuz', href: 'https://www.pinterest.com/AlviiMahfuz', Icon: Palette },
  { label: 'Behance', handle: '@alviimahfuz', href: 'https://www.behance.net/alviimahfuz', Icon: Dribbble },
]

const skillGroups = [
  { title: 'Frontend Development', icon: Code2, items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js'] },
  { title: 'Backend & Database', icon: Layers3, items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'] },
  { title: 'Design & Creative', icon: Palette, items: ['Graphic Design', 'Adobe Illustrator', 'Adobe Photoshop', 'UI / UX Design'] },
  { title: 'Digital Marketing', icon: Megaphone, items: ['Digital Marketing', 'Social Media Marketing', 'Content Strategy'] },
]

const services = [
  { n: '01', title: 'Frontend Development', desc: 'Responsive, accessible and engaging web interfaces built with modern frontend technologies.', icon: Code2 },
  { n: '02', title: 'Full-stack Web Development', desc: 'End-to-end web experiences, connecting polished interfaces with server-side functionality.', icon: MonitorSmartphone },
  { n: '03', title: 'UI & Web Design', desc: 'Clear visual systems and user-focused layouts that make digital products easier to use.', icon: Layers3 },
  { n: '04', title: 'Graphic Design', desc: 'Creative visual assets and brand-consistent graphics for digital communication.', icon: Palette },
  { n: '05', title: 'Digital Marketing', desc: 'Digital promotion and social media support to help brands communicate with their audience.', icon: Megaphone },
]

const certifications = [
  'Graphic Design Course',
  'Full Stack Web Development Course',
  'Digital Marketing Course',
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Services', '#services'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const sendMail = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" aria-label="Mahfuz home"><span className="brand-mark">M.</span><span>MAHFUZ<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <span className="availability"><i /> OPEN TO OPPORTUNITIES</span>
              <p className="hero-kicker">HELLO, I'M</p>
              <h1>Mahfuz Ahammed <span>Muzahid.</span></h1>
              <div className="role-line"><span className="role-bar" /> FRONTEND ENGINEER <span className="role-muted">/ CREATIVE THINKER</span></div>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Let's work together <ArrowUpRight size={17} /></a>
                <a className="button button-ghost" href="#about">Explore my profile <ArrowDown size={16} /></a>
              </div>
              <div className="hero-socials">
                {socials.slice(0, 4).map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}
              </div>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="portrait-frame">
              <div className="portrait-grid" />
              <img src="/images/mahfuz-portrait.webp" alt="Portrait of Mahfuz Ahammed Muzahid" />
              <div className="portrait-index">01 <span>/ PROFILE</span></div>
            </div>
            <div className="floating-note"><span className="note-icon"><Sparkles size={16} /></span><span>Code with purpose.<br /><b>Design with clarity.</b></span></div>
            <div className="hero-orbit" />
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <div className="ticker" aria-label="Areas of work"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <span key={i}>FRONTEND DEVELOPMENT <b>✳</b> FULL-STACK WEB <b>✳</b> CREATIVE DESIGN <b>✳</b> DIGITAL MARKETING <b>✳</b></span>)}</div></div>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>A little about <span>who I am.</span></>} />
          <div className="about-grid">
            <div className="about-lead"><span className="large-quote">“</span><h3>Curiosity drives me.<br /><em>Creativity defines me.</em></h3></div>
            <div className="about-body">
              <p>I'm <strong>Mahfuz Ahammed Muzahid</strong>, a Frontend Engineer interested in building useful, intuitive and visually engaging digital experiences. I enjoy turning ideas into responsive interfaces and bringing design and technology together.</p>
              <p>Alongside web development, I have a background in graphic design and digital marketing. This combination helps me approach digital products with both a developer's mindset and a creative perspective.</p>
              <p>I'm always exploring new tools, improving my craft and looking forward to opportunities where I can learn, contribute and grow.</p>
              <div className="about-facts">
                <div><span>01</span><b>Frontend Engineering</b></div>
                <div><span>02</span><b>Creative Design</b></div>
                <div><span>03</span><b>Continuous Learning</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="02 / MY TOOLKIT" title={<>Skills & <span>expertise.</span></>} description="A growing toolkit across development, design and digital communication." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }, idx) => <motion.article className="skill-card" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * .06 }}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-number">0{idx + 1}</span></div>
              <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap services-section" id="services">
          <SectionHeading eyebrow="03 / WHAT I DO" title={<>Ways I can <span>contribute.</span></>} description="A mix of technical and creative services for digital products and brands." />
          <div className="services-list">
            {services.map(({ n, title, desc, icon: Icon }) => <motion.article className="service-row" key={n} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="service-n">{n}</span><span className="service-icon"><Icon size={21} /></span><div className="service-copy"><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="service-arrow" size={22} />
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap journey-section" id="experience">
          <SectionHeading eyebrow="04 / MY JOURNEY" title={<>Learning, building <span>& growing.</span></>} />
          <div className="journey-grid">
            <div className="journey-column">
              <h3 className="column-title"><BriefcaseBusiness size={18} /> EXPERIENCE</h3>
              <article className="timeline-card">
                <span className="timeline-dot" /><span className="timeline-label">INTERNSHIP · 3 MONTHS</span>
                <h3>Frontend Engineering Intern</h3><p className="company">Betopia Group</p>
                <p>Gained practical exposure to frontend engineering workflows and contributed as an intern in a professional team environment.</p>
              </article>
            </div>
            <div className="journey-column">
              <h3 className="column-title"><GraduationCap size={19} /> EDUCATION</h3>
              <article className="timeline-card">
                <span className="timeline-dot" /><span className="timeline-label">COMPLETED · 2026</span>
                <h3>Diploma in Engineering</h3><p className="company">Computer Science & Technology</p>
              </article>
              <article className="timeline-card timeline-card-next">
                <span className="timeline-dot" /><span className="timeline-label">STARTED · 2026</span>
                <h3>BSc in Software Engineering</h3><p className="company">Undergraduate Studies</p>
              </article>
            </div>
          </div>
          <div className="certifications">
            <div className="cert-heading"><BadgeCheck size={19} /><h3>ADDITIONAL CERTIFICATIONS</h3></div>
            <div className="cert-list">{certifications.map((cert, i) => <div className="cert-item" key={cert}><span>0{i + 1}</span>{cert}<BadgeCheck size={16} /></div>)}</div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="05 / SELECTED WORK" title={<>The next chapter is <span>in progress.</span></>} description="I'm currently building and documenting projects. This space will feature selected work as it becomes ready to share." />
          <div className="project-grid">
            <article className="project-card project-card-featured">
              <div className="project-card-visual portfolio-visual"><span className="visual-window"><i /><i /><i /></span><div className="visual-monogram">M<span>.</span></div><span className="visual-caption">PERSONAL PORTFOLIO / 2026</span></div>
              <div className="project-card-content"><div className="project-meta"><span>01 / FEATURED</span><span>PERSONAL WEBSITE</span></div><h3>Mahfuz — Personal Portfolio</h3><p>A personal space presenting my development journey, creative skills, experience and ways to connect.</p><div className="project-tags"><span>React</span><span>Vite</span><span>Framer Motion</span><span>CSS</span></div><a href="https://mahfuz-portfolio-flax.vercel.app" target="_blank" rel="noreferrer" className="text-link">View live website <ArrowUpRight size={16} /></a></div>
            </article>
            <article className="project-card project-card-secondary">
              <div className="project-card-visual code-visual"><Code2 size={54} /><span>BUILD / LEARN / REPEAT</span></div>
              <div className="project-card-content"><div className="project-meta"><span>02 / EXPLORING</span><span>CODE & EXPERIMENTS</span></div><h3>Learning in Public</h3><p>Small experiments and practice projects as I continue strengthening my JavaScript and frontend fundamentals.</p><div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><a href="https://github.com/AlviiMahfuz" target="_blank" rel="noreferrer" className="text-link">Explore GitHub <ArrowUpRight size={16} /></a></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <SectionHeading eyebrow="06 / GET IN TOUCH" title={<>Have an idea? Let's <span>make it real.</span></>} description="I'm open to conversations about opportunities, collaborations and creative projects." />
            <div className="contact-grid">
              <div className="contact-details">
                <a href={`mailto:${profile.email}`} className="contact-method"><span><Mail size={19} /></span><div><small>EMAIL ME</small><b>{profile.email}</b></div><ArrowUpRight size={17} /></a>
                <a href="tel:+8801751797996" className="contact-method"><span><Phone size={19} /></span><div><small>CALL ME</small><b>{profile.phone}</b></div><ArrowUpRight size={17} /></a>
                <div className="contact-socials"><p>FIND ME AROUND THE WEB</p><div>{socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /></a>)}</div></div>
              </div>
              <form className="contact-form" onSubmit={sendMail}>
                <div className="form-row"><label>Your name<input required name="name" value={form.name} onChange={update} placeholder="John Doe" /></label><label>Your email<input required type="email" name="email" value={form.email} onChange={update} placeholder="john@example.com" /></label></div>
                <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What's this about?" /></label>
                <label>Your message<textarea required rows="5" name="message" value={form.message} onChange={update} placeholder="Tell me a little about your idea..." /></label>
                <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
                <p className="form-note">This opens your email app with your message prepared.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">M.</span><span>MAHFUZ<span className="brand-dot">.</span></span></a><p>Thoughtful code. Meaningful experiences.</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Mahfuz Ahammed Muzahid. All rights reserved.</span><span>DESIGNED & BUILT WITH PURPOSE <span className="brand-dot">✳</span></span></div>
      </footer>
    </div>
  )
}

export default App
