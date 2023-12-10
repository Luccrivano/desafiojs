// Elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const total = document.querySelector(".valor-total");
const suma = document.querySelector(".suma");
const cantidad = document.querySelector(".cantidad");
const resta = document.querySelector(".resta");

// Variables
let precio = 400000;
let valor = 0;

precioSpan.innerHTML = precio;
total.innerHTML = valor;

// Functions
function addprice() {
  precio += 400000;
  total.innerHTML = precio;
  cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
}

function subtractprice() {
  if (cantidad.innerHTML <= 0) {
    window.alert("No hay productos");
    return;
  }
  precio -= 400000;
  total.innerHTML = precio;
  cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1;
}

// Events
suma.addEventListener("click", addprice);
resta.addEventListener("click", subtractprice);
