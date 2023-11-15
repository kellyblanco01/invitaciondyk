const fechaBoda = new Date(2023, 10, 17, 17, 0, 0);

function actualizarCuentaRegresiva() {
  const ahora = new Date();
  const tiempoRestante = fechaBoda - ahora;

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // Actualiza el contenido de los divs
  document.getElementById("days").innerHTML = `${dias}d`;
  document.getElementById("hours").innerHTML = `${horas}h`;
  document.getElementById("minutes").innerHTML = `${minutos}m`;
  document.getElementById("seconds").innerHTML = `${segundos}s`;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
