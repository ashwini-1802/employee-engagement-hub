import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const inputHandler = e => {
        const { name, value } = e.target;
        setLoginForm(old => ({ ...old, [name]: value }));
    };

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/login', {
            email: loginForm.email,
            password: loginForm.password,
        })
            .then(response => {
                console.log("Response:", response.data);
                if (response.data) {
                    navigate('/dashboard');
                } else {
                    alert("Invalid Credentials");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Something Went Wrong");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In to Your Account</h2>
                <form onSubmit={login} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={loginForm.email}
                            onChange={inputHandler}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={loginForm.password}
                            onChange={inputHandler}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
