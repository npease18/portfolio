"use client"
import Link from "next/link"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { grey } from '@mui/material/colors'
import YouTube from 'react-youtube';

import { FileList } from "@/components/filelist"

var fileList = [
    {
        "name": "Aviation Assistant V1 - Kelley Presentation",
        "type": "PDF",
        "filename": "kelley-presentation.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
    },
    {
        "name": "Aviation Assistant V1 - Science Fair Presentation",
        "type": "PDF",
        "filename": "science-fair-slides.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
    },
    {
        "name": "Aviation Assistant V1 - Senior Project Slides",
        "type": "PDF",
        "filename": "senior-project-slides.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
    },
    {
        "name": "Maine State Science Fair - Computer Science Category Poster",
        "type": "PDF",
        "filename": "comp-2.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
    },
    {
        "name": "Aviation Assistant V1 - Technical Manual (Work in Progress)",
        "type": "PDF",
        "filename": "aa_manual.pdf",
        "filetype": "PDF",
        "path": "/project_files/aa/files"
    },
    {
        "name": "Aviation Assistant V1 - Software Flow Diagram",
        "type": "PNG",
        "filename": "aa_flow.png",
        "filetype": "PNG",
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
                        <img src="/project_files/aa/photos/aa_front.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is a front view of the device showcasing the touch screen and the antenna.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa/photos/aa_back.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is a rear view of the device showcasing the fan port in addition to the speaker grill.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa/photos/aa_cad.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        This is the blown up CAD picture of the diagram (colorized).
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa/photos/aa_diagram_1.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        Device design diagram.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa/photos/aa_diagram_2.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        Device design diagram.
                    </div>
                </div>
                <div className={`keen-slider__slide ${loaded ? 'block' : 'hidden'}`}>
                    <p className="flex justify-center">
                        <img src="/project_files/aa/photos/aa_software_diagram.png" className="h-[450px]"/>
                    </p>
                    <div className="relative top-[-35px] left-[5px]">
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.prev()}}><ArrowBackIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                        <span className="cursor-pointer z-10 font-white" onClick={() => {instanceRef.current?.next()}}><ArrowForwardIosIcon sx={{color: grey[100]}} fontSize="large"/></span>
                    </div>
                    <div className='mt-5 text-center p-2 bg-slate-900 rounded-md italic relative top-[-35px]'>
                        Software Flow Diagram
                    </div>
                </div>
            </div>
        </div>
      )
}

export default function Home() {
    return (
        <div>
            <title>Avaition Assistant V1 | nicholaspease.com</title>
            <main className="grid max-md:grid-cols-1 md:grid-cols-3">
                <div className="">
                    <img src="/project_files/aa/photos/aa_side.png" className="md:relative md:left-[20%] md:w-[80%]"/>
                </div>
                <div className="col-span-2">
                    <section className="flex justify-center items-center">
                        <img src="/images/aa1.png" className="max-md:w-[80%] md:w-[60%]"/>
                    </section>
                    <section className="flex justify-center items-center mt-5">
                        <Link href="https://github.com/npease18/aviationassistant" className="ml-2 mr-2 flex justify-center"><img className="" src="https://img.shields.io/badge/Open%20On%20Github-grey?style=for-the-badge&logo=github"/></Link>
                        <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22137%22%20height%3D%2228%22%20role%3D%22img%22%20aria-label%3D%22VERSION%3A%202.7.2%22%3E%3Ctitle%3EVERSION%3A%202.7.2%3C%2Ftitle%3E%3Cg%20shape-rendering%3D%22crispEdges%22%3E%3Crect%20width%3D%2278.75%22%20height%3D%2228%22%20fill%3D%22%23555%22%2F%3E%3Crect%20x%3D%2278.75%22%20width%3D%2258.25%22%20height%3D%2228%22%20fill%3D%22%234c1%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23fff%22%20text-anchor%3D%22middle%22%20font-family%3D%22Verdana%2CGeneva%2CDejaVu%20Sans%2Csans-serif%22%20text-rendering%3D%22geometricPrecision%22%20font-size%3D%22100%22%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%22393.75%22%20y%3D%22175%22%20textLength%3D%22547.5%22%20fill%3D%22%23fff%22%3EVERSION%3C%2Ftext%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%221078.75%22%20y%3D%22175%22%20textLength%3D%22342.5%22%20fill%3D%22%23fff%22%20font-weight%3D%22bold%22%3E2.7.2%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="ml-5 mr-5"/>
                    </section>
                    <section className="font-bold text-[24px] text-center mt-4 mb-2">
                        2021 Maine State Science Fair - Computer Science Category - 1st Place<br/>
                        <div className="text-[16px] font-normal">
                            <Link className="mr-5" href="https://www.jax.org/news-and-insights/2021/march/mssf-2021#" target="_blank">Link to Press Release</Link>
                            <Link className="mr-5" href="https://archive.nicholaspease.com/archive/1716867123.673383/singlefile.html" target="_blank">Mirror 1 (Local Archive)</Link>
                            <Link className="mr-5" href="https://web.archive.org/web/20230923190338/https://www.jax.org/news-and-insights/2021/March/mssf-2021" target="_blank">Mirror 2 (Web Archive)</Link>
                        </div>
                    </section>
                    <section className="text-center pt-3 relative max-md:w-[80%] max-md:left-[10%] md:left-[20%] md:w-[60%]">
                        The Aviation Assistant is a combination hardware / software solution to allow the user to track aircraft using the Automated Dependent Surveillance - Broadcast (ADS-B) system.
                        The device is a Raspberry Pi, coupled with a battery control board, speakers, and a USB SDR interface device. The software is a combination of a modified <Link href="https://github.com/mutability/dump1090" target="_blank" className="underline italic">dump1090</Link>
                        &nbsp;software, extended with additional features, in addition to a series of device based APIs to facilitate control and information from the physical hardware to the software interface. The interface is presented to the user via the 7 inch touchscreen display in the form of 
                        website. 
                    </section>
                </div>
            </main>
            <main className="md:w-[80%] md:relative md:left-[10%]">
                <ImageCarousel/>
            </main>
            <main className="pl-5 pr-5">
               <span className="text-[24px] font-bold mb-2">Project Videos</span>
               <section className="grid max-md:grid-cols-1 md:grid-cols-3 gap-x-5">
                    <div className="w-[100%] text-center italic text-[18px]">
                        <YouTube videoId="vaKSXLHYmrU" opts={{"width": '100%'}}/>
                        2021 Maine State Science Fair - 2 Minute Summary
                    </div>
                    <div className="w-[100%] text-center italic text-[18px]">
                        <YouTube videoId="jcz2ad-T-Vg" opts={{"width": '100%'}}/>
                        Secondary Case Printing Video
                    </div>
                    <div className="w-[100%] text-center italic text-[18px]">
                        <YouTube videoId="eMdDp03v9aI" opts={{"width": '100%'}}/>
                        Field Test at Canaan Fire Tower
                    </div>
               </section>
            </main>
            <main className="ml-5 mr-5 mt-10">
                <div className="md:w-[50%] md:relative md:left-[25%]">
                    <FileList file={fileList}/>
                </div>
            </main>
            
        </div>
    )
}