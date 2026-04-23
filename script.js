// NAVIGATION
function goShop() {
  window.location.href = "shop.html";
}

// FADE ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});



function acceptCookies() {
  localStorage.setItem("cookie", "accepted");
  document.getElementById("cookie-box").style.display = "none";
}

// CART SYSTEM
let cart = [];

function addToCart(item) {
  cart.push(item);
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cart");
  if (!list) return;

  list.innerHTML = "";
  cart.forEach(i => {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });
}

// FORM VALIDATION
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Form submitted!");
  return true;
}

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  const cookieBox = document.getElementById("cookie-box");

  if (intro) {
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.transition = "1s";

      setTimeout(() => {
        intro.style.display = "none";

        // SHOW COOKIE AFTER INTRO
        if (!localStorage.getItem("cookie")) {
          if (cookieBox) cookieBox.style.display = "block";
        }

      }, 1000);

    }, 4000);
  }

});
function goBack() {
  window.history.back();
}