const addSquare = (parent, squareWidth) => {
  let square = document.createElement('div')
  square.classList.add('square')
  square.style.setProperty('--square-width', `${squareWidth}%`)
  addHoverEffect(square)
  parent.appendChild(square)
}

const addHoverEffect = (element) => {
  element.addEventListener('mouseover', (e) => {
    e.target.classList.add('hovered')
  })
}

const emptyGrid = (parent) => {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild)
  }
}

const setGridSize = (size, parent) => {
  emptyGrid(parent)
  const squareWidth = 100 / size
  console.log(squareWidth)
  size *= size
  for (let i = 0; i < size; i++) {
    addSquare(parent, squareWidth)
  }
}

const container = document.querySelector('.container')
setGridSize(16, container)
