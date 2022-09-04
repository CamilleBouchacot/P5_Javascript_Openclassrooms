let idProduct = new URL(window.location.href).searchParams.get(
  "id"
); /*On prend l'id avec l'url*/
console.log(idProduct);

/*On récupère tout les sélécteurs CSS et les ID du doc HTML*/
let picture =
  document.querySelector(
    ".item__img"
  ); /*On reprend le selecteur du CSS pour l'img*/
let title =
  document.getElementById(
    "title"
  ); /*on reprend l'id title, price, description, et colors du html*/
let price = document.getElementById("price");
let description = document.getElementById("description");
let colorsArray = document.getElementById("colors");

/*On ajoute une fonction , pour reprendre l'id et les données de l'api*/

let product; /*On reprend notre API , avec fetch , comme précédemment , et on ajoute la variable avec l'id*/
const getProduct = async () => {
  await fetch("http://localhost:3000/api/products/" + idProduct).then(
    (res) => res.json().then((json) => (product = json)) /*Reponse*/
  );
};

getProduct(); /*Ajout de la fonction d'avant , pour reprendre notre API*/

/*Ajout de la fonction , pour lier le doc html , avec les données de notre API*/

const showProduct = async () => {
  await getProduct();

  /*Ajout des balises img*/
  let image = document.createElement("img");
  image.setAttribute("src", product.imageUrl); /*Ajout du lien img*/
  image.setAttribute("alt", product.altTxt); /*Ajout de la description img*/
  picture.appendChild(image);

  /*Ajout du nom*/
  title.innerHTML = product.name;

  /*Ajout du prix*/
  price.innerHTML = product.description;

  /*Ajout de la boucle "for", pour prendre les couleurs du tableau établi , et on crées les éléments html*/
  for (let i = 0; i < product.colors.length; i++) {
    let color = document.createElement("option"); /*On creé l'élément*/
    color.setAttribute("value", product.colors[i]); /*On place l'élement*/
    color.innerHTML = product.colors[i];
    colorsArray.appendChild(color);
  }

  /*On ajoute une nouvelle fonction et on prend les même paramètres que précedemment*/

  addBasket(product);
};

showProduct();

/*On ajoute une autre fonction pour ajouter des articles dans son "cart"*/
const addBasket = () => {
  let button =
    document.getElementById("addToCart"); /*On place l'id dans la variable*/
  const quantity =
    document.getElementById("quantity"); /*On place l'id dans la variable*/
  let prodArray = JSON.parse(
    localStorage.getItem("prod")
  ); /*On utilise une méthode .parse pour les mettre au format JSON directement*/
  console.log(product);

  /*On prend la variable button , et on la place au click , le code se declenchera au click*/
  button.addEventListener("click", () => {
    if (
      quantity.value > 0 &&
      quantity.value <= 100 &&
      quantity.value != 0 &&
      colors.value != 0
    ) {
      /*Si notre quantité est supérieur à 0 et que la quantité inférieur 
    à 100 , alors le code s'executera */

      /*On ajoute ce qu'il y a dans notre local storage dans une variable avec l'objet "prod"*/
      const addIdAndValue = Object.assign({}, product, {
        /*On se sert de object.assign pour l'ajout*/

        /*On ajoute , l'id , la couleur , la quantité*/
        addIdProduct: `${idProduct}`,
        addColors: `${colorsArray.value}`,
        addQuantity: `${quantity.value}`,
      });

      console.log(addIdAndValue);

      /*On ajoute la fonction  pour un produit séléctionné*/

      const addIdProductLocalStorage = () => {
        prodArray.push(addIdAndValue); /*On effectue "push" pour "const"*/
        localStorage.setItem(
          "prod",
          JSON.stringify(prodArray)
        ); /*On place "prod" dans notre local storage et on transofrme prodArray en string dans notre local*/
      };

      /*On ajoute si , et , sinon , pour activer le message sur notre console web*/
      if (prodArray) {
        console.log(prodArray);
      } else {
        prodArray = [];
        console.log(prodArray);
      }

      /*Fonction pour ajout d'un produit , et de la quantité dans le localstorage*/
      addBasket(prodArray, idProduct, colorsArray.value);

      function addBasket(product, id, colors) {
        let basket = product;
        let foundProduct = basket.find(
          (p) => p.addIdProduct == id && p.addColors == colors
        );

        /*Si le produit est déjà dans le local*/
        if (foundProduct != undefined) {
          foundProduct.addQuantity++;
          console.log(foundProduct.addQuantity);
          localStorage.setItem("prod", JSON.stringify(prodArray));

          /*Si le produit n'est plus dans le cart*/
        } else {
          addIdProductLocalStorage();
          console.log("ko");
        }

        alert("Le produit a été ajouté à votre panier");
      }
    } else {
      alert(
        "Veuillez selectionner une couleur et une quantité comprise entre 1 et 100"
      );
    }
  });
};
