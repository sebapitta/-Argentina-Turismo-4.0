const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function(handleClick) {
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let lastname = document.querySelector("#lastname").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name} <br>Apellido: ${lastname}<br>Email: ${email}<br> Telefono: ${phone}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});