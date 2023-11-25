
import React ,{useState} from 'react'
import './write.style.css'
import axios from 'axios';


function Write() { 
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [timing, setTiming] = useState("");
    const [feedback, setFeedback] = useState("");

    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        var alertPlaceholder = document.getElementById('alertMsg')
        alertPlaceholder.append(wrapper)
    }

    const write = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const reqData = {
            name: fname,
            email: email,
            phone: phone,
            timing: timing,
            feedback:feedback
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts`, reqData, config)
            .then((response) => {
                alertFunction('Registration Successful, Please Proceed to Login!', 'success')
                setEmail("");
                setFname("");
                setTiming("");
                setPhone("");
                setFeedback("");
            })
            .catch((err) => {
                alertFunction('Some error occurred', 'danger')
                console.log(err)
            });
    }


    return (
        <div className='container'>
            <h3 className='text-center text-uppercase pt-4'>Feedback</h3>
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(ev) => write(ev)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Fullname</label>
                        <input  value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact no.</label>
                        <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="timing" className="form-label">When can we reach you?</label>
                        <select  value={timing} onChange={(e) => setTiming(e.target.value)} 
                        className="form-select" id="timing">
                            <option defaultValue="">Best time to reach</option>
                            <option value="M">Morning</option>
                            <option value="A">Afternoon</option>
                            <option value="E">Evening</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="feedback" className="form-label">Enter your feedback below</label>
                        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} 
                        className="form-control" id="feedback" required></textarea>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )

 };
export default Write;
