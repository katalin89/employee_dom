load();
//addModal();


let employeeContainer=document.querySelector('.container');
//cand da click pe imagine sa returneze numele
//trebuie appenduit cardukn 
employeeContainer.addEventListener("click",(e)=>{
    let employee=e.target;
    if(employee.tagName=="IMG"){
    //parentNOde
       
    let name=employee.parentNode.children[1].textContent;

  

    let pers=returnObj(data,name);

   

    let card=createCardModal(pers);


    let modal=document.querySelector(".modal");

    modal.classList.remove("hide");



    modal.appendChild(card);

 
    console.log(card);

    }
});
