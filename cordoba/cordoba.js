const paso1 = document.getElementById('paso-1')
const paso2 = document.getElementById('paso-2')
const resumen = document.getElementById('resumen')
const btn_submit = document.getElementById('btn_submit')
btn_submit.addEventListener("click", function (event) {
    event.preventDefault()
    let nombre = document.getElementById('nombre-usuario').value
  let apellido = document.getElementById('apellido-usuario').value
  let telefono = document.getElementById('telephone').value
  let mail = document.getElementById('email').value
  let comentarios = document.getElementById('comentarios').value

  resumen.innerHTML = `Nombre: ${nombre}<br>Apellido: ${apellido}<br>Teléfono: ${telefono}<br>Email: ${mail}<br>Comentarios: ${comentarios}`;
  paso1.style.display = "none";
  paso2.style.display = "block";
  const btn_cerrar = document.getElementById('btn_cerrar')
  btn_cerrar.onclick=()=>window.location.reload()
});
