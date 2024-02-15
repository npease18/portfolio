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
      <div className="w-[100%] mt-5">
        <div className="w-[100%] flex justify-center">
          <div className="w-[100%] self-center ml-5 mr-5">
            <div className="bg-slate-900 w-[100%] h-[200px] rounded-lg p-5 grid grid-cols-2">
              <div className="place-self-center">
                <img src={imgURL}/>
              </div>
              <div>
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
      <div className="w-[100%] mt-5">
        <div className="w-[100%] flex justify-center">
          <div className="w-[100%] self-center ml-5 mr-5">
            <div className="bg-slate-900 w-[100%] h-[200px] rounded-lg p-5 grid grid-cols-2">
              <div className="place-self-center">
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
        <ProjectsList/>
    </div>
  );
}




export default Projects;