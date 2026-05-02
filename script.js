const puzzle = document.getElementById("puzzle");
const size = 3;
let tiles = [];
let selected = null;

// Create tiles
for (let i = 0; i < size * size; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");

  const x = i % size;
  const y = Math.floor(i / size);

  tile.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;
  tile.dataset.correct = tile.style.backgroundPosition;

  tiles.push(tile);
}

// Shuffle tiles
tiles.sort(() => Math.random() - 0.5);

// Render tiles
tiles.forEach(tile => {
  puzzle.appendChild(tile);

  tile.addEventListener("click", () => {
    if (!selected) {
      selected = tile;
      tile.style.border = "2px solid pink";
    } else {
      swapTiles(selected, tile);
      selected.style.border = "1px solid #ddd";
      selected = null;
      checkWin();
    }
  });
});

// Swap tiles
function swapTiles(a, b) {
  const temp = a.style.backgroundPosition;
  a.style.backgroundPosition = b.style.backgroundPosition;
  b.style.backgroundPosition = temp;
}

// Check win
function checkWin() {
  let correct = true;

  tiles.forEach((tile, i) => {
    const x = i % size;
    const y = Math.floor(i / size);
    const correctPos = `-${x * 100}px -${y * 100}px`;

    if (tile.style.backgroundPosition !== correctPos) {
      correct = false;
    }
  });

  if (correct) {
    document.getElementById("message").classList.remove("hidden");
  }
}
