import easing from "@mobilabs/easing"
import { image } from "./img"
console.log(easing)
function initFunction() {
    let func = document.getElementById(eles.function)
    for (var i = 0; i < allFuncs.length; i++) {
        let option = document.createElement("option")
        option.value = allFuncs[i]
        option.innerText = allFuncs[i]
        func.appendChild(option)
    }
}
let allFuncs = ["linear", "swing"]
for (var i in easing) {
    if (i.indexOf("ease") !== -1) {
        allFuncs.push(i)
    }
}
let eles = {
    startValue: "startValue",
    endValue: "endValue",
    number: "number",
    function: "function",
    startBtn: "startBtn",
    result: "result",
    funcSee: "funcSee"
}


initFunction()
let startBtn = document.getElementById(eles.startBtn)
startBtn.addEventListener("click", () => {
    let startValue = document.getElementById(eles.startValue).value
    let endValue = document.getElementById(eles.endValue).value
    let number = document.getElementById(eles.number).value
    let func = document.getElementById(eles.function).value
    let result = document.getElementById(eles.result)
    // let result = easing[func](startValue, endValue, number)
    startValue = parseFloat(startValue)
    endValue = parseFloat(endValue)
    number = parseFloat(number)
    result.innerHTML = ""
    for (var i = 1; i <= number; i++) {
        let resultNum = easing[func](i / number, startValue, endValue - startValue, 1)
        let div = document.createElement("div")
        div.innerText = i + ":" + resultNum
        result.appendChild(div)
    }
})
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