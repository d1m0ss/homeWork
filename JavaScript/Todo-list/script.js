const listButton = createElement("button", {
  className: "root__button",
  textContent: "X",
  type: "submit",
});
const toDoBody = createElement("section", {
  className: "root__body",
  id: "todoBody",
});
const listText = createElement("span", {
  className: "root__text",
  textContent: "Todo Text",
});
const topInput = createElement("input", {
  className: "root__input",
  placeholder: "Enter todo ...",
});
const listCB = createElement("input", {
  className: "root__check-box",
  type: "checkbox",
});
const headerRowTop = createElement("section", {
  className: "root__header-row",
});
const listWrapper = createElement("article", { className: "root__wrapper" });
const listBox = createElement("div", { className: "root__item-right-bar" });
const toDoHeader = createElement("header", { classnName: "root__header" });
const listDate = createElement("span", { className: "root__date" });
const root = document.getElementById("root");
const listCount = createElement("span");

let completeCount = 0;
let allCount = 2;
const date = new Date();

const listCountCompleted = listCount.cloneNode(true);
const listCountAll = listCount.cloneNode(true);
const bottomInput = topInput.cloneNode(true);

listCountCompleted.classList = "root__count-completed";
listCountAll.classList = "root__count-all";

const bottomButtonShowCompleted = listButton.cloneNode(true);
const bottomButtonShowAll = listButton.cloneNode(true);
const topButtonDeleteLast = listButton.cloneNode(true);
const topButtonDeleteAll = listButton.cloneNode(true);
const headerRowBottom = headerRowTop.cloneNode(true);
const topButtonAdd = listButton.cloneNode(true);

bottomInput.setAttribute("placeholder", "Search ...");
listCountCompleted.setAttribute("id", "completeCount");
listButton.setAttribute("id", "showAllButton");
listCountAll.setAttribute("id", "countAll");

listCountCompleted.innerText = `Completed: ${completeCount}`;
bottomButtonShowCompleted.innerText = "Show Comleted";
topButtonDeleteLast.innerText = "Delete Last";
topButtonDeleteAll.innerText = "Delete All";
listCountAll.innerText = `All: ${allCount}`;
listDate.innerText = date.toLocaleString();
bottomButtonShowAll.innerText = "Show All";
topButtonAdd.innerText = "Add";

function createElement(tagName, options) {
  const element = Object.assign(document.createElement(tagName), options);
  return element;
}

function totalCount() {
  const count = document.getElementById("countAll");
  count.innerText = `All: ${toDoBody.children.length}`;
}

function showAllBtn() {
  const allElement = todoBody.querySelectorAll(".hiden");
  allElement.forEach((item) => {
    item.style.display === "none"
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
  console.log(allElement);
  completedCount();
  totalCount();
}

function completedCount() {
  const count = document.getElementById("completeCount");
  const quantity = todoBody.querySelectorAll(".hiden");
  count.innerText = `Completed: ${quantity.length}`;
}

const todoAdd = () => {
  if (topInput.value === "") {
    topInput.focus();
  } else {
    topInput.value === ""
      ? (listText.innerText = "ToDo Text")
      : (listText.innerText = `${topInput.value}`);
    const date = new Date();
    listDate.innerText = date.toLocaleString();
    const listWrapperClone = listWrapper.cloneNode(true);
    toDoBody.append(listWrapperClone);
    topInput.value = "";
    totalCount();
  }
};

const todoAddAtKey = (e) => {
  if (e.keyCode !== 13) return;
  todoAdd();
};

const todoDeleteLast = () => {
  toDoBody.children[toDoBody.childElementCount - 1].remove();
  totalCount();
  completedCount();
};

const todoDeleteAll = () => {
  for (let i = toDoBody.childElementCount; i > 0; i--) {
    toDoBody.children[0].remove();
  }
  totalCount();
  completedCount();
};

topButtonDeleteLast.addEventListener("click", todoDeleteLast);
topButtonDeleteAll.addEventListener("click", todoDeleteAll);
topButtonAdd.addEventListener("click", todoAdd);
bottomButtonShowAll.addEventListener("click", showAllBtn);
topInput.addEventListener("keydown", todoAddAtKey);

headerRowBottom.append(
  listCountAll,
  listCountCompleted,
  bottomButtonShowCompleted,
  bottomButtonShowAll,
  bottomInput
);
headerRowTop.append(
  topButtonDeleteAll,
  topButtonDeleteLast,
  topInput,
  topButtonAdd
);

toDoHeader.append(headerRowTop, headerRowBottom);
listWrapper.append(listCB, listText, listBox);
listBox.append(listButton, listDate);

root.append(toDoHeader, toDoBody);

for (let i = 0; i < allCount; ++i) {
  const listWrapperClone = listWrapper.cloneNode(true);
  toDoBody.append(listWrapperClone);
  listText.innerText = listText.innerText;
}

const todoBody = document.getElementById("todoBody");

const completeTodo = (element) => {
  const target = element.target;
  const todoChecked = target.querySelector(".root__check-box");
  const todoCheckedText = target.querySelector(".root__text");
  if (target.className === "root__wrapper hiden") {
    target.classList.remove("hiden");
  }
  if (target.className !== "root__wrapper") return;
  if (target.style.background === "green") {
    if (target.children[1] == todoCheckedText) {
      todoCheckedText.style.textDecoration = "none";
    }
    target.style.background = "none";
    todoChecked.checked = false;
    completedCount();
    totalCount();
  } else {
    if (target.children[1] == todoCheckedText) {
      todoCheckedText.style.textDecoration = "line-through";
    }
    target.style.background = "green";
    target.style.display = "none";
    todoChecked.checked = true;
    target.classList.add("hiden");
    completedCount();
    totalCount();
  }
};

const correctTodo = (element) => {
  const target = element.target;
  if (target.className !== "root__text") return;
  const inputElement = createElement("input", {
    className: "root__input",
    type: "text",
    placeholder: "Enter todo text ...",
  });
  target.outerHTML = inputElement.outerHTML;
};

const closeTodo = (elem) => {
  const target = elem.target;
  if (target.className !== "root__button") return;
  elem.target.parentElement.parentElement.remove();
  completedCount();
  totalCount();
};

const todoFilter = () => {
  const filteredItems = todoBody.childNodes;
  // console.log(todoBody.filter((item) => {  }));
  todoBody.childNodes[0].classList.add("hiden");
};

todoBody.addEventListener("click", closeTodo);
todoBody.addEventListener("click", completeTodo);
todoBody.addEventListener("click", correctTodo);
bottomInput.addEventListener("keydown", todoFilter);
