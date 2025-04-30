from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Dummy data for future prediction (this can later come from ML model)
@app.route("/api/predict-shoes")
def predict_shoes():
    data = {
        "years": ['2023', '2024', '2025', '2026', '2027'],
        "percentages": [20, 35, 50, 65, 80]
    }
    return jsonify(data)

@app.route("/shoes")
def shoes_page():
    return render_template("shoes.html")

if __name__ == "__main__":
    app.run(debug=True)