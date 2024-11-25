import { CodeBlock, dracula } from 'react-code-blocks';
import {useState} from 'react'

export function SourceCodeExplorer({data}) {
    const [tab, setTab] = useState('Asteroids CE')
    
    var TABS = []
    for (const file in data) {
        TABS.push(<TAB name={file} click={(a) => {setTab(a)}}/>)
    }
    return (
        <div className="bg-slate-900 mt-5 rounded-lg">
            <nav className="pl-5">
                {TABS}
            </nav>
            <viewer></viewer>
        </div>
    )
}

function TAB({name, click}) {
    return (
        <div className="inline-block bg-slate-900 text-white p-2 font-bold cursor-pointer hover:bg-slate-600 w-fit mr-5" onClick={() => {click(name)}}>
            {name}
        </div>
    )
}