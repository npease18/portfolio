"use client"
import { Planes } from '@/app/personal/plane-spotting/page'

function Header() {
  var headerImages = Planes.filter((plane) => plane.headerReady == true)
  var image = headerImages[Math.floor(Math.random() * (headerImages.length))]
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

export function FallbackHeader() {
  return (
    <div className='w-[96%] h-[400px] ml-[2%] mr-[2%] mb-5 pt-5 w-1/1 flex justify-center'>
        <div className='bg-slate-900 w-[98%] ml-[2%] mr-[2%] h-[400px] z-0 absolute brightness-[75%] flex items-center'>
           
        </div>
        <div className="shadow-lg w-[98%] ml-[2%] mr-[2%] fixed absolute rounded-lg h-[400px] flex bg-slate-900">
            <div className="self-end pb-5 w-full">
            <div className="pl-5 self-end text-[50px]">Nicholas Pease</div>
            <div className="pl-5 self-end text-[15px]">My portfolio and project place.</div>
            </div>
        </div>
    </div>
  );
}

export default Header;