// Complete 133 symptom dataset categorized cleanly
const symptomCategories = {
    "Dermatological": [
        { label: "Itching", value: "itching" },
        { label: "Skin Rash", value: "skin_rash" },
        { label: "Nodal Skin Eruptions", value: "nodal_skin_eruptions" },
        { label: "Dischromic Patches", value: "dischromic_patches" },
        { label: "Pus Filled Pimples", value: "pus_filled_pimples" },
        { label: "Blackheads", value: "blackheads" },
        { label: "Scurring", value: "scurring" },
        { label: "Skin Peeling", value: "skin_peeling" },
        { label: "Silver Like Dusting", value: "silver_like_dusting" },
        { label: "Small Dents In Nails", value: "small_dents_in_nails" },
        { label: "Inflammatory Nails", value: "inflammatory_nails" },
        { label: "Blister", value: "blister" },
        { label: "Red Sore Around Nose", value: "red_sore_around_nose" },
        { label: "Yellow Crust Ooze", value: "yellow_crust_ooze" },
        { label: "Red Spots Over Body", value: "red_spots_over_body" }
    ],
    "Gastrointestinal": [
        { label: "Stomach Pain", value: "stomach_pain" },
        { label: "Acidity", value: "acidity" },
        { label: "Ulcers On Tongue", value: "ulcers_on_tongue" },
        { label: "Vomiting", value: "vomiting" },
        { label: "Indigestion", value: "indigestion" },
        { label: "Nausea", value: "nausea" },
        { label: "Loss Of Appetite", value: "loss_of_appetite" },
        { label: "Constipation", value: "constipation" },
        { label: "Abdominal Pain", value: "abdominal_pain" },
        { label: "Diarrhoea", value: "diarrhoea" },
        { label: "Swelling Of Stomach", value: "swelling_of_stomach" },
        { label: "Pain During Bowel Movements", value: "pain_during_bowel_movements" },
        { label: "Pain In Anal Region", value: "pain_in_anal_region" },
        { label: "Bloody Stool", value: "bloody_stool" },
        { label: "Irritation In Anus", value: "irritation_in_anus" },
        { label: "Belly Pain", value: "belly_pain" },
        { label: "Stomach Bleeding", value: "stomach_bleeding" },
        { label: "Distention Of Abdomen", value: "distention_of_abdomen" },
        { label: "Passage Of Gases", value: "passage_of_gases" }
    ],
    "Respiratory & ENT": [
        { label: "Continuous Sneezing", value: "continuous_sneezing" },
        { label: "Shivering", value: "shivering" },
        { label: "Patches In Throat", value: "patches_in_throat" },
        { label: "Cough", value: "cough" },
        { label: "Breathlessness", value: "breathlessness" },
        { label: "Phlegm", value: "phlegm" },
        { label: "Throat Irritation", value: "throat_irritation" },
        { label: "Redness Of Eyes", value: "redness_of_eyes" },
        { label: "Sinus Pressure", value: "sinus_pressure" },
        { label: "Runny Nose", value: "runny_nose" },
        { label: "Congestion", value: "congestion" },
        { label: "Loss Of Smell", value: "loss_of_smell" },
        { label: "Mucoid Sputum", value: "mucoid_sputum" },
        { label: "Rusty Sputum", value: "rusty_sputum" },
        { label: "Blood In Sputum", value: "blood_in_sputum" }
    ],
    "Neurological & Psychiatric": [
        { label: "Anxiety", value: "anxiety" },
        { label: "Mood Swings", value: "mood_swings" },
        { label: "Restlessness", value: "restlessness" },
        { label: "Headache", value: "headache" },
        { label: "Pain Behind The Eyes", value: "pain_behind_the_eyes" },
        { label: "Dizziness", value: "dizziness" },
        { label: "Slurred Speech", value: "slurred_speech" },
        { label: "Spinning Movements", value: "spinning_movements" },
        { label: "Loss Of Balance", value: "loss_of_balance" },
        { label: "Unsteadiness", value: "unsteadiness" },
        { label: "Weakness Of One Body Side", value: "weakness_of_one_body_side" },
        { label: "Depression", value: "depression" },
        { label: "Irritability", value: "irritability" },
        { label: "Altered Sensory Details", value: "altered_sensory_details" },
        { label: "Lack Of Concentration", value: "lack_of_concentration" },
        { label: "Visual Disturbances", value: "visual_disturbances" },
        { label: "Coma", value: "coma" },
        { label: "Blurred And Distorted Vision", value: "blurred_and_distorted_vision" }
    ],
    "Urinary & Reproductive": [
        { label: "Burning Micturition", value: "burning_micturition" },
        { label: "Spotting Urination", value: "spotting_urination" },
        { label: "Yellow Urine", value: "yellow_urine" },
        { label: "Bladder Discomfort", value: "bladder_discomfort" },
        { label: "Foul Smell Of Urine", value: "foul_smell_of_urine" },
        { label: "Continuous Feel Of Urine", value: "continuous_feel_of_urine" },
        { label: "Abnormal Menstruation", value: "abnormal_menstruation" },
        { label: "Dark Urine", value: "dark_urine" },
        { label: "Polyuria", value: "polyuria" }
    ],
    "Musculoskeletal": [
        { label: "Joint Pain", value: "joint_pain" },
        { label: "Muscle Wasting", value: "muscle_wasting" },
        { label: "Back Pain", value: "back_pain" },
        { label: "Weakness In Limbs", value: "weakness_in_limbs" },
        { label: "Neck Pain", value: "neck_pain" },
        { label: "Cramps", value: "cramps" },
        { label: "Knee Pain", value: "knee_pain" },
        { label: "Hip Joint Pain", value: "hip_joint_pain" },
        { label: "Muscle Weakness", value: "muscle_weakness" },
        { label: "Stiff Neck", value: "stiff_neck" },
        { label: "Swelling Joints", value: "swelling_joints" },
        { label: "Movement Stiffness", value: "movement_stiffness" },
        { label: "Muscle Pain", value: "muscle_pain" },
        { label: "Painful Walking", value: "painful_walking" }
    ],
    "Cardiovascular & Hematological": [
        { label: "Chest Pain", value: "chest_pain" },
        { label: "Fast Heart Rate", value: "fast_heart_rate" },
        { label: "Bruising", value: "bruising" },
        { label: "Swollen Blood Vessels", value: "swollen_blood_vessels" },
        { label: "Prominent Veins On Calf", value: "prominent_veins_on_calf" },
        { label: "Palpitations", value: "palpitations" },
        { label: "Cold Hands And Feets", value: "cold_hands_and_feets" },
        { label: "Receiving Blood Transfusion", value: "receiving_blood_transfusion" }
    ],
    "Endocrine & Metabolic": [
        { label: "Fatigue", value: "fatigue" },
        { label: "Weight Gain", value: "weight_gain" },
        { label: "Weight Loss", value: "weight_loss" },
        { label: "Lethargy", value: "lethargy" },
        { label: "Irregular Sugar Level", value: "irregular_sugar_level" },
        { label: "Dehydration", value: "dehydration" },
        { label: "Yellowish Skin", value: "yellowish_skin" },
        { label: "Yellowing Of Eyes", value: "yellowing_of_eyes" },
        { label: "Obesity", value: "obesity" },
        { label: "Enlarged Thyroid", value: "enlarged_thyroid" },
        { label: "Brittle Nails", value: "brittle_nails" },
        { label: "Excessive Hunger", value: "excessive_hunger" },
        { label: "Increased Appetite", value: "increased_appetite" },
        { label: "Puffy Face And Eyes", value: "puffy_face_and_eyes" }
    ],
    "General Systemic": [
        { label: "Chills", value: "chills" },
        { label: "High Fever", value: "high_fever" },
        { label: "Sunken Eyes", value: "sunken_eyes" },
        { label: "Sweating", value: "sweating" },
        { label: "Mild Fever", value: "mild_fever" },
        { label: "Acute Liver Failure", value: "acute_liver_failure" },
        { label: "Fluid Overload", value: "fluid_overload" },
        { label: "Swelled Lymph Nodes", value: "swelled_lymph_nodes" },
        { label: "Malaise", value: "malaise" },
        { label: "Swollen Legs", value: "swollen_legs" },
        { label: "Swollen Extremeties", value: "swollen_extremeties" },
        { label: "Extra Marital Contacts", value: "extra_marital_contacts" },
        { label: "Drying And Tingling Lips", value: "drying_and_tingling_lips" },
        { label: "Internal Itching", value: "internal_itching" },
        { label: "Toxic Look (Typhos)", value: "toxic_look_(typhos)" },
        { label: "Watering From Eyes", value: "watering_from_eyes" },
        { label: "Family History", value: "family_history" },
        { label: "Receiving Unsterile Injections", value: "receiving_unsterile_insjections" },
        { label: "History Of Alcohol Consumption", value: "history_of_alcohol_consumption" }
    ]
};

