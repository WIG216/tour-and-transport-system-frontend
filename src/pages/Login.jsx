import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import Form from '../components/dashboard/form/components/Form';
import FormField from '../components/dashboard/form/components/FormField';
import Button from '../components/dashboard/form/components/Button';
import * as Yup from 'yup';
import AuthLayout from '../components/dashboard/form/components/Layout/AuthLayout';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/dashboard/form/components/ErrorMessage';
import { loginUser } from '../db/auth';
import { storeToken, getToken, isDriver, isAdmin } from '../utils/storage';
import { toast } from 'react-toastify';


const initialValues = {
    email: '',
    password: ''
}

function Login() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required')
    })

    const handleLogin = (values) => {
        console.log(values)
        loginUser(values).then((res) => {
            setError(null);
            if (res.ok) {
                console.log(res);
                storeToken(res.data.accessToken);
                if(isDriver()){
                    // console.log(isDriver())
                    navigate('/dashboard')
                }else{
                    navigate("/home")
                }

                toast.success("Logged In Successfully", {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                console.log(res);
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                setError(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        })
    }


    if (getToken() != null) {
        if(isAdmin() || isDriver())
        {
            return <Navigate to="/dashboard" replace />
        }else{
            return <Navigate to="/home" replace />
        }
    }

    return (
        <AuthLayout title="Welcome Back">
            <form action="" className='auth-form'>
                <p >Login</p>
                {error && <ErrorMessage error={error} visible={true} />}
                <Form
                    initialValues={initialValues}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >

                    <FormField name="email" type="email" placeholder="Email" />

                    <FormField name="password" type="password" placeholder="Password" />

                    <Button title="Login" />
                </Form>
            </form>
            <p className="text-base">
                Don't have an account? <Link to="/register" className="font-semibold">Sign up</Link>
            </p>
        </AuthLayout>
    );
}

export default Login;
