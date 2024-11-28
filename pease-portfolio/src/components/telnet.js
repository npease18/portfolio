"use client"

import { film1 } from "./telnet_movie"

export function TelnetDisplay() {
    var film = film1.split('\n');
    var LINES_PER_FRAME = 14;
    var DELAY_NORMAL = 67;
    var DELAY_FAST = 17;
    var DELAY_VERYFAST = 1;

    var g_currentFrame = 0;
    var g_updateDelay = DELAY_NORMAL;
    var g_frameStep = 1; //advance one frame per tick
    var g_timerHandle = null;

    function validateFrame(frameNumber) {
        return ( frameNumber > 0 && frameNumber < Math.floor( film.length / LINES_PER_FRAME ) )
    }
    
    function displayFrame(frameNumber) {
        if( validateFrame(frameNumber) != true ) return;
    
        var screen = document.getElementById('screen');
    
        while(screen.firstChild) screen.removeChild( screen.firstChild );
    
        for (var line = 1; line < 14; line++) {
            var lineText = film[ (g_currentFrame * LINES_PER_FRAME) + line];
            if( !lineText || lineText.length < 1 ) lineText = ' ';
    
            var div = document.createElement('div');
            div.style.whiteSpace = 'pre';
            div.appendChild( document.createTextNode( lineText ) );
    
            screen.appendChild( div );
        }
    }
    
    function updateDisplay() {
        if(g_timerHandle)
            clearTimeout(g_timerHandle);
    
        displayFrame(g_currentFrame);
    
        if( g_frameStep != 0 ) {
            var nextFrameDelay = film[ g_currentFrame * LINES_PER_FRAME ] * g_updateDelay;
    
            var nextFrame = g_currentFrame + g_frameStep;
    
            if(validateFrame(nextFrame) == true) g_currentFrame = nextFrame;
    
            g_timerHandle = setTimeout( updateDisplay, nextFrameDelay );
        }
    }
    
    function Start() {
        g_currentFrame = 0;
        Play();
    }
    
    function Play() {
        g_frameStep = 1;
        g_updateDelay = DELAY_NORMAL;
        updateDisplay();
    }
   
    Start();

    return (
        <pre id="screen" className="">
        </pre>
    )
}