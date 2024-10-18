"use client"
import { SourceCodeExplorer } from '../../../../components/sourcecodeviewer.js';

const PROGRAMS = {
    'asteroids': {
        title: 'Asteroids CE',
        description: 'This game places you as the operator of a space craft as you attempt to shoot down ALL of the asteroids hurtling towards you. If you miss one, you lose a point. If you hit one, you gain a point.',
        image: 'https://www.cemetech.net/media/archives/screenshots/2020/04/1691_legacy-0-003596_6Birw4C.gif',
        link: 'https://www.cemetech.net/downloads/files/1691/x1691',
        language: 'TI-BASIC (CE Edition)',
        publishDate: "November 28th, 2017"
    },
    'asteroidsICE': {
        title: 'Asteroids ICE',
        description: 'This game places you as the pilot of a spacecraft tasked with the task of destroying incomming asteroids. For every asteroid that you hit you gain a point, for every asteroid that you miss, you lose a point.',
        image: 'https://www.cemetech.net/media/archives/screenshots/2020/04/1692_legacy-0-003606_SEBbkNC.gif',
        link: 'https://www.cemetech.net/downloads/files/1692/x1692',
        language: 'TI 84 ICE',
        publishDate: "December 4th, 2017"
    },
    'taxfind2017': {
        title: 'Taxfind 2017 CE',
        description: 'This program calculates a user-selectable applied tax on the input amount.',
        image: 'https://www.cemetech.net/media/archives/screenshots/2020/04/1701_legacy-0-003605_F5fGRs7.gif',
        link: 'https://www.cemetech.net/downloads/files/1701/x1701',
        language: 'TI-BASIC (CE Edition)',
        publishDate: "December 5th, 2017"
    },
    'stocksim': {
        title: 'StockSim',
        description: 'StockSim is a simulation game based on the American stock market. Players can buy and sell stocks while monitoring several charts. Players have to determine the best times to sell, whilst monitoring best times to buy other stocks. Players can select from EASY and HARD modes and can save/continue their games.',
        image: 'https://www.cemetech.net/media/archives/screenshots/2020/04/1759_legacy-0-003810_51kJ9KB.gif',
        link: 'https://www.cemetech.net/downloads/files/1759/x1759',
        language: 'TI 84 ICE',
        publishDate: "May 5th, 2018"
    },
    'fakecalc': {
        title: 'Fake Calc',
        description: 'This is a program that makes the calculator display incorrect results for calculations inputted. Use this to prank your friends. I do not take responsibility for those who abuse this and mess up others tests.',
        image: 'https://www.cemetech.net/media/archives/screenshots/2020/04/1833_legacy-0-004048_LB5ngyI.gif',
        link: 'https://www.cemetech.net/downloads/files/1833/x1833',
        language: 'TI-BASIC (83+ Edition)',
        publishDate: "January 9th, 2019"
    }
}

const calcFiles = {
    "Asteroids CE": {
        title: 'Asteroids CE',
        files: ['ASTROID3','ASHINST']
    },
    "Asteroids ICE": {
        title: 'Asteroids ICE',
        files: ['ASTEROID','ASTINST']
    },
}

const NOS = {
        title: 'NOS (Nick Operating System)',
        description: "NOS (or Nick's Operational Shell) will be a simple shell with a GUI similar to the Kindle Fire Home Screen. To scroll through the programs, you use the left and right keys. Possible features would be pinning programs to the beginning of the carousel and using the A-Z keys to navigate similarly to Cesium.",
        image: '/images/NOS.png',
        link: 'https://github.com/LAX18/NOS',
        language: 'TI 84 ICE',
        publishDate: "Unpublished"
}


function Program({program}) {
    return (
        <div className='bg-slate-900 rounded-xl p-5 text-center'>
            <div className="flex justify-center items-center">
                <img className="w-[320px] h-[240px]" src={program.image}/>
            </div><br/>
            <a href={program.link} target="_blank" className='font-bold text-center text-[26px]'>{program.title}</a>
            <div>
                {program.description}
            </div>
            <div className='mt-5'>
                Language: {program.language}<br/>
                Publish Date: {program.publishDate}
            </div>
        </div>
    )
}

function Programs() {
    var arr = []
    for (const program in PROGRAMS) {
        arr.push(<Program program={PROGRAMS[program]}/>)
    }
    return arr
}



export default function Home() {
    return (
    <div className="pl-6 pr-6">
        <title>Calculator Programming | nicholaspease.com</title>
        <div className="grid grid-cols-1">
            <section>
                <div>
                    <span className='text-[36px] font-bold'>Calculator Programming</span><br/>
                    Calculator programming is where I got my initial start in software development and taught me the fundamentals of programming. I started with a TI-83+ calculator that I purchased from a thrift store. Below you can find many of the software programs I have written for the TI series of calculators. While I was developing programs for the TI series of calculators starting around 2014, I did not publish them online until around 2018, where I found the online community Cemetech. Below are some of the published products I produced.
                </div>
            </section>
           <section className='grid mt-5 gap-x-5 gap-y-5 lg:grid-cols-3 grid-flow-row'>
                <Programs/>
           </section>
           <section className="mt-5">
           Below are some unfinished projects that I have worked on. These were never published but may have had some beta programs released.
           <div className="grid mt-5 lg:grid-cols-3">
               <Program program={NOS}/>
           </div>
           </section>
           {/*<section className='pl-5 pr-5 mt-5'>
               <span className='text-[36px] font-bold'>Source Code</span><br/>
               Please use the below source code viewer to examine the source code of the programs above. The source code is written in raw file formats for transfer to the calculators, and requires a premade viewer here.
               <SourceCodeExplorer data={calcFiles}/>
           </section>*/}
        </div>
    </div>)
}
