import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [experience, setExperience] = useState('');
    const [preferredSubjects, setPreferredSubjects] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/tutor/register', {
            name,
            email,
            password,
            qualifications,
            experience,
            preferredSubjects: preferredSubjects.split(',').map(subject => subject.trim())
        })
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login/tutor');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login/tutor');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center py-5 my-4" style={{backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width: '40%'}}>
                    <h2 className='mb-3 text-primary'>Tutor Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="qualifications" className="form-label">
                                <strong>Qualifications</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Your Qualifications"
                                className="form-control"
                                id="qualifications"
                                onChange={(event) => setQualifications(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label htmlFor="experience" className="form-label">
                                <strong>Years of Experience</strong>
                            </label>
                            <input 
                                type="number"
                                placeholder="Enter Years of Experience"
                                className="form-control"
                                id="experience"
                                onChange={(event) => setExperience(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label htmlFor="subjects" className="form-label">
                                <strong>Preferred Subjects</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Subjects (comma-separated)"
                                className="form-control"
                                id="subjects"
                                onChange={(event) => setPreferredSubjects(event.target.value)}
                                required
                            />
                            <small className="form-text text-muted">Enter subjects separated by commas (e.g., Mathematics, Physics, Chemistry)</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register