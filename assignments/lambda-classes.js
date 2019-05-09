// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        console.log (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to the ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



//////////////////////Test////////////////////////////

const devin = new Person({
    name: "Devin",
    age: 21,
    location: "Texas"
});

const alexis = new Person({
    name: "Alexis",
    age: 25,
    location: "College Station"
});

const joshuaWood = new ProjectManager({
    name: 'Joshua Wood',
    location: 'Lambda Land',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the brady bunch`,
    gradClassName: `web17`,
    favInstructor: `Josh Knell`
});

const olympia = new ProjectManager({
    name: 'Olympia Woj',
    location: 'Lambda Land',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `yayyyyyyy hi`,
    gradClassName: `web17`,
    favInstructor: `Dan Levy`
});

const danLevy = new Instructor({
    name: 'Dan Levy',
    location: 'Lambda Land',
    age: 35,
    specialty: 'Back-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'uhhhh'
});

const joshKnell = new Instructor({
    name: 'Josh Knell',
    location: 'Lambda Land',
    age: 35,
    specialty: 'Everything',
    favLanguage: 'JavaScript',
    catchPhrase: 'banana'
});

const winnieSong = new Student({
    name: 'Winnie Song',
    location: 'FLushing',
    age: 22,
    previousBackground: `MUA`,
    className: `web20`,
    favSubjects: ['CSS', 'HTML', 'LESS'],
    grade: 80
});

const micah = new Student({
    name: 'Micah',
    location: 'Provo',
    age: 23,
    previousBackground: 'Office Manager',
    className: 'Web 20',
    favSubjects: ['CSS', 'JS', 'HTML'],
    grade: 50
  });

  const Ramses = new Student({
    name: 'Ramses', 
    age: 25, 
    location: 'Miami', 
    prevBackground: 'Real Estate', 
    className: 'Web20', 
    favSubjects: ['css', 'html', 'JS']
});

devin.speak();
alexis.speak();
joshuaWood.standUp(`slack20`);
olympia.debugsCode(micah, `CSS`);
danLevy.grade(winnieSong, 'CSS');
joshKnell.demo('React');
winnieSong.sprintChallenge('Javascript Fundamentals');
Ramses.listsSubjects(`${this.favSubjects}`);