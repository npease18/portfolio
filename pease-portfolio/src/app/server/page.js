function Graph() {
    return (
        <div>
            <div data-netdata="system.processes" data-chart-library="dygraph" data-width="600" data-height="200" data-after="-600" ></div>
            <script type="text/javascript" src="https://netdata.nicholaspease.com/dashboard.js"></script>
        </div>
    )
}

export default function Home() {
    return (
        <div className="ml-6 mr-6">
            Hi
        </div>
    )
}