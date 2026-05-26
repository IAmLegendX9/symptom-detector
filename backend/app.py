from flask import Flask, request
from flask_cors import CORS
import pickle
import pandas as pd


app = Flask(__name__)
CORS(app)

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
    return "Backend is running and model is loaded!"

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

    prediction = model.predict([feature_vector])

    return f"Possible disease: {prediction[0]}"

    # sample_data = [[0] * 132]
    # for patient in sample_data:
    #     if sum(patient) == 0:
    #         return "Invalid input | No disease."
    # prediction = model.predict(sample_data)
    # return f"Predicted disease: {prediction[0]}"

if __name__ == "__main__":
    app.run(debug=True)


