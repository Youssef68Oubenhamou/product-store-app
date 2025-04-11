const addBtn = document.getElementById("add-product");
const title = document.getElementById("title-input");
const stock = document.getElementById("stock-input");
const price = document.getElementById("price-input");
const image = document.getElementById("image-input");
let imageName = "";
let product;

image.addEventListener("change" , (e) => {

    const files = e.target.files;
    const fileName = files[0].name;
    imageName = fileName;
    const file_reader = new FileReader();
    file_reader.addEventListener("load" , () => {

        const uploaded_image = file_reader.result;

    })
    file_reader.readAsDataURL(this.files[0]);

});

addBtn.addEventListener("click" , function () {

    async function addProduct() {
    
        if (title.value && stock.value && price.value && image) {
    
            product = {
        
                title: title.value,
                stock: stock.value,
                price: price.value,
                image: `./uploads/${imageName}`
        
            }
            fetch("http://localhost:3000/products",
                {
        
                    method: "POST",
                    body: JSON.stringify(product)
                    
                }
            )
                .then((response) => {
        
                    return response.status;
                
                })
                .then((response) => {
        
                    console.log(response)
                
                })
                .catch((err) => {
        
                    console.log(`An error occured when posting data into the database. ${err}`);
        
                })

        }
    
    }

    addProduct();

});