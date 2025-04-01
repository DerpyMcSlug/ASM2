document.addEventListener("DOMContentLoaded", function() {
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const product = this.parentElement;
            const productName = product.querySelector("h2").innerText;
            const productPrice = product.querySelector("p").innerText;

            cart.push({ name: productName, price: productPrice });
            alert(`${productName} has been added to your cart!`);
            console.log("Cart:", cart);
        });
    });

    // Mobile Sidebar Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector("#closeMenu");
    const mobileMenu = document.querySelector("#mobileMenu");

    menuToggle.addEventListener("click", function() {
        mobileMenu.style.right = "0";  // Slide in
    });

    closeMenu.addEventListener("click", function() {
        mobileMenu.style.right = "-250px";  // Slide out
    });
});

// Product data (can be later connected to a database)
const products = {
    shirt: {
        name: "Stylish Shirt",
        price: "$35.00",
        desc: "A stylish and comfortable shirt for any occasion.",
        img: "images/shirt.webp"
    },
    dress: {
        name: "Semi-Formal Leather Shoes",
        price: "$85.00",
        desc: "Step up your style with these sleek and comfortable shoes, perfect for any occasion.",
        img: "images/shoes.webp"
    },
    watch: {
        name: "Fashion Watch",
        price: "$100.00",
        desc: "A stylish and elegant timepiece designed to complement your everyday look.",
        img: "images/watch.avif"
    },
    jacket: {
        name: "Unisex Denim Jacket",
        price: "$150.00",
        desc: "Stay warm and fashionable with this premium-quality jacket, perfect for all seasons.",
        img: "images/jacket.avif"
    }
};

// Function to load product details dynamically
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productKey = params.get('product');

    if (products[productKey]) {
        document.getElementById('product-name').innerText = products[productKey].name;
        document.getElementById('product-price').innerText = products[productKey].price;
        document.getElementById('product-desc').innerText = products[productKey].desc;
        document.getElementById('product-img').src = products[productKey].img;
    } else {
        document.querySelector('.product-details').innerHTML = "<p>Product not found.</p>";
    }
}

// Function to add product to cart (placeholder)
function addToCart() {
    alert("Product added to cart!");
}

// Load product details when the page loads
window.onload = loadProductDetails;