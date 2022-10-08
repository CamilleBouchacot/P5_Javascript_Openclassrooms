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



// Importation du fichier cartforeach avec DisplayCart
displayCart(productsInlocalStorage);



// VALIDATION ORDER

const order = document.querySelector("#order")

order.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products', 'quantity'))

  // regexs
  let regName = /^[a-zA-Z]{2}/;
  // j'initialise le texte d'erreur
  let message = "";

  // je récupere le nom
  let firstName = document.getElementById("firstName").value;

  // Vérif Prenom
  if (!regName.test(firstName)) {
    message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else {
    message = "";
    var firstnameValid = true;
  }
  document.getElementById("firstNameErrorMsg").innerHTML = message;



  // je récupere le nom
  let LastName = document.getElementById("LastName").value;




  // Je récupere le mail
  let email = document.getElementById("email").value;

  // Vérif Email
  let mailformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    message = "Mail invalide";
  }
  else {
    message = "";
    var emailValid = true;
  }
  document.getElementById("err-email").innerHTML = message;


  // tout est ok on ferme le formulaire et on affiche le message de confirmation
  if (firstnameValid == true && lastnameValid == true && emailValid == true && quantityValid == true && cityValid == true && cguValid == true) {
    window.location.href = "confirmation.html";
    // Alert pour avertir la transaction
    alert(" La transaction est bien validée !  ");

  }



  //  Si le localStorage est vide , on crée un tableau vide
  if (!productsInLocalStorage) {
    productsInLocalStorage = []
  }

}
)





