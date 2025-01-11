import easing from "@mobilabs/easing"
import { eles } from "./elements.js"


let runScript = document.getElementById(eles.runScript)
let objJson = document.getElementById(eles.objJson)
let objScript = document.getElementById(eles.objScript)
let objResult = document.getElementById(eles.objResult)



var formatNumber = (v) => { return parseFloat(v.toFixed(2)); }
runScript.addEventListener("click", () => {
    let scriptTxt = objScript.value || ""
    let json = {}
    try {
        json = JSON.parse(objJson.value)
    } catch (e) {
        console.log(e)
    }
    let keysLen = Object.keys(json).length

    let func = new Function("json", "easing", "formatNumber", "keysLen", scriptTxt)

    let result = func(json, easing, formatNumber, keysLen)

    if (result) {
        objResult.value = JSON.stringify(result, null, 2)
    }
    console.log(result)
})