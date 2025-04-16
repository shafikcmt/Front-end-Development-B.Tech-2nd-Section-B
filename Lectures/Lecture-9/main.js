var elements ;
elements = document;
elements = document.all[4];
elements = document.body;
elements = document.links;
elements = document.domain;
console.log(elements);

function countLinks(){
 var links = document.links;
 if(!links){
    document.write('Links not found');

 }else{
    var total = links.length;
    document.write('Total Links is:'+total);
 }
}
countLinks()

document.body.style.backgroundColor = 'red';

function ChangeBG(){
    document.body.style.backgroundColor = 'yellow';
}
// ChangeBG()

