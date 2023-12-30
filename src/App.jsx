
import Navbars from './Components/navbar/Navbars.jsx'
import Parallax from './Components/parallax/Parallax.jsx'
import Heros from './Components/hero/Hero.jsx'
import './app.scss'
import Services from './Components/services/Services.jsx'

function App() {

  return (
    <>
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
      <section id='Portfolio'>Portfolio01</section>
      <section>Portfolio02</section>
      <section>Portfolio03</section>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App
