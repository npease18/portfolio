import { useState } from "react";
import moment from "moment"
import { TelnetDisplay } from "./telnet";

const commands = {
    "uname -a": "Hello! My name is Nicholas Pease and I am currently a junior at the University of Maine pursuing a bachelors degree in Computer Science with a minor in Military Science. This website is a collection of both project / homework completed as required by my studies and as a showcase of some of the personal projects I have worked on. I will work to keep this up to date to the best of my ability. ",
    "poweroff": "Nice try...",
    "shutdown": "Nice try...",
    "sudo poweroff": "Nice try...",
    "sudo shutdown": "Nice try...",
    "telnet": <TelnetDisplay/>,
    "telnet towel.blinkenlights.nl": <TelnetDisplay/>,
    "compgen -c": `uname -a \t\ttimedatectl \t\ttelnet`
}

function Command({command, result}) {
    return (
        <div>
            <span className="text-[green]">about@npease</span>:<span className="text-[blue]">~</span>$ {command}<br/>
            <div>
            {result? result: commands[command]}<br/>
            </div>
        </div>
    )
}

function isValidKey(event) {
    const charCodes = [
        'KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ',
        'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT',
        'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ',
        'KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ',
        'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT',
        'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ',
        'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
        'Space'
      ];
      if (charCodes.includes(event.code)) {
        return true;
      } else {
        return false;
      }
}

export function Terminal() {
    const [text, setText] = useState("")
    const [history, setHistory] = useState([<Command command="uname -a" key={0}/>,<Command command={'timedatectl'} result={`This website was last updated on ${moment().format("dddd, MMMM Do YYYY")}.`} key={1}/>,<Command command="compgen -c" key={2}/>])

    const handleKeyDown = event => {
        event.preventDefault()
        if (event.code == "Backspace") {setText(text.slice(0, -1))}
        else if (event.code == "Enter") {
            if (text == "clear") {
                setHistory([])
            } else if (text == "timedatectl") {
                setHistory([...history, <Command command={text} result={`This website was last updated on ${moment().format("dddd, MMMM Do YYYY")}.`} key={history.length? history[history.length-1].props.key+1: 0}/>])
            } else if (commands[text] != undefined) {
                setHistory([...history, <Command command={text} key={history.length? history[history.length-1].props.key+1: 0}/>])
            } else {
                setHistory([...history, <Command command={text} result={`Command '${text}' not found.`} key={history.length? history[history.length-1].props.key+1: 0}/>])
            }
            setText("")
        }
        else if (event.code == "ArrowUp") {history.length>0? setText(history[history.length-1].props.command): ""}
        else if (event.code == "ArrowDown") {setText("")}
        else if (event.code == "Minus") {setText(text + "-")}
        else if (isValidKey(event)) {setText(text + event.key)}
    };

    const mouseEnter = event => {
        document.getElementById("terminal-focus").focus()
    }

    const mouseLeave = event => {
        window.focus()
    }
    return (
        <div className="max-md:h-fit max-md:pl-5 max-md:pr-5 w-[100%] h-[420px] cursor-pointer outline-0" id="terminal-focus" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} tabIndex={0} onKeyDown={handleKeyDown}>
            <div className="max-md:max-h-fit max-h-[420px] w-[100%] overflow-hidden max-lg:ml-5 max-lg:mr-5 flex flex-col-reverse p-1">
                <pre className="bash text-wrap">
                    {history}
                    <div>
                        <span className="text-[green]">about@npease</span>:<span className="text-[blue]">~</span>$ {text}<span className="animate-blink"> </span>
                    </div>
                </pre>
            </div>
        </div>
        
    )
}