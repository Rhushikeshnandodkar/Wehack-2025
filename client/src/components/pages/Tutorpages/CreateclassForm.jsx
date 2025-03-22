import React from 'react'
import { CreateclassStyle } from './tutor.style'
import Navbar from '../../molecules/Navbar'
import Sidebar from '../../molecules/Sidebar'
import { GlobalStyle } from '../commonpages/common.style'

function CreateclassForm() {
  return (
    <>
    <GlobalStyle/>
    <Sidebar/>
    <Navbar/>
    <CreateclassStyle>
        <div className="container">
        <h1 className="form-title">Create Your Class</h1>
        <form>
            <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-group">
                <label htmlFor="className">Class Name</label>
                <input type="text" id="className" placeholder="Enter a descriptive name for your class" required />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="e.g., Mathematics, Physics, Computer Science" required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Class Description</label>
                <textarea id="description" rows={4} placeholder="Provide a detailed description of what students will learn" defaultValue={""} />
            </div>
            </div>
            <div className="form-section">
            <h3>Schedule &amp; Duration</h3>
            <div className="input-group">
                <div className="form-group">
                <label htmlFor="startDate">Start Date &amp; Time</label>
                <input type="datetime-local" id="startDate" required />
                </div>
                <div className="form-group">
                <label htmlFor="duration">Duration (minutes)</label>
                <input type="number" id="duration" min={30} step={15} defaultValue={60} />
                </div>
            </div>
            </div>
            <div className="form-section">
            <h3>Course Materials</h3>
            <div className="file-upload">
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1={12} y1={3} x2={12} y2={15} />
                </svg>
                <p>Drag and drop your files here or click to browse</p>
                <small>Supported formats: PDF, PPT, PPTX (Max size: 50MB)</small>
                <input type="file" multiple accept=".pdf,.ppt,.pptx" />
            </div>
            </div>
            <div className="form-section">
            <h3>Additional Settings</h3>
            <div className="form-group">
                <label htmlFor="tags">Topics (Press Enter to add)</label>
                <div className="tags-input" id="tags">
                <div className="tag">
                    Mathematics <span>×</span>
                </div>
                <div className="tag">
                    Algebra <span>×</span>
                </div>
                </div>
            </div>
            </div>
            <button type="submit" className="submit-btn">Create Class</button>
        </form>
        </div>

    </CreateclassStyle>
    </>
  )
}

export default CreateclassForm