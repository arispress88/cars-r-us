import { Colors } from "./Colors.js"
import { Interiors } from "./Interiors.js"
import { Tech } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-text">
      <h1>Cars R Us</h1>
    </span>
  </div>
</nav>

<div class="row">
<div class="col-md-3">
<div class="card">
  <div class="card-body">
    <h5 class="card-title"></h5>
        ${Colors()}
    </div>
    </div>
    </div>
    <div class="col-md-3">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title"></h5>
        ${Interiors()}
    </div>
    </div>
    </div>

    <div class="col-md-3">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title"></h5>
        ${Tech()}
</div>
</div>
</div>

<div class="col-md-3">
<div class="card">
    <div class="card-body">
      <h5 class="card-title"></h5>
        ${Wheels()}
</div>
</div>
</div>
</div>
<article>
<button id="orderButton">Place Car Order</button>

</article>

<article class="customOrders">
<h2>Car Orders</h2>
${Orders()}
</article>`


}