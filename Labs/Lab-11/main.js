// Write a JavaScript function that creates a <p> element with the text "Hello, World!" and appends it to the <body>.

function createElement(){
    var p = document.createElement('p');
    p.innerText = 'Hello World!!';
    var body = document.body;
    body.appendChild(p);
}

createElement();

document.writeln('<hr>');

// Create a div element using createElement, then assign it the class "box" using .className. Finally, append this div to the document's body.

function createDiv(){
    var div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div);
}
createDiv();

// Create a <button> element dynamically and add two classes: "btn" and "btn-primary". Append the button to an existing div with id="container".

document.writeln('<hr>');

function createButton(){
    var button = document.createElement('button');
    button.innerText = 'Click Me';
    button.classList.add('btn','btn-primary');
    var display = document.getElementById('container');
    display.appendChild(button)
}
createButton();

// Create an unordered list (<ul>), then create and append three list items (<li>) dynamically using JavaScript. Each <li> should have the class "list-item" and contain some sample text. Append the entire list to a div with id="menu".

document.writeln('<hr>');


function createList(){
    const unorderList = document.createElement('ul');
    var i;
    for(i=1;i<=5;i++){
        var listItem = document.createElement('li');
        listItem.innerText = `Item ${i}`;
        listItem.className = 'list-item';
        unorderList.appendChild(listItem)
    }
        document.body.appendChild(unorderList);
}

createList();

// Dynamic ChessBoard

function createChessboard(){
    var boardsize = document.getElementById('boardsize').value;
    var displayBoard = document.getElementById('displayBoard');
    displayBoard.style.height = `${boardsize*100}px`;
    displayBoard.style.width = `${boardsize*100}px`;

    var row,col;
    for(row=0;row<boardsize;row++){
        for(col=0;col<boardsize;col++){
            var box = document.createElement('div');
            box.className = 'box';
            if((row+col)%2===0){
                box.classList.add('white');
                box.innerText = '*';
            }else{
                box.classList.add('black');
                box.innerText = '#';
            }
            displayBoard.appendChild(box);
        }
    }
}
createChessboard();