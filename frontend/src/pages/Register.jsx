import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, password, confirmPassword } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        // redirect on successful registration, (login)
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset)

    }, [isError, isSuccess, message, user, navigate, dispatch])

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
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) return <Spinner />

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
