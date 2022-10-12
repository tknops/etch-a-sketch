const grid = document.getElementById('grid');
const slider = document.getElementById('myRange');

function createGrid(newValue) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    let i = 1;
    for (i; i <= newValue; i++) {
        grid.appendChild(gridItem.cloneNode(true));
    }

    let gridNum = Math.sqrt(i-1);
    grid.setAttribute (
        'style',
        `grid-template-columns: repeat(${gridNum}, 1fr);`
    );

    hoverOverGrid();
    grid.append();
}

function hoverOverGrid() {
    const gridItems = grid.childNodes;

    gridItems.forEach((e) => {
        e.addEventListener('mouseover', () => {
            e.classList.add('grid-item-dark-bg');
        });
    });
}

function sliderAmount() {
    slider.oninput = () => {
        let newValue = slider.value * slider.value;
        grid.innerHTML = '';
        createGrid(newValue);
    }
}

sliderAmount();
createGrid(16);
