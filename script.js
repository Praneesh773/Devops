let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");

    cartDiv.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `<span>${item.name}</span><span>$${item.price}</span>`;
        cartDiv.appendChild(div);
    });

    totalDiv.textContent = `Total: $${total}`;
}
