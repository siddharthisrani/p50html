const pacman = document.querySelector("#pacman");


setInterval(() => {
  pacman.src = pacman.src.includes("open") ? "close.png" : "open.png";
}, 300);