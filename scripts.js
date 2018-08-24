//Creates a button that when clicked creates a new div to the page
let addSquare = document.createElement('button');
let text = document.createTextNode("Click Here");
let body = document.body;

addSquare.appendChild(text);
document.body.appendChild(addSquare);


let id = 0; 
let colors = ['black','blue', 'purple', 'yellow', 'green', 'brown', 'aqua', 'pink', 'red'];

//Function that when the button is pressed a new div is put on the page with an unique id 
addSquare.addEventListener('click', function (){
    let div = document.createElement('div');
    div.setAttribute('id', (id+1));
    let divId = id+1;
    div.className = "square";
    id++

    let divText = document.createTextNode("ID: " + divId);
    body.appendChild(div);

    div.addEventListener('mouseover', function (){
        div.appendChild(divText);
    })

    div.addEventListener('mouseleave', function(){
        divText.remove();
    })

    div.addEventListener('click', function(){
        let randNum = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[randNum];
    })

    div.addEventListener('dblclick', function(){
        // let next = document.getElementById
       if (div.id % 2 == 0){
           alert("even");
       } else {
           alert("odd");
       }
    })
    
});


