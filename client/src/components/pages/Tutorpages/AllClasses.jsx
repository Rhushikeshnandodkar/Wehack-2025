import React, { useEffect } from "react";
import { ALlClassesStyle } from "./tutor.style";
import Sidebar from "../../molecules/Sidebar";
import { GlobalStyle } from "../commonpages/common.style";
import Navbar from "../../molecules/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../../../features/tutor/tutorSlice";
import { Link } from "react-router-dom";

function AllClasses() {
  const dispatch = useDispatch();
  const { isLoading, classes } = useSelector((state) => state.tutor);
  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Navbar />
      <ALlClassesStyle>
        <main className="main-content">
          <div className="header">
            <h1>My Classes</h1>
            <button className="create-class-btn">
              <Link to={"/create-class"}>Create New Class</Link>
            </button>
          </div>
          <div className="class-grid">
            {classes.length > 0 ? (
              classes.map((classItem) => (
                <div className="class-card">
                  <div className="class-header">
                    <h2 className="class-title">{classItem.className}</h2>
                    <div className="class-schedule">
                      {formatDate(classItem.startDate)} -{" "}
                      {formatDate(classItem.endDate)}
                    </div>
                  </div>
                  <div className="class-body">
                    <div className="class-stat">
                      <span className="stat-label">Students</span>
                      <span className="stat-value">28</span>
                    </div>
                    <div className="class-stat">
                      <span className="stat-label">Average Score</span>
                      <span className="stat-value">92%</span>
                    </div>
                    <div className="class-stat">
                      <span className="stat-label">Completion</span>
                      <span className="stat-value">85%</span>
                    </div>
                  </div>
                  <div className="class-actions">
                    <button className="action-btn">
                      <Link to={`/live-class/${classItem.roomID}`}>
                        JOIN CLASS
                      </Link>
                    </button>
                    <button className="action-btn">
                      <Link to={`/live-class-dashboard/${classItem.roomID}`}>
                        DASHBOARD
                      </Link>
                    </button>

                    {/* <button className="action-btn">Start Class</button> */}
                  </div>
                </div>
              ))
            ) : (
              <h2>No classes available</h2>
            )}
          </div>
        </main>
      </ALlClassesStyle>
    </>
  );
}

export default AllClasses;
