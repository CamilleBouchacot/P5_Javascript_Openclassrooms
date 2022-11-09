/*On prend l'id avec l'url*/
let parsedUrl = new URL(window.location.href);
// Je récupere mon id avec une variable 
let ParamId = parsedUrl.searchParams.get("id")

const response = await fetch(`http://localhost:3000/api/products/${ParamId}`)
const canap = await response.json()

// Image des produits ajoutés 

const productImg = new Image()
productImg.src = canap.imageUrl
productImg.alt = canap.altTxt


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

/*on reprend l'id title, price, description, et colors du html*/
document.getElementById("price").innerHTML = canap.price
document.getElementById("description").innerHTML = canap.description

// Je selectionne , le boutton "ajouter au panier" et au click sur le boutton , on va lui donner des instructions
const addToCart = document.querySelector("#addToCart")

addToCart.addEventListener("click", (e) => {

  e.preventDefault()
  // Recupération des données dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem('products'))

  //  Si le localStorage est vide , on crée un tableau vide 
  if (!productsInLocalStorage) {
    productsInLocalStorage = []
  }

  let selectedColor = document.querySelector("#colors").value

  // On ajoute les couleurs dans le localStorage
  const product = {
    productId: canap._id,
    option: selectedColor,
    quantity: quantity.value
  }


  const productList = productsInLocalStorage.filter((product) => product.productId == ParamId);
  const selectedProd = productList.filter((product) => product.option == selectedColor);


  if (selectedProd == 0) {
    //Si le localstorage est vide, on créer tableau, on push le panier dedans et on stock dans localStorage
    if (product.quantity < 100) {
      alert(`Vous avez ajouté ${product.quantity} articles au panier`);
      window.location.href = "cart.html"
      // Je selectionne et applique les objets dans le localStorage
      productsInLocalStorage.push(product);
      localStorage.setItem('products', JSON.stringify(productsInLocalStorage))

    } else {
      alert(`Vous ne pouvez pas ajouter plus de 100 produits.`);
    }
  } else {
    // on modifie l'attribut quantité du produit
    selectedProd[0].quantity = parseInt(quantity.value);
    // map with spread operator
    let updatedProducts = productsInLocalStorage.map(el => el.id == ParamId ? { ...el, selectedProd } : el);
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    alert('La quantité à été mise à jour.')
    window.location.href = "cart.html"

  }


}
)










