
export const displayCart = (productsInlocalStorage) => {

  // J'insère le contenu 

  productsInlocalStorage.forEach(product => {

    const items = document.querySelector("#cart__items");
    const cartOrder = document.getElementsByClassName("cart__order");
    console.log(productsInlocalStorage);


    fetch('http://localhost:3000/api/products')
      .then(function (response) {


        return response.json()
      }).then(function (data) {
        let canap = data.find(x => x._id === product.productId)
        // console.log(canap);
        displayitem(product, canap,)
      }).catch(function (err) {
        console.warn('something went wrong', err);
      })





    function displayitem(product, canap) {
      const item =


        `<article class="cart__item" data-id='${product.productId}' data-color="${product.option}">
      <div class="cart__item__img">
      <img src=${product.imageUrl} alt='${product.altTxt}'>
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${product.name}</h2>
          <p>${product.option}</p>
          <p>${canap.price}€</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" id='quantity-${product.productId}' name="itemQuantity" min="1" max="100" value="${product.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
          
          <p class="deleteItem" data-id="${product.productId}" data-color="${product.option}">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`
      items.insertAdjacentHTML('beforeEnd', item)

      // Modification de la quantité
      function changequantity() {

        let input = document.querySelector('#quantity-' + product.productId);

        //   // Je sélectionne l'input où change la quantité

        input.addEventListener("change", (e) => {
          e.preventDefault();
          console.log(input)
          localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
          // avec la méthode filter, je sélectionne les éléements a garder , et supprime l'élément concerné
          const Listproducts = productsInlocalStorage.filter(el => el.productId == id_supprimer);
          // 
          const productdelete = Listproducts.filter(el => el.option == colorproducts);
          productsInlocalStorage = productsInlocalStorage.filter(el => el !== productdelete[0]);
          console.log(productsInlocalStorage);


        })

      }
      changequantity()


      // Suppression des produits

      function deleteItem() {
        let buttons = document.querySelectorAll('.deleteItem');
        for (let button of Array.from(buttons)) {

          // Je sélectionne le bouton "supprimer"

          button.addEventListener("click", (e) => {
            e.preventDefault();

            let id_supprimer = button.getAttribute('data-id')
            console.log(id_supprimer)

            let colorproducts = button.getAttribute('data-color')

            // avec la méthode filter, je sélectionne les éléements a garder , et supprime l'élément concerné
            const Listproducts = productsInlocalStorage.filter(el => el.productId == id_supprimer);
            const productdelete = Listproducts.filter(el => el.option == colorproducts);
            productsInlocalStorage = productsInlocalStorage.filter(el => el !== productdelete[0]);

            // La formule "removeitem" permet de supprimer completement le tableau products
            localStorage.removeItem("products");

            // Je met le localstorage au format JSON , pour que le naviguateur suive les instructions
            localStorage.setItem("products", JSON.stringify(productsInlocalStorage));


            // // Redirection de la page
            // window.location.href = "cart.html";

          })
        }
      }

      deleteItem();

    }


  })
}




























