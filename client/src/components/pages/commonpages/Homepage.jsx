import React from 'react'
import { HomepageStyle } from './common.style'
import { GlobalStyle } from './common.style'
import Navbar from '../../molecules/Navbar'
function Homepage() {
  return (
    <>
    <GlobalStyle />
    <HomepageStyle>
      <Navbar/>
      <div>
        <section className="hero">
          <div className="hero-content floating">
            <h1>Transform Your Teaching Experience</h1>
            <p>Elevate your online classes with real-time interaction, AI-powered insights, and seamless collaboration tools. Join the future of education today.</p>
            <div className="cta-buttons">
              <a href="classroom.html" className="cta-primary">Create Your Class</a>
              <a href="#features" className="cta-secondary">Learn More</a>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Real-time Classes</h3>
              <p>Engage with students in real-time through interactive live sessions with HD video and crystal-clear audio.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3>AI-Powered Insights</h3>
              <p>Leverage machine learning to identify key discussion points and track student engagement in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Interactive Learning</h3>
              <p>Create engaging polls, quizzes, and collaborative activities to keep students motivated and involved.</p>
            </div>
          </div>
        </section>
      </div>
    </HomepageStyle>
    </>
  )
}

export default Homepage