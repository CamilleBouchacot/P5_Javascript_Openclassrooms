import { displayCart } from './cartforeach.js'  /*J'importe le fichier "cartforeach" dans le fichier "cart"*/

// Je met le localstorage au format JSON , pour que le naviguateur reconnaisse
const productsInlocalStorage = JSON.parse(localStorage.getItem('products'));



// Je séléctionne mon id
const itemsContainer = document.querySelector('#cart__items');


// Si mon panier ne contient aucun article , alors message d'erreur
if (!productsInlocalStorage) {

  const titleCart = document.querySelector("h1");
  const sectionCart = document.querySelector(".cart");

  titleCart.innerHTML = "Votre panier est vide !";
  sectionCart.style.display = "none";
}


// Gestion du bouton "supprimer l'article"


let deleteItem = document.querySelectorAll("deleteItem");




// Le montant total du panier
// Déclaration de la variable pour mettre les prix qui sont dans le panier

let totalPrice = [];

// Aller chercher les prix dans le panier
for (let m = 0; m < productsInlocalStorage.length; m++) {
  let pricecart = productsInlocalStorage[m].price

  // Mettre les prix du panier dans la variable "Totalprice"
  totalPrice.push(pricecart)

}
// Additionner les prix dans le tableau "Totalprice" avec la méthode reducer
const reducer = (accumulator, currentValue) => accumulator += currentValue;
const prixTotal = totalPrice.reduce(reducer, 0);
console.log(prixTotal)


// Importation du fichier cartforeach avec DisplayCart
displayCart(productsInlocalStorage);










const afficherFormulaire = () => {


  // Je Séléctionne les élements du DOM pour le positionnement de mon formulaire
  const positionElmentform = document.querySelector("#cart__order");

  const StrctureForm = `   <div class="cart__order">
  <form method="get" class="cart__order__form">
    <div class="cart__order__form__question">
      <label for="firstName">Prénom: </label>
      <input type="text" name="firstName" id="${firstName}" required>
      <p id="firstNameErrorMsg">
        <!-- ci est un message d'erreur -->
      </p>
    </div>
    <div class="cart__order__form__question">
      <label for="lastName">Nom: </label>
      <input type="text" name="lastName" id="${lasttName}" required>
      <p id="lastNameErrorMsg"></p>
    </div>
    <div class="cart__order__form__question">
      <label for="address">Adresse: </label>
      <input type="text" name="address" id="${address}" required>
      <p id="addressErrorMsg"></p>
    </div>
    <div class="cart__order__form__question">
      <label for="city">Ville: </label>
      <input type="text" name="city" id="${city}" required>
      <p id="cityErrorMsg"></p>
    </div>
    <div class="cart__order__form__question">
      <label for="email">Email: </label>
      <input type="email" name="email" id="${email}" required>
      <p id="emailErrorMsg"></p>
    </div>`
}

// CHAMP DE FORMULAIRE
// Création de la classe pour fabriquer l'objet dans lequel iront les values du formulaire

class FORMULAIRE {

  constructor(input) {

    this.firstName = document.querySelector("firstName").value;
    this.lastName = document.querySelector("lastName").value;
    this.address = document.querySelector("address").value;
    this.city = document.querySelector("city").value;
    this.email = document.querySelector("email").value;
  }
}


// Controle de la validité des informations (prenom,nom,email,ville,adresse)

function Controle() {

  const firstName = formvalue.firstName
  if (regExprenomnomville(firstName)) {
    return true;
  } else {
    document.querySelector("#firstNameErrorMsg")
    alert("Champ obligatoire à remplir ! ");
    return false;

  }
}



// VALIDATION ORDER

const order = document.querySelector("#order")

order.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products', 'quantity'))


  //  Si le localStorage est vide , on crée un tableau vide 
  if (!productsInLocalStorage) {
    productsInLocalStorage = []
  }



  // Alert pour avertir le produit supprimer 
  alert(" La transaction est bien validée !  ");
  window.location.href = "confirmation.html";

}
)





