"use client"
import moment from "moment"
import { Terminal } from "./terminal"
import { useEffect, useState } from "react"

export default function TerminalWrapper() {
    const [buildTime, setBuildTime] = useState(null)
    
    useEffect(() => {
        // Generate build time on client mount to get current server time
        setBuildTime(moment().toISOString())
    }, [])
    
    // Use a fallback time if buildTime is not set yet
    const currentBuildTime = buildTime || moment().toISOString()
    
    return <Terminal buildTime={currentBuildTime} />
}