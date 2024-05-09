// JavaScript
function toggleMenu() {
    var menu = document.getElementById("navbarMenu");
    menu.classList.toggle("show");
}

const wordsWithClues = [
    { word: "beyonce", clue: "Who was the song Wrecking Ball offered to first?" },
    { word: "brandy", clue: "Which singer is known as the Vocal Bible?" },
    { word: "usher", clue: "As a child, what singer held the longest note ever on Star Search?" },
    { word: "aaliyah", clue: "Too many times you guys will come step to me. I guess you call yourselves booking me, now do I look easy? (it ain't easy)" },
    { word: "amerie", clue: "Why Don't We Fall in Love" },
    { word: "desree", clue: "Pride can stand a thousand trials, the strong will never fall but watching stars without you my soul cried" }
];




const puzzleContainer = document.getElementById('puzzle');

let correctAnswer = "";
let correctClue = "";
let incorrectGuesses = 0;

function resetGame() {
    // Select a random word and its clue from the wordsWithClues array
    const randomIndex = Math.floor(Math.random() * wordsWithClues.length);
    correctAnswer = wordsWithClues[randomIndex].word;
    correctClue = wordsWithClues[randomIndex].clue;

    // Clear previous puzzle and message
    puzzleContainer.innerHTML = "";
    setMessage("");

    // Display the clue
    const clueElement = document.getElementById('clue');
    clueElement.textContent = `Clue: ${correctClue}`;

    // Create input boxes for each letter of the correct answer
    correctAnswer.split('').forEach(() => {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeyDown);
        puzzleContainer.appendChild(input);
    });

    // Focus on the first input field
    puzzleContainer.querySelector('input').focus();
}

document.addEventListener('DOMContentLoaded', () => {
    resetGame();
});

document.getElementById('guessButton').addEventListener('click', () => {
    submitGuess();
});

function revealAnswer() {
    // Your reveal answer logic here
}

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function handleInput(event) {
    const input = event.target;
    const inputValue = input.value;
    
    // Validate input against a regular expression
    const validInput = /^[a-zA-Z0-9]*$/;
    if (!validInput.test(inputValue)) {
        // Remove any characters that are not letters or numbers
        input.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    }

    if (inputValue && input.nextSibling) {
        input.nextSibling.focus();
    }
}

function handleKeyDown(event) {
    const input = event.target;
    const inputValue = input.value;
    
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
        submitGuess();
    }

    // Check if Backspace key is pressed and current input is not the first one
    if (event.key === 'Backspace' && input.previousSibling) {
        if (!inputValue && input.previousSibling) {
            input.previousSibling.focus(); // Focus on the previous input field
        }
    }
}

function submitGuess() {
    const inputs = puzzleContainer.querySelectorAll('input');
    const guess = Array.from(inputs).map(input => input.value.toLowerCase()).join('');

    if (guess === correctAnswer) {
        setMessage("Congratulations! You guessed correctly! 🎉", "green");
        playSuccessSound();
        // Additional success message or actions
    } else {
        incorrectGuesses++;
        if (incorrectGuesses < 3) {
            setMessage(`Incorrect guess. ${3 - incorrectGuesses} guesses remaining. Please try again.`, "red");
            // Clear the input boxes
            inputs.forEach(input => input.value = '');
            // Focus on the first input box again
            puzzleContainer.querySelector('input').focus();
        } else {
            setMessage(`Sorry, you're out of guesses. The correct answer was "${correctAnswer}".`, "red");
            revealAnswer();
        }
    }
}

function playSuccessSound() {
    // Your code to play success sound
    const audio = new Audio('music/ahYeahScratch.mp3');
    audio.preload = 'auto';
    audio.play();
}

// Select the third grid item
const gridItem = document.querySelector('.grid-container .grid-item:nth-child(3)');
const gridItem4 = document.querySelector('.grid-container .grid-item:nth-child(4)');
const gridItem5 = document.querySelector('.grid-container .grid-item:nth-child(5)');

// Sample blog post data
const blogPostData = {
    title: "The Problem with Legacy Artists",
    image: "img/jenniferlopez.jpg", // URL of the blog post image
    content: "Why the industry is full of old artists who refuse to move aside. Is it wise to retire while you're on top? Why no one should want to be a 40+ year old rapper."
};

const blogPostData4 = {
    title: "The Magic of Aaliyah",
    image: "img/aaliyah.jpg", // URL of the blog post image
    content: "What makes Aaliyah an icon? Has she become a modern day Dorothy Dandridge? What she taught us about celebrity."
};

const blogPostData5 = {
    title: "Tyla Hate",
    image: "img/tyla.jpg", // URL of the blog post image
    content: "Is Tyla an industry plant? Why does sexy work for her but not for Chloe Bailey? Is she a one-hit womder?"
};

