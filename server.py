from flask import Flask, request, jsonify

import analyzer
from analyzer import action1  # Adjust imports to include other functions when they are defined

app = Flask(__name__)


# Route for translation
@app.route('/translate', methods=['POST'])
def translate():
    text = request.json.get('text')
    result = analyzer.translate(text)  # Replace with specific function in analyzer for translation
    print(f"got a request to translate: '{text}'\nresponse = {result}")
    return jsonify({"result": result})


# Route for rephrasing
@app.route('/rephrase', methods=['POST'])
def rephrase():
    text = request.json.get('text')
    result = analyzer.rephrase(text)  # Replace with specific function in analyzer for rephrasing
    print(f"got a request to rephrase: '{text}'\nresponse = {result}")
    return jsonify({"result": result})


# Route for detailing
@app.route('/detail', methods=['POST'])
def detail():
    text = request.json.get('text')
    result = analyzer.detail(text)  # Replace with specific function in analyzer for detailing
    print(f"got a request to detail: '{text}'\nresponse = {result}")
    return jsonify({"result": result})


# Route for lookup
@app.route('/lookup', methods=['POST'])
def lookup():
    text = request.json.get('text')
    result = action1(text)  # Replace with specific function in analyzer for lookup
    return jsonify({"result": result})


if __name__ == '__main__':
    app.run(port=5000)
