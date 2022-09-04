const id = new URL(wondow.location.href).searchParams.get(
  "id"
); /*On ajoute la nouvelle URL*/
console.log(id);

const orderId = document.getElementById("orderId"); /*On place l'ID*/
orderId.innerHTML = id; /*On rleie l'id au doc HTML*/

localStorage.clear();