// DOM Elements
const predictButton = document.getElementById("predictBtn");
const searchBar = document.getElementById("searchBar");
const resultText = document.getElementById("result");
const container = document.getElementById("categorised-symptoms");
const searchDropdown = document.getElementById("search-dropdown");
const clearBtn = document.getElementById("clearBtn");
const themeToggle = document.getElementById("theme-toggle");

// Render category panels
for (const [categoryName, symptomsList] of Object.entries(symptomCategories)) {
    const categoryClass = categoryName.toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]/g, '-');

    let categoryHTML = `
        <div class="category-section ${categoryClass}">
            <h2 class="category-title">${categoryName}</h2>
            <input type="text" class="category-search" placeholder="Search ${categoryName}...">
            <div class="symptom-grid">
    `;

    symptomsList.forEach(symptom => {
        categoryHTML += `
            <div class="symptom">
                <label>
                    <input type="checkbox" value="${symptom.value}">
                    ${symptom.label}
                </label>
            </div>
        `;
    });

    categoryHTML += `
            </div>
        </div>
    `;

    container.innerHTML += categoryHTML;
}

// Clear Action: Reset checked boxes, searches, and results
clearBtn.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(cb => cb.checked = false);

    searchBar.value = "";
    document.querySelectorAll(".category-search").forEach(input => input.value = "");

    document.querySelectorAll(".category-section").forEach(sec => sec.style.display = "flex");
    document.querySelectorAll(".symptom").forEach(sym => sym.style.display = "inline-block");

    searchDropdown.classList.add("hidden");

    const resultCard = document.getElementById("result-card");
    resultCard.classList.add("hidden");
    resultText.innerText = "Please select your symptoms above.";
});

