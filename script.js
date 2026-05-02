const puzzle = document.getElementById("puzzle");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

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

  tiles.push(tile);
}

// Shuffle
tiles.sort(() => Math.random() - 0.5);

// Render
tiles.forEach(tile => {
  puzzle.appendChild(tile);

  tile.addEventListener("click", () => {
    if (!selected) {
      selected = tile;
      tile.style.border = "2px solid pink";
    } else {
      // swap backgrounds
      const temp = selected.style.backgroundPosition;
      selected.style.backgroundPosition = tile.style.backgroundPosition;
      tile.style.backgroundPosition = temp;

      selected.style.border = "1px solid #ccc";
      selected = null;
    }
  });
});

// ✅ BUTTON CLICK → ALWAYS SHOW MESSAGE
submitBtn.addEventListener("click", () => {
  message.style.display = "block";
});
