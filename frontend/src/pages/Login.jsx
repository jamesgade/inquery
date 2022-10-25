import { useState } from "react";
import { toast } from "react-toastify"
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please login to resolve query</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;