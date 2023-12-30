
import Navbars from './Components/navbar/Navbars.jsx'
import Parallax from './Components/parallax/Parallax.jsx'
import Heros from './Components/hero/Hero.jsx'
import './app.scss'
import Services from './Components/services/Services.jsx'
import Portfolio from './Components/portfolio/Portfolio.jsx'
import Contact from './Components/contact/Contact.jsx'

function App() {

  return (
    <div>
      <section id='Homepage'>
         <Navbars />
         <Heros />
      </section>

      <section id='Service'>
        <Parallax type="service"/>
      </section>

      <section>
        <Services />
      </section>
      
      <section id='Skills'><Parallax type="portfolio"/></section>

      <section id='Portfolio'>
        <Portfolio />
      </section>

      <section id='Contact'>
        <Contact />
      </section>

    </div>
  )
}

export default App
