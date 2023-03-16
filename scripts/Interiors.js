import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
            window.alert(`User chose ${changeEvent.target.value}`)
            // console.log(interior)  // "1" or "2"
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"
    
   html += '<select id="interior">'
    html += `<option value="0">Please select an interior</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.interior}</option>`
    }
    html += "</select>"
    return html
}