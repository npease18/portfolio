"use client"
import Link from "next/link"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { grey } from '@mui/material/colors';
import { Chrono } from "react-chrono";
import YouTube from 'react-youtube';

import { FileList } from "@/components/filelist"

var fileList = [
    {
        "name": "Aviation Assistant V1 - Kelley Presentation",
        "type": "PDF",
        "filename": "kelley-presentation.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
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
                    <p className="flex justify-center">
                        <img src="/project_files/aa2/photos/aa2_front_zoom.jpg" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is a front view of the device showcasing the touch screen and the antenna. The top touch screen is a iPad connected wirelessly to the box. The antenna is a vehicular mount antenna specifically tuned for VHF frequencies including 1090mhz (ADS-B downlink frequency)
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa2/photos/aa2_internals_2.jpg" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is a internal view of the project showcasing the Raspberry Pi Zero 2 W, the Adafruit Powerboost, and the OLED display. The Raspberry Pi Zero 2 W is the main processing unit for the device. The Adafruit Powerboost is the power management unit for the device. The OLED display is a 3 line display showcasing key device stats.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa2/photos/aa2_display_2.jpg" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is the OLED display showcasing some stats including the number of detected aircraft, uptime and Wifi IP address.
                    </div>
                </div>
            </div>
        </div>
      )
}

export default function Home() {
    const items = [
        {
            title: "November 2023 Concept",
            cardTitle: "Concept",
            cardDetailedText: "The idea and vision for the project was conceptualized and finalized. This mostly included the products to be used, the generic idea of assembly, and some very rudimentary software designs.",
        },
        {
            title: "December 14th 2023 Initial Work",
            cardTitle: "Initial Work",
            cardDetailedText: "Initial work was started on the project including some soldering of the circuit boards and testing the components to verify compatibility.",
        },
        {
            title: "December 21st 2023 Assembly",
            cardTitle: "Assembly",
            cardDetailedText: "The project was assembled and tested. This included the final soldering of the components, and some testing using very low level diagnostic software only.",
        },
        {
            title: "December 23rd 2023 Software Development",
            cardTitle: "Software Development",
            cardDetailedText: "The software development cycle started, with a HTML/JS app being targeted. This was rapidly developed over the course of a few days.",
        },
        {
            title: "January 31st 2024 Final Testing",
            cardTitle: "Final Testing",
            cardDetailedText: "The device was tested and verified to be working. This included the final testing of the device, the final testing of the software, and the final testing of the device with the software.",
        }
    ]
    return (
        <div>
            <main className="grid max-md:grid-cols-1 md:grid-cols-3">
                <div className="">
                    <img src="/project_files/aa2/photos/aa_front_transparent_zoom.png" className="md:relative md:left-[20%] md:w-[80%]"/>
                </div>
                <div className="col-span-2">
                    <section className="flex justify-center items-center">
                        <img src="/images/aa2.png" className="max-md:w-[80%] md:w-[60%]"/>
                    </section>
                    <section className="flex justify-center items-center mt-5">
                        <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22137%22%20height%3D%2228%22%20role%3D%22img%22%20aria-label%3D%22VERSION%3A%202.1.2%22%3E%3Ctitle%3EVERSION%3A%202.1.2%3C%2Ftitle%3E%3Cg%20shape-rendering%3D%22crispEdges%22%3E%3Crect%20width%3D%2278.75%22%20height%3D%2228%22%20fill%3D%22%23555%22%2F%3E%3Crect%20x%3D%2278.75%22%20width%3D%2258.25%22%20height%3D%2228%22%20fill%3D%22%234c1%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23fff%22%20text-anchor%3D%22middle%22%20font-family%3D%22Verdana%2CGeneva%2CDejaVu%20Sans%2Csans-serif%22%20text-rendering%3D%22geometricPrecision%22%20font-size%3D%22100%22%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%22393.75%22%20y%3D%22175%22%20textLength%3D%22547.5%22%20fill%3D%22%23fff%22%3EVERSION%3C%2Ftext%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%221078.75%22%20y%3D%22175%22%20textLength%3D%22342.5%22%20fill%3D%22%23fff%22%20font-weight%3D%22bold%22%3E2.1.2%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="ml-5 mr-5"/>
                        <Link href="https://gitea.nicholaspease.com/npease/AviationAssistantV2" target="_blank"><img src="https://img.shields.io/badge/Open%20On%20Gitea-grey?style=for-the-badge&logo=gitea"/></Link>
                    </section>
                    <section className="mt-2 text-center pt-3 relative max-md:w-[80%] max-md:left-[10%] md:left-[20%] md:w-[60%]">
                        This project is a <Link href="/projects/Aviation Assistant V1" className="underline">continuation of the Aviation Assistant V1</Link> project with the goal of increased runtime and deployability. Some significant improvements over the original
                        include a more standard charging port (USB-C), a bigger battery and lower power draw resulting in an extended runtime over its predecessor. This device also works with a custom app for Android and iOS that allows for the user to interact with the device and view data.
                        This app further increases the portability of the device by allowing the user to view data without needing to be near the device. <br/><br/>
                        The device is powered by a Raspberry Pi Zero 2 W, allowing for both bluetooth and wireless connections to the device. For power, the device uses a LiPo battery
                        managed by a Adafruit Powerboost. As a means to visually inspect the device, a small OLED three line display is mounted to the top to showcase key device stats including number of aircraft visible,
                        current device IP, bluetooth device connect, and many more.
                    </section>
                </div>
            </main>
            <main className="md:w-[80%] md:relative md:left-[10%]">
                <ImageCarousel/>
            </main>
        
            <main className="w-[80%] left-[10%] relative mt-5 mb-[150px]">
                <div className="flex justify-center mb-10">
                    <img src="/project_files/aa2/photos/aa2_software_icon.png" className=""/>
                    <span className="text-[30px] font-bold pl-10">Aviation Assistant V2 Software</span>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                    <YouTube videoId="3qVFOusYwo4"/>
                    <div className="bg-slate-900 p-5 rounded-xl">
                        The Aviation Assistant software (version 2) is more geared toward a simpler, plane spotting experience. Users have the ability to track aircraft on a live map,
                        view aircraft details including any available pictures of the aircraft, in addition to modifying the background and features of the map. 
                        <br/><br/>The application also integrates LiveATC audio into the app allowing the user to seamlessly switch audio streams without leaving the application, thereby increasing situational awareness. 
                        <br/><br/>A settings menu serves to both show the user various statistics about the device such as version and licenses, but also allow the user to update, poweroff and restart the device as well.
                    </div>
                </div>
            </main>
            <main className="flex relative left-[10%] w-[80%]">
                <span className="text-[26px] font-bold">Project Timeline</span>
                <Chrono items={items} mode="HORIZONTAL" disableToolbar="true" theme={{
                    primary: "#ffffff",
                    secondary: "#000",
                    cardBgColor: "#0f172a",
                    cardMediaBgColor: "#171717",
                    cardTitleColor: "#e2e8f0",
                    cardSubtitleColor: "#e2e8f0",
                    titleColor: "#ffffff",
                    titleColorActive: "#e2e8f0",
                    cardDetailsColor: "#e2e8f0",
                }} fontSizes={{
                    cardTitle: '30px',
                    cardText: '36px',
                  }}/>
            </main>
            
        </div>
    )
}