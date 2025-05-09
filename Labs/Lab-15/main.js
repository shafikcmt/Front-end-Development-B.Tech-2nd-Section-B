class Person{
    constructor(name,birth,email){
        this.studentname =name;
        this.birth =birth;
        this.email =email;
        console.log('Hello Constructor!! '+name);
    }
    hello(){
        console.log('Hello Person class!!'+this.studentname)
    }
    info(){
        console.log(`Hello from info
            Name : ${this.studentname} 
            Birth : ${this.birth} 
            Email : ${this.email}
            `)
    }

    static msg(){
        console.log('Hello from static method!!')
    }
}

let p = new Person("Geeta University",2022,"info@geetauniversity.edu.in");

p.hello();
p.info();
Person.msg();