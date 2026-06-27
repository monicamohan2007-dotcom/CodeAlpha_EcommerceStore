let products = [

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Mobile",
price:20000
},

{
id:3,
name:"Headphone",
price:2000
}

];


let container = document.getElementById("products");


products.forEach(product => {

container.innerHTML += `

<div class="card">

<h2>${product.name}</h2>

<p>Price: ₹${product.price}</p>

<button onclick="addCart(${product.id})">
Add Cart
</button>

</div>

`;

});


function addCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];


let product = products.find(
p => p.id == id
);


cart.push(product);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Added to Cart");

}
