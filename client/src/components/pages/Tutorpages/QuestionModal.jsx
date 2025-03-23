import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 600;
      color: #4a5568;
    }

    input,
    textarea {
      padding: 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
      }
    }
  }

  .options-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .option-group {
    display: flex;
    gap: 1rem;
    align-items: center;

    input[type="radio"] {
      width: auto;
    }
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: flex-end;
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &.cancel {
      background: #e2e8f0;
      color: #4a5568;

      &:hover {
        background: #cbd5e0;
      }
    }

    &.submit {
      background: #4299e1;
      color: white;

      &:hover {
        background: #3182ce;
      }
    }
  }
`;

const socket = io("http://localhost:5000", { autoConnect: true });
const QuestionModal = ({ isOpen, onClose, onSubmit }) => {
  const { roomId } = useParams();
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctOption: null,
  });

  useEffect(() => {
    socket.connect() 

    socket.emit('join_room', {roomId})

    return () => {
      socket.off("room_joined");
      socket.off("received_poll");
    };
}, []);

    socket.on("poll-created", (data) =>{
        console.log(data)
    })


  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-poll", {roomId, formData})

    if (formData.correctOption === null) {
      alert("Please select a correct option");
      return;
    }

    // Create the final question object
    const questionData = {
      question: formData.question,
      options: formData.options,
      correctOption: formData.correctOption,
      correctAnswer: formData.options[formData.correctOption], // Store the actual correct answer text
    };

    onSubmit(questionData);

    // Reset form
    setFormData({
      question: "",
      options: ["", "", "", ""],
      correctOption: null,
    });

        



    // onClose();
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleCorrectOptionSelect = (index) => {
    setFormData({ ...formData, correctOption: index });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Create New Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea
              id="question"
              rows="3"
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Options (Select the correct answer)</label>
            <div className="options-container">
              {formData.options.map((option, index) => (
                <div key={index} className="option-group">
                  <input
                    type="radio"
                    name="correctOption"
                    id={`option-${index}`}
                    checked={formData.correctOption === index}
                    onChange={() => handleCorrectOptionSelect(index)}
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="button-group">
            <button
              type="button"
              className="cancel"
              onClick={() => {
                setFormData({
                  question: "",
                  options: ["", "", "", ""],
                  correctOption: null,
                });
                onClose();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="submit">
              Create Question
            </button>
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuestionModal;
