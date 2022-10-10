const grid = document.querySelector('#grid');



const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');

let i = 1;
for (i; i <= 16; i++) {
    grid.appendChild(gridItem.cloneNode(true));
}

let gridNum = Math.sqrt(i-1);
grid.setAttribute (
    'style',
    `grid-template-columns: repeat(${gridNum}, 1fr);`
);

grid.append();
console.log(gridNum);