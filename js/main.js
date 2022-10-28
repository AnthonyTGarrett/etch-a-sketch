let boardSize = 25;

const createBoard = (size) => {
  const grid = new Array(size*size);
  const board = document.querySelector('.board');
  
  for(let i = 0; i < grid.length; i++) {
    grid[i] = document.createElement('div');
    grid[i].classList.add('grid-square');
    grid[i].style.width = `${500/size}px`;
    grid[i].style.height = `${500/size}px`;
    board.appendChild(grid[i]);
  }
   
}

const createFunctionality = () => {
  const gridSquare = document.querySelectorAll('.grid-square');
  const gridArray = Array.from(gridSquare);

  gridArray.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      e.target.classList.add('painted', 'disable');
    })
  })
}

createBoard(boardSize)
createFunctionality()

const boardButton = document.querySelector('.boardButton');
const resetButton = document.querySelector('.resetButton');

boardButton.addEventListener('click', (e) => {
  
  boardSize = parseInt(document.querySelector('input').value);
  const board = document.querySelector('.board');
  board.textContent = "";
  createBoard(boardSize)
  createFunctionality()
})

resetButton.addEventListener('click', () => {
  const board = document.querySelector('.board');
  board.textContent = "";
  createBoard(boardSize)
  createFunctionality()
})