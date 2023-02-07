const headerRowTop = document.createElement("section");
const toDoHeader = document.createElement("header");
const listButton = document.createElement("button");
const listWrapper = document.createElement("article");
const toDoBody = document.createElement("section");
const listCount = document.createElement("span");
const topInput = document.createElement("input");
const listText = document.createElement("span");
const listDate = document.createElement("span");
const listCB = document.createElement("input");
const listBox = document.createElement("div");
const root = document.getElementById("root");

const completedCount = 0;
let allCount = 2;
const date = new Date();

const listCountCompleted = listCount.cloneNode(true);
const listCountAll = listCount.cloneNode(true);

listCountCompleted.classList = "root__count-completed";
headerRowTop.classList = "root__header-row";
listCountAll.classList = "root__count-all";
listBox.classList = "root__item-right-bar";
listWrapper.classList = "root__wrapper";
toDoHeader.classList = "root__header";
listButton.classList = "root__button";
listCB.classList = "root__check-box";
listText.classList = "root__text";
listDate.classList = "root__date";
topInput.classList = "root__input";
toDoBody.classList = "root__body";

const bottomInput = topInput.cloneNode(true);

bottomInput.setAttribute("placeholder", "Search ...");
topInput.setAttribute("placeholder", "Enter todo ...");
listCountAll.setAttribute("id", "countAll");
listButton.setAttribute("type", "submit");
bottomInput.setAttribute("type", "text");
listCB.setAttribute("type", "checkbox");
topInput.setAttribute("type", "text");
listWrapper.setAttribute("id", "rootWrapper");

const bottomButtonShowCompleted = listButton.cloneNode(true);
const bottomButtonShowAll = listButton.cloneNode(true);
const topButtonDeleteLast = listButton.cloneNode(true);
const topButtonDeleteAll = listButton.cloneNode(true);
const topButtonAdd = listButton.cloneNode(true);

listCountCompleted.innerText = `Completed: ${completedCount}`;
bottomButtonShowCompleted.innerText = "Show Comleted";
topButtonDeleteLast.innerText = "Delete Last";
topButtonDeleteAll.innerText = "Delete All";
listCountAll.innerText = `All: ${allCount}`;
bottomButtonShowAll.innerText = "Show All";
topButtonAdd.innerText = "Add";
listDate.innerText = date.toLocaleString();
listText.innerText = "ToDo Text";
listButton.innerText = "X";

const headerRowBottom = headerRowTop.cloneNode(true);

const totalCount = () => {
  const count = document.getElementById("countAll");
  count.innerText = `All: ${toDoBody.children.length}`;
};

const todoAdd = () => {
  if (topInput.value === "") {
    topInput.focus()
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

const todoDeleteLast = () => {
  toDoBody.children[toDoBody.childElementCount - 1].remove();
  totalCount();
};

const todoDeleteAll = () => {
  for (let i = toDoBody.childElementCount; i > 0; i--) {
    toDoBody.children[0].remove();
  }
  totalCount();
};

topButtonDeleteLast.addEventListener("click", todoDeleteLast);
topButtonDeleteAll.addEventListener("click", todoDeleteAll);
listCountAll.addEventListener("click", totalCount);
topButtonAdd.addEventListener("click", todoAdd);

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
  listText.innerText = `ToDo Text`;
}
