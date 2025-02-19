document.write('-----Javascript Output------')

// window.alert('Hello Students!!')

document.getElementById('test').innerHTML = 'Hello Geeta University';

console.log('Hello Debug!!');

document.write('<h3>Hello Students</h3>')

document.write('<h2>Javascript Variables</h2>')
document.write('<hr>')

// var , let , const

document.write('<h2>Javascript Variable with var Keyword</h2>')
var name1 = 'Shubham';
// ReDeclare Supported
var name1 = 'Karan';
// ReAssign Supported
    name1= 'Rofik';
  if(1==1){
    var num1 = 34;
    document.write('Value inside block: '+num1+'<br>');
  }
  document.write('Value outside block: '+num1+'<br>');


document.write(name1)
document.write('<hr>')

document.write('<h2>Javascript Variable with let Keyword</h2>')
let name2 = 'Salini';
// let name2 = 'Geeta'; ReDeclare Not Support
name2 = 'Sagar'; //Reassign Supported
if(2==2){
    let num3 = 65;
    document.write('Value inside block: '+num3+'<br>');
}
// document.write('Value inside block: '+num3+'<br>'); Block Scope variable not support
document.write(name2)
document.write('<hr>')

document.write('<h2>Javascript Variable with const Keyword</h2>')

const name3 = 'Ravi';
// name3 = 'Ragini'; ReAssign not supported
// const name3 = 'Sahil'; Redeclare Not Support

if(3==3){
    const num2 = 78;
    document.write('Value inside block: '+num2+'<br>');
}
// document.write('Value inside block: '+num2+'<br>'); Block Scope Variable not support


document.write(name3);

