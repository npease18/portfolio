import Projects from "../../projects.json"

function Page({params}) {
    var project = params.slug.replaceAll("%20", " ")
    if (project in Projects) {
        return (
            <div className="ml-5 mt-5 mr-5">
                {Projects[project].img && <img className="mb-5" src={"/"+Projects[project].img}/>}
                <div className="text-[26px] font-bold">{project}</div>
                <img className="mt-2" src={"https://server1.nicholaspease.com/badges/cloc/"+Projects[project].gitea_user+"/"+Projects[project].gitea_repo+".svg"}/>
                <div className="mt-5">{Projects[project].description}</div>
            </div>
        );
    } else {
        return (
            <div className="ml-5 mt-5 mr-5 text-center">
                <div className="font-bold text-[46px]">Project Does Not Exist</div>
                <a href="/projects" className="text-[24px] underline">Return to Project's List</a>
            </div>
        )
    }  
}

export default Page;