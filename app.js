load();
//addModal();

let employeeContainer = document.querySelector(".container");
let objTOchange;
//cand da click pe imagine sa returneze numele
//trebuie appenduit cardukn
employeeContainer.addEventListener("click", (e) => {
  let employee = e.target;
  if (employee.tagName == "IMG") {
    //parentNOde

    let name = employee.parentNode.children[1].textContent;

    let pers = returnObj(data, name);

    let card = createCardModal(pers);

    let modal = document.querySelector(".modal");

    modal.classList.remove("hide");

    modal.appendChild(card);

    console.log(card);
  } else if (employee.classList.contains("delete")) {
    let name =
      employee.parentNode.parentNode.querySelector(".name").textContent;
    console.log(name.split(" ")[0]);
    let firstname = name.split(" ")[0];

    data = sterge(data, firstname);

    removeAllChildNodes(listContainer);
    attachCards(data);
  } else if (employee.classList.contains("update")) {
    let card = employee.parentNode.parentNode;

    let inp = document.createElement("input");
    let inp2 = document.createElement("input");
    let inp3 = document.createElement("input");

    inp.type = "text";
    inp2.type = "text";
    inp3.type = "text";
    let name = employee.parentNode.parentNode.querySelector(".name");

    let email = employee.parentNode.parentNode.querySelector(".email");

    let date = employee.parentNode.parentNode.querySelector(".data");

    inp.value = name.textContent;
    inp2.value = email.textContent;
    inp3.value = date.textContent;

    card.insertBefore(inp, name);
    card.insertBefore(inp2, email);
    card.insertBefore(inp3, date);

    //card.removeChild(children);
    card.removeChild(name);
    card.removeChild(email);
    card.removeChild(date);

    employee.textContent = "save";
    employee.classList.remove("update");
    employee.classList.add("save");
    objTOchange=returnObj(data,name.textContent);

  } else if (employee.classList.contains("save")) {
    let card = employee.parentNode.parentNode;

    let text = employee.parentNode.parentNode.children[1].value;
    let firstname = text.split(" ")[0];
   
    console.log("text"+text);
    let text2 = employee.parentNode.parentNode.children[2].value;
    console.log("text2"+text2);
    let text3 = employee.parentNode.parentNode.children[3].value;
    console.log("text3"+text3);

    let text4=employee.parentNode.parentNode.children[4].value;



    console.log( "text"+text);
 
    console.log( "text2"+text);
    console.log("text3"+text);

    let h1 = document.createElement("h1");
    h1.textContent = text;
 

    let h2 = document.createElement("p");
    h2.textContent = text2;//ce von scie in input

    let h3 = document.createElement("p");
    h3.textContent = text3;

    let h4=document.createElement("p");
    h4.textContent=text4;

    let children = card.children[0];
    let children2 = card.children[1];
    let children3 = card.children[2];
    let children4=card.children[3];

    card.insertBefore(h1, children2);
    card.insertBefore(h2, children2);
    card.insertBefore(h3, children3);
    card.insertBefore(h4,children4);

    //card.removeChild(children);
    card.removeChild(children2);
    card.removeChild(children3);
    card.removeChild(children4);

    employee.textContent = "update";
    employee.classList.remove("save");
    employee.classList.add("update");



    console.log("tetx4"+text);

    objTOchange.name.first=text;
    objTOchange.name.last='';
    objTOchange.email=text2;
    objTOchange.registered.date=text3;

    data = updtateObject(data,firstname,objTOchange);
  }
});


let listContainer = document.querySelector(".container");
let btnAdd = document.querySelector(".add");

let inp1 = document.getElementById("first");
let inp2 = document.getElementById("last");
let inp3 = document.getElementById("email");
let inp4 = document.getElementById("date");

btnAdd.addEventListener("click", () => {
  let person = {
    name: {
      title: "Miss",
      first: inp1.value,
      last: inp2.value,
    },
    email: inp3.value,
    registered: {
      date: inp4.value,
      age: 15,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    },
  };

  let el = createCard(person);
  listContainer.appendChild(el);
});
