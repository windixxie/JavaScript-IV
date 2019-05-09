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

const winnieSong = new Student({
    name: 'Winnie Song',
    location: 'FLushing',
    age: 22,
    previousBackground: `MUA`,
    className: `web20`,
    favSubjects: ['CSS', 'HTML', 'LESS']
});

joshuaWood.standUp(`slack20`);
joshuaWood.debugsCode(winnieSong, `JavaScript`);