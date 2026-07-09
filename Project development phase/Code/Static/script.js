 
// Input Validation Function
 
function validateInput(data) {

    if (data.N < 0 || data.N > 140)
        return "Nitrogen must be between 0 and 140.";

    if (data.P < 5 || data.P > 145)
        return "Phosphorous must be between 5 and 145.";

    if (data.K < 5 || data.K > 205)
        return "Potassium must be between 5 and 205.";

    if (data.temperature < 8 || data.temperature > 45)
        return "Temperature must be between 8°C and 45°C.";

    if (data.humidity < 10 || data.humidity > 100)
        return "Humidity must be between 10% and 100%.";

    if (data.ph < 3.5 || data.ph > 10)
        return "Soil pH must be between 3.5 and 10.";

    if (data.rainfall < 20 || data.rainfall > 300)
        return "Rainfall must be between 20 mm and 300 mm.";

    return null;
}

 
// Prediction Form
 
const form = document.getElementById("predictionForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const result = document.getElementById("result");

    result.style.display = "block";
    result.className = "";

    result.innerHTML = `
        <h4>🔄 Predicting...</h4>
    `;

    const data = {

        N: Number(document.getElementById("N").value),

        P: Number(document.getElementById("P").value),

        K: Number(document.getElementById("K").value),

        temperature: Number(document.getElementById("temperature").value),

        humidity: Number(document.getElementById("humidity").value),

        ph: Number(document.getElementById("ph").value),

        rainfall: Number(document.getElementById("rainfall").value)

    };

     
    // Validate Inputs
     
    const error = validateInput(data);

    if (error) {

        result.className = "error";

        result.innerHTML = `
            <h4>❌ ${error}</h4>
        `;

        return;
    }

    try {

        const response = await fetch("/predict", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const res = await response.json();

        if (res.success) {

            result.className = "success";

            result.innerHTML = `

                <h2>${res.info.emoji} ${res.crop.toUpperCase()}</h2>

                <hr>

                <h4>🎯 Confidence : ${res.confidence}%</h4>

                <p><strong>💧 Water Requirement:</strong> ${res.info.water}</p>

                <p><strong>🌡️ Temperature:</strong> ${res.info.temperature}</p>

                <p>${res.info.description}</p>

            `;

        } else {

            result.className = "error";

            result.innerHTML = `
                <h4>❌ ${res.message}</h4>
            `;

        }

    }
    catch (err) {

        result.className = "error";

        result.innerHTML = `
            <h4>❌ Server Error</h4>
            <p>Please try again later.</p>
        `;

    }

});

 
// Reset Button
 
document.getElementById("resetBtn").addEventListener("click", () => {

    document.getElementById("predictionForm").reset();

    const result = document.getElementById("result");

    result.style.display = "none";

});