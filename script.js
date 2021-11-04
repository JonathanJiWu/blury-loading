// bring in the two elements into the script
const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.background')

// loading percentage digi, starts from ZERO
let load = 0

// setInterval() repeatedly calls the function(first arug), with a set amount of time(second arug, Milliseconds)
let int =setInterval(blurring, 30)


function blurring(){
    // increase the load num by ONE
    load++;

    // stop the setInterval() if the num reaches 100, using clearInterval()
    if(load> 99){
        clearInterval(int)
    }

    // pass the values to the DOM
    // give it back to the text
    loadText.innerHTML = `${load}%`
    // fades the text out as it goes to 100
    // scale function maps a range of number to another range of number
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // give background a filter style, also scale that from 1 to 100, I want blur to start at 30px to 0px
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// found on SOF: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}