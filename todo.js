const addBtn = document.getElementById("todo-add-btn");
const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");

const ulTodoList = document.getElementById("todo-list");

let notes = [];

const addNoteDOM = (note) => {
  const item = document.createElement("li");

  item.classList.add("todo-list-item");

  item.innerHTML = `
  ${note.text}<button class="btn btn-delete" onclick="todoRemove(${note.id})">X</button> 
  `;

  ulTodoList.appendChild(item);
};

// Generate pseudo-random ID for use to delete note items
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add note
const addnote = (e) => {
  e.preventDefault();
  const inputVal = todoInput.value;

  if (inputVal.trim() == "") {
    alert("Please add a text and amount");
  } else {
    const note = {
      id: generateID(),
      text: inputVal,
    };

    notes.push(note);

    addNoteDOM(note);
    todoInput.value = "";
  }
};

// Remove note by ID
const todoRemove = (id) => {
  notes = notes.filter((note) => note.id !== id);

  init();
};

// Init app 
function init() {

  ulTodoList.innerHTML = "";
  notes.forEach(addNoteDOM);
}

init();
todoForm.addEventListener("submit", addnote);
