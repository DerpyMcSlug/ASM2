document.addEventListener("DOMContentLoaded", function() {
    let cart = [
        { id: 1, name: "Stylish Shirt", price: 35.00, quantity: 2 },
        { id: 2, name: "Fanshion Watch", price: 100.00, quantity: 1 }
    ];

    function updateCartStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToCart(event) {
        const product = event.target.closest(".product");
        const productName = product.querySelector("h2").innerText;
        const productPrice = parseFloat(product.querySelector("p").innerText.replace("$", ""));

        // Check if item is already in cart
        let existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCartStorage();
        alert(`${productName} added to cart!`);
    }

    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // If on the cart page, update the cart display
    if (document.getElementById("cartTable")) {
        updateCart();
    }

    function updateCart() {
        let cartTable = document.querySelector("#cartTable tbody");
        if (!cartTable) return; // Prevents error if not on cart page

        cartTable.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="cart-quantity">
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">X</button></td>
            `;

            cartTable.appendChild(row);
            total += item.price * item.quantity;
        });

        document.getElementById("totalPrice").textContent = total.toFixed(2);
        attachCartEventListeners();
    }

    function attachCartEventListeners() {
        document.querySelectorAll(".cart-quantity").forEach(input => {
            input.addEventListener("change", function() {
                let index = this.getAttribute("data-index");
                cart[index].quantity = parseInt(this.value);
                updateCartStorage();
                updateCart();
            });
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCartStorage();
                updateCart();
            });
        });
    }
});