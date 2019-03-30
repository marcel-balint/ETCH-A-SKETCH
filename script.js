// Create divs and append them to container.

function grid(n) {
  
    let container = document.querySelector("#container");
    n = 16;
    for (let i = 0; i < n * n; i++) {
      let content = document.createElement("div");
      content.setAttribute("style","background-color: LightGray")
      container.appendChild(content);
      container.setAttribute("style", `grid: repeat(${n}, auto) / repeat(${n}, auto)`);
  
    }
  }
  grid();