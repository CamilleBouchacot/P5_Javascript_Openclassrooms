// CONFIRMATION
// J'ai lier l'id qui correspond avec le fichier confirmation.js , et cart.js
const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
const orderId = document.getElementById("orderId");
orderId.innerHTML = id;


