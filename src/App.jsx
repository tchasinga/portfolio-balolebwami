

import Navbars from './Components/navbar/Navbars.jsx';
import Parallax from './Components/parallax/Parallax.jsx';
import Heros from './Components/hero/Hero.jsx';
import './app.scss';
import Services from './Components/services/Services.jsx';
import Portfolio from './Components/portfolio/Portfolio.jsx';


function App() {
  return (
      <div>
        <section id='Homepage'>
          <Navbars />
          <Heros />
        </section>

      <section id='Service'>
          <Parallax type="service" />
        </section> 
         
     <section className='getThisClass'>
       <Services />
     </section>

       <section id='Skills'>
          <Parallax type="portfolio" />
        </section>

        <section id='Portfolio'>
          <Portfolio />
        </section>   
      </div>

  );
}

export default App;
