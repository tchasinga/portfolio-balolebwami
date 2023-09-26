import React  from "react";
import "../index.css";
import htmlDisplayer from "../svg/animation_lmzeh78hHtmL5.json";
import CssDisplayer from "../svg/animation_lmzezawxCss.json"
import ReactDisplayer from "../svg/animation_lmzeo9y8REACTJS.json"
import MongoDisplayer from "../svg/animation_lmzeubvqMongoDB.json"
import NodesDisplayer from "../svg/animation_lmzesmz3NodeJs.json"
import NextDisplyer  from  "../svg/animation_lmzex845NextJs.json"
import DataCode from "../svg/animation_lmzevyexDATACODE.json"
import JavaScriptDisplayer from "../svg/animation_lmzerb6bJavaScript.json"
import Lottie from "lottie-react";


function Skills() {
    return (
        <div>
            <div className="px-32">
            <h1 className="text-2xl text-white font-bold mb-14 mt-14 flex justify-center">Experience</h1>
             <div className="Skills  items-center">
                <div className="Langueage">
                    <Lottie animationData={htmlDisplayer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={CssDisplayer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={ReactDisplayer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={MongoDisplayer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={NodesDisplayer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={NextDisplyer} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={DataCode} />
                </div>
                <div className="Langueage">
                    <Lottie animationData={JavaScriptDisplayer} />
                </div>
             </div>
            </div>
        </div>
    )
}

export default Skills