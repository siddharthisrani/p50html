let count = 1;
let cplayer = "";
let gameend = false;

let fill = (e) => {
  let box = document.getElementById(e.id);

  if (box.innerHTML !== "" || gameend) return;

  if (count % 2 !== 0) {
    box.innerHTML = "X";
    cplayer = "X";
  } else {
    box.innerHTML = "O";
    cplayer = "O";
  }

  count++;

  if (winner()) {
    alert(`Winner is ${cplayer}`);
    gameend = true;
    return;
  }

  
  if (count > 9) {
    alert("Match Draw");
    gameend = true;
  }
};

let winner = () => {
  let b1 = document.querySelector("#div1").innerHTML;
  let b2 = document.querySelector("#div2").innerHTML;
  let b3 = document.querySelector("#div3").innerHTML;
  let b4 = document.querySelector("#div4").innerHTML;
  let b5 = document.querySelector("#div5").innerHTML;
  let b6 = document.querySelector("#div6").innerHTML;
  let b7 = document.querySelector("#div7").innerHTML;
  let b8 = document.querySelector("#div8").innerHTML;
  let b9 = document.querySelector("#div9").innerHTML;

  return (
    (b1 && b1 === b2 && b2 === b3) ||
    (b4 && b4 === b5 && b5 === b6) ||
    (b7 && b7 === b8 && b8 === b9) ||
    (b1 && b1 === b4 && b4 === b7) ||
    (b2 && b2 === b5 && b5 === b8) ||
    (b3 && b3 === b6 && b6 === b9) ||
    (b1 && b1 === b5 && b5 === b9) ||
    (b3 && b3 === b5 && b5 === b7)
  );
};
