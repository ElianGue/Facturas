import { facturas } from "./utilities.js";

// Seleccionar elementos del DOM
const tbody = document.querySelector("#tablaFacturas tbody");
const btnTodos = document.getElementById("todos");
const btnPendientes = document.getElementById("pendientes");
const btnPagadas = document.getElementById("pagada");
const addBtn = document.getElementById("addContactBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("contactForm");

//mostrar todas las facturas
function todos() {
  tbody.innerHTML = "";
  facturas.forEach((factura) => {
    fila(factura);
  });
}

//mostrar las facturas pendientes
function pendientes() {
  tbody.innerHTML = "";
  facturas.forEach((factura) => {
    if (factura.estado === "pendiente") {
      fila(factura);
    }
  });
}

//mostrar las facturas pagadas
function pagadas() {
  tbody.innerHTML = "";
  facturas.forEach((factura) => {
    if (factura.estado === "pagada") {
      fila(factura);
    }
  });
}

//crear una fila en la tabla
function fila(factura) {
  const color = factura.estado === "pagada" ? "#00ce00" : "#ff0000"; // Color según el estado
  const botonEliminar =
    factura.estado === "pagada" ? '<button class="action">Del</button>' : ""; // Botón solo para pagadas

  const template_fila = `
    <tr>
      <td>${factura.id}</td>
      <td>${factura.numeroFactura}</td>
      <td>${factura.descripcion}</td>
      <td style="color: ${color};">${factura.estado}</td>
      <td>${factura.fecha}</td>
      <td>${botonEliminar}</td>
    </tr>
  `;

  tbody.innerHTML += template_fila;
}

// Función para mostrar u ocultar el modal
function toggleModal() {
  modal.classList.toggle("show");
}

//para agregar una nueva factura
function agregarFactura(e) {
  e.preventDefault();
  // Obtener los valores del formulario
  const formData = new FormData(form);
  const nuevaFactura = {
    id: facturas.length > 0 ? facturas[facturas.length - 1].id + 1 : 1,
    numeroFactura: formData.get("factura"),
    descripcion: formData.get("descripcion"),
    estado: formData.get("estado"),
    fecha: formData.get("fecha"),
  };

  facturas.push(nuevaFactura);
  todos();
  toggleModal();
  form.reset();
}
function eliminarFactura(id) {
  const index = facturas.findIndex((factura) => factura.id === id);
  if (index !== -1) {
    facturas.splice(index, 1);
    todos();
  }
}

btnTodos.addEventListener("click", todos);
btnPendientes.addEventListener("click", pendientes);
btnPagadas.addEventListener("click", pagadas);
console.log(addBtn);
addBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
form.addEventListener("submit", agregarFactura);
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("action")) {
    const fila = e.target.closest("tr");
    const id = parseInt(fila.querySelector("td").textContent);
    eliminarFactura(id);
  }
});

todos();
