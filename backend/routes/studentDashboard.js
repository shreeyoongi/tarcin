const express = require('express');
const router = express.Router();
const FormDataModel = require('../models/FormData');

router.get('/performance/:id', async (req, res) => {
    try {
        const student = await FormDataModel.findById(req.params.id);
        const performance = {
            coursesEnrolled: 0,
            completedCourses: 0,
            averageScore: 0
        };
        res.json(performance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/courses', async (req, res) => {
    try {
        // Fetch all available courses for students
        const courses = await CourseModel.find().populate('tutor', 'name');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;