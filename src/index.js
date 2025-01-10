
import { image } from "./img"

import { eles } from "./elements.js"
import "./functionNum"
import "./functionObj"




let funcSee = document.getElementById(eles.funcSee)
let img = document.createElement("img")
funcSee.addEventListener("click", () => {
    // let img = document.createElement("img")
    img.src = image
    if (img.parentNode) {
        img.parentNode.removeChild(img)
    } else {
        document.body.appendChild(img)
    }
    img.setAttribute("class", "reviewImage")
})


let numberFun = document.getElementById(eles.numberFun)
let numberObj = document.getElementById(eles.numberObj)

let function1 = document.getElementById(eles.function1)
let function2 = document.getElementById(eles.function2)
numberFun.addEventListener("click", () => {
    function1.style.display = "block"
    function2.style.display = "none"
})
numberObj.addEventListener("click", () => {
    function1.style.display = "none"
    function2.style.display = "block"
})

function1.style.display = "block"
function2.style.display = "none"