import { carsRUs } from "./carsRus.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State has changed. Regenerating HTML...")
    renderAllHTML()
})