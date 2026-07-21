/*=========================================
        STARLIGHT COFFEE
            SHOP PAGE
=========================================*/

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

/*=========================================
        DISPLAY PRODUCTS
=========================================*/

function displayProducts(productArray) {

    productList.innerHTML = "";

    if (productArray.length === 0) {

        productList.innerHTML = `
            <div class="no-products">
                <h2>No Products Found</h2>
                <p>Try searching with another keyword.</p>
            </div>
        `;

        return;
    }

    productArray.forEach(product => {

        productList.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h4>₹${product.price}</h4>

                <button
                    class="btn add-cart"
                    data-id="${product.id}">
                    Add To Cart
                </button>

            </div>

        `;

    });

    activateCartButtons();

}

/*=========================================
        ADD TO CART
=========================================*/

function activateCartButtons() {

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const product = getProductById(id);

            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct =
                cart.find(item => item.id === id);

            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({

                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1

                });

            }

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            updateCartCounter();

            alert(product.name + " added to cart!");

        });

    });

}

/*=========================================
        UPDATE CART COUNTER
=========================================*/

function updateCartCounter() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce(

        (sum, item) => sum + item.quantity,

        0

    );

    const counter =
        document.getElementById("cart-count");

    if (counter) {

        counter.textContent = totalItems;

    }

}

/*=========================================
        SEARCH PRODUCTS
=========================================*/

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword =
            searchInput.value.trim();

        const filteredProducts =
            searchProducts(keyword);

        displayProducts(filteredProducts);

    });

}

/*=========================================
        FILTER PRODUCTS
=========================================*/

if (categoryFilter) {

    categoryFilter.addEventListener("change", () => {

        const selected =
            categoryFilter.value;

        const filteredProducts =
            getProductsByCategory(selected);

        displayProducts(filteredProducts);

    });

}

/*=========================================
        INITIALIZE PAGE
=========================================*/

displayProducts(products);

updateCartCounter();