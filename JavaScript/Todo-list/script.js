const headerRowTop = document.createElement("section");
const toDoHeader = document.createElement("header");
const listButton = document.createElement("button");
const listWrapper = document.createElement("label");
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
listButton.setAttribute("type", "submit");
bottomInput.setAttribute("type", "text");
listCB.setAttribute("type", "checkbox");
topInput.setAttribute("type", "text");

const bottomButtonShowCompleted = listButton.cloneNode(true);
const bottomButtonShowAll = listButton.cloneNode(true);
const topButtondeleteLast = listButton.cloneNode(true);
const topButtonDeleteAll = listButton.cloneNode(true);
const topButtonAdd = listButton.cloneNode(true);

listCountCompleted.innerText = `Completed: ${completedCount}`;
bottomButtonShowCompleted.innerText = "Show Comleted";
topButtondeleteLast.innerText = "Delete Last";
topButtonDeleteAll.innerText = "Delete All";
listCountAll.innerText = `All: ${allCount}`;
bottomButtonShowAll.innerText = "Show All";
topButtonAdd.innerText = "Add";
listDate.innerText = "Date";
listText.innerText = "Text";
listButton.innerText = "X";

const headerRowBottom = headerRowTop.cloneNode(true);

headerRowBottom.append(
  listCountAll,
  listCountCompleted,
  bottomButtonShowCompleted,
  bottomButtonShowAll,
  bottomInput
);
headerRowTop.append(
  topButtonDeleteAll,
  topButtondeleteLast,
  topInput,
  topButtonAdd
);
toDoHeader.append(headerRowTop, headerRowBottom);
listWrapper.append(listCB, listText, listBox);
listBox.append(listButton, listDate);

root.append(toDoHeader, toDoBody);

const listQuantity = (number = Math.ceil(Math.random() * 5)) => {
  for (let i = 0; i < number; ++i) {
    const listWrapperClone = listWrapper.cloneNode(true);
    toDoBody.append(listWrapperClone);
  }
};

listQuantity(allCount);
