import Projects from "./projects.json"

function AboutMe() {
  return (
    <div className="pl-[1%] w-[98%]">
      <div className="sm:flex sm:justify-center md:grid md:grid-cols-3 pt-5 auto-cols-max">
        <div className="md:mr-10 bg-slate-900 rounded-lg h-[420px] col-span-1 flex justify-center max-lg:ml-5 max-lg:mr-5">
          <div className="self-center">
            <img className="w-56 h-56  rounded-full" src="me.jpg"></img>
            <div className="pt-5 text-[45px]">About Me</div>
          </div>
        </div>
        <div className="mt-5 col-span-2 max-lg:ml-5 max-lg:mr-5">
          Notice: This website is still under construction<br/><br/>
          Hello! My name is Nicholas Pease and I am currently a junior at the University of Maine pursuring a bachelors degree in 
          Computer Science with a minor in Military Science. This website is a collection of both project / homework completed as 
          required by my studies and as a showcase of some of the personal projects I have worked on. I will work to keep this up 
          to date to the best of my ability. <br/><br/>This website was last updated on 2/14/2024.
          </div>
      </div>
    </div>
  );
}

function NotableProject({name}) {
  var Project = Projects[name]
  return (
    <div className="text-center rounded-lg bg-slate-900 h-[420px] flex justify-center p-5 mt-5">
      <div className="self-center">
        <div className="w-[100%] flex justify-center">
          <img className="w-[375px] h-[77px]" src={Project.img}></img>
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
      <div className="pt-5 flex justify-center text-[45px]">Notable Projects</div>
      <div className="md:grid md:grid-cols-3 auto-cols-auto gap-x-5 gap-y-5 ml-5 mr-5">
        <NotableProject name="Aviation Assistant V1"/>
        <NotableProject name="Aviation Assistant V2"/>
        <NotableProject name="Aubuchon Register Tool"/>
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