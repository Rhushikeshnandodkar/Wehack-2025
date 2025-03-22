import React, { useState } from "react";
import { CreateclassStyle } from "./tutor.style";
import Navbar from "../../molecules/Navbar";
import Sidebar from "../../molecules/Sidebar";
import { GlobalStyle } from "../commonpages/common.style";
import { useDispatch } from "react-redux";
import { createClasses } from "../../../features/tutor/tutorSlice";

function CreateclassForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    className: "",
    subject: "",
    description: "",
    startDate: "",
    duration: 60,
    content: [],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected Files:", files); // Logs the selected files to the console
    setFormData((prevData) => ({
      ...prevData,
      content: files,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    formDataToSend.append("className", formData.className);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("duration", formData.duration);
    
    formData.content.forEach((file, index) => {
      formDataToSend.append("content", file);
    });
  
    // Log the FormData entries
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    dispatch(createClasses(formDataToSend));
  };
  

  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Navbar />
      <CreateclassStyle>
        <div className="container">
          <h1 className="form-title">Create Your Class</h1>
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="form-section">
              <h3>Basic Information</h3>
              <div className="form-group">
                <label htmlFor="className">Class Name</label>
                <input
                  type="text"
                  id="className"
                  value={formData.className}
                  onChange={handleChange}
                  placeholder="Enter a descriptive name for your class"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Mathematics, Physics, Computer Science"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Class Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide a detailed description of what students will learn"
                />
              </div>
            </div>
            <div className="form-section">
              <h3>Schedule & Duration</h3>
              <div className="input-group">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date & Time</label>
                  <input
                    type="datetime-local"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration (minutes)</label>
                  <input
                    type="number"
                    id="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min={30}
                    step={15}
                  />
                </div>
              </div>
            </div>
            <div className="form-section">
              <h3>Course Materials</h3>
              <div className="file-upload">
                <p>Drag and drop your files here or click to browse</p>
                <small>
                  Supported formats: PDF, PPT, PPTX (Max size: 50MB)
                </small>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.ppt,.pptx"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Create Class
            </button>
          </form>
        </div>
      </CreateclassStyle>
      
    </>
  );
}

export default CreateclassForm;
