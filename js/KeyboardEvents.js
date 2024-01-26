//Row 2
//Keyboard Events

//Key Down
let inputOne= document.getElementById('keydown');
inputOne.addEventListener('keydown', function(e){
    inputOne.value = e.code;
    e.preventDefault()
    console.log(e.code);
});
//key up
let inputTwo= document.getElementById('inputTwo');
inputTwo.addEventListener('keyup', function(e){
    e.preventDefault();
    inputTwo.value = e.code;
});

let inputThree= document.getElementById('inputThree');
inputThree.addEventListener('keypress', function (){
    var randomHex = Math.floor(maty.random()*16777215).toString(16);
    inputThree.style.backgroundcolor = "#" + randomHex;
});

let inputFour= document.getElementById('inputFour');
inputFour.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.shiftKey){
        console.log('Both');
        // Pass in the id of an element

        (e.target.style.opacity = 0),
        setTimeout(() =>{
            (e.target.style.visibility = ""), (e.target.style.opacity = 1);
        }, 5e3)
    }
})