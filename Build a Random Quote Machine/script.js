/**
 * Array of colors to choose from for the background.
 * @type {string[]}
 */
const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
];

// Declare variables to store the current quote and author
let currentQuote = '', // Global variable to store the current quote
    currentAuthor = '', // Global variable to store the current author
    quotesData = []; // Global variable to store the fetched quotes data

/**
 * Fetch quotes from the API and store them in `quotesData`.
 * @returns {Promise<void>} A promise that resolves when quotes are fetched successfully.
 */
async function getQuotes() {
    try {
        // Fetch quotes from the API and parse the JSON response
        const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const jsonQuotes = await response.json();

        // Store quotes data in the global variable
        quotesData = jsonQuotes; // Set the quotes data in the global variable
        console.log('Quotes Data:', quotesData); // Log the fetched quotes data to the console for debugging
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

/**
 * Get a random quote from the fetched quotes data.
 * @returns {Object} A random quote object containing 'quote' and 'author'.
 */
function getRandomQuote() {
    // Ensure there are quotes to choose from, then pick a random one
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

/**
 * Updates the displayed quote, author, and social media share links.
 * Also, applies a random background color.
 * Updates the Tweet and Tumblr share links with the current quote and author.
 * @returns {void}
 */
function getQuote() {
    // Get a random quote from the quotes data
    const randomQuote = getRandomQuote();

    // Set the current quote and author globally
    currentQuote = randomQuote.quote; // Set the current quote
    currentAuthor = randomQuote.author; // Set the current author

    /*
    encodeURIComponent(): The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two surrogate characters).
     */

    // Update the Tweet link with the current quote and author
    const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)}`; // URL encode the quote and author
    $('#tweet-quote').attr('href', tweetLink); // Set the href attribute of the Tweet link

    // Update the Tumblr share link with the current quote and author
    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(currentAuthor)}&content=${encodeURIComponent(currentQuote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`; // URL encode the quote and author
    $('#tumblr-quote').attr('href', tumblrLink); // Set the href attribute of the Tumblr share link

    // Update the quote text and author, using fade-in and fade-out for smooth transition
    // Use fadeIn and fadeOut for smooth transition of the quote and author
    $('#text').fadeOut(500).fadeIn(500).text(randomQuote.quote);
    $('#author').fadeOut(500).fadeIn(500).text('- ' + randomQuote.author);

    // Pick a random color from the colors array for background and text
    const colorIndex = Math.floor(Math.random() * colors.length); // Get a random index from the colors array to get a random color
    const randomColor = colors[colorIndex]; // Get the color at the random index from the colors array

    // Apply the random color to the body and text
    $('body').css('transition', 'background-color 1s, color 1s').css({
        'background-color': randomColor,
        'color': randomColor
    });

    // Change the button color to match the random color
    $('.button').css('transition', 'background-color 1s').css('background-color', randomColor);
}


// Wait for the DOM to be fully loaded before initializing
$(document).ready(async function () {
    // Fetch quotes and display a random quote
    await getQuotes();
    getQuote();

    // Add an event listener to change the quote when the button is clicked
    // $('#new-quote').on('click', getQuote);

    // Add an event listener to the #new-quote button to fetch a new quote when clicked
    $('#new-quote').click(getQuote);
});