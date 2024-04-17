
// Recieving Items from LocalStorage
let items = localStorage.getItem('cartItems');
let data = JSON.parse(items);
console.log(data)

//Getting Elements
const div = document.querySelector("#div");
const total = document.querySelector(".total");
const shopMore = document.querySelector("#shopMore");

function renderItem() {
    div.innerHTML = "";
    let totalAmount = 0;
    data.map((item, index) => {
        totalAmount += item.price * item.quantity
        div.innerHTML += `<div class=" rounded border px-10 py-5 text-white text-center mt-20">
        <img src="${item.src}" alt="phone" class="w-72 mx-auto">
        <h3 class="text-xl">Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <h3>Camera: ${item.camera}</h3>
        <button class="bg-[#38bdf8] px-5 py-2 rounded mt-3" onclick="decrease(${index})">-</button>
        <span class="text-2xl" id="quantity">${item.quantity}</span>
        <button class="bg-[#38bdf8] px-5 py-2 rounded mt-3" onclick="increase(${index})" >+</button>
     </div>`

    })
    total.innerHTML = totalAmount
}

renderItem()

let quantity = document.querySelector("#quantity")

let decrease = (index) => {
    if (data[index].quantity == 0) {

    }
    else {
        data[index].quantity -= 1;
    }
    renderItem()
}

let increase = (index) => {
    data[index].quantity += 1;
    renderItem()
}



shopMore.addEventListener('click', () => {
    window.location = 'index.html'
})




