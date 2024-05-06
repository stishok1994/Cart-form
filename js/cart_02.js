// div корзины
const cart_wrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        
        const card = event.target.closest('.card')
    
        // создаем объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // проверяем есть ли элемент в корзине
        const itemInCart = cart_wrapper.querySelector(`[data-id="${productInfo.id}"]`);
        // console.log(itemInCart);
        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText)+ parseInt(productInfo.counter);
        } 
        else {
            // Создаем шаблон
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
                                </div>`;

                    // добавляем шаблон в корзину
            cart_wrapper.insertAdjacentHTML('beforeend', cartItemHTML);
            
        };

        // сБРАСЫВАЕМ СЧЕТЧИК
        card.querySelector('[data-counter]').innerText='1';
    };

    // Отображение и скрытие карзины
    toggleCartStatus();
    // подсчет коззины
    calcCartPrice();
    

})

