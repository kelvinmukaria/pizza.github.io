// Business logic

// form submission function
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
  if (totals !== "") {
    alert("Please fill out the order.");
  } else {
    alert(
      "You have Ordered " +
        getQuantity("") +
        " pizza," +
        "" +
        " amounting to ksh. " +
        totals +
        "" +
        " Thanks for your order welcome again."
    );
  }
  // variable to get the location of the customer
  var location = prompt("enter your location");
  if (location === "") {
    alert("You order will be delivered shortly.Delivery fee is 100/=");
  } else {
    alert("Your order is being processed please pass by to pick your order.");
  }
}
