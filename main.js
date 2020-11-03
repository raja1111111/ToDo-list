const addbtn = document.querySelector('.addbtn');
var input=  document.querySelector('.input');
const container = document.querySelector('.container');

if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item {
    constructor(itemName){
        this.createDiv(itemName);

    }

    createDiv(itemName){

        let itembox = document.createElement('div');
        itembox.classList.add('item');

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled= true ;
        input.classList.add('item_input');
        input.type ="text"

       

        let editbtn = document.createElement('button');
        editbtn.textContent ="Edit"
        editbtn.classList.add('editbtn');

        let removebtn = document.createElement('button');
        removebtn.textContent="Remove"
        removebtn.classList.add('removebtn');

        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editbtn);
        itembox.appendChild(removebtn);

        editbtn.addEventListener('click',() => this.edit(input));

        removebtn.addEventListener('click', ()=>this.remove(itembox));




    }

    edit(input){
        if(input.disabled ==true){
        input.disabled = !input.disabled;
    }
    else{
        input.disabled = !input.disabled;
        let indexof = todos.indexOf(name);
        todos[indexof] = input.value;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}
 

function check (){
    if(input.value != ""){
		new item(input.value);
        todos.push(input.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		input.value = "";
	}

}

addbtn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();

    }
})

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
new item("sport")