const url = "https://icanhazdadjoke.com/";
const fetchButton = document.getElementById("fetchButton");
const jokeDisplay = document.getElementById("jokeDisplay");

fetchButton.addEventListener("click", async () => {
    try {
        const joke = await getJokes();
        jokeDisplay.innerText = joke;
    } catch (error) {
        console.log("Error:", error);
        jokeDisplay.innerText = "No joke found";
    }
});

async function getJokes() {
    try {
        const response = await axios.get(url, {
            headers: {
                Accept: "application/json" // Request JSON response
            }
        });
        return response.data.joke; // Access the 'joke' property
    } catch (error) {
        console.log("Error:", error);
        return "No joke found";
    }
}