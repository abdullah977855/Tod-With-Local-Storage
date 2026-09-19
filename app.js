const inputOfText = document.querySelector("#text");
const addButton = document.getElementById("add");
const todoItem = document.getElementById("todo-items");
const list = document.getElementById("list");

addButton.addEventListener("click", function () {
    if (inputOfText.value == "") {
        alert("Empty Input")
        return;
    } else {
        const listItem = document.createElement("li");
        listItem.innerText = inputOfText.value + " ";
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton)
        deleteButton.addEventListener("click", function(){
            listItem.remove();
        })
        editButton.addEventListener("click", function(){
            let editPrompt = prompt("Enter a text you want to edit");
            if(editButton == ""){
                alert("Empty Input")
            }else{
                listItem.firstChild.nodeValue = editPrompt;
            }
        })
        list.appendChild(listItem)
        inputOfText.value = "";
    }

})