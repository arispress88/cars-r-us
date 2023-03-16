import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
            window.alert(`User chose ${changeEvent.target.value}`)
            // console.log(wheel)  // "1" or "2"
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    
    html += '<select id="wheel">'
    html += `<option value="0">Please select Wheel type</option>`

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`

    }
    html += "</select>"
    return html
}