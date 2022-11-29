let list = document.querySelector("#myList")
let items;


//Load if there is an item saved in local storage
loadItems();

function loadItems() {
    items = getItemFromLS();
    items.forEach(item => CreateAndDelete(item));
}

//get items from local storage
function getItemFromLS() {
    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"))
    }
    return items;
}

//set item to local storage
function setItemToLS(text) {
    items = getItemFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

//delete item from LS
function deleteFromLS(text) {
    items = getItemFromLS();
    items.forEach(function(item, index) {
        if (item===text) {
         items.splice(index,1)
        }   
    });
    localStorage.setItem("items", JSON.stringify(items));
}

//call eventListener
list.addEventListener("click",function(item){
   
    if(item.target.tagName=="LI") {
        item.target.classList.toggle("checked");
        ToggleDeleteButton();
    }
});

//toggle  delete button
function ToggleDeleteButton() {
    let checkList = document.querySelectorAll(".checked");
    if (checkList.length>0) {
        document.querySelector("#deleteAll").classList.remove("d-none");
    } else {
        document.querySelector("#deleteAll").classList.add("d-none");
    }
}

//deleteAll items
document.querySelector("#deleteAll").onclick = function() {
    let elements = document.querySelectorAll(".checked");

    elements.forEach(item =>{
        item.remove();
        deleteFromLS(item.firstChild.textContent);
    });

    

    document.querySelector("#deleteAll").classList.add("d-none");
}

//add new item
document.querySelector("#btnCreate").onclick = function() {

    let item = document.querySelector("#txtItem").value;
  
    if (item==="") {
        alert("Lütfen bir değer giriniz!");
        return;
    }

    //create item
    CreateAndDelete(item); 
    
    //save to local storage
    setItemToLS(item);

    //clear input
    document.querySelector("#txtItem").value = "";
}

function CreateAndDelete(item) {
    //create li
    let li = document.createElement("li");
    var textLi = document.createTextNode(item);
    li.className = "list-group-item";
    li.appendChild(textLi);

    //add li to ul
    list.appendChild(li);    

    //create span
    let span = document.createElement("span");
    let textSp = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(textSp);

    //add span to li
    li.appendChild(span);

    //delete an item
    span.onclick = function() {
        let li = this.parentElement;
        li.remove();

        //delete from local storage
        deleteFromLS(item);
    }    
}

