
import './App.scss'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Education from './components/education/Education'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'

function App() {
  
  return (
    <>
     <Cursor/>
     <section id='Homepage'>
      <Navbar/>
      <Hero/>
     </section>
     <section id='Skills'><Parallax type="skills"/></section>
     <section className='skills'><Skills/></section>
     <section id='Projects'><Parallax type="projects"/></section>
     <Portfolio/>
     <section id='Education'><Parallax type="education"/></section>
     <div className='education'>
      <Education/>
      </div>
     <section id='Contact'>
      <Contact/>
     </section>
    </>
  )
}

export default App
