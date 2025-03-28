const mongoose = require('mongoose');

const TutorDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    qualifications: String,
    experience: Number,
    preferredSubjects: [String]
})

const TutorDataModel = mongoose.model('tutor_data', TutorDataSchema);

module.exports = TutorDataModel;