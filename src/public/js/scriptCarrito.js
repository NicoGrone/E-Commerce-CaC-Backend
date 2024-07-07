document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cartButton');
    const cartPopup = document.getElementById('cartPopup');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cart = [];

    cartButton.addEventListener('click', () => {
        cartPopup.style.display = 'flex';
        updateCart();
    });

    closeCart.addEventListener('click', () => {
        cartPopup.style.display = 'none';
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart({ name, price });
        });
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-from-cart" data-index="${index}">Eliminar</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
        const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
        removeFromCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
    }

    checkoutButton.addEventListener('click', () => {
        alert('Procediendo al pago...');
     
    });
});
