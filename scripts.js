const container = document.querySelector(".container");

const grid = document.createElement("div");
grid.className = "grid";
container.appendChild(grid);

function draw() {
    let isDrawing = false;
    const grid = document.querySelector(".grid");
    grid.addEventListener("mousedown", () => {
        isDrawing == true;
        const cell = document.querySelector(".columnCell");
        cell.addEventListener("mouseover", () => {
            if (isDrawing) {
                cell.style.backgroundcolor = "black";
            }
        });
    });
}

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.className = "rowCell";

        for (let j = 0; j < num; j++) {
            const column = document.createElement("div");
            column.className = "columnCell";
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
}

function drawingGame() {
    createGrid(16);
    draw();
}

drawingGame();
