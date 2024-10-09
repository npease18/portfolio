import Image from "next/image"
import ProjectsListJSON from "../projects.json"


function ProjectHeader() {
  return (
    <div className="mt-5 ml-5">
      <div className="text-[32px] mb-5">Projects:</div>
    </div>
  )
}

function ProjectsList() {
    var returnArr = []
    for (var key in ProjectsListJSON) {
      returnArr.push(<Project name={key} description={ProjectsListJSON[key].description} imgURL={ProjectsListJSON[key].img}/>)
    };

    return returnArr
}

function Project({name, description, imgURL}) {
  if (imgURL) {
    return (
      <div className="w-[100%] h-[100%] mt-5 text-center">
        <div className="w-[100%] flex justify-center h-[100%]">
          <div className="w-[100%] self-center ml-5 mr-5 h-[100%]">
            <div className="bg-slate-900 w-[100%] rounded-lg p-5 grid sm:grid-rows-2 h-[100%]">
              <div className="place-self-center mb-5 w-[90%] mt-2 mb-2">
                <img src={"/images/"+imgURL} className="w-[90%]"/>
              </div>
              <div className="mt-2 mb-2 text-center">
                <a href={"/projects/"+name} className="text-[24px] font-bold">{name}</a><br/>
                <div>{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[100%] h-[100%] mt-5 text-center">
        <div className="w-[100%] flex justify-center h-[100%] ">
          <div className="w-[100%] self-center ml-5 mr-5 h-[100%] flex flex-col justify-center items-center ">
            <div className="bg-slate-900 w-[100%] rounded-lg p-5 h-[100%] flex flex-col justify-center items-center place-items-center">
              <div className="mt-2 mb-2">
                <a href={"/projects/"+name} className="text-[24px] font-bold">{name}</a><br/>
                <div>{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Projects() {
  return (
    <div>
        <ProjectHeader/>
        <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-y-5 mb-10">
          <ProjectsList/>
        </div>
    </div>
  );
}




export default Projects;