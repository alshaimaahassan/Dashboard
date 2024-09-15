

import { useState, useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';  
import { useAuth } from '../auth/AuthProvider'; // Import the context

export default function Login() {
    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Error states for individual fields
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { saveToken } = useAuth(); // Get the saveToken function from context
    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages
        setEmailError('');
        setPasswordError('');

        // Input validation
        if (!email) {
            setEmailError('Email is required');
            return;
        }
        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        try {
            const response = await axios.post(
                'https://jr-production-e0d4.up.railway.app/api/v1/auth/signIn',
                { email, password },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            console.log('Login successful:', response.data);
            setSuccess(true);
            const { token } = response.data;

            // Save the token using context
            saveToken(token);
        } catch (error) {
            console.error('Error logging in:', error);
            setErrMsg('Invalid email or password');
        }
    };


    return (
        <>
            {success ? (
                <Navigate to="/user-dashboard" />
            ) : (
                <div className="min-h-auto flex  justify-center w-full dark:bg-gray-950">
                    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={emailRef}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`shadow-sm rounded-md w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    placeholder="your@email.com"
                                    required
                                />
                                {/* Email error message */}
                                {emailError && (
                                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className={`shadow-sm rounded-md w-full px-3 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                    placeholder="Enter your password"
                                    required
                                />
                                {/* Password error message */}
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                                )}
                                <a
                                    href="#"
                                    className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                                        checked
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    to="/signup"
                                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create Account
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                            {/* General error message */}
                            {errMsg && (
                                <p className="text-red-500 text-sm text-center mt-4">{errMsg}</p>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}





