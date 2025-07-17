const quotes = [
      "\"Small steps every day.\"",
      "\"Do it now, not later.\"",
      "\"Progress over perfection.\"",
      "\"What gets scheduled gets done. — Robin Sharma\"",
      "\"You've got this.\"",
      "\"One task at a time, one step closer.\"",
      "\"Don't count the days, make the days count. — Muhammad Ali\""
    ];

const quoteEl = document.getElementById("quote");
let index = 0;

function showNextQuote() {
    quoteEl.style.opacity = 0;

    setTimeout(() => {
        quoteEl.textContent = quotes[index];
        quoteEl.style.opacity = 1;
        index = (index + 1) % quotes.length;
    }, 500);
}
showNextQuote();

setInterval(showNextQuote, 5000);