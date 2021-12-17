
//FORMULARIO

function mostrarDatos () {
    var inputNombre = document.getElementById(`inputName`).value;
    var name = inputNombre.split(' ');

    var inputCuil = parseInt(document.getElementById(`inputCuil`).value);

    var inputDate = document.getElementById(`inputDate`).value;

    var inputTime = document.getElementById(`inputTime`).value;


    document.getElementById(`infoTurno`).innerHTML = `
    <hr>
    <p class="turno-asignado">Turno Asignado</p> <br>
    <hr>
    <p class="texto-asignado">Hola ${name[0]}. <br>
    CUIL: ${inputCuil} <br>
    Tu turno ha sido asignado <br>
    para el día ${inputDate} <br>
    a las ${inputTime}Hs.</p>
    <hr>
  
        `;
    
    
}

