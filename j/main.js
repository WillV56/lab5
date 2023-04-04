import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {
    
    myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 7, callback: func2 }
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
}

function playVideo(clip)
{
    clip.play();
}

function pauseVideo(clip)
{
    clip.pause();
}

function muteVideo(clip)
{
    clip.muted = true;
}

function unmuteVideo(clip) 
{
    clip.muted = false;
}

function playRate(clip, rate)
{
    clip.playbackRate = rate;
}

function selectTrack(e, clip, id)
{
    if(clip.textTracks.length > 0) {
        for (let track of clip.textTracks) {
            track.mode = 'hidden';
            track.selected = false;
        }
    }

    const theTrack = clip.textTracks.getTrackById(id);
    console.log(theTrack);
    theTrack.selected = true;
    theTrack.mode = 'showing'
}

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid purple";
}

function func2() {
    
}