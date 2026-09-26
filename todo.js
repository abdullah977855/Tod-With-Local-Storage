const inputOfText = document.querySelector("#text");
const addButton = document.getElementById("add");
const todoItem = document.getElementById("todo-items");
const list = document.getElementById("list");
let logOut = document.createElement("button");

let arrayOfTodo = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    list.innerHTML = "";

    arrayOfTodo.forEach((todoText, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = todoText + " ";

        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            arrayOfTodo.splice(index, 1);
            saveToLocalStorage();
        });

        editButton.addEventListener("click", function () {
            let editPrompt = prompt("Enter a text you want to edit", todoText);

            if (editPrompt !== null && editPrompt.trim() !== "") {
                arrayOfTodo[index] = editPrompt.trim();
                saveToLocalStorage();
            } else if (editPrompt === "") {
                alert("Empty Input");
            }
        });

        list.appendChild(listItem);
    });
}

function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(arrayOfTodo));
    renderTodos();
}

renderTodos();

addButton.addEventListener("click", function () {
    if (inputOfText.value.trim() == "") {
        alert("Empty Input");
        return;
    } else {
        arrayOfTodo.push(inputOfText.value.trim());
        saveToLocalStorage();
        inputOfText.value = "";
    }
});

logOut.innerText = "Move Log-Out Page";
todoItem.appendChild(logOut);
logOut.addEventListener("click", function () {
    window.location.href = "./index.html";
});
