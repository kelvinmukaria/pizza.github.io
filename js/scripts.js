function getSize() {
    var size = document.getElementById("pizzaSize").value;
    return parseInt(size);
}
function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
}
function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
}
function getQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
}

/* function to calculate the total amount */
function totalAmount() {
    var totals = (getSize() + getCrust() + getTopping()) * getQuantity();
    alert("You have Ordered " + getQuantity("")  +  " pizza,"  +  ""  +  " amounting to ksh. "  +  (totals)  +  ""  +  " Thanks for your order welcome again.");
    prompt("enter your location")
    alert("You order will be delivered shortly.Delivery fee is 100/=");
}