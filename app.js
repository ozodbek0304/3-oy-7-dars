setInterval(() => {
  let body = document.querySelector("body");
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  body.style.background = ` rgb(${a}, ${b}, ${c}) `;
}, 3000);

setInterval(() => {
  let img = document.querySelector("img");
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  img.style.background = ` rgb(${a}, ${b}, ${c}) `;
}, 3000);


let lampa = document.querySelector("#showcase");

setInterval(() => {
    let src = lampa.getAttribute("src");
    if (src === "pages/lamp.png") {
      lampa.setAttribute("src", "pages/lamp1.png");
    }
    else if (src === "pages/lamp.png") {
      lampa.setAttribute("src", "pages/lamp1.png");
        
    } else {
      lampa.setAttribute("src", "pages/lamp.png");
        
    }
}, 2000);
