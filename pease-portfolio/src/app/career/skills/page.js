export default async function Page() {
    var languagesData = await fetch("https://wakatime.com/share/@LAX18/1d8ca4cf-2eec-49dc-b5a3-98900456e06e.json")
    var languages = await languagesData.json()
    languages = languages.data
    return (
        <div className="p-5">
            <h1 className="text-[26px]">Skills</h1>
            <section className="mt-5">
                <h2 className="font-bold text-[26px]">Programming Languages</h2>
                <subsection>
                    My top languages are <span className="font-bold">{languages[0].name} ({languages[0].percent}%)</span>, <span className="font-bold">{languages[1].name} ({languages[1].percent}%)</span>, and <span className="font-bold">{languages[2].name} ({languages[2].percent}%)</span>. For a more comprehensive list of all programming languages I have experience with, please see below.
                    <figure className="md:w-[45vw]"><embed src="https://wakatime.com/share/@LAX18/171a76f8-babe-4433-ac6f-1fe5438a50bb.svg"></embed></figure><br/>
                    This is a somewhat incomplete number as this particular tracker <a className="underline" href="https://wakatime.com/@LAX18">WakaTime</a> has only been active and tracking my coding activity since February 16th, 2024. Some previous languages I have more experience with include <a href="https://tutorials.eeems.ca/ASMin28Days/lesson/toc.html" className="underline" target="_blank">z80 Assembly for TI calculators</a> and <a href="/career/tibasic.pdf" className="underline" target="_blank">TI-BASIC</a>.
                </subsection>
                <h2 className="font-bold text-[26px] mt-5">Frameworks</h2>
                <subsection>
                    I have the most experience in <a href="https://react.dev/" className="underline" target="_blank">React</a> and <a href="https://nextjs.org/" className="underline" target="_blank">NextJs</a> for Javascript Projects (Specifically my <a href="/projects/ChatMaps"className="underline" target="_blank">ChatMaps</a> and <a href="/projects/Personal%20Portfolio"className="underline" target="_blank">Portfolio</a> projects). I have brief experience (but not projects in) <a className="underline" target="_blank" href="https://ionicframework.com/">Ionic</a> and <a href="https://reactnative.dev/" target="_blank" className="underline">React Native</a>.
                    For frameworkless projects, I have experience building web interfaces from the ground up without any framework to rely on in my <a href="/projects/custom/aa1" target="_blank" className="underline">Aviation Assistant V1</a> and <a href="/projects/custom/aa2" target="_blank" className="underline">Aviation Assistant V2</a> projects.
                </subsection>
            </section>
        </div>
    )
}