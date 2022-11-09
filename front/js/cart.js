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

// Objet contact à envoyer à l'API
const contact = {}
// Tableau d'id à envoyer à l'API /order
const arrayIds = []
for (let product of productsInLocalStorage) {

  arrayIds.push(product.productId)

}

// Objet entier de la donnée à envoyer à l'API en POST
const orderData = {
  contact: contact,
  products: arrayIds
}

// On applique la méthode POST et la redirection à la page confirmation
function post() {

  fetch('http://localhost:3000/api/products/order', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = `confirmation.html?id=${data.orderId}`
      alert(`La transaction est bien validée`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

document.querySelector("#order").addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products'))


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
  let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    contact.firstName = firstName
    contact.lastName = lastName
    contact.email = email
    contact.address = address
    contact.city = city

    post()
  }

  console.log(orderData);

  //  Si le localStorage est vide , on crée un tableau vide
  if (!productsInLocalStorage) {
    productsInLocalStorage = []
  }

}
)





