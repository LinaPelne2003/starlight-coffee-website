/*=========================================
        STARLIGHT COFFEE
        MAIN JAVASCRIPT
=========================================*/

/*=========================================
        UPDATE CART COUNTER
=========================================*/

function updateNavbarCart() {

    const cartCounter = document.getElementById("cart-count");

    if (!cartCounter) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => {

        return total + item.quantity;

    }, 0);

    cartCounter.textContent = totalItems;

}

updateNavbarCart();


/*=========================================
        NEWSLETTER FORM
=========================================*/

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        alert("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    });

}


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});


/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

    ".category-card, .product-card, .feature-box"

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .6s ease";

});

function revealOnScroll() {

    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#6f4e37",
    color: "#fff",
    cursor: "pointer",
    fontSize: "18px",
    display: "none",
    boxShadow: "0 5px 15px rgba(0,0,0,.3)",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load", () => {

    updateNavbarCart();

    console.log("☕ Starlight Coffee Loaded Successfully!");

});