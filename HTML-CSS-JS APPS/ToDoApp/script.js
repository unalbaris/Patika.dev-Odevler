let list = document.querySelector("#myList");
let items;


//Load if there is an item saved in local storage
loadItems();

function loadItems() {
    items = getItemFromLS();
    items.forEach(item => createItem(item));
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

    if(item.target.tagName=="SPAN") {
        deleteItem(item.target);
    }
});

//toggle  delete button
function ToggleDeleteButton() {
    let checkList = document.querySelectorAll(".checked");   
    if (checkList.length>0) {
        document.querySelector("#deleteChosen").classList.remove("d-none");
    } else {
        document.querySelector("#deleteChosen").classList.add("d-none");
    }
}

//deleteChosen items
document.querySelector("#deleteChosen").onclick = function() {
    let elements = document.querySelectorAll(".checked");

    elements.forEach(item =>{
        item.remove();
        deleteFromLS(item.firstChild.textContent);
    });

    //localstorage clear
    if (localStorage.getItem("items") === "[]"){
        localStorage.clear();
    }

    
    document.querySelector("#deleteChosen").classList.add("d-none");

    //hide delete all button
    if (list.firstElementChild==null) {
        document.querySelector("#deleteAll").classList.add("d-none");
    }
}

//add new item
document.querySelector("#btnCreate").onclick = function() {

    let item = document.querySelector("#txtItem").value;
  
    if (item==="") {
        alert("Lütfen bir değer giriniz!");
        return;
    }

    //create item
    createItem(item); 
    
    //save to local storage
    setItemToLS(item);

    //clear input
    document.querySelector("#txtItem").value = "";
}

function createItem(item) {
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

    //show delete all button
    if (list.firstElementChild.tagName=="LI") {
        document.querySelector("#deleteAll").classList.remove("d-none");
    }
}

//delete an item
function deleteItem() {  
    let li = document.querySelector(".list-group-item");
    li.remove();

    //delete from local storage
    deleteFromLS(li.firstChild.textContent);

    //localstorage clear
    if (localStorage.getItem("items") === "[]"){
        localStorage.clear();
    }
    

    //hide delete chosen button
    if (document.querySelectorAll(".checked").length==0) {
        document.querySelector("#deleteChosen").classList.add("d-none");
    }

    //hide delete all button
    if (list.firstElementChild==null) {
        document.querySelector("#deleteAll").classList.add("d-none");
    }
} 

//delete all items
document.querySelector("#deleteAll").onclick = function() {
    list.innerHTML = ""
    //localstorage clear
    localStorage.clear();

    //hide delete all button
    if (list.firstElementChild==null) {
        document.querySelector("#deleteAll").classList.add("d-none");
    }

    //hide delete chosen button
    if (document.querySelectorAll(".checked").length==0) {
        document.querySelector("#deleteChosen").classList.add("d-none");
    }
   
}

