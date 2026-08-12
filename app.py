import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pickle
import pandas as pd
from google import genai
from google.genai import types


load_dotenv()

api_key = os.environ.get("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)


app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

client = genai.Client(api_key=api_key)

with open("model/model.pkl", "rb") as file:
    model = pickle.load(file)

feature_names = pd.read_csv("data/training.csv").drop(columns=["prognosis","Unnamed: 133"]).columns.tolist()
# 1. Loads the dataset with the symptom names
# 2. Removes all non-symptom columns
# 3. Retrieves remaining symptom column names
# 4. Convert column object into a list of symptom names
# 5. Exact order of symptoms is preserved

@app.route("/")
def home():
    return send_from_directory(".", "index.html")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    symptoms = data["symptoms"]

    feature_vector = []

    for symptom in feature_names:
        if symptom in symptoms:
            feature_vector.append(1)
        else:
            feature_vector.append(0)
    
    if sum(feature_vector) == 0:
        return "Please select your symptoms."

    input_df = pd.DataFrame([feature_vector], columns=feature_names)

    prediction = model.predict(input_df)

    return f"Possible disease: {prediction[0]}"

    # sample_data = [[0] * 132]
    # for patient in sample_data:
    #     if sum(patient) == 0:
    #         return "Invalid input | No disease."
    # prediction = model.predict(sample_data)
    # return f"Predicted disease: {prediction[0]}"

@app.route('/chat_bot', methods=['POST'])
def chat_bot():
    try:
        data = request.json
        user_message = data.get("message", "")
        
        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        system_instruction = (
            "You are Dr. Medibot. You are a brilliant, "
            "deeply cynical, sarcastic, and blunt diagnostic medical expert. Address the user "
            "directly as a patient inquiring at your clinic. Be witty, slightly insulting, "
            "dismissive of simple explanations, and highly clinical. Remind them it is never lupus. "
            "Keep responses concise (under 3 sentences) and punchy."
        )

        # Running Google's highest performing frontier Flash model
        response = client.models.generate_content(
            model='gemini-3.5-flash',
            contents=user_message,
            config={"max_output_tokens": 500, "temperature": 0.7,}
        )
        
        return jsonify({"reply": response.text})

    except Exception as e:
        # Crucial for debugging: Prints the EXACT error in your terminal window
        print(f"\n!!! FLASK CHAT CRASH LOG !!!: {e}\n")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)


