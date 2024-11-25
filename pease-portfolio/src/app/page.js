"use client"

import Projects from "./projects.json"
import moment from "moment"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link"
import { useEffect, useState } from "react";

function AboutMe() {
  var [typed, setTyped] = useState("")
  useEffect(() => {
    var onType = (e) => {
      setTyped(typed => typed + e.key)
    }
    document.addEventListener("keyup", onType)
  }, [])
  return (
    <div className="pl-[1%] w-[98%]">
      <div className="sm:flex sm:justify-center md:grid md:grid-cols-3 pt-5 auto-cols-max">
        <div className="md:mr-10 bg-slate-900 rounded-lg h-[420px] col-span-1 flex justify-center max-lg:ml-5 max-lg:mr-5">
          <div className="self-center">
            <img className="w-56 h-56  rounded-full" src="/images/me.jpg"></img>
            <div className="pt-5 text-[45px]">About Me</div>
            <div className="w-[100%] flex justify-center gap-x-2">
              <Link href="https://www.linkedin.com/in/nicholaspease207/" target="_blank"><LinkedInIcon fontSize="large" sx={{cursor: "pointer"}}/></Link>
              <Link href="https://github.com/npease18" target="_blank"><GitHubIcon fontSize="large" sx={{cursor: "pointer"}}/></Link>
              <Link href="mailto:web-contact@nicholaspease.com" target="_blank"><EmailIcon fontSize="large" sx={{cursor: "pointer"}}/></Link>
            </div>
          </div>
        </div>
        <div className="mt-5 col-span-2 max-lg:ml-5 max-lg:mr-5">
          <pre className="bash text-wrap">
            MOTD: This website is still under construction<br/>
            <span className="text-[green]">about@npease</span>:<span className="text-[blue]">~</span>$ uname -a<br/>
            <div>
            Hello! My name is Nicholas Pease and I am currently a junior at the University of Maine pursuing a bachelors degree in 
            Computer Science with a minor in Military Science. This website is a collection of both project / homework completed as 
            required by my studies and as a showcase of some of the personal projects I have worked on. I will work to keep this up 
            to date to the best of my ability. <br/>
            </div>
            <span className="text-[green]">about@npease</span>:<span className="text-[blue]">~</span>$ timedatectl --lastupdated<br/>
            This website was last updated on {moment().format("dddd, MMMM Do YYYY")}.<br/>
            <span className="text-[green]">about@npease</span>:<span className="text-[blue]">~</span>$ {typed}<span className="animate-blink"> </span>
          </pre>  
        </div>
      </div>
    </div>
  );
}

function NotableProject({name}) {
  var Project = Projects[name]
  return (
    <div className="text-center rounded-lg bg-slate-900  flex justify-center p-5 mt-5">
      <div className="self-center">
        <div className="w-[100%] flex justify-center">
          <img className="w-[90%]" src={"/images/"+Project.img}></img>
        </div>
        <div className="mt-5">
          <a href={"/projects/"+name} className="font-bold text-[24px]">{name}</a>
        </div>
        <div className="mt-5 text-wrap">
          {Project.description}
        </div>
      </div>
    </div>
  );
}

function ProjectsHome() {
  return (
    <div className="mb-10">
      <title>Home | nicholaspease.com</title>
      <div className="pt-5 flex justify-center text-[45px]">Notable Projects</div>
      <div className="md:grid md:grid-cols-3 auto-cols-auto gap-x-5 gap-y-5 ml-5 mr-5">
        <NotableProject name="ChatMaps"/>
        <NotableProject name="Aviation Assistant V1"/>
        <NotableProject name="Aubuchon Additional Register Tools"/>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-slate-900 p-5 rounded-lg text-[20px]">
        You can find more projects on the <a className="font-bold" href="/projects">Projects</a> page or on my personal <a className="font-bold" href="https://gitea.nicholaspease.com">Gitea Server</a>.
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <section>
      <AboutMe />
      <ProjectsHome/>
    </section>
  );
}

export default Home;