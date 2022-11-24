function createCard(obj){
    let div=document.createElement("div");
    div.classList.add('card');   

    let imagine=document.createElement("img");
   
    imagine.classList.add('image');
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
    data.textContent=obj.data;

    return div;
}

function attachCards(arr){
    let container=document.querySelector(".container")
    for(let i=0;i<arr.length;i++){
        container.appendChild(createCard(arr[i]));
    }
}

function createButton(){
    let div=document.createElement("button");
    div.classList.add('buttons');

    let btn=document.createElement("button");
    btn.classList.add('button');
    btn.textContent=[];
    div.appendChild(btn)
    return div;
}

//o functie ce primeste ca parametru un numar si afiseaza atatea butoane cate am dat in parametru
function createButtons(nr){
    let container=document.querySelector(".buttons")
   
    for(let i=1;i<=nr;i++){
        const element=createButton();
        element.textContent=i;
        container.appendChild(element);
        element.addEventListener('click',()=> { 
            pages(data,i);
        });
    }
}


function pages(arr,page){
    let container = document.querySelector('.container');
    let arrNou=[];
    
    for(let i=0+(page-1)*9;i<page*9;i++){
        arrNou.push(arr[i]);
    }

    removeAllChildNodes(container);

    for (let i=0;i<arrNou.length;i++){
        container.appendChild(createCard(arrNou[i]));
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function load(){
    pages(data,1);
    createButtons(5);
}


function returnObiect(arr,name){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name.first==name){
            return arr[i];
        }
    }

    return -1;
}

function cretaeCardModal(){
    let div=document.createElement("div");
    div.classList.add('employee');

    let imagine=document.createElement('img');
    imagine.classList.add('image');
    div.appendChild(imagine);

    let  nume=document.createElement('h1');
    nume.classList.add('name');
    div.appendChild(nume);

    let email=document.createElement('p');
    email.classList.add('email');
    div.appendChild()
    

    return div;

}
function addModal(obj){
    let container=document.querySelector(".modal");
    
    container.classList.remove("hide");

    container.appendChild(obj);

}