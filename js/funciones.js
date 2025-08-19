

const dogs = [
    { nombre: "Firulais", desc: "Juguetón y cariñoso.", img: "../img/perros/perrito1.jpg" },
    { nombre: "Rex", desc: "Fiel guardián.", img: "../img/perros/perrito2.jpg" },
    { nombre: "Luna", desc: "Dulce y tranquila.", img: "../img/perros/perrito3.jpg" },
    { nombre: "Max", desc: "Ama correr en el parque.", img: "../img/perros/perrito4.jpg" },
    { nombre: "Bobby", desc: "Le encantan los niños.", img: "../img/perros/perrito5.jpg" },
    { nombre: "Rocky", desc: "Valiente y leal.", img: "../img/perros/perrito6.jpg" },
    { nombre: "Toby", desc: "Muy obediente.", img: "../img/perros/perrito7.webp" },
    { nombre: "Zeus", desc: "Grande y protector.", img: "../img/perros/perrito8.webp" },
    { nombre: "Chispa", desc: "Energía sin fin.", img: "../img/perros/perrito9.jpg" },
    { nombre: "Coco", desc: "Muy curioso.", img: "../img/perros/perrito10.jpg" },
    { nombre: "Simón", desc: "Le encantan las siestas.", img: "../img/perros/perrito11.jpg" },
    { nombre: "Duke", desc: "Elegante y noble.", img: "../img/perros/perrito12.jpg" }
];

const cats = [
    { nombre: "Michi", img: "../img/gatos/gato1.jpg", desc: "Duerme casi todo el día." },
    { nombre: "Nina", img: "../img/gatos/gato2.jpg", desc: "Muy cariñosa." },
    { nombre: "Milo", img: "../img/gatos/gato3.webp", desc: "Le encanta jugar." },
    { nombre: "Tom", img: "../img/gatos/gato4.jpg", desc: "Explorador nato." },
    { nombre: "Lola", img: "../img/gatos/gato5.webp", desc: "Muy tierna." },
    { nombre: "Chispa", img: "../img/gatos/gato6.jpg", desc: "Travieso y curioso." },
    { nombre: "Kira", img: "../img/gatos/gato7.jpg", desc: "Compañera fiel." },
    { nombre: "Felix", img: "../img/gatos/gato8.jpg", desc: "Muy independiente." },
    { nombre: "Tina", img: "../img/gatos/gato9.jpg", desc: "Le gusta acurrucarse." },
    { nombre: "Oliver", img: "../img/gatos/gato10.jpg", desc: "Siempre curioso." },
    { nombre: "Sasha", img: "../img/gatos/gato11.webp", desc: "Muy activa." },
    { nombre: "Nube", img: "../img/gatos/gato12.jpg", desc: "Muy tranquila." }
];

const allPets = dogs.concat(cats);
let mostrarPerros = true;

// Función para mostrar tarjetas
function mostrarMascotas(lista) {
  const container = document.getElementById("pet-container");
  container.innerHTML = "";
  lista.forEach(mascota => {
    container.innerHTML += `
      <div class="col-md-3 mb-4 pet-card">
        <div class="card h-100 shadow-sm">
          <img src="${mascota.img}" class="card-img-top" alt="${mascota.nombre}" style="height:200px; object-fit:cover; transition: transform 0.3s;">
          <div class="card-body text-center">
            <h5 class="card-title">${mascota.nombre}</h5>
            <p class="card-text">${mascota.desc}</p>
            <button class="btn btn-info" onclick="adoptar('${mascota.nombre}')">Adoptar</button>
          </div>
        </div>
      </div>
    `;
  });

  // Efecto hover en imagen
  document.querySelectorAll(".card-img-top").forEach(img => {
    img.addEventListener("mouseover", () => img.style.transform = "scale(1.1)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
  });
}

// Función para elegir mascota
function adoptar(nombre) {
  localStorage.setItem("mascotaSeleccionada", nombre);
  window.location.href = "adopcion.html";
}

// Inicializar con perros
mostrarMascotas(dogs);

// Toggle switch
document.getElementById("toggle").addEventListener("change", (e) => {
  mostrarPerros = !e.target.checked;
  mostrarMascotas(mostrarPerros ? dogs : cats);
});

// Buscador global
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.querySelector("input").value.toLowerCase().trim();

  // Filtrar mascotas
  const filtradas = allPets.filter(m => 
    m.nombre.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query)
  );

  // Filtrar links del nav y footer
  const links = Array.from(document.querySelectorAll("nav a, footer a")).filter(a => 
    a.textContent.toLowerCase().includes(query)
  );

  // Mostrar mascotas filtradas
  mostrarMascotas(filtradas);

  // Resaltar links encontrados
  document.querySelectorAll("nav a, footer a").forEach(a => a.style.backgroundColor = "");
  links.forEach(a => a.style.backgroundColor = "yellow");
});
