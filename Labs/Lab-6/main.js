document.write('<h2>Basic Function</h2>')
document.write('<hr>')
function msg(){
    document.write('Hello students, Good Morning <br>');
}
msg();
msg();
msg();
msg();

document.write('<h2>Function with arguments and parameters</h2>')
document.write('<hr>')

function sum(a,b){
    let add = a+b;
    document.write('Sum is:'+add+'<br>');
}
sum(34,87);
sum(34,70);
sum(90,87);
sum(100,87);

document.write('<h2>Function with return value</h2>')
document.write('<hr>')

function result(s1,s2,s3,s4,s5){
    let total = s1+s2+s3+s4+s5;
    return total;
}
let t = result(56,78,90,58,67);
document.write('Total marks is: '+t+'<br>');

function percentage(tm){
    let percen = tm/500*100; 
    return percen;
}
let p = percentage(t);
document.write('Percentage is: '+p+'%');

document.write('<h2>Expression Function</h2>')
document.write('<hr>')

// Named function
let name = function fullName(){
    document.write('Ravi Kumar <br>');
}

name();

// Anonymous Function

let sum1 = function(a,b){
    let add = a+b;
    document.write('Sum is: '+add);
}
sum1(34,78);


document.write('<h2>Arrow Function</h2>')
document.write('<hr>')

let oddEven = (n) =>{
    let oddev = (n % 2 === 0) ? 'Even Number':'Odd Number';
    document.write('Number is: '+oddev);
}
oddEven(8);

document.write('<hr>')

let oddEven1 = n => (n % 2 === 0) ? 'Even Number':'Odd Number';
    

let odev = oddEven1(11);
document.write(odev);

document.write('<h2>Immediate invoked Expression Function(IIEF)</h2>');
document.write('<hr>');

(()=>{
    document.write('Hello Students, Good Afternoon!!');
})();

document.write('<h2>Write a function findMax that takes three numbers and returns the largest one.</h2>');
document.write('<hr>');

((a,b,c) =>{
    if(a>b){
        if(a>c){
            document.write('Greater value is A: '+a);
        }else{
            document.write('Greater value is C: '+c);
        }
    }else{
        if(b>c){
            document.write('Greater value is B: '+b);
        }else{
            document.write('Greater value is C: '+c);
        }
    }
})(2,5,7)

