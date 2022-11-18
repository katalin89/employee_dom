function createCard(obj){
    let div=document.createElement("div");
    div.classList.add('card');

    let imagine=document.createElement("img");
    imagine.classList.add('img');

    imagine.src=obj.picture.medium;

    div.appendChild(imagine);

    let name=document.createElement("h1");
    name.classList.add('name');
    name.textContent=obj.name.first+" "+obj.name.last;

    div.appendChild(name);

    let email=document.createElement("p");
    email.classList.add('email');
    email.textContent=obj.email;

    div.appendChild(email);

    let data=document.createElement("footer");
    data.classList.add('data');
    data.textContent=obj.registered.date;

    div.appendChild(data);

    return div;

}

function attachCard(arr){
let container=document.querySelector(".container");
for(let i=0;i<arr.length;i++){
    container.appendChild(createCard(arr[i]));
}

}


function createButton(){
let div=document.createElement("div");
div.classList("buttons");

let button1=document.createElement("button");

button1.classList.add("button");

div.appendChild(button1);
}

