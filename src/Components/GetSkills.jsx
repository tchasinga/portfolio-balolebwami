import Lottie from "lottie-react";
// import ScrollReveal from "scrollreveal";
import "../index.css";
import AnimationCode from "../assets/animation_fronend.json";
import AnimationBackend from "../assets/animation_Backend.json";
import AnimationCodeJson from "../assets/animation_ApiJson.json";
import AnimationDatabse from "../assets/animation_Database.json";
import Languagues from "./Epxrience";

// const initScrollReveal = () => {
//   ScrollReveal().reveal(".parent", {
//     delay: 300,
//     distance: "50px",
//     origin: "bottom",
//     easing: "cubic-bezier(0.5, 0, 0, 1)",
//     reset: true,
//   });
// };

const MySkills = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  return (
    <div className="">
      <div className="Service mt-32 px-32">
        <h1 className="font-bold text-white text-2xl flex justify-center">
          SERVICE
        </h1>
        <hr className="w-10 p-1 mt-1 relative left-1/2 border-black" />

        <div className="GridElement">
          <div className="parent p-3 relative flex-col">
            <div className="flex justify-center">
              <Lottie className="w-2/4 h-2/4 mt-2" animationData={AnimationCode} />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Front-end design
              </h1>
            </div>
            <p className="mt-3">
              In Front-end, I really focus on frameworks and languages such as{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and <strong>Vue.js</strong>{" "}
              with <strong>TypeScript</strong> and <strong>Tailwind CSS</strong>.
            </p>
          </div>
          <div className="parent p-3 relative flex-col">
            <div className="flex justify-center">
              <Lottie className="w-2/4 h-2/4 mt-2" animationData={AnimationBackend} />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Back-end developer
              </h1>
            </div>
            <p className="mt-3">
              In Back-end, I work with languages like <strong>Node.js</strong>,
              <strong>Express</strong>, <strong>Java</strong>, and <strong>Ruby</strong>.
            </p>
          </div>
          <div className="parent p-3 relative flex-col">
            <div className="flex justify-center">
              <Lottie className="w-2/4 h-2/4 mt-2" animationData={AnimationCodeJson} />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Restful API
              </h1>
            </div>
            <p className="mt-3">
              In API, I focus on technologies like <strong>JSON</strong>,
              <strong>GraphQL</strong>, and <strong>Data Structures</strong>.
            </p>
          </div>
          <div className="parent p-3 relative flex-col">
            <div className="flex justify-center">
              <Lottie className="w-2/4 h-2/4 mt-2" animationData={AnimationDatabse} />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Database structure
              </h1>
            </div>
            <p className="mt-3">
              In Database, I work with databases like <strong>MySQL</strong>,
              <strong>MongoDB</strong>, <strong>PostgreSQL</strong>,
              <strong>Firebase</strong>, and <strong>SQL</strong>.
            </p>
          </div>
        </div>
      </div>
      <Languagues />
    </div>
  );
};

export default MySkills;
