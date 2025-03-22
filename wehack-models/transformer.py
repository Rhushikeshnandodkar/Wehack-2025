from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch
import torch.nn as nn
from transformers import AutoTokenizer, AutoModel

# Define the model architecture
class SpamClassifier(nn.Module):
    def __init__(self, bert_model):
        super(SpamClassifier, self).__init__()
        self.bert = bert_model
        self.dropout = nn.Dropout(0.3)
        self.linear = nn.Linear(768, 1)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        cls_token_embedding = outputs.last_hidden_state[:, 0, :]
        x = self.dropout(cls_token_embedding)
        x = self.linear(x)
        return torch.sigmoid(x)

# Load tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
bert_model = AutoModel.from_pretrained("bert-base-uncased")

# Initialize and load saved weights
model = SpamClassifier(bert_model)
model.load_state_dict(torch.load("spam_classifier_model.pth", map_location=torch.device("cpu")))
model.eval()

# FastAPI setup
app = FastAPI()

# Define input data model
class TextInput(BaseModel):
    text: str

# Define prediction endpoint
@app.post("/predict")
def predict_spam(input: TextInput):
    try:
        # Tokenize the input text
        inputs = tokenizer(
            input.text,
            return_tensors="pt",
            truncation=True,
            padding=True,
            max_length=512
        )

        # Make prediction
        with torch.no_grad():
            output = model(inputs["input_ids"], inputs["attention_mask"])
            prediction = (output.item() > 0.5)

        return {"text": input.text, "is_spam": bool(prediction)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
