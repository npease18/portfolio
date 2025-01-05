"use client"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { grey } from '@mui/material/colors'
import {useState} from 'react'

import { FileList } from "../../../../components/filelist"

import YouTube from "react-youtube"

var chatmapsFileList = [
    {
        "name": "Chatmaps Final Presentation Slides",
        "type": "PDF",
        "filename": "ChatMaps Final Presentation.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Chatmaps Proposal Presentation",
        "type": "PDF",
        "filename": "ChatMaps Proposal Presentation.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Configuration Management Document",
        "type": "PDF",
        "filename": "Config Management.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Design Pattern Document",
        "type": "PDF",
        "filename": "Design Pattern.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Domain Model Document",
        "type": "PDF",
        "filename": "Domain Model.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Future Plan Document",
        "type": "PDF",
        "filename": "Future Plan.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sequence Diagram Document",
        "type": "PDF",
        "filename": "Sequence Diagram.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Software Architecture Document",
        "type": "PDF",
        "filename": "Software Architecture.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sprint Backlog Document",
        "type": "PDF",
        "filename": "Sprint Backlog.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sprint Review 2 Document",
        "type": "PDF",
        "filename": "Sprint Review 2.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sprint Review 3 Document",
        "type": "PDF",
        "filename": "Sprint Review 3.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sprint Review 4 Document",
        "type": "PDF",
        "filename": "Sprint Review 4.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Sprint Review 5 Document",
        "type": "PDF",
        "filename": "Sprint Review 5.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Software Requirements Specification Document",
        "type": "PDF",
        "filename": "SRS.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Test Plan",
        "type": "PDF",
        "filename": "Test Plan.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    },
    {
        "name": "Use Case Models Document",
        "type": "PDF",
        "filename": "Use Case Models.pdf",
        "filetype": "PDF",
        "path": "/project_files/chatmaps"
    }
]

function ImageCarousel() {
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            created: () => setLoaded(true)
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                  clearTimeout(timeout)
                }
                function nextTimeout() {
                  clearTimeout(timeout)
                  if (mouseOver) return
                  timeout = setTimeout(() => {
                    slider.next()
                  }, 5000)
                }
                slider.on("created", () => {
                  slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                  })
                  slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                  })
                  nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
              },
        ]
      )
    return (
        <div className='ml-2 mr-5 mt-5 p-3'>
            <div ref={sliderRef} className="keen-slider">
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <img src="/project_files/chatmaps/screenshots/ss1.png"/>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        The homepage of the application. The user is logged in on this demo so they can simply return to the application without having to login again. This page also displays the number of rooms nearby.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <img src="/project_files/chatmaps/screenshots/ss2.png"/>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is the homepage of the application, featuring a map with the nearby rooms and users saved rooms, as well as a sidebar. The sidebar allows the user to navigate around the rooms, the friends they have, any DM&apos;s they have sent or received, as well as accept friend requests.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <img src="/project_files/chatmaps/screenshots/ss3.png"/>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is the chat room page. The user can see the messages in the room, as well as send messages. The user can also see the users in the room, as well as the room&apos;s topic and location. The user may also choose to save this room for later here.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <img src="/project_files/chatmaps/screenshots/ss4.png"/>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 bg-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[900]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is the users profile. The user can see their saved rooms, as well as any profile data that they have saved. Here they can also modify their profile including changing their profile picture, username, display name, and biography.
                    </div>
                </div>
                
            </div>
        </div>
      )
}

export default function Home() {
    return (
    <div className="pl-6">
        <title>ChatMaps | nicholaspease.com</title>
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
                <br/><br/>This app shares some similarities to other social networks that implement location-based content. ChatMaps’ novel approach is to utilize user location to facilitate real-time communication with others within a given radius.<br/>
                <br/> <span className='font-bold'>Live Demo: <a href="https://chatma.ps" className='underline' target="_blank">chatma.ps</a></span><br/>
                Login: demo@chatma.ps<br/>
                Password: demoapp
            </section>
            <section className="grid max-md:grid-cols-1 grid-cols-2">
                <FileList file={chatmapsFileList}/>
                <ImageCarousel/>
            </section>
            <section className='mt-5'>
               <span className='font-bold text-[24px]'>Contributors / Commit History</span>
               <div className='grid md:grid-cols-3 m-5 gap-x-5 gap-y-5'>
                    <img src="/project_files/chatmaps/contribution_ss/lax18.png" className="w-[100%]"/>
                    <img src="/project_files/chatmaps/contribution_ss/clarklach.png" className="w-[100%]"/>
                    <img src="/project_files/chatmaps/contribution_ss/sgoodridge.png" className="w-[100%]"/>
               </div>
               <div className='grid max-md:grid-cols-1 md:grid-cols-3 mt-5 gap-x-5 mr-5 ml-5'>
                <div className='col-span-1'>
                    <span className='font-bold text-[24px]'>Weekly Code Frequency Graph</span>
                    <img src="/project_files/chatmaps/contribution_ss/codefreq.png" className="w-[100%]"/>
                </div>
                <div className='col-span-2 p-2'>
                    <span className='font-bold text-[24px]'>Contributions by Author</span>
                    <table className='w-[100%] text-center max-md:text-[10px]'>
                        <thead>
                            <tr className='italic'>
                                <th>Author Name</th>
                                <th>Insertions</th>
                                <th>Deletions</th>
                                <th>Files</th>
                                <th>Commits</th>
                                <th>Lines Changed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nicholas Pease (LAX18)</td>
                                <td>+30,719 (78%)</td>
                                <td>-14,937 (83%)</td>
                                <td>574 (81%)</td>
                                <td>186 (76%)</td>
                                <td>45,656 (80%)</td>
                            </tr>
                            <tr>
                                <td>Clark LaChance (ClarkLach)</td>
                                <td>+2,562   (7%)</td>
                                <td>-2,802   (16%)</td>
                                <td>106    (15%)</td>
                                <td>48     (20%)</td>
                                <td>5,364   (9%)</td>
                            </tr>
                            <tr>
                                <td>Stephen Goodridge (Sgoodridge96)</td>
                                <td>+769    (2%)</td>
                                <td>-243    (1%)</td>
                                <td>16     (2%)</td>
                                <td>7      (3%)</td>
                                <td>1,012   (2%)</td>
                            </tr>
                            <tr>
                                <td>Joseph Gallant (JGCS22)</td>
                                <td>+5,062   (13%)</td>
                                <td>-3      (0%)</td>
                                <td>14     (2%)</td>
                                <td>2      (1%)</td>
                                <td>5,065   (9%)</td>
                            </tr>
                            <tr>
                                <td>Totals</td>
                                <td>39,112</td>
                                <td>17,985</td>
                                <td>710  </td>
                                <td>243  </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='pt-5 text-[12px]' colSpan="6">* totals include all lines in repository including (but not limited to), comments, dependencies (when not ommited) and configuration files.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               </div>
            </section>
            <section className='mt-5 ml-5 mr-5'>
                <span className='text-[24px] font-bold'>Project Videos</span>
                <div className='grid grid-cols-2'>
                    <div>
                        <YouTube videoId="CHxvlg3fvrI" opts={{width: "100%",height: "300px"}}/>
                    </div>
                    <div>
                        <YouTube videoId="L5VpyMdkYfU" opts={{width: "100%",height: "300px"}}/>
                    </div>
                </div>
            </section>
        </div>
    </div>)
}