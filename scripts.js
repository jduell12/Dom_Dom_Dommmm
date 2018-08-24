//Creates a button that when clicked creates a new div to the page
let addSquare = document.createElement('button');
let divContainer = document.createElement('div');
let text = document.createTextNode("Click Here");

addSquare.appendChild(text);
document.body.appendChild(addSquare);
document.body.appendChild(divContainer);

let id = 1; 
let colors = ['black','blue', 'purple', 'yellow', 'green', 'brown', 'aqua', 'pink', 'red'];

//Function that when the button is pressed a new div is put on the page with an unique id 
addSquare.addEventListener('click', function (){
    let div = document.createElement('div');
    let divText = document.createTextNode("ID: " + id);
    div.className = "square";
    divContainer.appendChild(div);
    id++;

    div.addEventListener('mouseover', function (){
        div.appendChild(divText);
    })

    div.addEventListener('mouseleave', function(){
        divText.remove();
    })
});

//Function that when the square is clicked the background color changes to a random color from the array of colors
