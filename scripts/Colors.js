import { getColors, setColor } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            setColor(parseInt(changeEvent.target.value))
            window.alert(`User chose ${changeEvent.target.name}`)
            // console.log(color)  // "1" or "2"
        }
    }
)

export const Colors = () => {
    let html = "<h2>Colors</h2>" 
    
   html += '<select id="color">'
   html +=  `<option value="0">Please select a color</option>`

    for (const color of colors) {
        html += 
        
        `<option value="${color.id}">${color.color}</option>`
        
    }
    html += "</select>"
    return html
}