// Predict button API connection with 2-second
predictButton.addEventListener("click", async function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const selectedSymptoms = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedSymptoms.push(checkbox.value);
        }
    });

    if (selectedSymptoms.length === 0) {
        const resultCard = document.getElementById("result-card");
        resultCard.classList.remove("hidden");
        resultText.innerHTML = `<span style="color: #ef4444;">Please pick something. I cannot read minds yet.</span>`;
        return;
    }

    const resultCard = document.getElementById("result-card");
    const progressContainer = document.getElementById("progress-container");
    const progressBar = document.getElementById("progressBar");

    // --- START LOADING STATE ---
    predictButton.disabled = true;
    predictButton.style.opacity = "0.8";
    predictButton.style.cursor = "not-allowed";
    
    // Reset and reveal the progress bar tracking layout
    progressBar.style.width = "0%";
    progressContainer.classList.remove("hidden");

    const statements = [
        "Commencing analysis...",
        "Consulting Dr. Medibot...",
        "Translating symptoms from 'dramatic' to clinical...",
        "Fingers crossed, generating report..."
    ];
    
    let currentStep = 0;
    predictButton.innerText = statements[currentStep];
    progressBar.style.width = "25%";

    // Track exactly when the analysis cycle kicked off
    const startTime = Date.now();

    // Set exactly to 2000ms (2 seconds) per phase
    const loadingInterval = setInterval(() => {
        currentStep++;
        if (currentStep < statements.length) {
            predictButton.innerText = statements[currentStep];
            
            // Advance progress bar incrementally (25% -> 50% -> 75% -> 90%)
            let progressPercent = (currentStep + 1) * 25;
            if (progressPercent > 90) progressPercent = 90; 
            progressBar.style.width = `${progressPercent}%`;
        }
    }, 2000);

    try {
        const response = await fetch("https://medicore-ai-2t4k.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                symptoms: selectedSymptoms
            })
        });

        if (!response.ok) {
            throw new Error(`Server responded with code ${response.status}`);
        }

        const data = await response.text();
        
        // --- PROPERLY PACED DELAY SYSTEM ---
        const totalDuration = statements.length * 2000; // 4 phrases * 2000ms = 8 seconds minimum duration
        const elapsedTime = Date.now() - startTime;
        const remainingDelay = Math.max(0, totalDuration - elapsedTime);

        // Wait out the remaining time if the API returned faster than our jokes
        setTimeout(() => {
            clearInterval(loadingInterval);
            progressBar.style.width = "100%"; // Instant cap off on completion
            
            // Tiny buffer so they see the full bar before it transitions out
            setTimeout(() => {
                progressContainer.classList.add("hidden");
                resultText.innerText = data;
                resultCard.classList.remove("hidden");
                
                teardownUI();
            }, 300);
        }, remainingDelay);

    } catch (error) {
        // --- ERROR / OFFLINE STATE ---
        clearInterval(loadingInterval);
        progressContainer.classList.add("hidden");
        resultText.innerHTML = `
            <span style="color: #ef4444; font-size: 16px; display: block; margin-bottom: 8px;">
                ⚠️ Connection Ghosted
            </span>
            <span style="font-size: 14px; font-weight: 500; color: var(--text-muted); display: block; line-height: 1.4;">
                I tried calling your local Flask app at <code style="background: rgba(239,68,68,0.1); padding: 2px 6px; border-radius: 4px;">http://127.0.0.1:5000</code>, but nobody picked up. Is the server running?
            </span>
        `;
        resultCard.classList.remove("hidden");
        console.error("Medicore.ai API Error:", error);
        teardownUI();
    }

    function teardownUI() {
        predictButton.disabled = false;
        predictButton.style.opacity = "1";
        predictButton.style.cursor = "pointer";
        predictButton.innerText = "Analyse Symptoms";
    }
});

