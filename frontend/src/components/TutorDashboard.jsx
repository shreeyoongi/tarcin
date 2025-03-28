import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function TutorDashboard() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch tutor's courses
        axios.get('http://localhost:3001/tutor/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(err => console.log(err));

        // Fetch enrolled students
        axios.get('http://localhost:3001/tutor/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Tutor Dashboard</h2>

            {/* Statistics Cards */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h5 className="card-title">Total Courses</h5>
                            <h2>{courses.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h5 className="card-title">Total Students</h5>
                            <h2>{students.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <h5 className="card-title">Active Sessions</h5>
                            <h2>{courses.filter(course => course.isActive).length}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div className="mb-4">
                <h3>My Courses</h3>
                <div className="row">
                    {courses.map(course => (
                        <div className="col-md-4 mb-3" key={course._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">Students: {course.enrolledStudents}</p>
                                    <p className="card-text">Status: {course.isActive ? 'Active' : 'Inactive'}</p>
                                    <button className="btn btn-primary me-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add New Course Button */}
            <button className="btn btn-success mb-4">Add New Course</button>
        </div>
    );
}

export default TutorDashboard;