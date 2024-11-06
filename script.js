// Define jokes array
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I would tell you a construction joke, but I'm still working on it.",
    "Why can’t you give Elsa a balloon? Because she will let it go!",
    "I used to play piano by ear, but now I use my hands."
];

// Function to generate a random joke
function generateJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.querySelector(".main2 h5").textContent = randomJoke; // Display the joke
    document.querySelector(".main2 h6").textContent = `Character count: ${randomJoke.length}`; // Display character count
}

// Function to clear the joke and character count
function clearJoke() {
    document.querySelector(".main2 h5").textContent = "Press a button for a joke";
    document.querySelector(".main2 h6").textContent = "Character count: 0";
}

// Attach event listeners to buttons
document.querySelector(".b1").addEventListener("click", generateJoke);
document.querySelector(".b2").addEventListener("click", clearJoke);
