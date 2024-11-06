// Function to fetch a joke from the API and display it
async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        let joke = "";

        // Check if the joke has a setup and delivery (two-part joke) or a single line
        if (data.type === "twopart") {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }

        // Display the joke
        document.querySelector(".main2 h5").textContent = joke;

        // Display the character count
        document.querySelector(".main2 h6").textContent = `Character count: ${joke.length}`;
    } catch (error) {
        document.querySelector(".main2 h5").textContent = "Failed to fetch a joke. Please try again.";
        document.querySelector(".main2 h6").textContent = "Character count: 0";
        console.error("Error fetching joke:", error);
    }
}

// Function to clear the joke and character count
function clearJoke() {
    document.querySelector(".main2 h5").textContent = "Press a button for a joke";
    document.querySelector(".main2 h6").textContent = "Character count: 0";
}

// Attach event listeners to buttons
document.querySelector(".b1").addEventListener("click", fetchJoke);
document.querySelector(".b2").addEventListener("click", clearJoke);
