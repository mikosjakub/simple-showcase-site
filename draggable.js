const draggable_list = document.getElementById("draggable-list");

// All possible color classes
const colors = ["red", "green", "blue", "yellow", "purple"];

// Store listitems
const listItems = [];

let dragStartIndex;


// Insert list items into DOM
const createList = () => {
  colors.forEach((color, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItems.push(listItem);
    draggable_list.appendChild(listItem);

    listItem.innerHTML = `
        <div class="drag ${color}" draggable="true">
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
  });

  addEventListeners();
}

function dragStart () {
  // console.log("Event: ", "dragstart");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  // console.log(dragStartIndex);
}

const dragOver = (e) => {
  // console.log("Event: ", "dragover");
  e.preventDefault();
}

function dragDrop(){
  // console.log("Event: ", "drop");
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
}

// Swap list items that are drag and drop
const swapItems = (fromIndex, toIndex) => {
  const itemOne = listItems[fromIndex].querySelector(".drag");
  const itemTwo = listItems[toIndex].querySelector(".drag");

  // console.log(listItems[fromIndex]);

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Append all necessary event listeners
const addEventListeners = () => {
  const draggables = document.querySelectorAll(".drag");
  const dragListItems = document.querySelectorAll("#draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
  });
}

createList();
