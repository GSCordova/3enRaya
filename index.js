
let current = [];

function myX(ev) {
  var acum = 0
  for (item of current) {
    if (item == ev.target.id) {
      console.log(`El bloque ${ev.target.id} ya esta ocupado`)
    } else if (item !== ev.target.id) {
      acum++
    }
  }
  if (acum == current.length) {
    current.push(parseInt(ev.target.id));
    ev.target.innerHTML = '<p>X</p>';
    turnoIA()
  }
}


function turnoIA() {
  setTimeout(()=>{
    var acum = 0
    var num = Math.floor( Math.random() * (9 - 1  + 1) ) + 1
    for (item of current) {
      if (item == num) {
        turnoIA()
      } else if (item !== num) {
        acum++
      }
    }
    if (acum == current.length) {
      current.push(parseInt(num));
      document.getElementById(`${num}`).innerHTML = '<p>O</p>'
    }
  }, 2000)
}



// TODO: Evitar que se baje el cuadro al marcar una casilla
// TODO: Jugar por turnos


function random(min, max){
  return Math.floor( Math.random() * (9 - 1  + 1) ) + 1
}
