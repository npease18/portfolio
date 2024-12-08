"use client"
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const PLANES = [{
    src: "/images/planes/20230402_093722.jpg",
    width: 4000,
    height: 1868,
},
{
    src: "/images/planes/20230402_115859.jpg",
    width: 4000,
    height: 1868,
},
{
    src: "/images/planes/20230708_134556.jpg",
    width: 4000,
    height: 1868,
},
{
    src: "/images/planes/20230701_153414.jpg",
    width: 4000,
    height: 1868,
},
{
    src: "/images/planes/20230920_181416.jpg",
    width: 4000,
    height: 1868,
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
}]


export default function Page() {
    var images = PLANES.map((plane) => {
        return <Item key={plane.src} original={plane.src} width={plane.width} height={plane.height}>
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={plane.src} className='inline-block m-5 w-[22%] cursor-pointer'/>
            )}
        </Item>
    })
    return (
        <div className="p-5 h-[100%]">
            <span className="text-[30px]">Plane Spotting</span>
            <div>One of my hobbies in my free time is plane spotting at the airports near me. Some of these airports include Bangor International Airport (KBGR) and Brunswick Executive Airport (KBXM). Below is a collection of the images I have captures from these two airports.</div>
            <Gallery>
                    {images}
            </Gallery>
        </div>
    )
}