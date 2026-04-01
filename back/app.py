from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api")
def api():
    return jsonify({"message": "hello from flask"})

app.run(host="0.0.0.0", port=5000)