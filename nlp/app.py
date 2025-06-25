from flask import Flask, request, jsonify
import gensim.downloader as api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print("Loading Word2Vec model...")
model = api.load("word2vec-google-news-300")
print("Model loaded successfully!")
print("Starting Flask application...")

@app.route('/similar_words', methods=['GET'])
def get_similar_words():
    word = request.args.get('word')
    if not word:
        return jsonify({"error": "No word provided"}), 400

    try:
        similar_words = model.most_similar(word, topn=5)
        return jsonify(similar_words)
    except KeyError:
        return jsonify({"error": "Word not found in model's vocabulary"}), 404

if __name__ == '__main__':
    app.run(debug=True)
