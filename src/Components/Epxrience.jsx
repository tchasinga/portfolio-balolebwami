import React from 'react'; // Import React if not already imported
// import ScrollReveal from 'scrollreveal';

import myHtmlParser from "../Icon/html.png";
import Java from "../Icon/java.png";
import JavaScript from '../Icon/javascript.png'
import mongoDb from '../Icon/mongodb.png'
import NextJs from '../Icon/nextjs.png'
import NodeJs from '../Icon/nodejs.png'
import ReactJsx from '../Icon/reactjs.png'
import tailWindCss from '../Icon/tailwindcss.png'
import figma from '../Icon/figma.png'
import Footer from './Footer';



const Languagues = () => {
  const skillsIcons = [
    { 
      MyCodeLanguage: myHtmlParser,
      LanguagesCxx: 'Html'
    },
    { 
      MyCodeLanguage: Java,
      LanguagesCxx: 'Java' 
    },
    { 
      MyCodeLanguage: JavaScript,
      LanguagesCxx: 'JavaScript' 
    },
    { 
      MyCodeLanguage: mongoDb,
      LanguagesCxx: 'MongoDb'
    },
    { 
      MyCodeLanguage: NextJs,
      LanguagesCxx: 'NextJs' 
    },
    { 
      MyCodeLanguage: NodeJs,
      LanguagesCxx: 'NodeJs' 
    },
    {
      MyCodeLanguage: ReactJsx,
      LanguagesCxx: 'ReactJs' 
    },
    {
      MyCodeLanguage: tailWindCss,
      LanguagesCxx: 'TailwindCss' 
    },

    {
      MyCodeLanguage: figma,
      LanguagesCxx: 'Figma' 
    },

  ];

  // useEffect(() => {
  //   const options = {
  //     origin: 'bottom',
  //     distance: '30px',
  //     duration: 2000,
  //     reset: true,
  //   };

  //   const sr = ScrollReveal(options);

  //   sr.reveal('.home-text', { delay: 900, origin: 'bottom' });
  //   sr.reveal('.paraGet', { delay: 800, origin: 'bottom' });
   // sr.reveal('.button, .paraOne, .paraTwo, .paraThree', { delay: 400, origin: 'bottom' });
  // }, []);

  return (
    <>
      <div className="px-32 mt-32 c">
        <h1 className=" flex justify-center text-2xl font-bold text-white">
          My Skills
        </h1>
        <div className="getElementSkills">
          {skillsIcons.map((skillIcon, index) => (
            <div className="home-text flex flex-col justify-center  items-center " key={index}>
              <img
                src={skillIcon.MyCodeLanguage}
                alt={skillIcon.LanguagesCxx}
                className="w-20 h-20 ImgSideScroll"
              />
              <p className="paraGet text-white gestioSIde">{skillIcon.LanguagesCxx}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Languagues;