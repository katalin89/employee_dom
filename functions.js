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
    data.textContent=obj.registered.date;

   
    div.appendChild(data);
    
    let div4=document.createElement('div');
    div.classList.add('delete-container')

    let divDelUp=document.createElement('div');
    divDelUp.classList.add('delUp');

    let btnDelete=document.createElement("button");
    btnDelete.classList.add("delete");
 
    btnDelete.textContent="Delete";

    divDelUp.appendChild(btnDelete);

    let btnUpdate=document.createElement("button");
    btnUpdate.classList.add("update");

    btnUpdate.textContent="Update";

    divDelUp.appendChild(btnUpdate);

    div.appendChild(divDelUp)
    



    

    div.appendChild(div4);

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


//append
function createCardModal(obj){

    let div=document.createElement('div');
    div.classList.add('modal-card');

    let div2=document.createElement('div');
    div2.classList.add('x');


    let btnX=document.createElement('button');
    btnX.classList.add('btnX');

    btnX.textContent="x";


    btnX.addEventListener("click",()=>{

        let modal=document.querySelector(".modal");

        modal.innerHTML="";

        modal.classList.add("hide");
    


    })

    div2.appendChild(btnX);


    div.append(div2);


    let imagine=document.createElement('img');
    imagine.src=obj.picture.medium;

    div.appendChild(imagine);

    let div3=document.createElement('div');
    div3.classList.add('directii');

    div3.innerHTML=`
    <button class="left"><i class="fa-solid fa-caret-left"></i></button>
    <button class="right"><i class="fa-solid fa-caret-right"></i></button>
    `

    let btnLeft=div3.querySelector(".left");
   
    btnLeft.addEventListener("click",()=>{
     
        //createCardModal(returnPrevious(data,obj.name.first));

       
        let t=returnPrevious(obj.name.first);

        let card=createCardModal(t);
        let modal=document.querySelector(".modal");

        modal.innerHTML="";

        modal.appendChild(card);

       
    })

    let btnRight=div3.querySelector('.right');

    btnRight.addEventListener("click",()=>{
        let t=returnNext(obj.name.first);

        let card=createCardModal(t);
        let modal=document.querySelector(".modal");

        modal.innerHTML="";
        modal.appendChild(card);
    })

    div.appendChild(div3);
    
    let name=document.createElement('h1');
 

    name.textContent=obj.name.first+" "+obj.name.last;
   
    div.appendChild(name);

    let email=document.createElement('p');
    email.textContent=obj.email;

    div.appendChild(email);

    let data=document.createElement('p');
    data.textContent=obj.registered.date;
    div.appendChild(data);



  
    return div;

}

function returnPrevious(name){
    for(let i=1;i<data.length;i++){
        if(data[i].name.first==name){
            return data[i-1];
        }
    }
    return -1;
}

function returnNext(name){
    for(let i=0;i<data.length-1;i++){
        if(data[i].name.first==name){
            return data[i+1];
        }
    }
    return -1;
}


function attachCards(arr){
    let container=document.querySelector(".container")
    for(let i=0;i<arr.length;i++){
        container.appendChild(createCard(arr[i]));
    }
}




function addModal(obj){
    let container=document.querySelector(".modal");
    
    container.classList.remove("hide");

    container.appendChild(obj);

}

//returneaza obiectul dupa nume si prenume

function returnObj(arr,name){
    for(let i=0;i<arr.length;i++){

        let numePers=arr[i].name.first+" "+arr[i].name.last
        if(numePers==name)
               return arr[i];
    }

    return -1;
}


function sterge(arr,name){

    let filt=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].name.first!==name){

            filt.push(arr[i]);

        }
    }

    return filt;
}

function updtateObject(arr,name,obj){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name.first==name){
            arr[i]=obj;
        }
    }
    return arr;
}







