const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

//método para recorrer el array

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}"
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
    `; 

     shopContent.append(content);

 
//boton 'comprar'

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.appendChild(comprar);

//funcionalidad del boton 

    comprar.addEventListener("click", () => {
       carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,   
        });
    });
});   

//función para que el usuario pueda ver los productos en el carrito

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =`
       <h1 class="modal-header-title">Carrito.</h1>
     `;
     modalContainer.append(modalHeader);

     const modalbutton = document.createElement("h1");
     modalbutton.innerText = "x";
     modalbutton.className = "modal-header-button";

     modalbutton.addEventListener("click" , () => {
     modalContainer.style.display = "none";

     })  

     modalHeader.append(modalbutton);

//método para recorrer el carrito

    carrito.forEach((product) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
         <img src="${product.img}">
         <h3>${product.nombre}</h3>
         <p>${product.precio} $</p>
      `;

     modalContainer.append(carritoContent)
});

 //método para calcular total 

     const total = carrito.reduce((acc, el) => acc + el.precio, 0);

     const totalBuying = document.createElement("div");
     totalBuying.className = "total-content";
     totalBuying.innerHTML = `total a pagar: ${total} $`;
     modalContainer.append(totalBuying);
    
    
})
