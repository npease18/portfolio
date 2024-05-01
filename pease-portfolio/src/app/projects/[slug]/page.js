import Projects from "../../projects.json"
import { redirect } from "next/navigation";

function Page({params}) {
    var name = params.slug.replaceAll("%20", " ")
    if (name in Projects) {
        var Project = Projects[name]
        if (Project.hasCustomPage) {
            redirect("/projects/custom/"+Project.hasCustomPage, "replace")
        }
        return (
            <div className="ml-5 mt-5 mr-5">
                {Project.img && <img className="mb-5" src={"/images/"+Project.img}/>}
                <div className="text-[26px] font-bold">{name}</div>
                {(Project.isPublic && Project.hasGitea)&& <a href={"https://gitea.nicholaspease.com/"+Project.gitea_user+"/"+Project.gitea_repo}><img className="mt-2" src="https://img.shields.io/badge/Open%20On%20Gitea-grey?style=for-the-badge&logo=gitea"/></a>}
                {(Project.isPublic && Project.hasGithub)&& <a href={"https:/github.com/"+Project.github_user+"/"+Project.github_repo}><img className="mt-2" src="https://img.shields.io/badge/Open%20On%20Github-grey?style=for-the-badge&logo=github"/></a>}
                {Project.hasGitea && <img className="mt-2" src={"https://server1.nicholaspease.com/badges/cloc/"+Project.gitea_user+"/"+Project.gitea_repo+".svg"}/>}
                <div className="mt-5">{Project.description}</div>
            </div>
        );
    } else {
        return (
            <div className="ml-5 mt-5 mr-5 text-center">
                <div className="font-bold text-[46px]">Project Does Not Exist</div>
                <a href="/projects" className="text-[24px] underline">Return to Project&apos;s List</a>
            </div>
        )
    }  
}

export default Page;