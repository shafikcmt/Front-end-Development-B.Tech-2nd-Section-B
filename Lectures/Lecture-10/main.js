// setInterval(function,timing) ms 1=1000 
var a = 0;
var anim = setInterval(()=>{
    a = a + 10;
    var target = document.getElementById('box');
    // console.log('Hello');
    // console.log(a)
    target.style.marginLeft= a + 'px';
},100);



function stopAnimation(){
    clearInterval(anim);
}

var anim1 = setTimeout(()=>{
    var target1 = document.getElementById('box2');
    target1.style.width = '500px';
    target1.style.transition = '2s';
},2000);

function stop() {
    clearTimeout(anim1);
}