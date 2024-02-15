
function Header() {
    return (
      <header class="pt-5 w-1/1 flex justify-center">
        <div class="shadow-lg w-[98%] bg-slate-900 flex rounded-lg h-64 max-lg:ml-5 max-lg:mr-5">
          <div class="self-end pb-5">
            <div class="pl-5 self-end text-[50px]">Nicholas Pease</div>
            <div class="pl-5 self-end text-[15px]">My portfolio and project place.</div>
          </div>
        </div>
      </header>
    );
  }
  
  function Nav() {
    return (
      <div></div>
    );
  }
  
  function AboutMe() {
    return (
      <div class="pl-[1%] w-[98%]">
        <div class="sm:flex sm:justify-center md:grid md:grid-cols-3 pt-5 auto-cols-max">
          <div class="md:mr-10 bg-slate-900 rounded-lg h-[420px] col-span-1 flex justify-center max-lg:ml-5 max-lg:mr-5">
            <div class="self-center">
              <img class="w-56 h-56  rounded-full" src="me.jpg"></img>
              <div class="pt-5 text-[45px]">About Me</div>
            </div>
          </div>
          <div class="mt-5 col-span-2 max-lg:ml-5 max-lg:mr-5">
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
  
  function ProjectsHome() {
    return (
      <div class="mb-10">
        <div class="pt-5 pb-5 flex justify-center text-[45px]">Notable Projects</div>
        <div class="md:grid md:grid-cols-3 md:gap-1">
          <div class="text-center rounded-lg bg-slate-900 ml-5 max-lg:mr-5 max-lg:mb-10 h-[420px] flex justify-center shadow p-5">
            <div class="self-center">
              <div class="w-[100%] flex justify-center">
                <img class="w-[375px] h-[77px]" src="aa1.png"></img>
              </div>
              <div class="mt-5 text-[24px]">Aviation Assistant V1</div>
              <div class="mt-5 text-wrap">
                The Aviation Assistant V1 is an all-in-one ADS-B processing device that includes an integrated touchscreen and speaker for on-the-go plane tracking
              </div>
            </div>
          </div>
          <div class="text-center rounded-lg bg-slate-900 ml-5 max-lg:mr-5 max-lg:mb-10 h-[420px] flex justify-center shadow p-5">
          <div class="self-center">
              <div class="w-[100%] flex justify-center">
                <img class="w-[375px] h-[77px]" src="aa2.png"></img>
              </div>
              <div class="mt-5 text-[24px]">Aviation Assistant V2</div>
              <div class="mt-5 text-wrap">
                The Aviation Assistant V2 is a revamped version of the Aviation Assistant sporting a larger battery/runtime in addition to a more portable footprint for use in the field.
              </div>
            </div>
          </div>
          <div class="mr-5 text-center rounded-lg bg-slate-900 ml-5 max-lg:mr-5 max-lg:mb-10 h-[420px] flex justify-center shadow p-5">
          <div class="self-center">
              <div class="w-[100%] flex justify-center">
                <img class="w-[375px] h-[77px]" src="aublogo.svg"></img>
              </div>
              <div class="mt-5 text-[24px]">Aubuchon Hardware Register Tools</div>
              <div class="mt-5 text-wrap">
                The register tools are a suite of software developed for the Aubuchon Hardware company to aid in the updating of manual UPC lookup books as well as interfacing with the backend's pricing API to provide real time inventory, pricing, and product information. Due to the nature of this software, it is closed sourced.  
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <div class="bg-slate-900 p-5 rounded-lg text-[20px]">
          You can find more projects on the Projects page or on my personal Gitea Server.
          </div>
        </div>
      </div>
    );
  }
  
  function Footer() {
    return (
      <div class="flex justify-center w-full mb-5">
        <div class="mt-5 bg-slate-900 rounded-lg w-full h-[85px] self-center text-center p-5 ml-5 mr-5">
          &copy; 2024 Nicholas Pease. <br/>Last Updated on 14 FEB 2024.
        </div>
      </div>
    );
  }
  