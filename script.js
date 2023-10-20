const inputField = document.getElementById("inputField");
const todoList = document.getElementById("todoList");
const cut = document.querySelector("i");
const listItem = document.createElement("li");

inputField.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTodoItem(inputField.value);
        inputField.value = "";
    }
});
function addTodoItem(itemText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${itemText}
        <span class="remove" onclick="removeTodoItem(this)"> X </span>
        `;
    todoList.appendChild(listItem);
}

function removeTodoItem(element) {
    todoList.removeChild(element.parentElement);
}