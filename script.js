document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");

  const width = 10;
  let currentIndex = 0;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0]; //az első 3 indexen jelenik meg a snake
  let direction = 1;
  let intervalTime = 0;
  let interval = 0;

  function randomApple() {
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
    clearInterval(interval);
    // direction = 1;

    randomApple();
    intervalTime = 1000;

    currentSnake = [2, 1, 0];

    // currentIndex = 0;
    currentSnake.forEach((i) => squares[i].classList.add("snake"));

    interval = setInterval(moveOutcomes, intervalTime);
  }

  function moveOutcomes() {
    // itt a mozgás mechanizmusa történik: lecsípünk egy részt a farkából, majd az elejére hozzáadunk egyet, ezzel is haladtatjuk a snake-t
    //a pop-pal a currentSnake-megkapjuk a tömb utolsó elemét
    const tail = currentSnake.pop();
    //ezt az utolsó elemet töröljük a snake-ből, tehát a farkát töröljük
    squares[tail].classList.remove("snake");

    //itt a irány függnényében hozzáadunk egy elemet a snake-hez
    currentSnake.unshift(currentSnake[0] + direction);
    console.log(tail);

    squares[currentSnake[0]].classList.add("snake");
  }

  function control(e) {
    if (e.keyCode === 39) {
      direction = 1; //jobb
    } else if (e.keyCode === 38) {
      direction = -width; // fel
    } else if (e.keyCode === 37) {
      direction = -1; // bal
    } else if (e.keyCode === 40) {
      direction = +width; //le
    }
  }
  document.addEventListener("keyup", control);
  document.addEventListener("click", startGame);
});
