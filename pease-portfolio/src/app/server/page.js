import "./style.css"
import Script from 'next/script'

export default function Home() {
    return (
        <div className="ml-6 mr-6">
            <div className="">
                <div className="max-md:hidden md:absolute right-[30px]">
                    <div style={{marginRight: "15px"}} data-netdata="system.cpu" data-max="0" data-chart-library="easypiechart" data-width="200" data-height="200" data-after="-300" data-points="300" data-title="Total CPU Usage"/>
                    <div style={{marginRight: "15px"}} data-netdata="mem.available" data-max="0" data-chart-library="easypiechart" data-width="200" data-height="200" data-after="-300" data-points="300" data-title="RAM Free"/>
                    <div style={{marginRight: "15px"}} data-netdata="system.net" data-max="0" data-chart-library="easypiechart" data-width="200" data-height="200" data-after="-300" data-points="300" data-title="Outbound Traffic" data-dimensions="sent"/>
                    <div data-netdata="system.net" data-chart-library="easypiechart" data-width="200" data-height="200" data-after="-300" data-points="300" data-title="Inbound Traffic" data-dimensions="received"/>
                </div>
                <div className="max-md:pb-5 md:h-[200px] md:w-[40%]">
                    This is an overview of my primary operating server. This server is a Dell R720 with 192GB of RAM, 8x 4TB HDDs, 1 x 1TB HDD, 32 x Intel(R) Xeon(R) CPU E5-2670. It currently runs Proxmox and various containerized services, including this portfolio. Below is a live update of various statistics of that server.
                </div>
            </div>
            <div>
                <div className="font-bold text-[24px]">CPU</div>
                <div data-netdata="system.cpu" data-chart-library="dygraph" data-width="100%" data-height="200" data-legend="no" data-title="" data-dygraph-drawgrid="false"/>
            </div>
            <div>
                <div className="font-bold text-[24px]">RAM (Usage)</div>
                <div data-netdata="mem.committed" data-chart-library="dygraph" data-width="100%" data-height="200" data-after="-600" data-legend="no" data-title="" data-dygraph-drawgrid="false"/>
            </div>
            <Script id="something">
                {`var netdataNoBootstrap = true;`}
            </Script>
            <Script src="https://netdata.nicholaspease.com/dashboard.js"/>
        </div>
    )
}