// Truncate blog post content to a certain length
const maxLength = 400; // Maximum length of the content snippet
const contentSnippet = blogPostData.content.slice(0, maxLength) + (blogPostData.content.length > maxLength ? "..." : "");

const maxLength4 = 400; // Maximum length of the content snippet
const contentSnippet4 = blogPostData4.content.slice(0, maxLength) + (blogPostData4.content.length > maxLength ? "..." : "");

const maxLength5 = 400; // Maximum length of the content snippet
const contentSnippet5 = blogPostData5.content.slice(0, maxLength) + (blogPostData5.content.length > maxLength ? "..." : "");

// Create HTML markup for the blog post with content snippet
const blogPostHTML = `
    <h2>${blogPostData.title}</h2>
    <img src="${blogPostData.image}" alt="Blog Post Image">
    <p>${contentSnippet}</p>
    <a href="full-post.html">Read More</a>
`;

const blogPostHTML4 = `
    <h2>${blogPostData4.title}</h2>
    <img src="${blogPostData4.image}" alt="Blog Post Image">
    <p>${contentSnippet4}</p>
    <a href="full-post4.html">Read More</a>
`;

const blogPostHTML5 = `
    <h2>${blogPostData5.title}</h2>
    <img src="${blogPostData5.image}" alt="Blog Post Image">
    <p>${contentSnippet5}</p>
    <a href="full-post5.html">Read More</a>
`;

// Set the HTML content of the grid item to the blog post HTML
gridItem.innerHTML = blogPostHTML;
gridItem4.innerHTML = blogPostHTML4;
gridItem5.innerHTML = blogPostHTML5;


document.addEventListener('DOMContentLoaded', function() {
    const concertsGrid = document.getElementById('concerts-grid');

   
   // Fetch upcoming concerts from Ticketmaster API
fetch('https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917GP27&countryCode=US&apikey=W7EeP9AdRZNbGAmlDdRPBu3pldA8ObQC')
.then(response => response.json())
.then(data => {
    // Extract concert information from the API response
    const concerts = data._embedded.events;

    // Display concert information on the webpage
    const concertsContainer = document.getElementById('concerts-grid');
    concerts.forEach(concert => {
        const concertElement = document.createElement('div');
        concertElement.innerHTML = `
            <h3>${concert.name}</h3>
            <p>Date: ${concert.dates.start.localDate}</p>
            <p>Venue: ${concert._embedded.venues[0].name}</p>
            <p>Location: ${concert._embedded.venues[0].city.name}, ${concert._embedded.venues[0].state.name}</p>
        `;
        concertsContainer.appendChild(concertElement);
    });
      // Scroll the API info container
      scrollApiInfoContainer();
})
.catch(error => {
    console.error('Error fetching concert data:', error);
});
})


// Function to scroll the API info container
function scrollApiInfoContainer() {
    const apiInfoContainer = document.getElementById('concerts-grid');

    // Scroll the container vertically by setting scrollTop property
    const scrollInterval = 1000; // Scroll every second

    setInterval(() => {
        apiInfoContainer.scrollTop += 25; // Adjust scrolling speed as needed
    }, scrollInterval);

}


document.addEventListener('DOMContentLoaded', function() {
    const imageLinks = document.querySelectorAll('.image-link');

    // Add event listener to each image link
    imageLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default click behavior (opening the link)
            event.preventDefault();
            
            // Get the URL of the larger image from the href attribute of the link
            const largerImageURL = link.getAttribute('href');

            // Open the larger image in a new tab/window
            window.open(largerImageURL, '_blank');
        });
    });
});

//playlist for Ai music and podcast episodes
const musicPlaylist = ['music/Round and Round.mp3', 'music/Choosing.mp3', 'music/Selfish Love.mp3'];
let currentTrackIndex = 0;

const musicPlayer = document.getElementById('musicPlayer');

musicPlayer.addEventListener('ended', () => {
    currentTrackIndex++;

    if(currentTrackIndex === musicPlaylist.length){
        currentTrackIndex = 0;
    }
    musicPlayer.src = musicPlaylist[currentTrackIndex];
    musicPlayer.play();
});

musicPlayer.addEventListener('canplay', ()=>{
    musicPlayer.play();
});



//playlist for videos
const videoPlaylist = ['videos/Who is DeVante Swing.mp4', 'videos/Is Tupac GOATd_.mp4'];
let currentVideoIndex = 0;

const videoPlayer = document.getElementById('video1');

videoPlayer.addEventListener('ended', ()=>{
    currentVideoIndex++;

    if(currentVideoIndex === videoPlaylist.length){
        currentVideoIndex = 0;
    }
    videoPlayer.src = videoPlaylist[currentVideoIndex];
    videoPlayer.play();
});

videoPlayer.addEventListener('canplay', ()=>{
    videoPlayer.play();
});