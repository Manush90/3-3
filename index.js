document.addEventListener("DOMContentLoaded", function () {
  const newItemInput = document.getElementById("new-item-input");
  const addButton = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", function () {
    const newItemText = newItemInput.value.trim();
    if (newItemText !== "") {
      const newItem = document.createElement("li");
      newItem.classList.add("todo-item");
      newItem.innerHTML = `
        <input type="checkbox">
        <span>${newItemText}</span>
        <button>Delete</button>
      `;
      todoList.appendChild(newItem);
      newItemInput.value = "";
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      event.target.closest("li").remove();
    }
  });
});
