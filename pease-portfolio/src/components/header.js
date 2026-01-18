"use client"
import { Planes } from '@/app/personal/plane-spotting/page'

function Header() {
  var headerImages = Planes.filter((plane) => plane.headerReady == true)
  var image = headerImages[Math.floor(Math.random() * (headerImages.length))]
  return (
    <div className="relative left-[-1%] top-[15px] w-[100%] h-[400px] mr-[1%] mb-5 pt-5 flex justify-center">
        <div className='absolute inset-0 bg-slate-900 w-[98%] ml-[2%] mr-[2%] h-[400px] brightness-[75%] flex items-center z-10'>
            <img className="w-full h-[400px] object-cover rounded-lg" src={image.src}/>
        </div>

        <div className="absolute inset-0 shadow-lg w-[98%] ml-[2%] mr-[2%] rounded-lg h-[400px] flex z-20">
            <div className="self-end pb-5 w-full">
                <div className="pl-5 self-end text-[50px] text-white">Nicholas Pease</div>
                <div className="pl-5 self-end text-[15px] text-white">My portfolio and project place.</div>
            </div>
            <div className='place-self-end w-fit mr-5 mb-5'>
                <a href="/personal/plane-spotting" className='max-md:hidden text-nowrap text-white hover:text-gray-300 transition-colors'>{image.manufacturer} {image.model} [{image.date}]</a>
            </div>
        </div>
    </div>
  );
}

export function FallbackHeader() {
  return (
    <div className='relative left-[-1%] top-[15px] w-[100%] h-[400px] mr-[1%] mb-5 pt-5 flex justify-center'>
        <div className='absolute inset-0 bg-slate-900 w-[98%] ml-[2%] mr-[2%] h-[400px] brightness-[75%] flex items-center rounded-lg z-10'>
        </div>
        <div className="absolute inset-0 shadow-lg w-[98%] ml-[2%] mr-[2%] rounded-lg h-[400px] flex z-20">
            <div className="self-end pb-5 w-full">
            <div className="pl-5 self-end text-[50px] text-white">Nicholas Pease</div>
            <div className="pl-5 self-end text-[15px] text-white">My portfolio and project place.</div>
            </div>
        </div>
    </div>
  );
}

export default Header;