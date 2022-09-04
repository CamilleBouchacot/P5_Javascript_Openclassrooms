let products;

// On ajoute la fonction pour aller prendre l'API
const fetchProducts = async () => {
  await fetch(
    "http://localhost:3000/api/products"
  ) /*Chercher notre API avec fetch*/
    .then((res) => res.json())
    .then(
      (JSON) => (products = JSON)
    ) /*On prend les informations de notre API , et qu'on va mettre en format json*/
    .catch((error) => console.error(error));
  console.log(
    products
  ); /*Ajoute de la "console.log" pour affiche un message dans la console Web*/
};

fetchProducts(); /*On remet la fonction d'avant , pour récupérer les données de l'API*/
/*Ajout de la fonction , pour lier les éléments fournis , que l'on creer avec l'API*/

const showProducts =
  async(); /*ajout de la balise async , pour permettre à la fonction de retourner une promesse*/
await fetchProducts(); /*Ajout des paranthèses vides , pour rappeler a "fetchProducts" la fonction "products"*/

for (let i = 0; i < products.length; i++) {
  /*Ajout de la valeur "i++" , pour nous permettre de renovyer une valeur qui est le résultat de notre modification + 
                                            ajout de la valeur "length" , pour représenter  la longueur de notre chaine de caractères , qui est exprimées en nnombre*/
  let items = document.getElementById("items");

  /*Ajout des liens*/
  let link = document.createElement("a");
  link.setAttribute("href", "product.html?id=" + products[i]._id);
  items.appendChild(link);

  /*Création de mes balises "article"*/
  let article = document.createElement("article");
  link.apprendChild(article);

  /*Ajout de simages*/
  let images = document.createElement("img");
  images.setAttribute("src", products[i].imageUrl); /*Ajout du lien de l'image*/
  images.setAttribute(
    "alt",
    products[i].altTxt
  ); /*Ajout de la description de l'image*/
  article.appendChild(images); /*Ajoute de la totalité de la fonction images*/

  /*Création des titres du html*/
  let title = document.createElement("h3"); /*Ajout de la balise h3*/
  title.innerHTML = products[i].name; /*Ajout du document html*/
  article.apprendChild(title); /*Ajout de la totalité de la fonction "title"*/

  /*Création des paragraphes*/
  let description = document.createElement("p"); /*Ajout de la balise "p"*/
  description.innerHTML = products[i].description; /*Ajout du document html*/
  article.appendChild(
    description
  ); /*Ajout de la totalité de la fonction description*/
}
showProducts(); /*Rappel de la variable qui contient les données de l'api , ajouter précédemment*/
