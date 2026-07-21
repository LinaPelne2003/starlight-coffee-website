/*=========================================
        STARLIGHT COFFEE
            CART PAGE
=========================================*/

// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// HTML Elements
const cartItems = document.getElementById("cart-items");
const totalItems = document.getElementById("total-items");
const totalPrice = document.getElementById("total-price");
const emptyCart = document.getElementById("empty-cart");
const cartSection = document.querySelector(".cart-section");
const clearCartBtn = document.getElementById("clear-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const cartCounter = document.getElementById("cart-count");


/*=========================================
        UPDATE CART COUNTER
=========================================*/

function updateCartCounter() {

    if (!cartCounter) return;

    const count = cart.reduce((sum, item) => {

        return sum + item.quantity;

    }, 0);

    cartCounter.textContent = count;

}


/*=========================================
        SAVE CART
=========================================*/

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCounter();

}


/*=========================================
        DISPLAY CART
=========================================*/

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartSection.style.display = "none";
        emptyCart.style.display = "block";

        updateCartCounter();

        return;

    }

    cartSection.style.display = "grid";
    emptyCart.style.display = "none";

    let total = 0;
    let items = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        items += item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-details">

                <h3>${item.name}</h3>

                <p class="cart-price">₹${item.price}</p>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${item.id})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${item.id})">+</button>

                </div>

                <button
                    class="btn remove-btn"
                    onclick="removeItem(${item.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    totalItems.textContent = items;
    totalPrice.textContent = total;

    updateCartCounter();

}


/*=========================================
        INCREASE QUANTITY
=========================================*/

function increaseQuantity(id) {

    cart.forEach(item => {

        if (item.id === id) {

            item.quantity++;

        }

    });

    saveCart();

    displayCart();

}


/*=========================================
        DECREASE QUANTITY
=========================================*/

function decreaseQuantity(id) {

    cart.forEach(item => {

        if (item.id === id && item.quantity > 1) {

            item.quantity--;

        }

    });

    saveCart();

    displayCart();

}


/*=========================================
        REMOVE ITEM
=========================================*/

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    displayCart();

}


/*=========================================
        CLEAR CART
=========================================*/

clearCartBtn.addEventListener("click", () => {

    const confirmClear = confirm("Are you sure you want to clear your cart?");

    if (!confirmClear) return;

    cart = [];

    saveCart();

    displayCart();

});


/*=========================================
        CHECKOUT
=========================================*/

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    alert(
        "🎉 Thank you for shopping with Starlight Coffee!\n\nThis is a demo checkout page."
    );

});


/*=========================================
        INITIALIZE
=========================================*/

displayCart();