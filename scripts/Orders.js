import { getOrders, getColors, getInteriors, getTech, getWheels } from "./database.js";

const buildOrderListItem = (customOrder) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTech()
    const wheels = getWheels()

    const foundColor = colors.find(
        (color) => {
            return color.id === customOrder.colorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === customOrder.interiorId
        }
    )
    const foundTech = technologies.find(
        (technology) => {
            return technology.id === customOrder.technologyId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === customOrder.wheelId
        }
    )
    const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li> Order #${customOrder.id} costs ${costString}</li>`

}


export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}