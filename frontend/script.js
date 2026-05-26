const predictButton = document.getElementById("predictBtn");
const resultText = document.getElementById("result");
const searchBar = document.getElementById("searchBar");

predictButton.addEventListener("click", async function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    const selectedSymptoms = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {

            selectedSymptoms.push(checkbox.value);
        }

    });

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            symptoms: selectedSymptoms
        })

    });

    const data = await response.text()

    resultText.innerText = data;


});

searchBar.addEventListener("input", function() {

    const searchText = searchBar.value.toLowerCase().trim();

    const symptomElements = document.querySelectorAll(".symptom");

    symptomElements.forEach(function (symptom) {
        const symptomText = symptom.innerText.toLowerCase();
        console.log("SYMPTOM TEXT:", symptomText, "| Search:", searchText);

        if (symptomText.includes(searchText)) {
            symptom.style.display = "block";
            } 
        else {
            symptom.style.display = "none";
        }
    });
});



