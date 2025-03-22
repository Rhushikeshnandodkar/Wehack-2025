import React from 'react'
import { TutorDashboardStyle } from './tutor.style'
import { GlobalStyle } from '../commonpages/common.style'

function TutorDashboard() {
  return (
    <>
    <GlobalStyle/>
    <TutorDashboardStyle>
    <div className="dashboard-container">
  <div className="stats-grid">
    <div className="stat-card">
      <h3>Active Students</h3>
      <div className="value">42</div>
      <div className="trend up">
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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
        <div className="live-indicator">Live Analysis</div>
      </div>
      <div className="questions-list">
        <div className="question-card">
          <div className="relevance">98% Relevance</div>
          <p>Can you explain the concept of neural networks in machine learning and how they relate to deep learning architectures?</p>
        </div>
        <div className="question-card">
          <div className="relevance">95% Relevance</div>
          <p>What's the difference between supervised and unsupervised learning? When should we use each approach?</p>
        </div>
        <div className="question-card">
          <div className="relevance">92% Relevance</div>
          <p>How does backpropagation work in deep learning, and why is it crucial for training neural networks?</p>
        </div>
      </div>
      <div className="chart">
        <div className="bar" style={{height: '80%'}} />
        <div className="bar" style={{height: '65%'}} />
        <div className="bar" style={{height: '90%'}} />
        <div className="bar" style={{height: '45%'}} />
        <div className="bar" style={{height: '70%'}} />
        <div className="bar" style={{height: '85%'}} />
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

    </TutorDashboardStyle>
    </>
  )
}

export default TutorDashboard