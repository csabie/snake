document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");

  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0]; //az első 3 indexen jelenik meg a snake
  let direction = 1;
  let score = 0;
  const speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  function randomApple() {
    // do {
    //   appleIndex = Math.floor(Math.random() * squares.length);
    // } while (squares[currentIndex].classList.contains("snake"));

    appleIndex = Math.floor(Math.random() * squares.length);

    while (squares[currentIndex].classList.contains("snake")) {
      appleIndex = Math.floor(Math.random() * squares.length);
      console.log(squares[currentIndex].classList);
    }
    squares[appleIndex].classList.add("apple");
  }

  function startGame() {
	// a snake resetálása
    currentSnake.forEach((i) => squares[i].classList.remove("snake"));
    // ez azért fontos, hogy az új apple letétele előtt(randomApple() fv-vel) az előzőt törölje, mert ha nem akkor több applet rak random helyre
    squares[appleIndex].classList.remove("apple");
    randomApple();
    currentSnake.forEach((i) => squares[i].classList.add("snake"));
  }

  document.addEventListener("click", startGame);
});
