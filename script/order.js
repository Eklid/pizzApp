//Caterody buttons
let pizzaBtnElement = document.getElementById("pizza-btn");
let saladBtnElement = document.getElementById("salad-btn");
let starterBtnElement = document.getElementById("starter-btn");
pizzaBtnElement.style.backgroundColor = "red";

//Product buttons
let produc1BtnElement = document.getElementById("product-1");
let produc2BtnElement = document.getElementById("product-2");
let produc3BtnElement = document.getElementById("product-3");
let produc4BtnElement = document.getElementById("product-4");

let pizzasNames = ["Pizza1", "Pizza2", "Pizza3", "Pizza4"];
let saladsNames = ["Salad1", "Salad2", "Salad3", "Salad4"];
let startersNames = ["Starter1", "Starter2", "Starter3", "Starter4"];

//Orders
let total = 0;
let orderProductsDivElement = document.getElementById("order-products");

function onPizzaClick() {
  pizzaBtnElement.style.backgroundColor = "";
  saladBtnElement.style.backgroundColor = "";
  starterBtnElement.style.backgroundColor = "";

  produc1BtnElement.innerText = pizzasNames[0];
  produc2BtnElement.innerText = pizzasNames[1];
  produc3BtnElement.innerText = pizzasNames[2];
  produc4BtnElement.innerText = pizzasNames[3];

  pizzaBtnElement.style.backgroundColor = "red";
}

function onSaladClick() {
  pizzaBtnElement.style.backgroundColor = "";
  saladBtnElement.style.backgroundColor = "";
  starterBtnElement.style.backgroundColor = "";

  produc1BtnElement.innerText = saladsNames[0];
  produc2BtnElement.innerText = saladsNames[1];
  produc3BtnElement.innerText = saladsNames[2];
  produc4BtnElement.innerText = saladsNames[3];

  saladBtnElement.style.backgroundColor = "red";
}

function onStarterClick() {
  pizzaBtnElement.style.backgroundColor = "";
  saladBtnElement.style.backgroundColor = "";
  starterBtnElement.style.backgroundColor = "";

  produc1BtnElement.innerText = startersNames[0];
  produc2BtnElement.innerText = startersNames[1];
  produc3BtnElement.innerText = startersNames[2];
  produc4BtnElement.innerText = startersNames[3];

  starterBtnElement.style.backgroundColor = "red";
}

//Products
let orderProducts = [];

function onProduct1Clicked() {
  let productOrderName = produc1BtnElement.innerText;

  let isPresent = false;
  let counter;
  let position = 0;

  //Kontrollo nese produkti eshte porositur me perpara
  for (counter = 0; counter < orderProducts.length; counter = counter + 1) {
    if (orderProducts[position] === productOrderName) {
      isPresent = true;
    }
    position = position + 1;
  }

  if (isPresent === true) {
    //shto sasine
    let oldOrderProductAmount = document.getElementById(
      productOrderName + "-amount"
    );

    oldOrderProductAmount.innerText = +oldOrderProductAmount.innerText + 1;
  }
  if (isPresent === false) {
    //shto produktin dhe emrin e produktit ne vektor
    addProduct1ToOrder();
    orderProducts.push(productOrderName);
    //Ndrysho total
  }

  let productPrice = +document.getElementById(productOrderName + "-price")
    .innerText;

  total = total + productPrice;
  let totalElement = document.getElementById("total");
  totalElement.innerText = total;
}

function onProduct2Clicked() {
  let productOrderName = produc2BtnElement.innerText;

  let isPresent = false;
  let counter;
  let position = 0;

  //Kontrollo nese produkti eshte porositur me perpara
  for (counter = 0; counter < orderProducts.length; counter = counter + 1) {
    if (orderProducts[position] === productOrderName) {
      isPresent = true;
    }
    position = position + 1;
  }

  if (isPresent === true) {
    //shto sasine
    let oldOrderProductAmount = document.getElementById(
      productOrderName + "-amount"
    );

    oldOrderProductAmount.innerText = +oldOrderProductAmount.innerText + 1;
  }
  if (isPresent === false) {
    //shto produktin dhe emrin e produktit ne vektor
    addProduct2ToOrder();
    orderProducts.push(productOrderName);
  }
  let productPrice = +document.getElementById(productOrderName + "-price")
    .innerText;
  total = total + productPrice;
  let totalElement = document.getElementById("total");
  totalElement.innerText = total;
}

