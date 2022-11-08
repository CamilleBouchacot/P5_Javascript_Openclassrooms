// on récupère le panier et ont le convertit en array
let products = JSON.parse(localStorage.getItem("products"));


// J'insère le contenue
export const displayCart = (productsInLocalStorage) => {
  console.log("ok");
  let leTotal = 0;

  productsInLocalStorage.forEach(product => {
    // const filtered = productsInLocalStorage.filter( product => product.productId == productFetch._id)
    const items = document.querySelector("#cart__items");
    const cartOrder = document.getElementsByClassName("cart__order");
    console.log(productsInLocalStorage);

    const getDatas = async () => {
      try {
        //const result = await fetch('http://localhost:3000/api/products')
        const productData = await fetch(`http://localhost:3000/api/products/${product.productId}`)
        const myCanap = await productData.json()
        //const products = await result.json()
        //let canap = products.find(x => x._id === product.productId)
        console.log(
          myCanap.price + ' ok ' + product.quantity
        );
        leTotal += myCanap.price * product.quantity;
        document.getElementById('totalPrice').textContent = leTotal;
        displayitem(product, myCanap)
      } catch (err) {
        console.warn('something went wrong', err);
      }
    }


    getDatas()



    // J'insère le fichier HTML avec le ficher JS pour la base de données
    function displayitem(product, canap) {


      const item =


        `<article class="cart__item" data-id='${product.productId}' data-color="${product.option}">
      <div class="cart__item__img">
      <img src=${canap.imageUrl} alt='${canap.altTxt}'>
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${canap.name}</h2>
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
      function changeQuantity() {

        let inputs = document.querySelectorAll('.itemQuantity');

        //   // Je sélectionne l'input où change la quantité
        for (const input of inputs) {
          input.addEventListener("change", (e) => {
            e.preventDefault();
            const article = input.closest('article');
            const qty = e.target.value
            const id = article.dataset.id
            const color = article.dataset.color

            // avec la méthode filter, je sélectionne les éléments à garder , et supprime l'élément concerné
            const Listproducts = productsInLocalStorage.filter(el => el.productId == id);
            const productmodify = Listproducts.filter(el => el.option == color);
            // Je recupère la quantité
            productmodify[0].quantity = parseInt(qty)
            console.log(productmodify);
            // Mise à jour de la quantité dans le LocalStorage
            const newProductList = productsInLocalStorage.map(p => p.id == id ? { ...p, productmodify } : p)
            console.log(newProductList);
            // La formule "removeitem" permet de supprimer completement le tableau products
            localStorage.removeItem("products");
            // Je met le localstorage au format JSON , pour que le naviguateur suive les instructions
            localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
            window.location.reload()
          })

        }


      }
      changeQuantity()




      // Suppression des produits

      function deleteItem() {
        let buttons = document.querySelectorAll('.deleteItem');
        for (let button of Array.from(buttons)) {

          // Je sélectionne le bouton "supprimer"

          button.addEventListener("click", (e) => {
            e.preventDefault();

            let id_supprimer = product.productId
            console.log(id_supprimer)

            let colorproducts = button.getAttribute('data-color')

            // avec la méthode filter, je sélectionne les éléements a garder , et supprime l'élément concerné
            const Listproducts = productsInLocalStorage.filter(el => el.productId == id_supprimer);
            const productdelete = Listproducts.filter(el => el.option == colorproducts);
            // On demande au LocalStorage d'extraire le produit (car on le veut plus)
            productsInLocalStorage = productsInLocalStorage.filter(el => el !== productdelete[0]);
            // La formule "removeitem" permet de supprimer completement le tableau products
            localStorage.removeItem("products");

            // Je met le localstorage au format JSON , pour que le naviguateur suive les instructions
            localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
            window.location.reload()
          })
        }
      }

      deleteItem();

    }


  })
}
