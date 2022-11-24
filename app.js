load();
//addModal();


let employeeContainer=document.querySelector('.container');

employeeContainer.addEventListener("click",(e)=>{
    let employee=e.target;

    addModal(employee);
});
