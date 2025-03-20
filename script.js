// This Object will act like a database !
const products = [

    {

        title: "Coffee Cappucino",
        stock: 10,
        price: 10,
        image: "./uploads/cappucino.webp"

    },
    {

        title: "Couscous Meal",
        stock: 8,
        price: 15,
        image: "./uploads/couscous.jpg"

    },
    {

        title: "Tajine Meal",
        stock: 12,
        price: 13,
        image: "./uploads/tajine.jpg"

    }

];

// Declaring all needed variables as constants !
const mainSection = document.getElementById("main-section");
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

for (let i = 0; i < products.length; i++) {

    let card = document.createElement('div');
    card.className = "product-card";
    card.innerHTML += `<img src="${products[i].image}" alt="This is a product image...">`;
    card.innerHTML += `<h2>${products[i].title}</h2>`;
    card.innerHTML += `<p>There is only ${products[i].stock} of the product in the stock.</p>`;
    card.innerHTML += `<div class="btn-container"><button>$ ${products[i].price}</button><button>+</button></div>`;

    mainSection.append(card);

}

if (searchBtn) {

    searchBtn.addEventListener("click" , function() {
    
        let filteredProducts = products.filter((item) => {

            return item.title.toLowerCase() === searchBar.value.toLowerCase();

        });
    
        mainSection.innerHTML = "";

        console.log(mainSection.innerHTML);
    
        for (let i = 0; i < filteredProducts.length; i++) {
    
            let card = document.createElement('div');
            card.className = "product-card";
            card.innerHTML += `<img src="${filteredProducts[i].image}" alt="This is a product image...">`;
            card.innerHTML += `<h2>${filteredProducts[i].title}</h2>`;
            card.innerHTML += `<p>There is only ${filteredProducts[i].stock} of the product in the stock.</p>`;
            card.innerHTML += `<div class="btn-container"><button>$ ${filteredProducts[i].price}</button><button>+</button></div>`;
        
            mainSection.append(card);
        
        }

        console.log(filteredProducts);
    
    })

}
