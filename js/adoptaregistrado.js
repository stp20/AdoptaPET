document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const perros = ["Firulais", "Rex", "Max", "Toby", "Luna", "Rocky", "Bobby", "Nina", "Bruno", "Sol", "Duke", "Kira"];
  const gatos = ["Michi", "Pelusa", "Tom", "Neko", "Simba", "Lily", "Cleo", "Salem", "Milo", "Nina", "Garfield", "Luna"];

  if (!usuario) {
    alert("Debes iniciar sesión primero.");
    window.location.href = "login.html";
    return;
  }

  // Rellenar datos del usuario automáticamente
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("apellido").value = usuario.apellido;
  document.getElementById("email").value = usuario.email;
  document.getElementById("contacto").value = usuario.contacto;

  const tipoSelect = document.getElementById("tipo");
  const mascotaSelect = document.getElementById("mascota");

  tipoSelect.addEventListener("change", () => {
    mascotaSelect.innerHTML = "<option value=''>Seleccione una mascota...</option>";
    const lista = tipoSelect.value === "perro" ? perros : gatos;
    lista.forEach(mascota => {
      const option = document.createElement("option");
      option.value = mascota;
      option.textContent = mascota;
      mascotaSelect.appendChild(option);
    });
  });

  document.getElementById("adopcionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Solicitud enviada con éxito para ${mascotaSelect.value}. Nos contactaremos contigo pronto, ${usuario.nombre}!`);
    e.target.reset();
    tipoSelect.value = "";
    mascotaSelect.innerHTML = "<option value=''>Seleccione una mascota...</option>";
  });
});