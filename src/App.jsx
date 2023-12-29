import Hero from './Components/hero/Hero'
import Navbars from './Components/navbar/Navbars'
// import Test from './Components/Test/Test'
import './app.scss'

function App() {

  return (
    <>
      <section id='Homepage'>
         <Navbars />
         <Hero />
      </section>

      <section id='Service'>Paralax</section>
      <section>Service</section>
      <section id='Skills'>Paralax</section>
      <section id='Portfolio'>Portfolio01</section>
      <section>Portfolio02</section>
      <section>Portfolio03</section>
      <section id='Contact'>Contact</section>
    </>
  )
}

export default App
