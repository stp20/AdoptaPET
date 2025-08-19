

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

const petContainer = document.getElementById("pet-container");
const toggle = document.getElementById("toggle");

function renderPets(pets) {
    petContainer.innerHTML = "";
    pets.forEach(pet => {
        const card = `
          <div class="col-md-4 col-lg-3">
            <div class="card h-100">
              <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
              <div class="card-body">
                <h5 class="card-title">${pet.nombre}</h5>
                <p class="card-text">${pet.desc}</p>
                <a href="adopcion.html" class="btn btn-adoptar w-100">Adoptar</a>
              </div>
            </div>
          </div>`;
        petContainer.innerHTML += card;
    });
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        renderPets(cats);
    } else {
        renderPets(dogs);
    }
});

// Mostrar perros por defecto
renderPets(dogs);