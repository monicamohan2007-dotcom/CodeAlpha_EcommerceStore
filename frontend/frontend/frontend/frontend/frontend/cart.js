let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartBox = document.getElementById("cart");

let total = 0;


cart.forEach(item => {

cartBox.innerHTML += `

<div class="card">

<h2>${item.name}</h2>

<p>Price: ₹${item.price}</p>

</div>

`;

total += item.price;

});


document.getElementById("total").innerHTML =
"Total: ₹" + total;



function order(){

alert("Order placed successfully!");

localStorage.removeItem("cart");

}
