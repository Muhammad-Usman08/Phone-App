
// Objects of phones
const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        src: 'assest/Samsung-Galaxy-S20.png'
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 10000,
        src: 'assest/xiamo note 10.png'
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 25000,
        src: 'assest/infinix z10.png'
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 30000,
        src: 'assest/tecno spark10.png'

    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 85000,
        src: 'assest/iphone 14.png'

    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 55000,
        src: 'assest/oppo f11.png'

    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 45000,
        src: 'assest/vivo y20.png'

    },
    {
        brand: 'Redmi',
        model: '13C',
        ram: 6,
        rom: 128,
        camera: '50 megapixel',
        price: 32000,
        src: 'assest/redmi 13C.png'

    },

]

//Getting Elements
const div = document.querySelector("#div");

//Cart Items
let cartItem = [];


phones.map((item, index) => {
    div.innerHTML += `<div class=" rounded border px-10 py-5 text-white text-center mt-20">
   <img src="${item.src}" alt="phone" class="w-72 mx-auto">
   <h3 class="text-xl">Brand: ${item.brand}</h3>
   <h3>Model: ${item.model}</h3>
   <h3>Price: ${item.price}</h3>
   <h3>Camera: ${item.camera}</h3>
   <button onclick = "addToCart(${index})" class="rounded bg-[#38bdf8] px-5 py-2 mt-3"><i class="fa-solid fa-cart-shopping"></i> &nbsp; Add to Cart</button>
</div>`
})


let addToCart = (index) => {

    if (cartItem.indexOf(phones[index]) !== -1) {
        let indexNumber = cartItem.indexOf(phones[index]);
        cartItem[indexNumber].quantity += 1;
        console.log(cartItem);
    }
    else {
        phones[index].quantity = 1
        cartItem.push(phones[index]);
        console.log(cartItem);
    }

}


// checkout function
let checkOut = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItem))
    window.location = 'checkout.html'
}
