import { displayCart } from './cartforeach.js'  /*J'importe le fichier "cartforeach" dans le fichier "cart"*/

// Je met le localstorage au format JSON , pour que le naviguateur reconnaisse
const productsInLocalStorage = JSON.parse(localStorage.getItem('products'));



// Je séléctionne mon id
const itemsContainer = document.querySelector('#cart__items');


// Si mon panier ne contient aucun article , alors message d'erreur
if (!productsInLocalStorage) {

  const titleCart = document.querySelector("h1");
  const sectionCart = document.querySelector(".cart");

  titleCart.innerHTML = "Votre panier est vide !";
  sectionCart.style.display = "none";
}

// Gestion du bouton "supprimer l'article"
let deleteItem = document.querySelectorAll("deleteItem");




// Le montant total du panier
// Déclaration de la variable pour mettre les prix qui sont dans le panier



// productsInLocalStorage.map(product => {
//   console.log("hello");
//   totalPrice.push(product)
// })
// console.log('consolelog de ' , totalPrice);

// Additionner les prix dans le tableau "Totalprice" avec la méthode reducer
// const reducer = (accumulator, currentValue) => accumulator += currentValue;
// const prixTotal = totalPrice.reduce(reducer, 0);



// Importation du fichier cartforeach avec DisplayCart
displayCart(productsInLocalStorage);



// VALIDATION ORDER, FORMULAIRE

const order = document.querySelector("#order")

order.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products', 'quantity'))


  // regexs
  let regName = /^[a-zA-Z]{2}/;
  // j'initialise le texte d'erreur
  let message = "";

  // je récupere le prénom
  let firstName = document.getElementById("firstName").value;

  // Vérif Prenom
  if (/^[A-Za-z]{3,20}$/.test(firstName)) {
    message = "Veuillez entrer un prénom sans chiffres";
  }
  else {
    message = "";
    var firstnameValid = true;
  }
  document.getElementById("firstNameErrorMsg").innerHTML = message;




  // je récupere le nom
  let lastName = document.getElementById("lastName").value;

  // Vérif Prenom
  if (!regName.test(lastName)) {
    message = "Veuillez entrer un nom sans chiffres";
  }
  else {
    message = "";
    var lastnameValid = true;
  }
  document.getElementById("lastNameErrorMsg").innerHTML = message;




  // je récupere l'adresse'
  let address = document.getElementById("address").value;

  // Vérif Adresse
  let addressformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (!address.match(addressformat)) {
    message = "Veuillez entrer votre adresse";
  }
  else {
    message = "";
    var addressValid = true;
  }
  document.getElementById("addressErrorMsg").innerHTML = message;



  // je récupere la Ville'
  let city = document.getElementById("city").value;

  // Vérif City
  let cityformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (!city.match(cityformat)) {
    message = "Veuillez renseignez une Ville";
  }
  else {
    message = "";
    var cityValid = true;
  }
  document.getElementById("cityErrorMsg").innerHTML = message;





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
  document.getElementById("emailErrorMsg").innerHTML = message;


  // tout est ok on ferme le formulaire et on affiche le message de confirmation
  if (firstnameValid == true && lastnameValid == true && emailValid == true && addressValid == true && cityValid == true && cguValid == true) {
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





