
function newElement(){
    // let Eleman= document.createElement("li");
    // let Eleman1=document.getElementById("task").nodeValue;
    // Eleman.appendChild("Eleman1");
    // document.querySelector("#list").appendChild("li");
    
const node = document.createElement("li");
const textnode = document.getElementById("task").value;
// const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("list").appendChild(node);
}