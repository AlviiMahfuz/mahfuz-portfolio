import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Instagram, Mail, Phone,
  Menu, X, Code2, Palette, Layers3, MonitorSmartphone, Sparkles, Send,
  GraduationCap, BriefcaseBusiness, ExternalLink, AtSign
} from 'lucide-react'

const profile = {
  name: 'Mahfuz Ahammed Muzahid',
  role: 'Frontend Engineer',
  email: 'alviimahfuz@gmail.com',
  phone: '01751-797996',
  intro: 'I’m a frontend engineer with a creative eye for design. I enjoy turning ideas into clear, responsive and thoughtful digital experiences.'
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/alviimahfuz', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/MahfuzAhammed', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/alviimahfuz', Icon: Instagram },
  { label: 'Behance', href: 'https://www.behance.net/alviimahfuz', Icon: Palette },
]

const skills = [
  { title: 'Core Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend Engineering', items: ['React', 'Next.js', 'Tailwind CSS', 'Redux'] },
  { title: 'Backend & Integrations', items: ['Node.js', 'Express.js', 'REST API'] },
  { title: 'Design & Creative', items: ['Graphic Design', 'Adobe Illustrator', 'Photoshop', 'UI / UX'] },
]

const services = [
  { n: '01', title: 'Frontend Development', desc: 'Responsive, accessible interfaces with thoughtful interactions and clean component structure.', Icon: Code2 },
  { n: '02', title: 'Web Development', desc: 'Modern web experiences that connect polished user interfaces with practical functionality.', Icon: MonitorSmartphone },
  { n: '03', title: 'UI & Web Design', desc: 'Simple, purposeful layouts that make digital products feel clear and easy to use.', Icon: Layers3 },
  { n: '04', title: 'Graphic Design', desc: 'Visual assets and brand-consistent creative work for digital communication.', Icon: Palette },
]

const projects = [
  { n: '01', title: 'Frontend interfaces', tag: 'WEB DEVELOPMENT', desc: 'Building responsive interfaces with attention to layout, accessibility and detail.' },
  { n: '02', title: 'Visual design', tag: 'GRAPHIC DESIGN', desc: 'Creating clean visual communication for brands and digital platforms.' },
  { n: '03', title: 'Learning in public', tag: 'EXPERIMENTS', desc: 'Small experiments and practice projects as I continue improving my development skills.' },
]

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, .36, 1] } }
}

