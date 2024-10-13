"use client"
import Iframe from 'react-iframe'

export default function Resume() {
    return (
        <div className='p-5 h-[100%]'>
            <title>Resume | nicholaspease.com</title>
            <Iframe url="/career/Resume.pdf" styles={{height: "11in",width: "100%"}}/>
        </div>
    )
}