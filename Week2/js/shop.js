var products = [
    "Brooklyn T-Shirt White",
    "Brooklyn T-Shirt Black",
    "Apple Watch",
    "Android Phone"
];
var prices = [10, 10, 199, 159];
var productText = "";
var productElement = document.getElementById("product-list");

productText += "<li class='list-group-item'><span class='badge'>$" + prices[0] + "</span>"
    + products[0] + "</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[1] + "</span>"
    + products[1] + "</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[2] + "</span>"
    + products[2] + "</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[3] + "</span>"
    + products[3] + "</li>";

productElement.innerHTML = productText;

total= prices[0] + prices[1] + prices[2] + prices[3];
totalPrice= total * 0.75;

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;

var myDate = new Date();
var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';


    document.getElementById("hello").innerHTML =
        "" + greet + ",";

var customerName = "Vana";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var priceElement = document.getElementById("customer-price");
priceElement.textContent = totalPrice;