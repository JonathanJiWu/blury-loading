const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.background')

let load = 0

let int =setInterval(blurring, 30)

function blurring(){
    load++;

    if(load> 99){
        clearInterval(int)
    }

    console.log(load)

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// found on SOF: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}