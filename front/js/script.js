// Je séléctionne le DATA

const initData = async () => {

  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()
  products.forEach(product => {
    const items = document.querySelector("#items");
    // je crée le bloc article des canapés
    const item = `
         <a href="./product.html?id=${product._id}">
      <article>
          <img src=${product.imageUrl} alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
      </article>
  </a>`;

    // j'insere les blocs avec insertAdjacent
    items.insertAdjacentHTML('beforeEnd', item)
  }
  );

}
// J'utilise foreach pour creer une boucle et inserer l'id des blocs de canapés


initData()