import Lottie from "lottie-react";
import "../index.css";
import AnimationCode from "../assets/animation_fronend.json";
import AnimationBackend from "../assets/animation_Backend.json";
import AnimationCodeJson from "../assets/animation_ApiJson.json";
import AnimationDatabse from "../assets/animation_Database.json";
import Languagues from "./Epxrience";

const MySkills = () => {
  return (
    <div className="">
      <div className="Service  mt-32 px-32">
        <h1 className=" font-bold text-white text-2xl  flex justify-center">
          SERVICE
        </h1>
        <hr className="w-10  p-1 mt-1 relative left-1/2 border-black " />

        <div className="GridElement">
          <div className="parent  p-3 relative  flex-col ">
            <div className="flex justify-center">
              <Lottie
                className="w-2/4 h-2/4   mt-2"
                animationData={AnimationCode}
              />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Front-end desing
              </h1>
            </div>
            <p className="mt-3">
              In Front-end I really fuced on framwork language such as{" "}
              <strong>React </strong>,<strong>NextJs</strong>, and{" "}
              <strong>VueJs</strong> <strong>Typescript</strong> and{" "}
              <strong>Tailwindcss</strong>
            </p>
          </div>
          <div className="parent  p-3 relative  flex-col ">
            <div className="flex justify-center">
              <Lottie
                className="w-2/4 h-2/4   mt-2"
                animationData={AnimationBackend}
              />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Back-end developer
              </h1>
            </div>
            <p className="mt-3">
              In Back-end language such as <strong>NodeJs</strong>,
              <strong>Express</strong>, and <strong>Java ,</strong>{" "}
              <strong>Ruby</strong>
            </p>
          </div>
          <div className="parent  p-3 relative  flex-col ">
            <div className="flex justify-center">
              <Lottie
                className="w-2/4 h-2/4   mt-2"
                animationData={AnimationCodeJson}
              />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Restful API
              </h1>
            </div>
            <p className="mt-3">
              In API I really fuced on side such as <strong>JSON</strong>,
              <strong>GraphSql</strong>, and <strong>Data-structure</strong>
            </p>
          </div>
          <div className="parent  p-3 relative  flex-col ">
            <div className="flex justify-center">
              <Lottie
                className="w-2/4 h-2/4   mt-2"
                animationData={AnimationDatabse}
              />
              <h1 className="text-white flex justify-center items-center font-bold text-1xl">
                Database structure
              </h1>
            </div>
            <p className="mt-3">
              In Front-end I really fuced on language such as{" "}
              <strong>MySql, </strong>
              <strong>MongoDb</strong>, and <strong>PostgreSql ,</strong>{" "}
              <strong>Firebase</strong> and <strong>Sql</strong>
            </p>
          </div>
        </div>
      </div>
      <Languagues />
    </div>
  );
};

export default MySkills;
