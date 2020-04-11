//Change the width of the progress bar
let $bar = document.querySelector( `.progress`)

let $h1 = document.querySelector(`.heading`)
let $heading = document.querySelector(`#heading`)

window.addEventListener(`scroll`, event => {
   //Window height 
    let windowH = window.innerHeight
    //Document height
    let documentH = document.documentElement.scrollHeight
    // how much HAS been scrolled
    let amtScrolled = window.scrollY
    //how much CAN be scrolled
    let ttlAvailable = documentH - windowH
    // what percentage of scrollable is scrolled
    let percent = amtScrolled / ttlAvailable // 0.5
    //take the decimal percentage and convert to 100%
    $bar.style.width = `${percent * 100}%` //50%
    $bar.textContent = `${Math.round(percent * 100)}`


    if (percent >= 0.25) {
        $bar.style.backgroundColor = 'green'
    }
})

// window.addEventListener(`mousemove`, event => {
//     console.log(event.clientX, event.clientY)

//     document.body.innerHTML += `<div class = "dot" style = "top: $event.clientyY{}px; left`
// })


// how far is the $h1 from the top?
Let hHeight = $heading.getBoundingClientRect().height
//How tall is the $h1?
Let hFromTop = $heading.getBoundingClientRect().top

console.log(h1Top, h1Height, amtScrolled)

if (0) {
    console.log('The element is above the viewport')
    $heading.classList.remove('show')
} else if (hFromTop < windowH - hHeight) {
    console.log('The element is in view')
    $heading.classList.add('show')
} else  {
    console.log(`the element is below the viewport`)
    $heading.classList.remove(`show`)
}

//scrollIntoView

// if (amtScrolled > h1Top + h1Height) {
//     console.log(`h1 is off the top`)
//     $h1.classList.add(`fixed`)
// }

// let timesClicked = 0
// let $h1 = document.querySelector(`h1`)
// $h1.addEventListener(`click`, event => {
//     timesClicked = timesClicked + 1

//     if (timesClicked == 1) {
//         console.log(`You clicked the <h1> ${timesClicked} time`)

//     } else {
//         console.log(`You clicked the <h1> ${timesClicked} time`)

//     }

// })



