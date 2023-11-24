let products = {
    data: [
        {
           name: "BAILEY LAB GROWN DIAMOND RING",
            price: "780.000đ - 1.470.000đ",
            image: "aces1.jpg"
        },

        {
            name: "DIAMOND SOLITAIRE RING XXV",
            price: "780.000đ - 1.470.000đ",
            image: "aces2.jpg"
        },

        {
            name: "INGLE DIAMOND ENGAGEMENT RING",
            price: "780.000đ - 1.470.000đ",
            image: "aces3.jpg"
        },

        {
            name: "HUG RING UNISEX COVER POLISHED SILVER",
            price: "780.000đ - 1.470.000đ",
            image: "aces4.jpg"
        },

        {
            name: "INFINITY BRACELET INSTERLING SILVER",
            price: "780.000đ - 1.470.000đ",
            image: "aces5'.jpg"
        },

        {
            name: "PANDORA MOMENTS STUDDED CHAIN",
            price: "780.000đ - 1.670.000đ",
            image: "aces6.jpg"
        },

        {
            name: "MELORRA SUIT INCHARGE DIAMOND BRACELET",
            price: "780.000đ - 1.670.000đ",
            image: "aces7.jpg"
        },

        {
            name: "STERLING SILVER BLUE Cz ADJUSTABLE BRACELET",
            price: "780.000đ - 1.670.000đ",
            image: "aces8.jpg"
        },

        {
            name: "GOLD PLATED BUBBLE DROP STUD EARRINGS",
            price: "780.000đ - 1.670.000đ",
            image: "aces9.jpg"
        },

        {
            name: "QUEEN OF PEARL DIOR EARRINGS",
            price: "780.000đ - 1.670.000đ",
            image: "aces10.jpg"
        },

        {
            name: "TIERRA DIAMOND EARRINGS",
            price: "780.000đ - 1.670.000đ",
            image: "aces11.webp"
        },

        {
            name: "KIMETSU NO YAIBA EARRINGS",
            price: "780.000đ - 1.670.000đ",
            image: "aces12.jpg"
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
