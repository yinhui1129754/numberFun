import easing from "@mobilabs/easing"
import { eles } from "./elements.js"


let runScript = document.getElementById(eles.runScript)
let objJson = document.getElementById(eles.objJson)
let objScript = document.getElementById(eles.objScript)
let objResult = document.getElementById(eles.objResult)




runScript.addEventListener("click", () => {
    let scriptTxt = objScript.value || ""
    let json = {}
    try {
        json = JSON.parse(objJson.value)
    } catch (e) {
        console.log(e)
    }
    let func = new Function("json", "easing", scriptTxt)

    let result = func(json, easing)

    if (result) {
        objResult.value = JSON.stringify(result, null, 2)
    }
    console.log(result)
})