// Global Autocomplete Search Engine
searchBar.addEventListener("input", function() {
    const searchText = searchBar.value.toLowerCase().trim();
    searchDropdown.innerHTML = "";

    if (searchText === "") {
        searchDropdown.classList.add("hidden");
        document.querySelectorAll(".category-section").forEach(sec => sec.style.display = "flex");
        document.querySelectorAll(".symptom").forEach(sym => sym.style.display = "inline-block");
        return;
    }

    let matches = [];

    for (const [categoryName, symptomsList] of Object.entries(symptomCategories)) {
        symptomsList.forEach(symptom => {
            if (symptom.label.toLowerCase().includes(searchText)) {
                matches.push({
                    label: symptom.label,
                    value: symptom.value,
                    category: categoryName
                });
            }
        });
    }

    const categorySections = document.querySelectorAll(".category-section");
    categorySections.forEach(function (section) {
        const symptoms = section.querySelectorAll(".symptom");
        let hasVisibleSymptom = false;

        symptoms.forEach(function (symptom) {
            const symptomText = symptom.innerText.toLowerCase();
            if (symptomText.includes(searchText)) {
                symptom.style.display = "inline-block";
                hasVisibleSymptom = true;
            } else {
                symptom.style.display = "none";
            }
        });

        if (hasVisibleSymptom) {
            section.style.display = "flex";
        } else {
            section.style.display = "none";
        }
    });

    if (matches.length === 0) {
        searchDropdown.innerHTML = `<div class="dropdown-item" style="color: #94a3b8; cursor: default;">No symptoms found</div>`;
        searchDropdown.classList.remove("hidden");
        return;
    }

    matches.forEach(match => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.innerHTML = `
            <span>${match.label}</span>
            <span class="dropdown-item-category">${match.category}</span>
        `;

        item.addEventListener("click", function() {
            const checkbox = document.querySelector(`input[value="${match.value}"]`);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change', { bubbles: true }));

                const categorySection = checkbox.closest(".category-section");
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            searchBar.value = "";
            searchDropdown.classList.add("hidden");
            document.querySelectorAll(".category-section").forEach(sec => sec.style.display = "flex");
            document.querySelectorAll(".symptom").forEach(sym => sym.style.display = "inline-block");
        });

        searchDropdown.appendChild(item);
    });

    searchDropdown.classList.remove("hidden");
});

