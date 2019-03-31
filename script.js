// Create divs and append them to container.

grid();

function grid(n) {

    let container = document.querySelector("#container");
    n = 16;
    for (let i = 0; i < n * n; i++) {
        let content = document.createElement("div");
        content.classList.add("content");
        content.setAttribute("style", "background-color: white");
        container.appendChild(content);
        container.setAttribute("style", `grid: repeat(${n}, auto) / repeat(${n}, auto)`);

    }
}


//black color
function black() {

    document.querySelectorAll(".content").forEach(
        content =>
        (content.onmouseover = () => {
            content.setAttribute(
                "style",
                `background-color: #000`);
        })
    );
}
//white color
function white() {

    document.querySelectorAll(".content").forEach(
        content =>
        (content.onmouseover = () => {
            content.setAttribute(
                "style",
                `background-color: #fff`);
        })
    );
}
