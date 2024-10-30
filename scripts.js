let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
    showAlert('Item adicionado ao carrinho');
}

function updateCart() {
    const cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = '';
    cart.forEach((cartItem, index) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <span>${cartItem.item} - R$${cartItem.price.toFixed(2)}</span>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.style.display = cartItems.style.display === 'none' ? 'block' : 'none';
}

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success';
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000);
}
