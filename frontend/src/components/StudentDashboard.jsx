import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDashboard() {
    const [showCourses, setShowCourses] = useState(false);
    const [courses, setCourses] = useState([]);
    const [performance, setPerformance] = useState({
        coursesEnrolled: 0,
        completedCourses: 0,
        averageScore: 0
    });

    useEffect(() => {
        // Fetch available courses with tutors
        axios.get('http://localhost:3001/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(err => console.log(err));

        // Fetch student performance
        // This will need to be modified to include actual student ID
        axios.get('http://localhost:3001/student/performance')
            .then(response => {
                setPerformance(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Student Dashboard</h2>
            
            {/* Performance Cards */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h5 className="card-title">Courses Enrolled</h5>
                            <h2>{performance.coursesEnrolled}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h5 className="card-title">Completed Courses</h5>
                            <h2>{performance.completedCourses}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <h5 className="card-title">Average Score</h5>
                            <h2>{performance.averageScore}%</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Courses Button */}
            <button 
                className="btn btn-primary mb-4"
                onClick={() => setShowCourses(!showCourses)}
            >
                {showCourses ? 'Hide Courses' : 'View Available Courses'}
            </button>

            {/* Courses List */}
            {showCourses && (
                <div className="row">
                    {courses.map(course => (
                        <div className="col-md-4 mb-3" key={course._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">Tutor: {course.tutor.name}</p>
                                    <p className="card-text">Subject: {course.subject}</p>
                                    <button className="btn btn-success">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default StudentDashboard;