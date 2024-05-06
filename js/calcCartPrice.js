function calcCartPrice() {

    // const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    // const priceEl = item.querySelector ('.price__currency');
    
    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice =0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector ('[data-counter]');
        const priceEl = item.querySelector ('.price__currency');

        // расчет строимости одного товара в корзине
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        
        totalPrice += currentPrice;
        
    });

    // 
    totalPriceEl.innerText=totalPrice;

}