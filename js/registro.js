document.getElementById("registroForm").addEventListener("submit", function(e){
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const contacto = document.getElementById("contacto").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!nombre || !apellido || !contacto || !email || !password){
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Guardar en localStorage como ejemplo
  const usuario = { nombre, apellido, contacto, email, password };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Registro exitoso. Bienvenido a adoptaPET!");
  this.reset();

  // Redirigir a página de ingreso
  window.location.href = "ingreso.html";
});