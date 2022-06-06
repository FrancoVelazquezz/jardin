import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
/*
• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
*/
let blueClassroom: number[] = Array(40);
let greenClassroom: number[] = Array(35);
let yellowClassroom: number[] = Array(30);

function classrooms(studentsAmount: number) {
  if (
    studentsAmount <= blueClassroom.length &&
    studentsAmount > greenClassroom.length
  ) {
    alert("Se le asigna aula azul");
  }

  if (
    studentsAmount <= greenClassroom.length &&
    studentsAmount > yellowClassroom.length
  ) {
    alert("Se le asigna aula verde");
  }

  if (studentsAmount <= yellowClassroom.length) {
    alert("Se le asigna aula amarilla");
  }

  if (studentsAmount === 0) {
    alert("No es posible");
  } else if (studentsAmount > 40) {
    alert("Demaciados alumnos");
  }
}

let students: number = Number(prompt("Ingrese cantidad de alumnos"));

classrooms(students);
