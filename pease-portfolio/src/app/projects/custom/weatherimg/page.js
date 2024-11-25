"use client"
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export default function Page() {
    var NOAAComposite = [
        {
            src: "/images/weather/composite-1.png",
            width: 4731,
            height: 1813,
        },
        {
            src: "/images/weather/composite-2.png",
            width: 2226,
            height: 1585,
        },
    ]
    var NOAAImages = [
        {
            src: "/images/weather/satpass3.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass4.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass5.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass6.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass7.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass10.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass11.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass13.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass14.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass15.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass16.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass17.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass18.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass19.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass20.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass21.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass22.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass27.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass30.jpg",
            width: 1040,
            height: 1619,
        },
        {
            src: "/images/weather/satpass31.jpg",
            width: 1040,
            height: 1619,
        },
    ]
    var MeteorImages = [
    {
        src: "/images/weather/meteor1.jpg",
        width: 2695,
        height: 2632,
    },
    {
        src: "/images/weather/meteor2.jpg",
        width: 2695,
        height: 3848,
    },
    {
        src: "/images/weather/meteor3.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor4.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor6.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor7.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor8.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor9.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor10.jpg",
        width: 2896,
        height: 4048,
    },
    {
        src: "/images/weather/meteor11.bmp",
        width: 2896,
        height: 4048,
    },]

    const smallItemStyles = {
        cursor: 'pointer',
        objectFit: 'cover',
      }
   
    return (
        <div className="pl-[2%] pr-[2%]">
            <title>Weather Satellite Imagery | nicholaspease.com</title>
            <div>
                <span className='text-[36px] font-bold'>Weather Satellite Imagery Capture and Processing</span><br/>
                During March to May of 2020, I spent extensive time learning to receive and process various types of VHF satellite imagery provided by a handful of government satellites. Primarily, imagery can be download via two series of satellites, NOAA and Roscosmos &quot;Meteor&quot; satellites. Both transmit in the VHF frequency band, with NOAA transmitting via automated picture transmission (APT) format, and Meteor transmitting via low-resolution picture transmission (LRPT) format. The images are received via a VHF antenna, and decoded using a software-defined radio (SDR) and a decoding software. The images are then processed using a variety of software tools to enhance the image quality and remove noise. The images are then composited together to create a full image of the Earth. The images are then used to monitor weather patterns and storm systems.
            </div>
            <Gallery>
                <div className='mb-t mt-5 font-bold text-[36px]'>American &quot;NOAA&quot; Weather Satellite Images</div>
                <div className='grid grid-cols-5 gap-x-10 gap-y-5'>
                {NOAAImages.map((image) => {
                        return (
                            <Item key={image.src} original={image.src} width={image.width} height={image.height}>
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={image.src} style={smallItemStyles}/>
                                )}
                            </Item>   
                        )
                    })}
                </div>
                <div className='mb-t mt-5 font-bold text-[36px]'>American &quot;NOAA&quot; Weather Satellite Images - Composites</div>
                <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
                {NOAAComposite.map((image) => {
                        return (
                            <Item key={image.src} original={image.src} width={image.width} height={image.height}>
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={image.src} style={smallItemStyles}/>
                                )}
                            </Item>   
                        )
                    })}
                </div>
                <div className='mb-t mt-5 font-bold text-[36px]'>Russian &quot;Meteor&quot; Weather Satellite Images</div>
                <div className='grid grid-cols-5 gap-x-10 gap-y-5'>
                {MeteorImages.map((image) => {
                        return (
                            <Item key={image.src} original={image.src} width={image.width} height={image.height}>
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={image.src} style={smallItemStyles}/>
                                )}
                            </Item>   
                        )
                    })}
                </div>
            </Gallery>
        </div>
    )
}