document.write('<h2>Javascript Rest & Spread Operator</h2>');
document.write('<hr>');

function sum(fname,lname, ...numbers){
    console.log(arguments);
    document.write(`Name is: ${fname} ${lname} <br>`)
    var i,add=0;
    for(i in numbers){
        document.write(`Value is: ${numbers[i]} <br>`);
        add += numbers[i];
    }
    document.write(`Sum is: ${add} <br>`)
}
sum('Rahul','Kumar',23,34,45,45,78);
sum('Riya','Kumari',23,34,45,45,78);

var arr1 = [23,90,78,54,55];
var arr2 = [23,90,78,54,55,89,60,43];
sum('Atul','Kumar', ...arr1, ...arr2);