function onProduct3Clicked() {
  let productOrderName = produc3BtnElement.innerText;

  let isPresent = false;
  let counter;
  let position = 0;

  //Kontrollo nese produkti eshte porositur me perpara
  for (counter = 0; counter < orderProducts.length; counter = counter + 1) {
    if (orderProducts[position] === productOrderName) {
      isPresent = true;
    }
    position = position + 1;
  }

  if (isPresent === true) {
    //shto sasine
    let oldOrderProductAmount = document.getElementById(
      productOrderName + "-amount"
    );

    oldOrderProductAmount.innerText = +oldOrderProductAmount.innerText + 1;
  }
  if (isPresent === false) {
    //shto produktin dhe emrin e produktit ne vektor
    addProduct3ToOrder();
    orderProducts.push(productOrderName);
  }
  let productPrice = +document.getElementById(productOrderName + "-price")
    .innerText;

  total = total + productPrice;
  let totalElement = document.getElementById("total");
  totalElement.innerText = total;
}

function onProduct4Clicked() {
  let productOrderName = produc4BtnElement.innerText;

  let isPresent = false;
  let counter;
  let position = 0;

  //Kontrollo nese produkti eshte porositur me perpara
  for (counter = 0; counter < orderProducts.length; counter = counter + 1) {
    if (orderProducts[position] === productOrderName) {
      isPresent = true;
    }
    position = position + 1;
  }

  if (isPresent === true) {
    //shto sasine
    let oldOrderProductAmount = document.getElementById(
      productOrderName + "-amount"
    );

    oldOrderProductAmount.innerText = +oldOrderProductAmount.innerText + 1;
  }
  if (isPresent === false) {
    //shto produktin dhe emrin e produktit ne vektor
    addProduct4ToOrder();
    orderProducts.push(productOrderName);
  }
  let productPrice = +document.getElementById(productOrderName + "-price")
    .innerText;

  total = total + productPrice;
  let totalElement = document.getElementById("total");
  totalElement.innerText = total;
}

function addProduct1ToOrder() {
  let productOrderName = produc1BtnElement.innerText;
  let newProductDivElement = document.createElement("div");
  newProductDivElement.classList.add("order-product");
  newProductDivElement.id = productOrderName;
  orderProductsDivElement.appendChild(newProductDivElement);

  let newProductTitleElement = document.createElement("h2");
  newProductTitleElement.classList.add("product-title");
  newProductTitleElement.innerText = productOrderName;

  let newProductAmountElement = document.createElement("h2");
  newProductAmountElement.classList.add("product-amount");
  newProductAmountElement.id = productOrderName + "-amount";
  newProductAmountElement.innerText = 1;

  let newProductPriceElement = document.createElement("h2");
  newProductPriceElement.classList.add("product-price");
  newProductPriceElement.id = productOrderName + "-price";
  newProductPriceElement.innerText = 300;

  let removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("product-remove");
  removeBtnElement.innerText = "X";
  removeBtnElement.onclick = function onRemove() {
    let oldDiv = document.getElementById(productOrderName);
    orderProducts = orderProducts.filter((name) => name != productOrderName);
    let amount = +document.getElementById(productOrderName + "-amount")
      .innerText;
    let price = +document.getElementById(productOrderName + "-price").innerText;

    total = total - amount * price;
    let totalElement = document.getElementById("total");
    totalElement.innerText = total;
    oldDiv.remove();
  };

  newProductDivElement.appendChild(newProductTitleElement);
  newProductDivElement.appendChild(newProductAmountElement);
  newProductDivElement.appendChild(newProductPriceElement);
  newProductDivElement.appendChild(removeBtnElement);
}

function addProduct2ToOrder() {
  let productOrderName = produc2BtnElement.innerText;
  let newProductDivElement = document.createElement("div");
  newProductDivElement.classList.add("order-product");
  newProductDivElement.id = productOrderName;
  orderProductsDivElement.appendChild(newProductDivElement);

  let newProductTitleElement = document.createElement("h2");
  newProductTitleElement.classList.add("product-title");
  newProductTitleElement.innerText = productOrderName;

  let newProductAmountElement = document.createElement("h2");
  newProductAmountElement.classList.add("product-amount");
  newProductAmountElement.id = productOrderName + "-amount";
  newProductAmountElement.innerText = 1;

  let newProductPriceElement = document.createElement("h2");
  newProductPriceElement.classList.add("product-price");
  newProductPriceElement.id = productOrderName + "-price";
  newProductPriceElement.innerText = 300;

  let removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("product-remove");
  removeBtnElement.innerText = "X";
  removeBtnElement.onclick = function onRemove() {
    let oldDiv = document.getElementById(productOrderName);
    orderProducts = orderProducts.filter((name) => name != productOrderName);
    console.log(productOrderName + "-amount");
    let amount = +document.getElementById(productOrderName + "-amount")
      .innerText;
    console.log(
      document.getElementById(productOrderName + "-amount").innerText
    );
    let price = +document.getElementById(productOrderName + "-price").innerText;

    total = total - amount * price;
    let totalElement = document.getElementById("total");
    totalElement.innerText = total;

    oldDiv.remove();
  };

  newProductDivElement.appendChild(newProductTitleElement);
  newProductDivElement.appendChild(newProductAmountElement);
  newProductDivElement.appendChild(newProductPriceElement);
  newProductDivElement.appendChild(removeBtnElement);
}

