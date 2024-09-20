let box = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame-button");

console.log(newGame);

let turn = true;
let winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],
];


box.forEach(element => {
     element.addEventListener("click", () => {
          if (!element.classList.contains("clicked")) {
               if (turn) {
                    element.innerHTML = "O";
                    turn = false;
               } else {
                    element.innerHTML = "X";
                    turn = true;
               }
               // Mark the element as clicked
               element.classList.add("clicked");
               winGame();
          }
     })
});


let winGame = () => {
     for (const element of winPatterns) {
          let val1 = box[element[0]].innerHTML;
          let val2 = box[element[1]].innerHTML;
          let val3 = box[element[2]].innerHTML;

          if (val1 !== "" && val2 !== "" && val3 !== "") {
               if (val1 === val2 && val2 === val3) {
                    showWinner(val1);
                    return true;
               }
          }
     }

}

let showWinner = (res) => {
     result.innerHTML = `${res} is Winner !`;
     result.parentElement.style.visibility = "visible";
}

let end = reset.addEventListener("click", () => {
     turn = true;
     enableBoxs();
     result.innerHTML = "";
})

const enableBoxs = () => {
     for (const element of box) {
          element.classList.remove("clicked");
          element.innerHTML = "";
     }
}

newGame.addEventListener("click", () => {
     turn = true;
     enableBoxs();
     result.innerHTML = "";
     setTimeout(1000);
     result.parentElement.style.visibility = "hidden";

})