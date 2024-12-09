"use client"
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const PLANES = [{
    src: "/images/planes/20230402_093722.jpg",
    width: 4000,
    height: 1868,
    date: "01/01/01",
    model: "747-412",
    manufacturer: "Boeing",
    location: "KBGR",
    reg: "N756CA"
},
{
    src: "/images/planes/20230402_115859.jpg",
    width: 4000,
    height: 1868,
    date: "04/02/2023",
    model: "767-300",
    manufacturer: "Boeing",
    location: "KBGR",
    reg: "N706KW"
},
{
    src: "/images/planes/20230708_134556.jpg",
    width: 4000,
    height: 1868,
    model: "737-800",
    manufacturer: "Boeing",
    date: "07/08/2023",
    location: "KBGR",
    reg: "N915NN"
},
{
    src: "/images/planes/20230701_153414.jpg",
    width: 4000,
    height: 1868,
    model: "AN124",
    manufacturer: "Antonov",
    date: "06/25/2023",
    location: "KBGR",
    reg: "UR-82008"
},
{
    src: "/images/planes/20230920_181416.jpg",
    width: 4000,
    height: 1868,
    model: "AN124",
    manufacturer: "Antonov",
    date: "09/20/2023",
    location: "KBGR",
    reg: "UR-82072"
},
{
    src: "/images/planes/20231014_151149.jpg",
    width: 4000,
    height: 1868,
},
{
    src: "/images/planes/20241201_165213.jpg",
    width: 4000,
    height: 1868,
    model: "A300-600ST",
    manufacturer: "Airbus",
    date: "12/01/2024",
    location: "KBGR",
    reg: "F-GSTC"
}]


export default function Page() {
    var images = PLANES.map((plane) => {
        var caption = plane.date != undefined? `<span class="text-[20px] relative bottom-[30px] bg-slate-900 rounded-xl p-5">${plane.manufacturer} ${plane.model} (<a href="https://www.flightaware.com/live/flight/${plane.reg}" target="_blank">${plane.reg}</a>) - ${plane.location} (${plane.date})</span>`: '<span class="text-[20px] relative bottom-[30px] bg-slate-900 rounded-xl p-5">No Data Found</span>'
        return <Item key={plane.src} original={plane.src} width={plane.width} height={plane.height} caption={caption}>
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={plane.src} className='inline-block m-5 w-[22%] cursor-pointer'/>
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