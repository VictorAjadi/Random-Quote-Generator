// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Happiness can exist only in acceptance. - George Orwell",
    "The more you investigate, the less you have to invest.",
"You can’t have a dream come true unless you have a dream.",
"The older you get the less you are surprised.",
"Don’t set time limits for achieving goals. They should transcend time.",
"Just do it!"

];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote;
}

// Event listener for the "Get Quote" button
document.getElementById("get-quote").addEventListener("click", displayRandomQuote);
