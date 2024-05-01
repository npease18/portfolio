export default function Home() {
    return (
    <div className="pl-6">
        <div className="grid grid-cols-1">
            <section className="flex justify-center items-center">
                <img src="/images/chatmaps.png" className=""/>
            </section>
            <section className="flex justify-center items-center pb-5">
                <a href="https://github.com/ChatMaps/ChatMaps" className="ml-2 mr-2"><img className="mt-2" src="https://img.shields.io/badge/Open%20On%20Github-grey?style=for-the-badge&logo=github"/></a>
                <a href="https://chatma.ps" className="ml-2 mr-2"><img className="mt-2" src="https://img.shields.io/github/deployments/ChatMaps/ChatMaps/production?style=for-the-badge&logo=vercel&label=Vercel%20Deployment&link=https%3A%2F%2Fchatma.ps"/></a>
                <img className="ml-2 mr-2 mt-2"src="https://img.shields.io/badge/Powered%20By%20NextJS-grey?style=for-the-badge&logo=nextdotjs"/>
            </section>
            <section className="text-center w-[80%] left-[10%] relative">
                ChatMaps is a web-based social networking service that allows users to connect to others in their local geographic area. It implements an interactable mapping utility to show general user locations relative to others, as well as a chat room feature that allows users to start public conversations based on any given topic. ChatMaps is primarily intended for use in densely populated areas, such as college campuses or metropolitan areas, so people of similar interests can start new conversations. The goal of this project is to create a web app that plots locations, gives a radius of the local area, and connects users into different topic-based chat rooms. 
                <br/><br/>This service implements user login and profiles, allowing users to add each other as friends and start private conversations. There are several default chat rooms of varying topics, but users also have the ability to create their own rooms that will be visible to other users. For example, a user at the University of Maine could create a joinable chat room titled “COS420”, which would be joinable by others near this campus.
                <br/><br/>This app shares some similarities to other social networks that implement location-based content. ChatMaps’ novel approach is to utilize user location to facilitate real-time communication with others within a given radius.
            </section>
        </div>
    </div>)
}