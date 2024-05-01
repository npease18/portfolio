import PriorVersions from "./versions.json"
import moment from 'moment';

function PriorWebsiteVersion({version}) {
    var version = PriorVersions[version]
    var start = moment(version.start)
    if (version.end != -1) {
        var end = moment(version.end)
        var current = false
    } else {
        var end = moment()
        var current = true
    }
    var duration = moment.duration(end.diff(start)).humanize()
    return (
        <div className="bg-slate-900 rounded-md p-4 mb-5">
            {current && (<span className="text-lime-500 font-bold text-[24px] mr-1">Current Version -</span>)} <a href={version.url} target="_blank" className="font-bold text-[24px]">{version.name}</a>
            <div>{start.format("MM/DD/YYYY")} - {end.format("MM/DD/YYYY")} ({duration}) </div>
            <div>
                {version.description}
            </div>
            <div className=" mt-2"><span className="font-bold">Language: </span>{version.language}</div>
            {version.sourceURL && (<div className="mt-2"><span className="font-bold">Source Code:</span> <a href={version.sourceURL} target="_blank" className="hover:underline">{version.sourceURL}</a></div>)}
        </div>
    )
}

export default function Home() {
    return (
        <div className="ml-6 mr-6">
            <section className="mb-5">
                <div className="text-[26px] font-bold">Previous Website Editions</div>
                Before the procurement of nicholaspease.com / nicholaspease.net, my portfolio website was hosted on lax18.github.io. The earliest record of my portfolio was May 21st, 2018. For security reasons, the Github repo for the portfolio is private, but this may be changed in the future.
                The earliest recorded record of the portfolio on the Wayback Machine is <a className="font-bold hover:underline" href="https://web.archive.org/web/20200908073022/https://lax18.github.io/" target="_blank">September 8th, 2020</a>, and records of the portfolio under this old address are available on the Wayback Machine spanning up until April 14th, 2021. 
                Under the new address, nicholaspease.com, the Wayback Machine has records from <a className="font-bold hover:underline" href="https://web.archive.org/web/20220416163519/https://nicholaspease.com/" target="_blank">April 16th, 2022</a> until present.
                Below are the major versions of the website in the order that they were live.
            </section>
            <PriorWebsiteVersion version="legacy"/>
            <PriorWebsiteVersion version="legacy2021"/>
            <PriorWebsiteVersion version="legacy2023"/>
            <PriorWebsiteVersion version="current"/>
        </div>
    )
}