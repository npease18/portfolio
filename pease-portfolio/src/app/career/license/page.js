const CERTS = [
    {
        name: "Office Specialist: Excel Associate",
        issuedBy: "Microsoft",
        date: "Oct 2024",
        img: "https://pluspng.com/img-png/excel-logo-png-img-microsoft-excel-logo-in-svg-vector-or-png-file-format-3000x2000.png",
        id: "d616eed8-2e1a-46dd-b9ae-5e09e2db916d",
        link: "https://www.credly.com/badges/d616eed8-2e1a-46dd-b9ae-5e09e2db916d/linked_in_profile"
    },
    {
        name: "5G Introductory-Level Certificate",
        issuedBy: "Qualcomm",
        date: "Aug 2024",
        img: "https://logos-world.net/wp-content/uploads/2022/11/Qualcomm-Emblem.png",
        id: "QVLQBJ4C",
    },
    {
        name: "Javascript Algorithms and Data Structures",
        issuedBy: "freeCodeCamp",
        date: "Aug 2024",
        img: "https://www.co.midland.tx.us/ImageRepository/Document?documentId=1229",
        id: "fccc17233fc-56a0-4c48-8300-7668e66ee92f",
        link: "https://www.freecodecamp.org/certification/fccc17233fc-56a0-4c48-8300-7668e66ee92f/javascript-algorithms-and-data-structures-v8"
    },
    {
        name: "Responsive Web Design",
        issuedBy: "freeCodeCamp",
        date: "Aug 2024",   
        img: "https://www.co.midland.tx.us/ImageRepository/Document?documentId=1229",
        id: "/fccc17233fc-56a0-4c48-8300-7668e66ee92f",
        link: "https://www.freecodecamp.org/certification/fccc17233fc-56a0-4c48-8300-7668e66ee92f/responsive-web-design"
    }
]

export default function Page() {
    const certs = CERTS.map((cert) => {
        return <Certification data={cert} key={cert.name}/>
    })
    return (
        <div className="p-5">
            <span className="text-[26px]"> Licenses and Certifications </span>
            <div className="grid mt-5 gap-x-5 gap-y-5 lg:grid-cols-3 grid-flow-row">
                {certs}
            </div>
        </div>
    )
}


function Certification({data}) {
    return (
        <div className="bg-slate-900 rounded-xl p-5 text-center grid grid-rows-2 grid-rows-[1fr_auto]">
            <div className="flex justify-center items-center">
               <img src={data.img} className="w-[320px]"/>
            </div>
            <div className="shrink">
                <span className="text-[26px]">{data.name}</span><br/>
                <span className="text-[14px] ">{data.issuedBy} - {data.date}</span><br/>
                {data.id && <span className="text-[14px]">ID: {data.id}<br/></span>}
                {data.link && <span className="text-[16px] mt-5"><a href={data.link} target="_blank">View Certificate</a></span>}
            </div>
        </div>
    )
}