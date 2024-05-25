"use client"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div className="grid grid-cols-1">
                <section className="flex justify-center items-center">
                    <img src="/images/aa1.png" className="max-md:w-[80%] md:w-[60%]"/>
                </section>
                <section className="flex justify-center items-center mt-5">
                    <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22137%22%20height%3D%2228%22%20role%3D%22img%22%20aria-label%3D%22VERSION%3A%202.7.2%22%3E%3Ctitle%3EVERSION%3A%202.7.2%3C%2Ftitle%3E%3Cg%20shape-rendering%3D%22crispEdges%22%3E%3Crect%20width%3D%2278.75%22%20height%3D%2228%22%20fill%3D%22%23555%22%2F%3E%3Crect%20x%3D%2278.75%22%20width%3D%2258.25%22%20height%3D%2228%22%20fill%3D%22%234c1%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23fff%22%20text-anchor%3D%22middle%22%20font-family%3D%22Verdana%2CGeneva%2CDejaVu%20Sans%2Csans-serif%22%20text-rendering%3D%22geometricPrecision%22%20font-size%3D%22100%22%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%22393.75%22%20y%3D%22175%22%20textLength%3D%22547.5%22%20fill%3D%22%23fff%22%3EVERSION%3C%2Ftext%3E%3Ctext%20transform%3D%22scale(.1)%22%20x%3D%221078.75%22%20y%3D%22175%22%20textLength%3D%22342.5%22%20fill%3D%22%23fff%22%20font-weight%3D%22bold%22%3E2.7.2%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="ml-5 mr-5"/>
                    <Link href="https://gitea.nicholaspease.com/npease/AviationAssistant" target="_blank"><img src="https://img.shields.io/badge/Open%20On%20Gitea-grey?style=for-the-badge&logo=gitea"/></Link>
                </section>
                <section className="text-center pt-3 relative max-md:w-[80%] max-md:left-[10%] md:left-[20%] md:w-[60%]">
                    The Aviation Assistant is a combination hardware / software solution to allow the user to track aircraft using the Automated Dependent Surveillance - Broadcast (ADS-B) system.
                    The device is a Raspberry Pi, coupled with a battery control board, speakers, and a USB SDR interface device. The software is a combination of a modified <Link href="https://github.com/mutability/dump1090" target="_blank" className="underline italic">dump1090</Link>
                    software, extended with additional features, in addition to a series of device based APIs to facilite control and information from the physical hardware to the software interface. The interface is presented to the user via the 7 inch touchscreen display in the form of 
                    website. 
                </section>
            </div>
        </div>
    )
}