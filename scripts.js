const container = document.querySelector(".container");

const button = document.createElement("button");
button.id = "changeSize";
button.innerText = "Change grid size!";
container.appendChild(button);

button.addEventListener("click", () => {
    const del = document.querySelector(".grid");
    container.removeChild(del);
    let input = prompt("choose a number between 1-100");

    if (input < 1 || input > 100 || input == null) {
        input = prompt("choose a number between 1-100");
    } else {
        createGrid(input);
    }
});

function createGrid(num) {
    const grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.className = "rowCell ";

        for (let j = 0; j < num; j++) {
            const column = document.createElement("div");
            column.className = "columnCell cell";
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
    draw();
}
function draw() {
    let isDrawing = false;
    const grid = document.querySelector(".grid");

    grid.addEventListener("mousedown", () => {
        isDrawing = true;
    });
    grid.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    grid.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("columnCell")) {
            e.target.style.backgroundColor = "black";
        }
    });
}

createGrid(16);
