import options from "../objects/objects";
// import  ScrollReveal  from "scrollreveal";
// import { useEffect } from "react";

// const initScrollReveal = () => {
//     ScrollReveal().reveal(".getmyPortfolio", {
//       delay: 300,
//       distance: "50px",
//       origin: "bottom",
//       easing: "cubic-bezier(0.5, 0, 0, 1)",
//       reset: true,
//     });
//   };

const Portfolio = () => {
    // useEffect(() => {
    //     initScrollReveal();
    //   }, []);
    
    return(
        <div>
            <div className="font-poppins font-sans  flex-col px-32 mt-32 w-full gap-14">
                <h3 className="flex justify-center text-white text-3xl">My achived project</h3>
                <div className="contingPortfolion">
                    {
                        options && options.map((getElement) => {
                           return (
                              <div key={getElement.id} className="getmyPortfolio  flex gap-3 mt-10">
                                <img src={getElement.UrlImg} alt={getElement.title} className="w-full myImgPortfolio"/>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-blue-800">{getElement.title}</h3>
                                    <hr  className="w-10  p-1 mt-1 text-blue-800"/>
                                    <p>{getElement.description}</p>
                                  <div className="gap-6 flex mt-6">
                                  <a href={getElement.getView} target="_blank" rel="noopener noreferrer" className="text-blue-200 gap-6">View</a>
                                  <a href={getElement.getGithub} target="_blank" rel="noopener noreferrer" className="text-blue-200">Github</a>
                                  </div>
                                </div>
                              </div>
                           ) 
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;