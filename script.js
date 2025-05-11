const quotes = [
  "We believe in our volunteers.",
  "Alone we can do so little; together we can do so much. – Helen Keller.",
  "Dream big and dare to fail.",
  "You are capable of amazing things.",
  "Stay positive, work hard, make it happen.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

// Load sound
const sound = new Audio("click.wav");

function generateQuote() {
  const quoteBox = document.getElementById("quote-box");
  const quoteText = document.getElementById("quote");

  // Play sound
  sound.currentTime = 0; // reset to start if clicking fast
  sound.play();

  // Remove and add 'show' class for fade animation
  quoteBox.classList.remove("show");
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
    quoteBox.classList.add("show");
  }, 200);
}

