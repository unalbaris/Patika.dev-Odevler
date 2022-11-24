let items = ["item 1", "item 2", "item 3", "item 4"];


let list = document.querySelector("#myList")

items.forEach(function(item){
    CreateItem(item);
});

list.addEventListener("click",function(item){

    
    if(item.target.tagName=="LI") {
        item.target.classList.toggle("checked");
        ToggleDeleteButton();
    }

});

function ToggleDeleteButton() {
    let checkList = document.querySelectorAll(".checked");
    if (checkList.length>0) {
        document.querySelector("#deleteAll").classList.remove("d-none");
    } else {
        document.querySelector("#deleteAll").classList.add("d-none");
    }
}

document.querySelector("#deleteAll").onclick = function() {
    let elements = document.querySelectorAll(".checked");

    elements.forEach(item =>{
        item.style.display = "none"
    });

}

document.querySelector("#btnCreate").onclick = function() {

    let item = document.querySelector("#txtItem").value;

    if (item==="") {
        alert("Lütfen bir değer giriniz!");
        return;
    }

    CreateItem(item);
}

function CreateItem(item) {
    let li = document.createElement("li");
    var textLi = document.createTextNode(item);
    li.className = "list-group-item";
    li.appendChild(textLi);
    list.appendChild(li);
    
    let span = document.createElement("span");
    let textSp = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(textSp);
    li.appendChild(span);

    span.onclick = function() {
        let li = this.parentElement;
        li.style.display = "none";
        li.classList.remove("checked");
    }
}

