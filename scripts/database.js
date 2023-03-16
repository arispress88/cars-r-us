const database = {
    colors: [
        {id: 1, color: "Silver", price: 150},
        {id: 2, color: "Midnight Blue", price: 250},
        {id: 3, color: "Firebrick Red", price: 320},
        {id: 4, color: "Spring Green", price: 400},
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 100},
        {id: 2, interior: "Charcoal Fabric", price: 150},
        {id: 3, interior: "White Leather", price: 400},
        {id: 4, interior: "Black Leather", price: 310},
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 300},
        {id: 2, package: "Navigation Package", price: 400},
        {id: 3, package: "Visibility Package", price: 450},
        {id: 4, package: "Ultra Package", price: 550},
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial",  price: 150},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 200},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 250},
        {id: 4, wheel: "18-inch Spoke Black", price: 280},
    ],

    customOrders: [
        {
        id: 1,
        colorId: 2,
        interiorId: 4,
        technologyId: 1,
        wheelId: 2,
        timestamp: 1614659931693
        }
    ],

    orderBuilder: {}
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTech = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
    console.log(database.orderBuilder)
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    console.log(database.orderBuilder)
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
    console.log(database.orderBuilder)
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
    console.log(database.orderBuilder)
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id +1

    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}