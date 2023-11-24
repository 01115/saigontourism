let products = {
    data: [
        {
           name: "LEVENTS® COLORFUL SHIRT/ WHITE",
            price: " 350.000đ",
            image: "ao.jpg"
        },

        {
            name: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: " 350.000đ",
            image: "ao2.jpg"
        },

        {
            name: "LEVENTS® TRAVEL TEE/ BLACK",
            price: " 350.000đ",
            image: "ao3.jpg"
        },

        {
            name: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: " 350.000đ",
            image: "ao4.jpg"
        },

        {
            name: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: " 380.000đ",
            image: "ao5.jpg"
        },

        {
            name: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
            price: " 500.000đ",
            image: "ao6.jpg"
        },

        {
            name: "LEVENTS® EARTH TEE/ PURPLE",
            price: " 420.000đ",
            image: "ao7.jpg"
        },

        {
            name: "LEVENTS® PLAY LOGO TEE/ PINK",
            price: " 450.000đ",
            image: "ao8.jpg"
        },

        {
            name: "KAMEN RIDER BLACKSUN/ BLACK",
            price: " 280.000đ",
            image: "ao9.jpg"
        },

        {
            name: "ADIDAS DARK ASIDE/ BLACK",
            price: " 400.000đ",
            image: "ao10.jpg"
        },

        {
            name: "KIMETSU NO YAIBA/ BLACK",
            price: " 500.000đ",
            image: "ao11.jpg"
        },
    ]
}
var productContainer = document.getElementById("products")
for (let i in products.data) {
    document.getElementById("products").insertAdjacentHTML("beforeend", 
    ` 
    <div class="card">
                <div class="card animate__animated animate__fadeInDown">
                    <div class="image-container">
                        <img src="${products.data[i].image}" alt="">
                       
                    </div>
                    <div class="container">
                        <h5 class="product-name">${products.data[i].name}</h5>
                        <h6><b>Price:</b>${products.data[i].price}</h6>
                        <button onclick="addToCart(${i})">Thêm vào giỏ hàng</button>
                    </div>
                </div>
              
    `)
}

var searchInput = document.getElementById("search-input")
var searchBtn = document.getElementById("search")

searchBtn.addEventListener("click", () => {
    let inputValue = searchInput.value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productName = document.querySelectorAll(".product-name")

    productName.forEach((item, index) => {
        if (item.innerHTML.includes(inputValue))
        {
            cards[index].classList.remove("hide")
        }
        else{
            cards[index].classList.add("hide")
        }
    })
})

function addToCart(index){
    const listCart = JSON.parse(localStorage.getItem("cart")) || []
    listCart.push(products.data[index])
    localStorage.setItem("cart", JSON.stringify(listCart))
    alert("Add to cart successfully")
}
