const days = [
  {
    title: "🌹 Rose Day",
    date: "2026-02-07T00:00:00",
    message: "I will give her a rose 🌹 — but honestly, she already is one."
  },
  {
    title: "🍫 Chocolate Day",
    date: "2026-02-09T00:00:00",
    message: "I will give her chocolates… though she’s already sweeter than all of them."
  },
  {
    title: "🧸 Teddy Day",
    date: "2026-02-10T00:00:00",
    message: "I will give her a teddy — because I want her to hug something that reminds her of me."
  },
  {
    title: "🤝 Promise Day",
    date: "2026-02-11T00:00:00",
    message: "Promises we both will make — to stay, to try, to never give up on us."
  },
  {
    title: "🤗 Hug Day",
    date: "2026-02-12T00:00:00",
    message: "She owes me a warm hug — the kind that feels like home."
  },
  {
    title: "💋 Kiss Day",
    date: "2026-02-13T00:00:00",
    message: "She owes me a kiss 😉 Soft. Slow. Just ours."
  },
  {
    title: "❤️ Valentine’s Day",
    date: "2026-02-14T00:00:00",
    message: "This day is ours, Sania. Always has been. Always will be."
  }
];

const container = document.getElementById("cardsContainer");

function updateCards() {
  container.innerHTML = "";
  const now = new Date();

  days.forEach(day => {
    const target = new Date(day.date);
    const diff = target - now;

    const card = document.createElement("div");
    card.className = "card";

    if (diff > 0) {
  card.classList.add("locked");
} else {
  card.classList.remove("locked");
  card.classList.add("unlocked");
}

    const timerText = diff > 0 ? formatTime(diff) : "Unlocked 💖";

    card.innerHTML = `
      <h2>${day.title}</h2>
      <p>${day.message}</p>
      <div class="timer">${timerText}</div>
    `;

    container.appendChild(card);
  });
}

function formatTime(ms) {
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCards, 1000);
updateCards();

// Music
let playing = false;
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  playing ? music.pause() : music.play();
  playing = !playing;
}

// Easter egg
function revealSecret() {
  document.getElementById("secretMessage").innerText =
    "If you’re reading this, Sania… you were never just a phase. You were the feeling.";
}
// MAIN COUNTDOWN (always visible at top)
function updateMainCountdown() {
  const now = new Date();

  // find the next upcoming day
  const next = days.find(day => new Date(day.date) > now);
  if (!next) {
    document.getElementById("mainCountdown").innerText =
      "All surprises unlocked 💖";
    return;
  }

  const diff = new Date(next.date) - now;
  document.getElementById("mainCountdown").innerText =
    `Next surprise in ${formatTime(diff)}`;
}

setInterval(updateMainCountdown, 1000);
updateMainCountdown();
// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 16 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}, 800);