let input = document.querySelector("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let body = document.querySelector("body");
body.style.backgroundImage = "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 0%), url(blue-pink-papers-happy-teacher-s-day-concept_23-2148639509.JPG)";
// body.style.backgroundPosition ="center";
body.style.backgroundSize = "100%";
// body.style.backgroundRepeat ="no-repeat";
// body.style.background = "rgb(2,0,36)";
// body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);"


const todo = (hold) => {
    hold.preventDefault ();
    let li = document.createElement("li");
    li.className = "list-group-item mt-3 rounded-3";
    li.innerText = input.value;  // same input
    li.style.backgroundColor = "LightGray";

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.className = "btn btn-sm btn-danger rounded-3 float-end";

    let editbtn = document.createElement("button2")
    editbtn.innerText = "Edit";
    editbtn.className = "btn btn-sm btn-primary rounded-3 float-end mx-2";

    ul.appendChild(li);
    li.appendChild(dltbtn);
    li.appendChild(editbtn);

    form.reset();
    
};
form.addEventListener("submit", todo);

const deletetodo = (e) => {
    if (e.target.className.includes("btn-danger")){
        if (window.confirm("Are you Sure..?")) {
            ul.removeChild(e.target.parentElement);
        }
    }
};

ul.addEventListener("click", deletetodo);

const edittudo = (e) => {
    if (e.target.className.includes("btn-primary")){
        if (window.confirm("Are you Edit..?")) {
            ul.contentEditable(e.target.input.innerText);
        }
    }

    edittudo.reset();
};
ul.addEventListener("click", edittudo);