import Image from "next/image";
import {Header, Footer} from "../globals"
import ProjectsListJSON from "../projects.json"

function ProjectsList() {
    return (
        <div class="mt-5 ml-5">
            <div class="text-[32px] mb-5">Projects:</div>
        </div>
    );
}

function Project({name, description, imgURL}) {
  return (
    <div class="w-[100%] mt-5">
      <div class="w-[100%] flex justify-center">
        <div class="w-[100%] self-center ml-5 mr-5">
          <div class="bg-slate-900 w-[100%] h-[200px] rounded-lg p-5 grid grid-cols-2">
            <div class="place-self-center">
              <img src={imgURL}></img>
            </div>
            <div>
              <div class="text-[24px]">{name}</div><br/>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Projects() {
  return (
    <div>
        <Header/>
        <ProjectsList/>
        <Project name="Aviation Assistant V1" description="Description Here" imgURL="aa1.png"/>
        <Project name="Aviation Assistant V2" description="Description Here" imgURL="aa2.png"/>
        <Project name="Aubuchon Register Tool" description="Description Here" imgURL="aublogo.svg"/>
        <Footer/>
    </div>
  );
}


export default Projects;