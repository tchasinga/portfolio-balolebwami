import options from "../objects/objects";

const Portfolio = () => {
    return(
        <div>
            <div className="font-poppins font-sans  flex-col px-32 mt-32 w-full gap-14">
                <h3 className="flex justify-center text-white text-3xl">Portfolio</h3>
                <div className="gap-3">
                    <ul className="flex gap-6 justify-center mt-6 cursor-pointer text-blue-200">
                        <li>Website</li>
                        <li>Editing-video</li>
                        <li>Web-design</li>
                        <li>Full-stack</li>
                    </ul>
                </div>
                <div className="">
                    {
                        options && options.map((getElement) => {
                           return (
                              <div key={getElement.id} className=" getmyPortfolio  flex w-full gap-3 mt-10">
                                <img src={getElement.UrlImg} alt={getElement.title} className="w-2/4" srcset="" />
                                <div className="">
                                    <h3 className="text-2xl font-bold text-blue-800">{getElement.title}</h3>
                                    <hr  className="w-10  p-1 mt-1 text-blue-800"/>
                                    <p>{getElement.description}</p>
                                    <a href={getElement.url} target="_blank" rel="noopener noreferrer" className="text-blue-200">View</a>
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