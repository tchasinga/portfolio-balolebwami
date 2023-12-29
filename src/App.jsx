
import Navbars from './Components/navbar/Navbars.jsx'
import Parallax from './Components/parallax/Parallax.jsx'
import Heros from './Components/hero/Hero.jsx'
// import Test from './Components/Test/Test'
import './app.scss'

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
      <section>Service</section>
      <section id='Skills'><Parallax type="portfolio"/></section>
      <section id='Portfolio'>Portfolio01</section>
      <section>Portfolio02</section>
      <section>Portfolio03</section>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App
