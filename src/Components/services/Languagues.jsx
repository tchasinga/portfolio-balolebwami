
// import ScrollReveal from 'scrollreveal';

import myHtmlParser from "./Icon/html.png";
import Java from "./Icon/java.png";
import JavaScript from './Icon/javascript.png'
import mongoDb from './Icon/mongodb.png'
import NextJs from './Icon/nextjs.png'
import NodeJs from './Icon/nodejs.png'
import ReactJsx from './Icon/reactjs.png'
import tailWindCss from './Icon/tailwindcss.png'
import figma from './Icon/figma.png'
import express from './Icon/express-js.png'
import mysql from './Icon/mysql.png'
import Css  from './Icon/css.png'
import NestJs from './Icon/nestjs.png'
import Postgresql from './Icon/postgresql.png'


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
      
      {
        MyCodeLanguage: express,
        LanguagesCxx: 'ExpressJs' 
      },
      {
        MyCodeLanguage: mysql,
        LanguagesCxx: 'MySql' 
      },
        {
            MyCodeLanguage: Css,
            LanguagesCxx: 'Css' 
        },
        {
            MyCodeLanguage: NestJs,
            LanguagesCxx: 'NestJs' 
        },
        {
            MyCodeLanguage: Postgresql,
            LanguagesCxx: 'Postgresql' 
        },

  ];


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
    </>
  );
};

export default Languagues;