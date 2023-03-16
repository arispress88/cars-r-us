import { getTech, setTech } from "./database.js";

const technologies = getTech()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(changeEvent.target.value))
            window.alert(`User chose ${changeEvent.target.value}`)
            // console.log(technology)  // "1" or "2"
        }
    }
)

export const Tech = () => {
    let html = "<h2>Technologies</h2>" 
    
   html += '<select id="tech">'
    html += `<option value="0">Please select a Package</option>`

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.package}</option>`
    }
    html += "</select>"
    return html
}