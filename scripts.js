//Creates a button that when clicked creates a new div to the page
let addSquare = document.createElement('button');
let text = document.createTextNode("Click Here");
addSquare.style.position = "absolute";
let body = document.body;

addSquare.appendChild(text);
document.body.appendChild(addSquare);

//creates a wrap container
let divContainer = document.createElement('div');
divContainer.style.padding = "3em";
document.body.appendChild(divContainer);

let id = 0;
let colors = ['black','blue', 'purple', 'yellow', 'green', 'brown', 'aqua', 'pink', 'red'];

//Function that when the button is pressed a new div is put on the page with an unique id 
addSquare.addEventListener('click', function (){
    let div = document.createElement('div');
    let divId = id+1;
    div.setAttribute('id', divId);
    div.className = "square";
    id++

    let divText = document.createTextNode("ID: " + divId);
    divContainer.appendChild(div);

    //When mouse is over the div is shows the ID in a text area in the middle of the square
    div.addEventListener('mouseover', function (){
        div.appendChild(divText);
    })

    //When mouse leaves the div square the text disappears
    div.addEventListener('mouseleave', function(){
        divText.remove();
    })

    //When a div square is clicked once it's background color changes to a random color chosen from the array colors
    div.addEventListener('click', function(){
        let randNum = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[randNum];
    })

    div.addEventListener('dblclick', function(){
        let next = document.getElementById(divId).nextElementSibling;
        let prev = document.getElementById(divId).previousElementSibling;
       if (div.id % 2 == 0){
           if (!next){
               alert("No more squares");
           } else {
               let removeNext = document.getElementById(this.id).nextElementSibling;
               divContainer.removeChild(removeNext);
           }
       } else {
           if (!prev){
               alert ("No previous square");
           } else {
            let removePrev = document.getElementById(this.id).previousElementSibling;
            divContainer.removeChild(removePrev);
           }
       }
    })
    
});


