const mainSection = document.getElementById("main-section");
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-product");
const title = document.getElementById("title-input");
const stock = document.getElementById("stock-input");
const price = document.getElementById("price-input");
const image = document.getElementById("image-input");
const totalPayment = document.getElementById("total-payment");
// This Object act like a database !

async function getProducts() {

    fetch("http://localhost:3000/products")
        .then((response) => {

            return response.json();
        
        })
        .then((response) => {

            displayProducts(response);
            searchedButtons(response);
        
        })

}

function showTotalPrice(res) {

    let sum = 0;

    res.forEach((pro) => {

        sum += pro.totalPrice;

    })

    totalPayment.innerHTML = `$ ${sum}`;

}

function displayProducts(res) {
    
    res.forEach((product) => {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML += `<img src="${product.image}" alt="This is a product image...">`;
        card.innerHTML += `<h2>${product.title}</h2>`;
        card.innerHTML += `<p>There is only ${product.stock} of the product in the stock.</p>`;
        card.innerHTML += `<div class="btn-container"><button>$ ${product.price}</button><button id="add-price">+</button></div>`;
    
        let favArea = document.createElement("div");
        favArea.className = "heart";
        if (product.favorite) {

            favArea.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="margin-left: 90%;"></i>`;

        } else {

            favArea.innerHTML = `<i class="fa-regular fa-heart fa-lg" style="margin-left: 90%"></i>`;

        }

        card.appendChild(favArea);
        mainSection.append(card);

        showTotalPrice(res);

        const heartIcon = favArea.querySelector("i");

        const addPriceBtn = card.querySelector("#add-price");
        
        addPriceBtn.addEventListener("click" , async function () {

            if (product.totalPrice < (product.price * product.stock)) {

                console.log("The button is clicked !");

                fetch(`http://localhost:3000/products/${product.id}` , {

                    method: 'PATCH',
                    body: JSON.stringify({
                        totalPrice: parseInt(product.totalPrice) + parseInt(product.price)
                    })
                    
                })
                    .then((res) => {

                        res.json();

                    })
                    .then((data) => {

                        if (data.ok) {

                            product.totalPrice = parseInt(product.totalPrice) + parseInt(product.price);

                        }

                    })
                    .catch((err) => {

                        console.log(`An Error Occured when updating the property , ${err.message}`);

                    })
            }

        })

        heartIcon.addEventListener("click" , async function() {

            const favStatus = !product.favorite;

            fetch(`http://localhost:3000/products/${product.id}` , {

                method: 'PATCH',
                body: JSON.stringify({
                    favorite: favStatus
                })
                
            })
                .then((response) => {
            
                    response.json();
            
                })
                .then((data) => {
            
                    if (data.ok) {

                        // heartIcon.classList.toggle("fa-solid");
                        product.favorite = favStatus;

                    }
            
                })
                .catch((err) => {
            
                    console.log(`An Error Occured when Updating a property ${err.message}`);
            
                })

        });

    });

}

function searchedButtons(res) {

    if (searchBtn) {

        searchBtn.addEventListener("click" , function() {
    
            let filteredProducts = res.filter((item) => {
    
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
    
        })
    
    }

}

getProducts();