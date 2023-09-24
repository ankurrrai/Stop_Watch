// objects variables Time count updation
var hours=document.getElementById("hour");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var miliSeconds=document.getElementById("mili-seconds");


// Button Variables 
var startbtn=document.getElementById("start");
var stopbtn=document.getElementById("stop");
var resetbtn=document.getElementById("reset");

// Used variable for iteration
let hour=1;
let min=1;
let sec=1;
let miliSec=0;
let watchIntervalId=0;


function startStopWatchInterval() {
    watchIntervalId=setInterval(() => {                                         
        if (miliSec==1000) {
            miliSec=0
            miliSeconds.innerHTML=miliSec.toString().padStart(3,'0')             //.padStart is the inbuilt function

            if (sec==60) {
                sec=1;
                seconds.innerHTML="00";
                
                if (min==60) {
                    min=1;
                    minutes.innerHTML="00";

                    hours.innerHTML=hour.toString().padStart(2,'0');
                    hour++;
                } else {
                    minutes.innerHTML=min.toString().padStart(2,'0')
                    min++
                }

            }else {
                seconds.innerHTML=sec.toString().padStart(2,'0');
                sec++;
            }
            
            clearInterval(watchIntervalId);                                         //calling to reset the setinterval
            startStopWatchInterval();                                               //calling startStopWatchInterval function

        } else {
            miliSeconds.innerHTML=miliSec.toString().padStart(3,'0');
            miliSec+=1;
        }
    }, 1);
};


function startStopWatch() {
    startbtn.disabled=true;
    stopbtn.disabled=false;
    resetbtn.disabled=false;
    startStopWatchInterval();                                //calling startStopWatchInterval function
}

function stoptheStopWatch() {
    clearInterval(watchIntervalId);                         //calling to reset the setinterval
    stopbtn.disabled=true;
    startbtn.disabled=false;
    resetbtn.disabled=false;

};


function resetStopWatch() {
    clearInterval(watchIntervalId);                             //calling to reset the setinterval
    startbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=true;

    // reintialize the variable
    hour=1;
    min=1;
    sec=1;
    miliSec=0;
    watchIntervalId=0;

    // reset to zero
    hours.innerHTML='00';
    minutes.innerHTML='00';
    seconds.innerHTML='00';
    miliSeconds.innerHTML='000';
}

function init() {
    // Disabled stop button and reset button
    startbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=true;
}

function main() {
    init();                                                             // calling init function
    startbtn.addEventListener("click", startStopWatch)                  // calling startStopWatch function
    stopbtn.addEventListener("click", stoptheStopWatch)                 // calling stoptheStopWatch function
    resetbtn.addEventListener("click", resetStopWatch)                  // calling resetStopWatch function
}

main();