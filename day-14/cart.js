let cartData = JSON.parse(localStorage.getItem("cartData"));

function showData(data) {
  document.getElementById("products").innerText = "";
  data.forEach((element, i) => {
    let productBox = document.createElement("div");
    productBox.className = "product-box";

    let heading = document.createElement("h3");
    heading.innerText = element.category;

    let img = document.createElement("img");
    img.src = element.image;

    let name = document.createElement("p");
    name.innerText = element.name;

    let price = document.createElement("p");
    price.innerText = element.price;

    let rating = document.createElement("p");
    rating.innerText = element.rating;

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      deleteFun(element, i);
    });
    productBox.append(heading, img, name, price, rating, button);
    document.getElementById("products").append(productBox);
  });
}

showData(cartData);

function deleteFun(element, i) {
  let deleteCartData = JSON.parse(localStorage.getItem("cartData"));
  deleteCartData.splice(i, 1);
  localStorage.setItem("cartData", JSON.stringify(deleteCartData));
  showData(deleteCartData);
}