let products = {
    data: [
        {
           name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
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
