// Javascript Filter method

var ages = [23,17,18,12,16,14,34];

document.writeln('Before Filter: '+ages+'<br>');

var checkAdult = (age)=>{
    return age >= 18;
}

var afetrFilter = ages.filter(checkAdult);

document.writeln('Afetr Filter: '+afetrFilter+'<br>');

document.writeln('<hr>')

// Given an array of numbers, filter out only the even numbers.

var numbers = [1,8,9,6,7,4,3,23];
document.writeln('Bfore filter:' +numbers+'<br>');
var evenNumber = numbers.filter((n)=>{
    return n%2===0;
});

document.writeln('EvenNumbers are:' +evenNumber+'<br>');

document.writeln('<hr>')

// Given an array of objects representing people, filter out only those who are 18 or older.

var users = [
    {fname:'Rahul',lname:'Kumar',age:15},
    {fname:'Akash',lname:'Kumar',age:19},
    {fname:'Ravi',lname:'Kumar',age:23},
    {fname:'Shubham',lname:'Sharma',age:17},
    {fname:'Rakhi',lname:'Rana',age:24},
];

var adultUser = users.filter((user)=>{
     return user.age > 18;
})

// document.writeln(`${adultUser.fname} - ${adultUser.lname} and ${adultUser.age} <br>`)
console.log(adultUser);


document.writeln('<hr>')

// Given an array of strings, filter out only the ones that contain more than 5 characters.

var words = ['University','Rahul','Sagar','Geeta','Hello','HI'];

var filterwords = words.filter((word)=>{
    return word.length >= 5;
})

document.writeln(filterwords);