const url = "https://www.boredapi.com/api/activity";
        const fetchButton = document.getElementById("fetchButton");
        const factDisplay = document.getElementById("factDisplay");

        fetchButton.addEventListener("click", async () => {
            try {
                const fact = await getFacts();
                factDisplay.innerText = fact;
            } catch (e) {
                console.log("Error:", e);
                factDisplay.innerText = "No fact found";
            }
        });

        async function getFacts() {
            try {
                const response = await axios.get(url);
                return response.data.activity; // Use 'activity' instead of 'fact'
            } catch (error) {
                console.log("Error:", error);
                return "No fact found";
            }
        }