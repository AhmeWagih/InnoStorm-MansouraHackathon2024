from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your ML model
model = joblib.load(r"D:\Projects\Web\Solarlink\solar_model.joblib")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Expecting input data as JSON
        data = request.json
        features = data.get('features')  # Adjust as per your input structure
        if not features:
            return jsonify({"error": "No features provided"}), 400
        
        # Make a prediction
        prediction = model.predict([features])  # Update this based on model requirements
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
