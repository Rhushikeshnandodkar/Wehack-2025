import React from "react";
import Navbar from "../../molecules/Navbar";
import { ClassDashboardStyle } from "./tutor2.style";
import { GlobalStyle } from "../commonpages/common.style";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedMessage } from "../../../features/tutor/tutorSlice";
import { useParams } from "react-router-dom";
import QuestionModal from "./QuestionModal";
import styled from "styled-components";
import { useState } from "react";

const CreateButton = styled.button`
  background: #6366f1;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1rem;

  &:hover {
    background: #6366f1;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function ClassDashboard() {
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(roomId);

  useEffect(() => {
    dispatch(fetchRelatedMessage(roomId));
  }, []);
  const { relatedMessage } = useSelector((state) => state.tutor);
  console.log(relatedMessage);

  const handleCreateQuestion = (formData) => {
    // Handle the question creation here
    console.log("New question:", formData);
    // You can dispatch an action to save the question to your backend
  };
  const topMessages = relatedMessage ? relatedMessage.slice(0, 3) : [];
  const remainingMessages = relatedMessage ? relatedMessage.slice(3) : [];
  return (
    <>
      <GlobalStyle />
      <ClassDashboardStyle>
        <Navbar />
        <div className="dashboard-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Active Students</h3>
              <div className="value">42</div>
              <div className="trend up">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17l9-9" />
                  <path d="M7 8h9v9" />
                </svg>
                +12% this week
              </div>
            </div>
            <div className="stat-card">
              <h3>Questions Asked</h3>
              <div className="value">156</div>
              <div className="trend up">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17l9-9" />
                  <path d="M7 8h9v9" />
                </svg>
                +24% this week
              </div>
            </div>
            <div className="stat-card">
              <h3>Average Engagement</h3>
              <div className="value">87%</div>
              <div className="trend up">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17l9-9" />
                  <path d="M7 8h9v9" />
                </svg>
                +5% this week
              </div>
            </div>
            <div className="stat-card">
              <h3>Poll Participation</h3>
              <div className="value">92%</div>
              <div className="trend up">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M7 17l9-9" />
                  <path d="M7 8h9v9" />
                </svg>
                +8% this week
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="panel">
              <div className="panel-header">
                <h2>Most Relevant Questions</h2>
                <div className="create-question-btn">
                  <div className="live-indicator">Live Analysis</div>

                  {/* <CreateButton onClick={() => setIsModalOpen(true)}>
                    Create Question
                  </CreateButton> */}
                </div>
              </div>
              <div className="questions-list">
                {topMessages && topMessages.length > 0 ? (
                  topMessages.map((msg, index) => (
                    <div key={index} className="question-card">
                      <div className="relevance">
                        {(msg[1] * 100).toFixed(2)}% Relevance
                      </div>
                      <p>{msg[0]}</p>
                    </div>
                  ))
                ) : (
                  <p>No related messages found.</p>
                )}
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h2>ALL COMMENTS</h2>
                <div className="create-question-btn">
                  {/* <div className="live-indicator">Live Analysis</div> */}

                  {/* <CreateButton onClick={() => setIsModalOpen(true)}>
                    Create Question
                  </CreateButton> */}
                </div>
              </div>
              <div className="questions-list">
                {remainingMessages && remainingMessages.length > 0 ? (
                  remainingMessages.map((msg, index) => (
                    <div key={index} className="question-card">
                      <div className="relevance">
                        {(msg[1] * 100).toFixed(2)}% Relevance
                      </div>
                      <p>{msg[0]}</p>
                    </div>
                  ))
                ) : (
                  <p>No related messages found.</p>
                )}
              </div>
            </div>
            <div className="panel">
              <div className="panel-header">
                <h2>Student Leaderboard</h2>
              </div>
              <div className="leaderboard-list">
                <div className="leaderboard-item">
                  <div className="rank">1</div>
                  <div className="student-info">
                    <div className="student-name">Sarah Johnson</div>
                    <div className="contribution">15 contributions</div>
                  </div>
                  <div className="points">250</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">2</div>
                  <div className="student-info">
                    <div className="student-name">Michael Chen</div>
                    <div className="contribution">12 contributions</div>
                  </div>
                  <div className="points">220</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">3</div>
                  <div className="student-info">
                    <div className="student-name">Emma Wilson</div>
                    <div className="contribution">10 contributions</div>
                  </div>
                  <div className="points">180</div>
                </div>
                <div className="leaderboard-item">
                  <div className="rank">4</div>
                  <div className="student-info">
                    <div className="student-name">James Anderson</div>
                    <div className="contribution">8 contributions</div>
                  </div>
                  <div className="points">150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClassDashboardStyle>
      <QuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateQuestion}
      />
    </>
  );
}

export default ClassDashboard;
