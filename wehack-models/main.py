from fastapi import FastAPI, HTTPException
import os
import pickle
import torch
from pydantic import BaseModel
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sentence_transformers import SentenceTransformer, util

# Initialize FastAPI app
app = FastAPI()

# Define paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "spam_detector_model.h5")
TOKENIZER_PATH = os.path.join(BASE_DIR, "models", "tokenizer.pickle")

# Load models
rel_model = SentenceTransformer('all-MiniLM-L6-v2')
model = load_model(MODEL_PATH)
with open(TOKENIZER_PATH, 'rb') as handle:
    tokenizer = pickle.load(handle)

# Pydantic request model
class SpamCheckRequest(BaseModel):
    question: str

class RelevancyRequest(BaseModel):
    content: str
    questions: list[str]

@app.post("/predict_spam/")
def predict_spam(request: SpamCheckRequest):
    question = request.question
    comment_seq = tokenizer.texts_to_sequences([question])
    comment_pad = pad_sequences(comment_seq, maxlen=100, padding='post')
    prediction = model.predict(comment_pad)[0][0]
    tag = "Spam" if prediction > 0.5 else "Not Spam"
    return {"question": question, "tag": tag, "probability": float(prediction)}

@app.post("/calculate_relevancy/")
def calculate_relevancy(request: RelevancyRequest):
    content_embedding = rel_model.encode(request.content, convert_to_tensor=True)
    question_embeddings = rel_model.encode(request.questions, convert_to_tensor=True)
    relevancy_scores = util.pytorch_cos_sim(content_embedding, question_embeddings)
    scores = relevancy_scores.squeeze().tolist()
    results = sorted(zip(request.questions, scores), key=lambda x: x[1], reverse=True)
    return {"results": results}