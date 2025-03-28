const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');
const TutorDataModel = require('./models/TutorData');
const studentDashboardRoutes = require('./routes/studentDashboard');
const tutorDashboardRoutes = require('./routes/tutorDashboard');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/register', (req, res)=>{
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
})

// Student login route
app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json({
                    status: "Success",
                    id: user._id
                });
            }
            else{
                res.json({status: "Wrong password"});
            }
        }
        else{
            res.json({status: "No records found!"});
        }
    })
})

// Tutor login route
app.post('/tutor/login', (req, res)=>{
    const {email, password} = req.body;
    TutorDataModel.findOne({email: email})
    .then(tutor => {
        if(tutor){
            if(tutor.password === password) {
                res.json({
                    status: "Success",
                    id: tutor._id
                });
            }
            else{
                res.json({status: "Wrong password"});
            }
        }
        else{
            res.json({status: "No records found!"});
        }
    })
})

// New tutor routes
app.post('/tutor/register', (req, res)=>{
    const {email, password, qualifications, experience, preferredSubjects} = req.body;
    TutorDataModel.findOne({email: email})
    .then(tutor => {
        if(tutor){
            res.json("Already registered")
        }
        else{
            TutorDataModel.create({
                ...req.body,
                experience: Number(experience),
                preferredSubjects: Array.isArray(preferredSubjects) ? preferredSubjects : [preferredSubjects]
            })
            .then(tutor_data => res.json(tutor_data))
            .catch(err => res.json(err))
        }
    })
})

app.post('/tutor/login', (req, res)=>{
    const {email, password} = req.body;
    TutorDataModel.findOne({email: email})
    .then(tutor => {
        if(tutor){
            if(tutor.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        else{
            res.json("No records found! ");
        }
    })
})

app.use('/api/student', studentDashboardRoutes);
app.use('/api/tutor', tutorDashboardRoutes);

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");
});