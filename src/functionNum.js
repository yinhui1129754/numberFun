import easing from "@mobilabs/easing"
import { eles } from "./elements.js"
let allFuncs = ["linear", "swing"]
function initFunction() {
    let func = document.getElementById(eles.function)
    for (var i = 0; i < allFuncs.length; i++) {
        let option = document.createElement("option")
        option.value = allFuncs[i]
        option.innerText = allFuncs[i]
        func.appendChild(option)
    }
}

for (var i in easing) {
    if (i.indexOf("ease") !== -1) {
        allFuncs.push(i)
    }
}

initFunction();

let startBtn = document.getElementById(eles.startBtn);
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

console.log(easing)
