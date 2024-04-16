
// Recieving Items from LocalStorage
let items = localStorage.getItem('cartItems');
let data = JSON.parse(items);
console.log(data)

//Getting Elements
const div = document.querySelector("#div");

data.map((item , index)=>{
    div.innerHTML += `<div class=" rounded border px-10 py-5 text-white text-center mt-20">
    <img src="${item.src}" alt="phone" class="w-72 mx-auto">
    <h3 class="text-xl">Brand: ${item.brand}</h3>
    <h3>Model: ${item.model}</h3>
    <h3>Price: ${item.price}</h3>
    <h3>Camera: ${item.camera}</h3>
 </div>`
})
