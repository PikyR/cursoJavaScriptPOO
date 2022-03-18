// OBJETO LITERAL
const objetoLiteral = {
  name: "Natalia",
  age: 22,
  cursosAprobados: [
    "Curso 1",
    "Curso 2"
  ],
  aprobarCurso(nuevoCursoAprobado) {
    this.cursosAprobados.push(nuevoCursoAprobado);
  },
};

// Agregar otro curso aprobado
objetoLiteral.cursosAprobados.push("Curso 3");
objetoLiteral.aprobarCurso("Curso 4");

// PROTOTIPOS
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;  
}

Student.prototype.aprobarCurso = function (nuevoCursoAprobado) {
  this.cursosAprobados.push(nuevoCursoAprobado);
}

const primerEstudiante = new Student(
  "Lola Landa",
  22,
  [
    "Curso 1",
    "Curso 2"
  ]
);

//Nuevo curso aprobado
primerEstudiante.aprobarCurso("Curso 33");


// Clase 6
// Prototipos con la sintaxis de Clases
class OtherStudent {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursoAprobado) {
    this.cursosAprobados.push(nuevoCursoAprobado);
  }
}

const tercerEstudiante = new OtherStudent(
  "Juan Jonas",
  11,
  [
    "Curso A",
    "Curso B"
  ]
);

tercerEstudiante.aprobarCurso("Curso CC");

class OtherTypeStudent {
  constructor({
    name,
    age,
    email,
    cursosAprobados = [],
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }
}

const cuartoEstudiante = new OtherTypeStudent({
  email: "123@asd.com",
  age : 44,
  name: "Julito",  
})