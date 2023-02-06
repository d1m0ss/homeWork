const listItem = document.createElement('div')
const listWrapper = document.createElement('label')
const rootWrapper = document.getElementById('rootListItem')
listItem.classList.add('root__list-item')
listItem.insertAdjacentElement('afterbegin', listWrapper)
rootWrapper.insertAdjacentElement('afterbegin', listWrapper)
console.log(listItem, listWrapper,rootWrapper);