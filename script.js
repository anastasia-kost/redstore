// toggle menu
const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

menuIcon.addEventListener("click", () => {
  menuToggle();
});

// product gallery
const productImg = document.getElementById("product-img");
const smallImgs = document.getElementsByClassName("small-img");

for (const smallImage of smallImgs) {
  smallImage.onclick = () => {
    productImg.src = smallImage.src;
  };
}
