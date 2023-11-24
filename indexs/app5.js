let products = {
    data: [
        {
           name: "KIMETSU NO YAIBA KYOJURO RENGOKU",
            price: " 390.000đ",
            image: "figure1.jpg"
        },

        {
            name: "KIMETSU NO YAIBA SANEMI SHINAZUGAWA",
            price: " 410.000đ",
            image: "figure2.jpg"
        },

        {
            name: "KIMETSU NO YAIBA KUCHOU SHINOBU",
            price: " 450.000đ",
            image: "figure3.jpg"
        },

        {
            name: "KIMETSU NO YAIBA GIYU TOMIOKA",
            price: " 320.000đ",
            image: "figure4.jpg"
        },

        {
            name: "KIMETSU NO YAIBA IGURO OBANAI",
            price: " 360.000đ",
            image: "figure5.jpg"
        },

        {
            name: "KIMETSU NO YAIBA MITSURI KANJORI",
            price: " 440.000đ",
            image: "figure6.webp"
        },

        {
            name: "KIMETSU NO YAIBA GYOMEI HIMEJIMA",
            price: " 380.000đ",
            image: "figure7.jpg"
        },

        {
            name: "KIMETSU NO YAIBA MUICHIRO TOKITO",
            price: " 310.000đ",
            image: "figure8.webp"
        },

        {
            name: "KIMETSU NO YAIBA NEZUKO KAMADO",
            price: " 400.000đ",
            image: "figure9.jpeg"
        },

        {
            name: "KIMETSU NO YAIBA ZENITSU AGATSUMA",
            price: " 340.000đ",
            image: "figure10.webp"
        },

        {
            name: "KIMETSU NO YAIBA INNOSUKE HASHIBIRA",
            price: " 350.000đ",
            image: "figure11.jpg"
        },

        {
            name: "[SPECIAL] YORIICHI VS KOKUSHIBO",
            price: " 670.000đ",
            image: "figurespecial.webp"
        },

        {
            name: "FIGMA KAMADA TANJIRO DX",
            price: " 1.000.000đ",
            image: "images.jpg"
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
