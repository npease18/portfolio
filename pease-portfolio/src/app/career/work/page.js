export default function Page() {
    return (
        <div>
            <span className="flex justify-center w-[100%] text-[32px] font-bold">Work Experience</span>
            <main className="grid grid-cols-2">
                <section className="grid grid-rows-2 p-5 mt-10">
                    <div className="pl-5 w-[100%]">
                        <img src="https://www.hardwarestore.com/media/magestore/storepickup/images/store/gallery/s/t/Store_124_Newport_ME_112016.jpg" className="w-[50%] relative left-[25%]"/><br/>
                    </div>
                    <div className="text-center text-[30px] font-bold">
                        Aubuchon Hardware (Newport Maine)
                        <div className="text-center text-[18px] font-normal bg-slate-900 m-5 rounded-lg p-2">
                            At Aubuchon Hardware in Newport Maine I gained many valuable skills 
                        </div>
                    </div>
                </section>
                <section className="grid grid-rows-2 p-5 mt-10">
                    <div className="pl-5 w-[100%]">
                        <img src="/images/bangorAASF.jpg" className="w-[50%] relative left-[25%]"/><br/>
                    </div>
                    <div className="text-center text-[30px] font-bold">
                        Maine Army National Guard (Bangor Maine)<br/>
                        126th MEDEVAC
                        <div className="text-center text-[18px] font-normal bg-slate-900 m-5 rounded-lg p-2">
                            Test
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}