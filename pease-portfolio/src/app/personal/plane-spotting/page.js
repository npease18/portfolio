"use client"
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export const Planes = [
    {
        src: "/images/planes/20230402_093722.jpg",
        width: 4000,
        height: 1868,
        date: "01/01/01",
        model: "747-412",
        manufacturer: "Boeing",
        location: "KBGR",
        reg: "N756CA",
        headerReady: true
    },
    {
        src: "/images/planes/20230402_115859.jpg",
        width: 4000,
        height: 1868,
        date: "04/02/2023",
        model: "767-300",
        manufacturer: "Boeing",
        location: "KBGR",
        reg: "N706KW",
        headerReady: false
    },
    {
        src: "/images/planes/20230708_134556.jpg",
        width: 4000,
        height: 1868,
        model: "737-800",
        manufacturer: "Boeing",
        date: "07/08/2023",
        location: "KBGR",
        reg: "N915NN",
        headerReady: false
    },
    {
        src: "/images/planes/20230701_153414.jpg",
        width: 4000,
        height: 1868,
        model: "AN124",
        manufacturer: "Antonov",
        date: "06/25/2023",
        location: "KBGR",
        reg: "UR-82008",
        headerReady: false
    },
    {
        src: "/images/planes/20230920_181416.jpg",
        width: 4000,
        height: 1868,
        model: "AN124",
        manufacturer: "Antonov",
        date: "09/20/2023",
        location: "KBGR",
        reg: "UR-82072",
        headerReady: true
    },
    {
        src: "/images/planes/20230920_181428.jpg",
        width: 4000,
        height: 1868,
        model: "AN124",
        manufacturer: "Antonov",
        date: "09/20/2023",
        location: "KBGR",
        reg: "UR-82072",
        headerReady: false
    },
    {
        src: "/images/planes/20230920_181432.jpg",
        width: 4000,
        height: 1868,
        model: "AN124",
        manufacturer: "Antonov",
        date: "09/20/2023",
        location: "KBGR",
        reg: "UR-82072",
        headerReady: false
    },
    {
        src: "/images/planes/20230926_144016.jpg",
        width: 4000,
        height: 1868,
        model: "206",
        manufacturer: "Cessna",
        date: "09/26/2023",
        location: "KBGR",
        reg: "01970",
        headerReady: true
    },
    {
        src: "/images/planes/20231014_151149.jpg",
        width: 4000,
        height: 1868,
        headerReady: false
    },
    {
        src: "/images/planes/20241201_165213.jpg",
        width: 4000,
        height: 1868,
        model: "A300-600ST",
        manufacturer: "Airbus",
        date: "12/01/2024",
        location: "KBGR",
        reg: "F-GSTC",
        headerReady: true
    },
    {
        src: "/images/planes/20241207_151807.jpg",
        width: 4000,
        height: 1419,
        model: "A300-600ST",
        manufacturer: "Airbus",
        date: "12/07/2024",
        location: "KBGR",
        reg: "F-GSTC",
        headerReady: true
    },
    {
        src: "/images/planes/20230625_175812.jpg",
        width: 1868,
        height: 1051,
        model: "A10 / F35",
        manufacturer: "Various",
        date: "06/25/2023",
        location: "KBGR",
        reg: "Various",
        headerReady: true
    },
    {
        src: "/images/planes/20230603_120656.jpg",
        width: 4000,
        height: 1868,
        model: "E145",
        manufacturer: "Embraer",
        date: "06/03/2023",
        location: "KBGR",
        reg: "SE-DZA",
        headerReady: false
    },
    {
        src: "/images/planes/20230926_135151.jpg",
        width: 4000,
        height: 1868,
        model: "UH-60",
        manufacturer: "Sikorsky",
        date: "09/26/2023",
        location: "KBGR",
        reg: "6039",
        headerReady: true
    },
    {
        src: "/images/planes/20230728_161709.jpg",
        width: 4000,
        height: 1514,
        model: "MV-22",
        manufacturer: "Boeing",
        date: "07/28/2023",
        location: "KBXM",
        reg: "N/A",
        headerReady: true
    },
    {
        src: "/images/planes/20230728_160853.jpg",
        width: 4000,
        height: 1868,
        model: "VC-25",
        manufacturer: "Boeing",
        date: "07/28/2023",
        location: "KBXM",
        reg: "29000",
        headerReady: true
    },
    {
        src: "/images/planes/20230625_180016.jpg",
        width: 4000,
        height: 1868,
        model: "C-130",
        manufacturer: "Lockheed",
        date: "06/25/2023",
        location: "KBGR",
        reg: "65849",
        headerReady: true
    },
    {
        src: "/images/planes/20241219_202355.jpg",
        width: 3015,
        height: 1696,
        model: "B-52H",
        manufacturer: "Boeing",
        date: "12/19/2024",
        location: "KBGR",
        reg: "60056"
    },
    {
        src: "/images/planes/b52_edit1.jpg",
        width: 4000,
        height: 2252,
        model: "B-52H",
        manufacturer: "Boeing",
        date: "12/19/2024",
        location: "KBGR",
        reg: "60056"
    },
    {
        src: "/images/planes/b52_edit2.jpg",
        width: 3015,
        height: 1696,
        model: "B-52H",
        manufacturer: "Boeing",
        date: "12/19/2024",
        location: "KBGR",
        reg: "60029"
    },
    {
        src: "/images/planes/c5_5feb25.png",
        width: 4906,
        height: 2760,
        model: "C-5M",
        manufacturer: "Lockheed",
        date: "02/25/2025",
        location: "KBGR",
        reg: "60020"
    },
    {
        src: "/images/planes/a330.jpg",
        width: 4000,
        height: 1868,
        model: "A330",
        manufacturer: "Airbus",
        date: "02/06/2025",
        location: "KBGR",
        reg: "N996JA"
    }
]

export default function Page() {
    var images = Planes.map((plane) => {
        var subcaption = <span>{plane.manufacturer} {plane.model} [{plane.reg}] <br/> {plane.location} ({plane.date})</span>
        var caption = plane.date != undefined? `<span class="text-[20px] relative bottom-[30px] bg-slate-900 rounded-xl p-5">${plane.manufacturer} ${plane.model} (<a href="https://www.flightaware.com/live/flight/${plane.reg}" target="_blank">${plane.reg}</a>) - ${plane.location} (${plane.date})</span>`: '<span class="text-[20px] relative bottom-[30px] bg-slate-900 rounded-xl p-5">No Data Found</span>'
        return <Item key={plane.src} original={plane.src} width={plane.width} height={plane.height} caption={caption}>
                    {({ ref, open }) => (
                        <div className='w-[22%] inline-block m-5 text-center'>
                            <img ref={ref} onClick={open} src={plane.src} className='inline-block m-5 cursor-pointer'/>
                            <span>{plane.date != undefined? subcaption: `No Data Found`}</span>
                        </div>
                    )}
                </Item>
    })
    return (
        <div className="p-5 h-[100%]">
        <title>Plane Spotting | nicholaspease.com</title>
            <span className="text-[30px]">Plane Spotting</span>
            <div>One of my hobbies in my free time is plane spotting at the airports near me. Some of these airports include Bangor International Airport (KBGR) and Brunswick Executive Airport (KBXM). Below is a collection of the images I have captures from these two airports.</div>
            <Gallery withCaption>
                    {images}
            </Gallery>
        </div>
    )
}