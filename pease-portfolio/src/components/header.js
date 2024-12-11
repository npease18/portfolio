"use client"

var headers = [{
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
    src: "/images/planes/20241207_151807.jpg",
    width: 4000,
    height: 1419,
    model: "A300-600ST",
    manufacturer: "Airbus",
    date: "12/07/2024",
    location: "KBGR",
    reg: "F-GSTC"
  },
  {
    src: "/images/planes/20230926_144016.jpg",
    width: 4000,
    height: 1868,
    model: "206",
    manufacturer: "Cessna",
    date: "09/26/2023",
    location: "KBGR",
    reg: "01970"
  },
  {
      src: "/images/planes/20230926_135151.jpg",
      width: 4000,
      height: 1868,
      model: "UH-60",
      manufacturer: "Sikorsky",
      date: "09/26/2023",
      location: "KBGR",
      reg: "6039"
  },
  {
    src: "/images/planes/20230625_175812.jpg",
    width: 1868,
    height: 1051,
    model: "A10 / F35",
    manufacturer: "Various",
    date: "06/25/2023",
    location: "KBGR",
    reg: "Various"
  },
  {
    src: "/images/planes/20230728_161709.jpg",
    width: 4000,
    height: 1514,
    model: "MV-22",
    manufacturer: "Boeing",
    date: "07/28/2023",
    location: "KBXM",
    reg: "N/A"
  },
  {
      src: "/images/planes/20230625_180016.jpg",
      width: 4000,
      height: 1868,
      model: "C-130",
      manufacturer: "Lockheed",
      date: "06/25/2023",
      location: "KBGR",
      reg: "65849"
  }]
  
  
function Header() {
    var image = headers[Math.floor(Math.random() * (headers.length))]
    return (
        <div className="w-[96%] h-[400px] ml-[2%] mr-[2%] mb-5 pt-5 w-1/1 flex justify-center">
            <div className='bg-slate-900 w-[98%] ml-[2%] mr-[2%] h-[400px] z-0 absolute brightness-[75%] flex items-center'>
                <img className="w-full h-[400px] object-cover rounded-lg" src={image.src}/>
            </div>

            <div className="shadow-lg w-[98%] ml-[2%] mr-[2%] fixed absolute rounded-lg h-[400px] flex">
                <div className="self-end pb-5 w-full">
                <div className="pl-5 self-end text-[50px]">Nicholas Pease</div>
                <div className="pl-5 self-end text-[15px]">My portfolio and project place.</div>
                </div>
                <div className='place-self-end w-fit mr-5 mb-5'>
                <a href="/personal/plane-spotting" className='max-md:hidden text-nowrap'>{image.manufacturer} {image.model} [{image.date}]</a>
                </div>
            </div>

        </div>
    );
}

export default Header;