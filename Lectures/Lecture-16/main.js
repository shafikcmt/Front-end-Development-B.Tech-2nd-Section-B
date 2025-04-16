// Rest Operator (... is called rest operator)
// Spread Operator (... is called Spread operator)

function sum(fname,lname,...values){
    document.writeln(values);
    var sum = 0;
    for(let i in values){
        document.writeln(values[i]+'<br>')
        sum += values[i];
    }
    document.writeln('Sum is:'+ sum+'<br>')
}

sum('Akash','Kumar',23,56,24,12,28)

// Spread Operator

var arr1 = [12,45,2,4,6,78,12];

var arr2 = [...arr1,6,8,5,4];

var arr3 = [34,78,23,56,12,23,45]

document.writeln(arr2+'<br>')

sum('Akash','Kumar',...arr1,...arr3)

// (condition)?'True statement':'False statement'

// Find Odd and Even Number using ternary operator

var n = 5;
var result = (n%2===0)?'Even Number':'Odd Number';
document.writeln(result);