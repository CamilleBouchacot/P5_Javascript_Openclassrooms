/*On prend l'id avec l'url*/
let parsedUrl = new URL(window.location.href);
// Je récupere mon id avec une variable 
let ParamId = parsedUrl.searchParams.get("id")
console.log(ParamId)

let canap = {}

const response = await fetch('http://localhost:3000/api/products')
const products = await response.json()

canap = products.find(x => x._id === ParamId)
console.log(canap)

// Image des produits ajoutés 

const productImg = new Image()
productImg.src = canap.imageUrl
productImg.alt = "photographie d'un canapé"

console.log(productImg);



canap.colors.forEach(color => {
  // je crée les éléctions de couleurs avec option value
  const item = `<option value="${color}">${color}</option>
            `;

  // j'insere les informations a l'aide de insertAdjacentHTML
  document.querySelector("#colors").insertAdjacentHTML('beforeEnd', item)
}
);


/*Je me sert de innerHTML pour afficher mon image*/

document.querySelector(".item__img").appendChild(productImg)
let title = document.getElementById("title")/*on prend l'id du titre et des images*/
console.log(canap.imageUrl)
// console.log(image)


/*on reprend l'id title, price, description, et colors du html*/
document.getElementById("price").innerHTML = canap.price
document.getElementById("description").innerHTML = canap.description


// On recupère l'option choisie , et on recupere la quantité


// Je selectionne , le boutton "ajouter au panier" et au click sur le boutton , on va lui donner des instructions
const addToCart = document.querySelector("#addToCart")

addToCart.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products', 'quantity'))


  //  Si le localStorage est vide , on crée un tableau vide 
  if (!productsInLocalStorage) {
    productsInLocalStorage = []
  }

  let colorsArray = document.querySelector("#colors")

  // On ajoute les couleurs dans le localStorage
  const product = {
    imageUrl: canap.imageUrl,
    productId: canap._id,
    name: canap.name,
    option: colorsArray.value,
    quantity: quantity.value
  }

  // Alert pour avertir le produit supprimer 
  alert("Ce produit à bien été ajouter au panier !  ");
  window.location.href = "cart.html";


  // Je selectionne et applique les objets dans le localStorage
  productsInLocalStorage.push(product)

  localStorage.setItem('products', JSON.stringify(productsInLocalStorage))

  //Si le localstorage est vide, on créer tableau, on push le panier dedans et on stock dans localStorage
  if (quantity > 1) {
    alert(`Vous avez ajouté ${quantity} articles au panier`);
  } else if (quantity == 1) {
    alert(`Vous avez ajouté ${quantity} article au panier`);
  }
}
)










