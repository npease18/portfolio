import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var chatmapsFileList = [
    {
        "name": "Chatmaps Final Presentation Video",
        "type": "MP4 Video",
        "filename": "Chatmaps Final Presentation (Video).mp4",
        "filetype": "MP4"
    },
    {
        "name": "Chatmaps Final Presentation Slides",
        "type": "PDF",
        "filename": "ChatMaps Final Presentation.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Chatmaps Proposal Presentation",
        "type": "PDF",
        "filename": "ChatMaps Proposal Presentation.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Configuration Management Document",
        "type": "PDF",
        "filename": "Config Management.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Design Pattern Document",
        "type": "PDF",
        "filename": "Design Pattern.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Domain Model Document",
        "type": "PDF",
        "filename": "Domain Model.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Future Plan Document",
        "type": "PDF",
        "filename": "Future Plan.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sequence Diagram Document",
        "type": "PDF",
        "filename": "Sequence Diagram.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Software Architecture Document",
        "type": "PDF",
        "filename": "Software Architecture.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sprint Backlog Document",
        "type": "PDF",
        "filename": "Sprint Backlog.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sprint Review 2 Document",
        "type": "PDF",
        "filename": "Sprint Review 2.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sprint Review 3 Document",
        "type": "PDF",
        "filename": "Sprint Review 3.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sprint Review 4 Document",
        "type": "PDF",
        "filename": "Sprint Review 4.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Sprint Review 5 Document",
        "type": "PDF",
        "filename": "Sprint Review 5.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Software Requirements Specification Document",
        "type": "PDF",
        "filename": "SRS.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Test Plan",
        "type": "PDF",
        "filename": "Test Plan.pdf",
        "filetype": "PDF"
    },
    {
        "name": "Use Case Models Document",
        "type": "PDF",
        "filename": "Use Case Models.pdf",
        "filetype": "PDF"
    }
]

function FileList() {
    function FileRow({file}) {
        return (
            <tr>
                <td className="italic hover:underline p-1"><a href={"/project_files/chatmaps/"+file.filename} target="_blank">{file.name}</a></td>
                <td className="p-1">{file.type}</td>
            </tr>
        )
    }

    var files = []
    for(var file in chatmapsFileList) {
        files.push(<FileRow file={chatmapsFileList[file]} key={file}/>)
    }

    return (
        <div className="mt-5 bg-slate-900 mr-5 rounded-md p-3">
            <h2 className="font-bold text-[24px]">ChatMaps Files</h2>
            <table className="w-[100%] mt-2 mr-2 ml-2">
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {files}
                </tbody>
            </table>
        </div>
    )
}

export default function Home() {
    return (
    <div className="pl-6">
        <div className="grid grid-cols-1">
            <section className="flex justify-center items-center">
                <img src="/images/chatmaps.png" className=""/>
            </section>
            <section className="flex justify-center items-center pb-5 max-md:grid max-md:grid-cols-1">
                <a href="https://github.com/ChatMaps/ChatMaps" className="ml-2 mr-2 flex justify-center"><img className="mt-2" src="https://img.shields.io/badge/Open%20On%20Github-grey?style=for-the-badge&logo=github"/></a>
                <a href="https://chatma.ps" className="ml-2 mr-2 flex justify-center"><img className="mt-2" src="https://img.shields.io/github/deployments/ChatMaps/ChatMaps/production?style=for-the-badge&logo=vercel&label=Vercel%20Deployment&link=https%3A%2F%2Fchatma.ps"/></a>
                <span className="flex justify-center"><img className="ml-2 mr-2 mt-2"src="https://img.shields.io/badge/Powered%20By%20NextJS-grey?style=for-the-badge&logo=nextdotjs"/></span>
            </section>
            <section className="text-center w-[80%] left-[10%] relative">
                ChatMaps is a web-based social networking service that allows users to connect to others in their local geographic area. It implements an interactable mapping utility to show general user locations relative to others, as well as a chat room feature that allows users to start public conversations based on any given topic. ChatMaps is primarily intended for use in densely populated areas, such as college campuses or metropolitan areas, so people of similar interests can start new conversations. The goal of this project is to create a web app that plots locations, gives a radius of the local area, and connects users into different topic-based chat rooms. 
                <br/><br/>This service implements user login and profiles, allowing users to add each other as friends and start private conversations. There are several default chat rooms of varying topics, but users also have the ability to create their own rooms that will be visible to other users. For example, a user at the University of Maine could create a joinable chat room titled “COS420”, which would be joinable by others near this campus.
                <br/><br/>This app shares some similarities to other social networks that implement location-based content. ChatMaps’ novel approach is to utilize user location to facilitate real-time communication with others within a given radius.
            </section>
            <section className="grid max-md:grid-cols-1 grid-cols-2">
                <FileList/>
            </section>
        </div>
    </div>)
}