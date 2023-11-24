let products = {
    data: [
        {
           name: "NIKE SNEAKER/ WHITE BLUE",
            price: " 1.470.000đ",
            image: "shoes1.jpg"
        },

        {
            name: "NIKE SNEAKER/ WHITE BLACK",
            price: " 1.354.000đ",
            image: "shoes2.jpg"
        },

        {
            name: "NIKE SNEAKER/ RED BLACK",
            price: " 1.430.000đ",
            image: "shoes3.webp"
        },

        {
            name: "ADIDAS SNEAKER/ BLACK WITH WHITE STRIPES",
            price: " 1.240.000đ",
            image: "shoes4.jpg"
        },

        {
            name: "ADIDAS SNEAKER/ WHITE WITH BLACK STRIPES",
            price: " 1.310.000đ",
            image: "shoes5.jpg"
        },

        {
            name: "SHONDO SNEAKER/ CREAM WHITE",
            price: " 1.670.000đ",
            image: "sneakershondoshoes.jpg"
        },

        {
            name: "NIKE HIGH HEEL/ BLACK PINK",
            price: " 1.530.000đ",
            image: "shoes7.jpg"
        },

        {
            name: "JORDAN SNIPE USA/ GREEN MIX WHITE",
            price: " 1.850.000đ",
            image: "shoes8jordansnipeusa.webp"
        },

        {
            name: "AIR JORDAN XXX VII/ DARK CORLORFUL",
            price: " 1.960.000đ",
            image: "shoes9airjodanxxxvii.jpg"
        },

        {
            name: "KAPPA SNEAKER/ LIGHT BLACK",
            price: " 1.570.000đ",
            image: "shoes10kappasneaker.jpg"
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
