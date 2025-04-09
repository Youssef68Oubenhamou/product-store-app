// This Object act like a database !
// const products = [
//     {

//         title: "Coffee Cappucino",
//         stock: 10,
//         price: 10,
//         image: "./uploads/cappucino.webp"

//     },
//     {

//         title: "Couscous Meal",
//         stock: 8,
//         price: 15,
//         image: "./uploads/couscous.jpg"

//     },
//     {

//         title: "Tajine Meal",
//         stock: 12,
//         price: 13,
//         image: "./uploads/tajine.jpg"

//     }
// ];


// fetch("http://localhost:3000/products" , {

//     method: 'GET',
//     headers: {

//         "Content-type": "application/json",

//     },

// })
//     .then(res => {

//         res.json();

//     })
//     .then(data => {

//         console.log(data.text());

//     })
//     .catch((err) => {

//         console.log(err);

//     })

async function getProducts() {

    const response = await fetch("http://localhost:3000/products");
    
    const data = await response.json();

    console.log(data[0]);

}

getProducts();

// Declaring all needed variables as constants !
const mainSection = document.getElementById("main-section");
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-product");
const title = document.getElementById("title-input");
const stock = document.getElementById("stock-input");
const price = document.getElementById("price-input");
const image = document.getElementById("image-input");

// for (let i = 0; i < products.length; i++) {

//     let card = document.createElement('div');
//     card.className = "product-card";
//     card.innerHTML += `<img src="${products[i].image}" alt="This is a product image...">`;
//     card.innerHTML += `<h2>${products[i].title}</h2>`;
//     card.innerHTML += `<p>There is only ${products[i].stock} of the product in the stock.</p>`;
//     card.innerHTML += `<div class="btn-container"><button>$ ${products[i].price}</button><button>+</button></div>`;

//     mainSection.append(card);

// }

// if (searchBtn) {

//     searchBtn.addEventListener("click" , function() {
    
//         let filteredProducts = products.filter((item) => {

//             return item.title.toLowerCase() === searchBar.value.toLowerCase();

//         });
    
//         mainSection.innerHTML = "";

//         console.log(mainSection.innerHTML);
    
//         for (let i = 0; i < filteredProducts.length; i++) {
    
//             let card = document.createElement('div');
//             card.className = "product-card";
//             card.innerHTML += `<img src="${filteredProducts[i].image}" alt="This is a product image...">`;
//             card.innerHTML += `<h2>${filteredProducts[i].title}</h2>`;
//             card.innerHTML += `<p>There is only ${filteredProducts[i].stock} of the product in the stock.</p>`;
//             card.innerHTML += `<div class="btn-container"><button>$ ${filteredProducts[i].price}</button><button>+</button></div>`;
        
//             mainSection.append(card);
        
//         }

//         console.log(filteredProducts);
    
//     })

// }