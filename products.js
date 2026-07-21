/*=========================================
        STARLIGHT COFFEE PRODUCTS
=========================================*/

const products = [

    {
        id: 1,
        name: "Espresso Blend",
        category: "Hot Coffee",
        price: 499,
        image: "images/products/espresso.jpg",
        description: "Rich and aromatic espresso coffee made from premium roasted beans."
    },

    {
        id: 2,
        name: "Cappuccino Mix",
        category: "Hot Coffee",
        price: 599,
        image: "images/products/cappuccino.jpg",
        description: "Smooth cappuccino mix with creamy texture and bold flavor."
    },

    {
        id: 3,
        name: "Latte Coffee",
        category: "Hot Coffee",
        price: 549,
        image: "images/products/latte.jpg",
        description: "Classic latte with a balanced blend of coffee and milk."
    },

    {
        id: 4,
        name: "Cold Brew",
        category: "Cold Coffee",
        price: 399,
        image: "images/products/coldbrew.jpg",
        description: "Refreshing cold brew prepared from slow-steeped premium beans."
    },

    {
        id: 5,
        name: "Premium Coffee Beans",
        category: "Coffee Beans",
        price: 699,
        image: "images/products/beans.jpg",
        description: "100% Arabica whole coffee beans for a rich brewing experience."
    },

    {
        id: 6,
        name: "French Press",
        category: "Accessories",
        price: 899,
        image: "images/products/frenchpress.jpg",
        description: "High-quality French Press for brewing rich and flavorful coffee."
    },

    {
        id: 7,
        name: "Coffee Grinder",
        category: "Accessories",
        price: 1499,
        image: "images/products/grinder.jpg",
        description: "Electric coffee grinder with multiple grinding settings."
    },

    {
        id: 8,
        name: "Ceramic Coffee Mug",
        category: "Accessories",
        price: 299,
        image: "images/products/mug.jpg",
        description: "Elegant ceramic coffee mug perfect for your favorite drink."
    }

];

/*=========================================
        HELPER FUNCTIONS
=========================================*/

// Find a product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Filter products by category
function getProductsByCategory(category) {

    if (category === "All") {
        return products;
    }

    return products.filter(product => product.category === category);

}

// Search products
function searchProducts(keyword) {

    return products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );

}