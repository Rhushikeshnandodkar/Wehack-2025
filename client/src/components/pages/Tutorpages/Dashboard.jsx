import React from 'react'
import Sidebar from '../../molecules/Sidebar'
import { DashboardStyle } from './tutor.style'
import { GlobalStyle } from '../commonpages/common.style'
import Navbar from '../../molecules/Navbar'
function Dashboard() {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Sidebar/>
    <DashboardStyle>
            <main className="main-content">
        <div className="header">
            <h1>Welcome back, Professor Smith</h1>
            <button className="create-class-btn">Create New Class</button>
        </div>
        <div className="stats-grid">
            <div className="stat-card">
            <div className="stat-title">Total Classes</div>
            <div className="stat-value">24</div>
            </div>
            <div className="stat-card">
            <div className="stat-title">Active Students</div>
            <div className="stat-value">156</div>
            </div>
            <div className="stat-card">
            <div className="stat-title">Average Rating</div>
            <div className="stat-value">4.8</div>
            </div>
            <div className="stat-card">
            <div className="stat-title">Hours Taught</div>
            <div className="stat-value">342</div>
            </div>
        </div>
        <div className="charts-grid">
            <div className="chart-container">
            <h2 className="chart-title">Student Engagement</h2>
            <canvas id="engagementChart" />
            </div>
            <div className="chart-container">
            <h2 className="chart-title">Class Distribution</h2>
            <canvas id="distributionChart" />
            </div>
        </div>
        <div className="classes-list">
            <h2 className="chart-title">Recent Classes</h2>
            <div className="class-item">
            <div className="class-info">
                <h3>Advanced Machine Learning</h3>
                <div className="class-meta">Yesterday • 28 students</div>
            </div>
            <span className="class-status">Completed</span>
            </div>
            <div className="class-item">
            <div className="class-info">
                <h3>Data Structures &amp; Algorithms</h3>
                <div className="class-meta">2 days ago • 32 students</div>
            </div>
            <span className="class-status">Completed</span>
            </div>
            <div className="class-item">
            <div className="class-info">
                <h3>Web Development Fundamentals</h3>
                <div className="class-meta">3 days ago • 25 students</div>
            </div>
            <span className="class-status">Completed</span>
            </div>
        </div>
        </main>

    </DashboardStyle>
    </>
  )
}

export default Dashboard