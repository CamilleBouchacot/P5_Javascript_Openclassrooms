const productsInlocalStorage = JSON.parse(localStorage.getItem('products'));



// J'insère le contenu 
products.forEach(product => {


    const items = document.querySelector("#cart__items");


    const item =


        `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
      <div class="cart__item__img">
      <img src='../../back/images/${product.imageUrl}' alt='${product.altTxt}'>
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${product.name}</h2>
          <p>${product.colors}</p>
          <p>${product.price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
          <p class="deleteItem" canapeId="${productsInlocalStorage}" canapeColor="${productsInlocalStorage.colors}">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`

    items.insertAdjacentHTML('beforeEnd', item)




});