// Close dropdown on click-away
document.addEventListener("click", function(e) {
    if (!searchBar.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.add("hidden");
    }
});

// Category Search Filters
container.addEventListener("input", function(e) {
    if (e.target.classList.contains("category-search")) {
        const searchText = e.target.value.toLowerCase().trim();
        const categorySection = e.target.closest(".category-section");
        const symptomElements = categorySection.querySelectorAll(".symptom");

        symptomElements.forEach(function (symptom) {
            const symptomText = symptom.innerText.toLowerCase();
            if (symptomText.includes(searchText)) {
                symptom.style.display = "inline-block";
            } else {
                symptom.style.display = "none";
            }
        });
    }
});

// Theme Toggle Logic
const currentTheme = localStorage.getItem("theme");
const sunIcon = themeToggle.querySelector(".sun-icon");
const moonIcon = themeToggle.querySelector(".moon-icon");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
    
    localStorage.setItem("theme", theme);
});

// --- DR. HOUSE INTERACTIVE CHAT ENGINE ---

// DOM Elements
const triggerChatBtn = document.getElementById("triggerChatBtn");
const chatInterface = document.getElementById("chatInterface");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");

// Toggle Chat Display
triggerChatBtn.addEventListener("click", () => {
    chatInterface.classList.remove("hidden");
    chatInput.focus();
});

closeChatBtn.addEventListener("click", () => {
    chatInterface.classList.add("hidden");
});

// Send Message Handlers
sendChatBtn.addEventListener("click", handleUserMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserMessage();
});

async function handleUserMessage() {
    const cleanUserText = chatInput.value.trim();
    if (!cleanUserText) return;

    // 1. Render user message
    appendMessage(cleanUserText, "user-message");
    chatInput.value = "";
    
    // 2. Lock and blur the Consult button + disable input
    sendChatBtn.disabled = true;
    chatInput.disabled = true;

    // 3. Render loading bubble with animated typing dots
    const botBubble = appendMessage(
        'Thinking... <span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>', 
        "bot-message"
    );
    
    try {
        const response = await fetch("https://medicore-ai-2t4k.onrender.com/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: cleanUserText })
        });

        const data = await response.json();

        if (data.reply) {
            botBubble.innerText = data.reply;
        } else if (data.error) {
            botBubble.innerText = `Dr. Medibot Error: ${data.error}`;
        } else {
            botBubble.innerText = "Received empty response from server.";
        }

    } catch (error) {
        console.error("Chat Error:", error);
        botBubble.innerText = "Network error: Unable to reach Flask backend.";
    } finally {
        // 4. Unlock and unblur the Consult button + re-enable input
        sendChatBtn.disabled = false;
        chatInput.disabled = false;
        chatInput.focus();
    }
}

// Make sure appendMessage uses innerHTML so HTML tags (like <span>) render properly!
function appendMessage(content, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = content;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}