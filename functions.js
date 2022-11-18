function createCard(obj){
    let div=document.createElement("div");
    div.classList.add('card');

   

    let imagine=document.createElement("img");
    imagine.classList.a
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
    }
}


// function pages(arr,page){
//     let arrNou=[];
//     for(let i=0+page*9;i<page*9;i++){
//         arrNou.push
//     }

// }