// Je met le localstorage au format JSON , pour que le naviguateur reconnaisse
const productsInlocalStorage = JSON.parse(localStorage.getItem('products'));

// Je séléctionne mon id
const itemsContainer = document.querySelector('#cart__items');



// J'insère le contenu 
const productModel = (product) => {

  return (


    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
      <img src="../images/${product.imageUrl}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>Nom du produit</h2>
        <p>Vert</p>
        <p>42,00 €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
  );
};



// Si mon panier ne contient aucun article , alors message d'erreur 
if (!productsInlocalStorage) {

  const titleCart = document.querySelector("h1");
  const sectionCart = document.querySelector(".cart");

  titleCart.innerHTML = "Votre panier est vide !";
  sectionCart.style.display = "none";
}





//Validation des champs et envoie des données

document.querySelector(".cart__order__form__submit").addEventListener("click", function (e) {
  e.preventDefault();
  let valid = true;
  for (let input of document.querySelectorAll(".cart__order__form__question input")) {
    valid = input.reportValidity();
    if (!valid) {
      break;
    }
  }
  if (valid) {
    const result = fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      // Je met le formulaire ua format JSON , pour que le naviguateur envoie les données
      body: JSON.stringify({
        contact: {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          email: document.getElementById("email").value
        },
      })
    });

    // J'applique la réponse du server , a l'adresse de confirmation.html

    result.then(async (answer) => {
      try {
        window.location.href = "confirmation.html";
        localStorage.clear();
      } catch (e) {
      }
    });
  }
})
  ;





// Je selectionne avec map , dans le localstorage , les produits.
productsInlocalStorage.map(product => {

});
;






// Suppression des produits

function deleteItem() {
  let buttons = document.querySelectorAll('.deleteItem');
  for (let button of Array.from(buttons)) {

    // Je sélectionne le bouton "supprimer"

    button.addEventListener("click", (e) => {
      const name = document.querySelector('name')
      const option = document.querySelector('option');
      const quantity = document.querySelector('quantity');
      ;
      // Je relie le fichier html , au cart.js , et supprime le tableau "products", ce qui suprrime les produits derrière

      productsInlocalStorage.innerHTML = [name, option, quantity];

      ;
      // Je met le localstorage au format JSON , pour que le naviguateur suive les instructions

      localStorage.setItem("products", JSON.stringify(productsInlocalStorage));
      // La formule "removeitem" permet de supprimer completement le tableau products
      localStorage.removeItem("products");
      window.location.href = "cart.html";
    })
  }
}

deleteItem();





