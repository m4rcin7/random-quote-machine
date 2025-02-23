const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = "- " + quote.author;
  document.getElementById(
    "tweet-quote"
  ).href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote.text + " - " + quote.author
  )}`;
}

document.getElementById("new-quote").addEventListener("click", updateQuote);

updateQuote();
