// Create divs and append them to container.

grid();

function grid(n = 16) {

    let container = document.querySelector("#container");
  
    for (let i = 0; i < n * n; i++) {
        let content = document.createElement("div");
        content.classList.add("content");
        content.setAttribute("style", "background-color: #fff");
        container.appendChild(content);
        container.setAttribute("style", `grid: repeat(${n}, auto) / repeat(${n}, auto)`);
        
    }
    black();
}
function reset() {
  document.querySelector("#container").innerHTML = "";
  let ask = prompt("How many squares? (Enter a number between 2 and 70)",16);
  grid(ask);
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
