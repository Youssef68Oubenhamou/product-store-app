const mainSection = document.getElementById("main-section");
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-product");
const title = document.getElementById("title-input");
const stock = document.getElementById("stock-input");
const price = document.getElementById("price-input");
const image = document.getElementById("image-input");
// This Object act like a database !

let products = [];

async function getProducts() {

    fetch("http://localhost:3000/products")
        .then((response) => {

            return response.json();
        
        })
        .then((response) => {

            displayProducts(response);
        
        })

}

function displayProducts(res) {

    let i;
    
    for (i = 0; i < res.length; i++) {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML += `<img src="${res[i].image}" alt="This is a product image...">`;
        card.innerHTML += `<h2>${res[i].title}</h2>`;
        card.innerHTML += `<p>There is only ${res[i].stock} of the product in the stock.</p>`;
        card.innerHTML += `<div class="btn-container"><button>$ ${res[i].price}</button><button>+</button></div>`;
    
        mainSection.append(card);
    }

}

getProducts();

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