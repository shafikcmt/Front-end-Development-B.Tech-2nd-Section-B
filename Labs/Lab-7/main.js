var elements;

elements = document.getElementById('test').innerText;
elements = document.getElementById('test').innerHTML;
elements = document.getElementById('test').attributes;
elements = document.getElementById('text').value;

console.log(elements)

function submitData(){
    var name = document.getElementById('name').value;
    var roll = document.getElementById('roll').value;
    var email = document.getElementById('email').value;
    var department = document.getElementById('dpt').value;

    if(name == ""|| email == ""|| roll == "" || department == ""){
        window.alert('Filled must not be empty!!');
    }else{
        var display = document.getElementById('displayArea');
        display.innerHTML += `
        
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${roll}</td>
            <td>${department}</td>
        </tr>
        `
    }
}