function Heading({ number, eyebrow, title, text }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
      <span className="section-index">{number} / {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let value = 0
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 7))
      setProgress(value)
      if (value >= 100) { window.clearInterval(timer); window.setTimeout(() => setLoading(false), 420) }
    }, 48)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    const over = (event) => document.body.classList.toggle('cursor-hover', !!event.target.closest('a, button, input, textarea, .skill-card, .service-row, .timeline-card, .portrait-frame, .project-placeholder'))
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over) }
  }, [])
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Work', '#work'], ['Journey', '#journey'], ['Contact', '#contact']]
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const sendMail = e => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell">
      <header className="header">
        <a className="wordmark" href="#home">M<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>LET’S TALK <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-topline"><span>PORTFOLIO — 2026</span><span>BASED IN BANGLADESH</span></div>
          <div className="hero-name-wrap">
            <span className="hero-symbol"><Sparkles size={22} /></span>
            <h1>MAHFUZ<span>.</span></h1>
            <p className="hero-role">FRONTEND ENGINEER <i /> CREATIVE THINKER</p>
          </div>
          <div className="hero-grid">
            <div className="hero-intro">
              <span className="eyebrow">HELLO, I’M MAHFUZ</span>
              <p>{profile.intro}</p>
              <div className="hero-links">
                <a className="solid-link" href="#work">EXPLORE MY WORK <ArrowUpRight size={15} /></a>
                <a className="text-link" href="#about">MORE ABOUT ME <ArrowDownRight size={15} /></a>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <div className="photo-outline"></div>
              <img className="hero-photo" src="/images/mahfuz-portrait.webp" alt="Mahfuz Ahammed Muzahid" />
              <span className="photo-caption">FIG. 01 — THE DEVELOPER</span>
            </div>
            <div className="hero-side">
              <div className="monogram">M<span>.</span></div>
              <p>CODE WITH PURPOSE.<br/>DESIGN WITH CLARITY.</p>
              <div className="social-list">{socials.map(({label,href,Icon}) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18}/></a>)}</div>
              <a className="side-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>01 — 05</span></div>
        </section>

        <section className="about section-pad" id="about">
          <Heading number="01" eyebrow="A LITTLE INTRODUCTION" title={<>DESIGN MINDED.<br/><span>DEVELOPMENT DRIVEN.</span></>} text="A little about who I am and how I approach the work."/>
          <div className="about-content">
            <p className="about-statement">I bring together <em>technology</em> and <em>visual thinking</em> to make digital experiences feel effortless.</p>
            <div className="about-copy">
              <p>I’m {profile.name}, a frontend engineer interested in building useful, intuitive and visually engaging digital experiences. I enjoy turning ideas into responsive interfaces and bringing design and technology together.</p>
              <p>Alongside web development, I have a background in graphic design and digital marketing. That creative foundation helps me think about both how a product works and how it communicates.</p>
              <p>I’m always learning, experimenting and looking for opportunities to contribute to meaningful digital products.</p>
              <a className="underlined-link" href="#contact">LET’S CONNECT <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <Heading number="02" eyebrow="TOOLS I WORK WITH" title={<>MY CREATIVE &<br/><span>TECHNICAL TOOLKIT.</span></>} text="A growing toolkit across frontend development, design and digital communication."/>
          <div className="skills-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="orbit-core"><Code2 size={38}/><span>BUILD</span></div>
            <span className="orbit-chip chip-one">JS</span><span className="orbit-chip chip-two">CSS</span><span className="orbit-chip chip-three">UI</span><span className="orbit-chip chip-four">REACT</span><span className="orbit-chip chip-five">AI</span><span className="orbit-chip chip-six">WEB</span>
          </div>
          <div className="skill-columns">
            {skills.map((group,i)=><article className="skill-column" key={group.title}><span className="skill-number">0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="services section-pad">
          <Heading number="03" eyebrow="HOW I CAN HELP" title={<>WHAT I BRING<br/><span>TO THE TABLE.</span></>} text="A combination of technical and creative skills for digital products and brands."/>
          <div className="service-list">{services.map(({n,title,desc,Icon})=><article className="service-item" key={n}><span className="service-no">{n}</span><span className="service-icon"><Icon size={22}/></span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="service-arrow" size={23}/></article>)}</div>
        </section>

        <section className="work section-pad" id="work">
          <Heading number="04" eyebrow="SELECTED DIRECTIONS" title={<>THINGS I LOVE<br/><span>TO CREATE.</span></>} text="A snapshot of the areas I’m developing and exploring. More detailed case studies will be added as projects are ready to share."/>
          <div className="project-list">{projects.map((p,i)=><article className={`project-card project-${i+1}`} key={p.n}><div className="project-art"><span>{p.n}</span><div className="art-shape"><i></i><b></b><em></em></div></div><div className="project-info"><span>{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p><a href="https://github.com/alviimahfuz" target="_blank" rel="noreferrer">VIEW GITHUB <ArrowUpRight size={15}/></a></div></article>)}</div>
        </section>

        <section className="journey section-pad" id="journey">
          <Heading number="05" eyebrow="THE JOURNEY SO FAR" title={<>ALWAYS LEARNING.<br/><span>ALWAYS BUILDING.</span></>}/>
          <div className="journey-grid">
            <article className="journey-block"><span className="journey-label"><BriefcaseBusiness size={17}/> EXPERIENCE</span><div className="journey-entry"><span>INTERNSHIP · 3 MONTHS</span><h3>Frontend Engineering Intern</h3><p className="journey-org">Betopia Group</p><p>Practical exposure to frontend engineering workflows and contributing in a professional team environment.</p></div></article>
            <article className="journey-block"><span className="journey-label"><GraduationCap size={18}/> EDUCATION</span><div className="journey-entry"><span>ENGINEERING STUDIES</span><h3>Diploma in Engineering</h3><p className="journey-org">Computer Science & Technology</p><p>Building a foundation in computing, programming and software development.</p></div></article>
          </div>
          <div className="cert-row"><span>COURSES & CERTIFICATES</span><p>Graphic Design <i/> Full Stack Web Development <i/> Digital Marketing</p></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div className="contact-top"><span>HAVE A PROJECT IN MIND?</span><span>LET’S MAKE IT HAPPEN ↘</span></div>
            <div className="contact-heading"><h2>LET’S CREATE<br/>SOMETHING<br/><span>MEANINGFUL.</span></h2><div className="contact-direct"><div><small>EMAIL ME</small><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14}/></a></div><div><small>CALL ME</small><a href="tel:+8801751797996">{profile.phone} <ArrowUpRight size={14}/></a></div></div></div>
            <div className="contact-bottom">
              <div className="contact-socials">{socials.map(({label,href,Icon})=><a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16}/>{label.toUpperCase()}</a>)}</div>
              <form className="contact-form" onSubmit={sendMail}><h3>DROP ME A MESSAGE</h3><div className="form-pair"><input required name="name" value={form.name} onChange={update} placeholder="YOUR NAME"/><input required type="email" name="email" value={form.email} onChange={update} placeholder="YOUR EMAIL"/></div><input name="subject" value={form.subject} onChange={update} placeholder="SUBJECT"/><textarea required rows="3" name="message" value={form.message} onChange={update} placeholder="TELL ME ABOUT YOUR IDEA..."/><button type="submit">SEND MESSAGE <Send size={15}/></button><small>Opens your email app with the message prepared.</small></form>
            </div>
            <footer className="footer"><a className="wordmark footer-mark" href="#home">M<span>.</span></a><span>© {new Date().getFullYear()} {profile.name.toUpperCase()}. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a></footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
