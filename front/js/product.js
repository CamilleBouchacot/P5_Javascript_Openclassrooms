/*On prend l'id avec l'url*/
let parsedUrl = new URL(window.location.href);
// Je récupere mon id avec une variable 
let ParamId = parsedUrl.searchParams.get("id")
console.log(ParamId)

let canap = {}

canap = products.find(x => x._id === ParamId)
console.log(canap)

// Ajout de mon image avec imageUrl


let image = `<img src="../../back/images/${canap.imageUrl}" alt="Photographie d'un canapé">`


canap.colors.forEach(color => {
  // je crée les éléctions de couleurs avec option value
  const item = `<option value="${color}">${color}</option>
            `;

  // j'insere les informations a l'aide de insertAdjacentHTML
  document.querySelector("#colors").insertAdjacentHTML('beforeEnd', item)
}
);


/*Je me sert de innerHTML pour afficher mon image*/

document.querySelector(".item__img").innerHTML = image
let title = document.getElementById("title")/*on prend l'id du titre et des images*/
console.log(canap.imageUrl)
console.log(image)


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
    name: canap.name,
    option: colorsArray.value,
    quantity: quantity.value
  }


  // Je selectionne et applique les objets dans le localStorage
  productsInLocalStorage.push(product)

  localStorage.setItem('products', JSON.stringify(productsInLocalStorage))




  // je crée une boîte de dialogue pour confirmer l'ajout au panier
  let addConfirm = () => {
    alert('Le produit a bien été ajouté au panier');
  }



  // On redirige la page dans le bon chemin "cart.html"
  window.location.href = "./cart.html"


}
)









