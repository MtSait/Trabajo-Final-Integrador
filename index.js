
//FORMULARIO

function mostrarDatos () {
    let inputNombre = document.getElementById(`inputName`).value;
    let name = inputNombre.split(' ');

    let inputCuil = parseInt(document.getElementById(`inputCuil`).value);

    let inputDate = document.getElementById(`inputDate`).value;

    let inputTime = document.getElementById(`inputTime`).value;


    document.getElementById(`infoTurno`).innerHTML = `
    <hr>
    <p class="turno-asignado">Turno Asignado</p>
    <hr>
    <p class="texto-asignado">Hola ${name[0]}. <br>
    CUIL: ${inputCuil} <br>
    Tu turno ha sido asignado <br>
    para el día ${inputDate} <br>
    a las ${inputTime}Hs.</p>
    <hr>`;
    
    
}

