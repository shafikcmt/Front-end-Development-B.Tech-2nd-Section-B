// Inheritance

class Teacher{
    constructor(name){
        this.name = name;
        console.log('Hello Teacher Constructor!!')
    }
    info(){
        console.log('Hello Info '+this.name)
    }
    
}

class Student extends Teacher{
    constructor(name){
        super(name)
        super.info();
        console.log('Hello Student Constructor!');
    }
}

let s = new Student("Rahul");

s.info()