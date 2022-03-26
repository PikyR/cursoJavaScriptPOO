// Ejemplo
// Objetos literales
const juanito = {
  name: "Juan",
  userName: "JuanRR",
  points: 100,

  socialMedia: {
    twitter: "cosoJuan",
    instagram: "cosoJuan",
    facebook: undefined,
  },

  approvedCourses: [
    "Curso coso 1",
    "Curso coso 2",
  ],

  learningPaths: [
    {
      name: "Escuela uno",
      courses: [
        "Curso coso 1",
        "Curso coso 2",
      ],
    },

    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso A - EVJ",
        "Curso B - EVJ",
        "Curso C - EVJ",
      ],
    },
  ]
}; //Fin

// Clases

function videoPlay(id){
  const URL = "http://lorem.com/video/" + id;
  console.log("Reproduciendo: " + URL);
}

function videoPause(id){
  const URL = "http://lorem.com/video/" + id;
  console.log("Pausado: " + URL);
}

// export class Lesson {
class Lesson {
  constructor({
    title,
    videoID,
  }) {
    this.title = title;
    this.videoID = videoID;
  }

  playLesson() {
    videoPlay(this.videoID);
  }

  pauseLesson() {
    videoPause(this.videoID);
  }
}

const primeraClase = new Lesson({
  title: "Clase 1"
});

const segundaClase = new Lesson({
  title: "Clase 2"
});

const terceraClase = new Lesson({
  title: "Clase 3"
});

class Course {
  constructor({
    name,
    lessons = [],
    isFree = false,
    lang = "Spanish",
  }) {
    this._name = name;
    this.lessons = lessons;
    this.isFree = isFree;
    this. lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "") {
      console.error("Debes ingresar un nombre!");
    } else {
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso de programacón básica",
  lessons: [
    primeraClase,
    segundaClase,
    terceraClase,
  ],
  isFree: true,
  lang: "Spanish"
});

const cursoGIT = new Course({
  name: "Curso de GIT",
  lessons: [
    primeraClase,
    segundaClase,
    terceraClase,
  ]
});

const cursoData = new Course({
  name: "Curso de Data",
  lessons: [
    primeraClase,
    segundaClase,
    terceraClase,
  ],
  isFree: false,
  lang: "English"
});


class LearningPath {
  constructor ({
    name, 
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(newCourse) {
    this.courses.push(newCourse);
  }
}

const escWeb = new LearningPath({
  name: "Escuela de desarrolo web",
  courses: [
    cursoGIT,
    "Curso de FlexBox",
  ]
});

const escData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoData,
    "Curso de Science",
    cursoProgBasica,
  ]
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };    
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(this.name + " Solo puedes tomar cursos gratuitos.");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "English") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(this.name + " Solo puedes tomar cursos en español.");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}


// Primera instancia de la clase Student
const Jonh = new FreeStudent({
  name: "Jony",
  username: "JonyXD",
  email: "JonyXD@xd.com",
  instagram: "Jony_XD",
  learningPaths: [
    escData,
    escWeb,
  ],
});

// Segunda instancia de Student
const Mic = new BasicStudent({
  name: "Mac",
  username: "macXD",
  email: "mac@xd.com",
  twitter: "MACC",
  learningPaths: [
    escWeb,
  ],
});

const Leo = new ExpertStudent({
  name: "Leo",
  username: "leoXD",
  email: "leo@xd.com",
  twitter: "LEOO",
  learningPaths: [
    escWeb,
  ],
});
