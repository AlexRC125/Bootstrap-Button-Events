

let btnOne = document.getElementById('click'); 
btnOne.addEventListener('click', function(event){
    event.target.style.background = "#a0b96b";
});

let btnTwo = document.getElementById('dblclick');
btnTwo.addEventListener('dblclick', function(event){
 event.target.style.border = "4px dotted #ec8f6a";
});

let btnThree = document.getElementById('rightClick');
btnTwo.addEventListener('contextmenu', function(event){
 event.target.style.background = "#a0b96b";
});

let btnFour = document.getElementById('mousePointer');
btnTwo.addEventListener('mouseenter', function(event){
 event.target.style.background = "#a0b96b";
});
