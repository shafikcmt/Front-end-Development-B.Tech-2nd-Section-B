document.write('<h2>Constructor Function</h2>');
document.write('<hr>');

const person1 = {
    fname : 'Atul',
    lname:'Kumar'
}
const person2 = {
    fname : 'Ragini',
    lname:'Sharma'
}

const person3 = {
    fname : 'Murad',
    lname:'Alam'
}


function Person(fn,ln){
    this.fastname = fn;
    this.lastname = ln;
    // this.fullName = function(){
    //     return this.fname+" "+this.lname;
    // }
}
Person.prototype.age = 24;
Person.prototype.hello = function(){
    return this.msg = 'Hello Students!';
}
let p1 = new Person('Riya','Kumari');
p1.fullName = function(){
    return this.fname+" "+this.lname;
}

let p2 = new Person('Aditya','Kumar');
p2.age = 23;
console.log(p1)
console.log(p2.hello());