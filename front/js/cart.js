import { displayCart } from './cartforeach.js'  /*J'importe le fichier "cartforeach" dans le fichier "cart"*/
// Importation du fichier cartforeach avec DisplayCart


// Je met le localstorage au format JSON , pour que le naviguateur reconnaisse
const productsInLocalStorage = JSON.parse(localStorage.getItem('products'));

// Importation du fichier cartforeach avec DisplayCart
displayCart(productsInLocalStorage);



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



// VALIDATION ORDER, FORMULAIRE


const order = document.querySelector("#order")

order.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products', 'quantity'))


  // j'initialise le texte d'erreur
  let message = "";

  // je récupere le prénom
  let firstName = document.getElementById("firstName").value;

  // Vérif Prenom
  if (/[^a-zA-Z]+/.test(firstName)) {
    message = "Veuillez entrer un prénom sans chiffres";
  }
  else {
    message = "";
    var firstnameValid = true;
  }
  document.getElementById("firstNameErrorMsg").innerHTML = message;





  // je récupere le nom
  let lastName = document.getElementById("lastName").value;

  // Vérif Nom
  if (/[^a-zA-Z]+/.test(lastName)) {
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
  let addressformat = /^[a-zA-Z0-9\s\,\''\-]*$/;
  if (!address.match(addressformat)) {
    message = "Veuillez entrez une adresse valide ";
  }
  else {
    message = "";
    var addressValid = true;
  }
  document.getElementById("addressErrorMsg").innerHTML = message;





  // je récupere la ville
  let city = document.getElementById("city").value;

  // Vérif City
  let cityformat = /^[a-zA-Z0-9\s\,\''\-]*$/;
  if (!city.match(cityformat)) {
    message = "Veuillez entrez une ville valide ";
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
  if (firstnameValid == true && lastnameValid == true && emailValid == true && addressValid == true && cityValid == true) {
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





