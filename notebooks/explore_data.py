import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("data/training.csv")    

df = df.drop(columns=["Unnamed: 133"])


X = df.drop(columns=["prognosis"])   # 2D dataframe object. Stores all feature data.
y = df["prognosis"]  # 1D series object. Stores a list of the disease results.


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# train_test_split: randomly shuffles and splits the dataset rows
# into training (80%) and testing (20%) sets
# Helps create more representative training and testing data.
# random_state: ensures the shuffle happens the same way = reproducible results


model = RandomForestClassifier(random_state=42)
# model object created
# random_state: controls the randomness of the decision trees in the model

model.fit(X_train, y_train)    
# fit -> allows the ML model to learn patterns from the training data
# model builds internal decision trees and learns symptom-disease relationships/patterns

print("Model Training Complete.")


predictions = model.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print(f"Accuracy: {accuracy * 100:.2f}%")


# with open("model/model.pkl", "wb") as file:
#     pickle.dump(model, file)

print("Model saved successfully!")