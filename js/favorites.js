const mainSection = document.getElementById("main-section");
const addBtn = document.getElementById("add-product");
const title = document.getElementById("title-input");
const stock = document.getElementById("stock-input");
const price = document.getElementById("price-input");
const image = document.getElementById("image-input");
// This Object act like a database !

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
    
    res.forEach((product) => {
        if (product.favorite == true) {

            let card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML += `<img src="${product.image}" alt="This is a product image...">`;
            card.innerHTML += `<h2>${product.title}</h2>`;
            card.innerHTML += `<p>There is only ${product.stock} of the product in the stock.</p>`;
            card.innerHTML += `<div class="btn-container"><button>$ ${product.price}</button></div>`;
        
            let favArea = document.createElement("div");
            favArea.className = "heart";
            if (product.favorite) {

                favArea.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="margin-left: 90%;"></i>`;

            } else {

                favArea.innerHTML = `<i class="fa-regular fa-heart fa-lg" style="margin-left: 90%"></i>`;

            }

            card.appendChild(favArea);
            mainSection.append(card);

            const heartIcon = favArea.querySelector("i");

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

                            heartIcon.classList.toggle("fa-solid");
                            product.favorite = favStatus;

                        }
                
                    })
                    .catch((err) => {
                
                        console.log(`An Error Occured when Updating a property ${err.message}`);
                
                    })

            });

        }

    });

}

getProducts();