function addProduct3ToOrder() {
  let productOrderName = produc3BtnElement.innerText;
  let newProductDivElement = document.createElement("div");
  newProductDivElement.classList.add("order-product");
  newProductDivElement.id = productOrderName;

  orderProductsDivElement.appendChild(newProductDivElement);

  let newProductTitleElement = document.createElement("h2");
  newProductTitleElement.classList.add("product-title");
  newProductTitleElement.innerText = productOrderName;

  let newProductAmountElement = document.createElement("h2");
  newProductAmountElement.classList.add("product-amount");
  newProductAmountElement.id = productOrderName + "-amount";
  newProductAmountElement.innerText = 1;

  let newProductPriceElement = document.createElement("h2");
  newProductPriceElement.classList.add("product-price");
  newProductPriceElement.id = productOrderName + "-price";

  newProductPriceElement.innerText = 300;
  let removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("product-remove");
  removeBtnElement.innerText = "X";
  removeBtnElement.onclick = function onRemove() {
    let oldDiv = document.getElementById(productOrderName);
    orderProducts = orderProducts.filter((name) => name != productOrderName);
    let amount = +document.getElementById(productOrderName + "-amount")
      .innerText;
    let price = +document.getElementById(productOrderName + "-price").innerText;

    total = total - amount * price;
    let totalElement = document.getElementById("total");
    totalElement.innerText = total;

    oldDiv.remove();
  };

  newProductDivElement.appendChild(newProductTitleElement);
  newProductDivElement.appendChild(newProductAmountElement);
  newProductDivElement.appendChild(newProductPriceElement);
  newProductDivElement.appendChild(removeBtnElement);
}

function addProduct4ToOrder() {
  let productOrderName = produc4BtnElement.innerText;
  let newProductDivElement = document.createElement("div");
  newProductDivElement.classList.add("order-product");
  newProductDivElement.id = productOrderName;

  orderProductsDivElement.appendChild(newProductDivElement);

  let newProductTitleElement = document.createElement("h2");
  newProductTitleElement.classList.add("product-title");
  newProductTitleElement.innerText = productOrderName;

  let newProductAmountElement = document.createElement("h2");
  newProductAmountElement.classList.add("product-amount");
  newProductAmountElement.id = productOrderName + "-amount";
  newProductAmountElement.innerText = 1;

  let newProductPriceElement = document.createElement("h2");
  newProductPriceElement.classList.add("product-price");
  newProductPriceElement.id = productOrderName + "-price";

  newProductPriceElement.innerText = 300;

  let removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("product-remove");
  removeBtnElement.innerText = "X";
  removeBtnElement.onclick = function onRemove() {
    let oldDiv = document.getElementById(productOrderName);
    orderProducts = orderProducts.filter((name) => name != productOrderName);
    let amount = +document.getElementById(productOrderName + "-amount")
      .innerText;
    let price = +document.getElementById(productOrderName + "-price").innerText;

    total = total - amount * price;
    let totalElement = document.getElementById("total");
    totalElement.innerText = total;

    oldDiv.remove();
  };

  newProductDivElement.appendChild(newProductTitleElement);
  newProductDivElement.appendChild(newProductAmountElement);
  newProductDivElement.appendChild(newProductPriceElement);
  newProductDivElement.appendChild(removeBtnElement);
}

//Test
//Krijo elementin
// let newParagraphElement = document.createElement("h1"); // '<p></p>'
// newParagraphElement.innerText = "Added by javascript";
// newParagraphElement.classList.add("order-p");

// //E ngjisim te html(document)
// let orderProductsDivElement = document.getElementById("order-products");
// orderProductsDivElement.appendChild(newParagraphElement);
