const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

function createGrid(rowNum, collumnNum) {
    for (let i = 0; i < rowNum * collumnNum; i++) {
        const div = document.createElement("div");
        div.className = "grid";
        container.appendChild(div);
    }
}
createGrid(16, 16);
