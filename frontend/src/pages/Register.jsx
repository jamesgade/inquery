import { useState } from "react";
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, password, confirmPassword } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        }
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm password" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;
