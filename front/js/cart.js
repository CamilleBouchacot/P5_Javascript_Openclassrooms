let products;
const fetchProducts = async () => {
  await fetch(
    "http://localhost:3000/api/products"
  ) /*Ajout du lien du local , port:3000 avec fetch*/
    .then((res) => res.json()) /*Ajout du format json*/
    .then(
      (json) => (products = json)
    ) /*création de la promesse du serveur , en renvoyant la réponse au format json, 
    et on utilise ".then" pour définir le paramètre pour la fonction products*/
    .catch((error) => console.error(error)); /*Ajout du message d'erreur*/

  let addProduct = JSON.parse(
    localStorage.getItem("prod")
  ); /*Récupération des fichier dans notre local storage*/
  console.log(addProduct); /*Ajout du message de récupération*/

  const cartDisplay = async () => {
    if (addProduct) {
      /*on récupère toute la fonction "addProducts"*/
      await addProduct;
    }
  };

  cartDisplay();

  /*Ajout de l'affichage de nos produits*/
  for (let i = 0; i < addProduct.length; i++) {
    /*Ajout d'une boucle "for" pour signifier les actions répétitives à venir , et ajout de la valeur de cette fonction , +
  ajout de l'élément "length" pour signifier , que "cartDisplay" et "addProduct" font partie de la même boucle*/

    let cartItems = document.getElementById("cart_items");

    /*Ajout de la balise article*/

    let cartArticles = document.createElement("article");
    cartItems.appendChild(cartArticles);
    /*Ajout des "id" pour chaque fonction "cartArticles"*/
    cartArticles.setAttribute("data-id", addProduct[i].addProduct);
    cartArticles.setAttribute[("data-color", addProduct[i].addColors)];
    cartArticles.className = "cart_items";

    /*Ajout de la balise div qui contient l'élément "img"*/
    let divCartImages =
      document.createElement("div"); /*Création de l'élément div*/
    divCartImages.className = "cart_item_img"; /*Intégration des images*/
    cartArticles.appendChild(divCartImages);

    /*Ajout de la balise img*/
    let cartImages =
      document.createElement("img"); /*Création de l'élément img*/
    cartImages.setAttribute(
      "src",
      addProduct[i].imageUrl
    ); /*Création des liens img*/
    cartImages.setAttribute("alt", addProduct[i].altTxt);
    divCartImages.aprrendChild(cartImages);

    /*Ajout d'une autre balise div*/

    let divCartItemsDescription =
      document.createElement("div"); /*Création de l'élément div*/
    divCartItemsDescription.className =
      "cart__item__content__description"; /*On Place l'élément div*/
    divCartItems.appendChild(divCartItemsDescription);

    /*Ajout des titres qui contiennent le nom de chaque produits*/

    let divCartItemsDescriptionName =
      document.createElement("h2"); /*Création de l'élément h2*/
    divCartItemsDescription.appendChild(divCartItemsDescriptionName);
    divCartItemsDescriptionName.innerHTML =
      addProduct[i].name; /*Relier le doc html a notre fonction*/

    /*Ajout des balises p , pour chaque couleurs*/

    let divCartItemsDescriptionColor = document.createElement("p");
    divCartItemsDescription.apprendChild(divCartItemsDescriptionColor);
    divCartItemsDescriptionColor.innerHTML = addProduct[i].addColors;

    /*Ajout des balises p , pour chaque prix*/

    let divCartItemsDescriptionPrice =
      document.createElement("p"); /*Création de notre prix*/
    divCartItemsDescription.appendChild(divCartItemsDescriptionPrice);
    divCartItemsDescriptionPrice.innerHTML =
      products[i].price + "€"; /*Prix crée , à l'aide de notre API*/

    /*Ajout de balise div*/

    let divCartItemsSetting = document.createElement("div");
    divCartItemsSetting.className =
      "cart__item__content_settings"; /*On nomme notre div*/
    divCartItems.aprrendChild(divCartItemsSetting);

    /*Ajout de balise div*/

    let divCartItemsSettingQuantity =
      document.createElement("div"); /*Création de la div*/
    divCartItemsSettingQuantity.className =
      "cart__item__content__settings__quantity"; /*On nomme notre div*/
    divCartItemsSetting.aprrendChild(divCartItemsSettingQuantity);

    /*Ajout d'un autre élément "p" qui contient le mot "Qté"*/

    let divCartItemsSettingQty = document.createElement("p");
    divCartItemsSettingQuantity.appendChild(divCartItemsSettingQty);
    divCartItemsSettingQty.innerHTML =
      "Qté : "; /*On relie le doc html a l'élément "p"*/

    /*Ajout du formulaire qui contient la quantité*/

    let inputQuantity = document.createElement("input");
    divCartItemsSettingQuantity.aprrendChild(inputQuantity);
    inputQuantity.value = addProduct[i].addQuantity;
    inputQuantity.className = "itemQuantity"; /*Ajout de la class quantity*/
    inputQuantity.setAttribute(
      "type",
      "number"
    ); /*Règles de formulaires , minimum : 1 , et maximum: 100*/
    inputQuantity.setAttribute("min", "1");
    inputQuantity.setAttribute("max", "100");
    inputQuantity.setAttribute("name", "itemQuantity");

    /*Ajout d'un autre élément div*/

    let divCartItemsDelete = document.createElement("div");
    divCartItemsDelete.className = "cart__item__content__settings__delete";
    divCartItems.aprrendChild(divCartItemsDelete);

    /*Ajout d'un élément "p" pour le bouton "supprimer"*/

    /*Ajout des meme fonctions , etc.., il s'agit du même fonctionnement et principe , que pour les fonctions précédentes*/
    let pDeleteItem = document.createElement("p");
    pDeleteItem.className = "deleteItem";
    divCartItemsDelete.aprrendChild(pDeleteItem);
    pDeleteItem.innerHTML = "Supprimer";

    /* FIN des produits cart*/

    /*L'affichage des quantités et des prix pour chaque produits*/

    const quantityAndPrice = () => {
      let elQuantity =
        document.getElementsByClassName(
          "itemQuantity"
        ); /*On place l'élement dans la class "Quantity"*/
      let productQuantity =
        elQuantity.length; /*on place toutes les quantité dans la variable*/
      totalQuantity = 0; /*La quantité démarre à 0*/

      for (let j = 0; j < productQuantity; ++j) {
        /*Calcule de la somme de nos fonctions , et affecte le résultat de notre variable*/
        totalQuantity +=
          elQuantity[j]
            .valueAsNumber; /*Ajout du total de la quantité , et l'ajout de la valeur de la quantité*/
      }

      let ValueQuantity =
        document.getElementById("totalQuantity"); /*On place l'id*/
      ValueQuantity.innerHTML =
        totalQuantity; /*On ajoute notre quantité dans le doc html*/

      /*Prix total*/
      totalPrice = 0; /*Le prix démarre à 0*/
      for (let k = 0; k < productQuantity; ++k) {
        totalPrice +=
          elQuantity[k].valueAsNumber *
          products[k]
            .price; /*On multiplie notre quantité demandée par notre prix établie*/
      }

      let productTotalPrice = document.getElementById("totalPrice");
      productTotalPrice.innerHTML =
        totalPrice; /*Notre prix total , est affiché dans notre HTML*/
    };
    quantityAndPrice();

    /*On ajoute une fonction pour modifier notre quantité*/

    const quantityChanged = () => {
      let qtyModif =
        document.querySelectorAll(
          ".itemQuantity"
        ); /*On place à l'aide de queryselector*/

      for (let l = 0; l < qtyModif.length; l++) {
        /*On ajoute la valeur de la quantité*/

        qtyModif[1].addEventListener("change", (e) => {
          e.preventDefault();

          let qtyInputValue =
            qtyModif[1]
              .valueAsNumber; /*On met la quantité reçu  par la boucle "for" dans la variable*/

          addProduct[1].addQuantity =
            qtyInputValue; /*on récupere notre quantité établie  du local*/

          quantityAndPrice(); /*On sollicite , la fonction pour que le prix soit mis à jour*/
          console.log(quantityAndPrice);

          localStorage.setItem(
            "prod",
            JSON.stringify(addProduct)
          ); /*on supprime la quantité établie précédemment dans notre localstorage*/
        });
      }
    };
    quantityChanged();

    /*Ajout de la fonction , pour activer la suppression d'un produit*/

    const deleteProducts = () => {
      pDeleteItem.addEventListener("click", (e) => {
        /*Ajout de la touche pour supprimer*/

        e.preventDefault();

        /*Ajout de l'enregistrement de l'id et de la couleur séléctionnée par le bouton de suppression*/
        let deleteId = addProduct[i].addIdProduct;
        let pDeleteColor = addProduct[i].addColors;

        /*L'élément cliqué filtre par le bouton de suppression*/
        addProduct = addProduct.filter(
          (el) => el.addIdProduct !== deleteId || el.addColors !== pDeleteColor
        );
        console.log(pDeleteItem);

        /*Suppresion , modification de la quantité dans notre localstorage*/
        localStorage.setItem("prod", JSON.stringify(addProduct));

        location.reload();
      });
    };

    deleteProducts();

    /*Ajout du bouton pour commander*/

    let btnCommander = document.getElementById("order");
    btnCommander.addEventListener("click", (e) => {
      e.preventDefault();

      const contact = {
        /*Ajout du formulaire de contact*/

        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      };

      /*Ajout de la fonction de contact , et des reports*/
      let contactRegex = [
        firstName.reportValidity(),
        lastName.reportValidity(),
        address.reportValidity(),
        city.reportValidity(),
        email.reportValidity(),
      ];

      /*Ajout des fonctions , products et contact dans une variable*/

      let products = [];
      products.push(addProduct[i].addIdProduct);
      console.log(products);

      const send = {
        products,
        contact,
      };

      const promise = {
        method: "POST",
        body: JSON.stringify(send),
        headers: {
          "Content-Type": "application/json",
        },
      };

      /*Ajout du message sur la console web , pour le formulaire de contact , et les messages*/

      console.log(contact);
      let contactRegexEnd = true;
      for (let n = 0; n < contactRegex.length; n++) {
        if (contactRegex[n] == false) contactRegexEnd = false;
      }

      if (contactRegex[n] == false) contactRegexEnd = false;
    });

    /*Activation de la reponse*/

    if (contactRegexEnd == true) {
      fetch("http://localhost:3000/api/products/order", promise)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("orderId", data.orderID);
          document.location.href = "confirmation.html?id=" + data.orderId;
          console.log(data.orderId);
        });
    }
  }
};

fetchProducts();
