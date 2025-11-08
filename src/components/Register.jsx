import { useState } from "react"
import axios from "axios";

function Register() {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setEmployee((old) => ({ ...old, [name]: value }));
    }

    const register = (e) => {
        e.preventDefault();

        axios
            .post('https://employee-crud-3pz2.onrender.com/register', {
                name: employee.name,
                email: employee.email,
                password: employee.password
            })
            .then((response) => {
                if (response.data) {
                    alert("Registerd")
                } else {
                    alert('alredy Exist')
                }
            })
            .catch((error) => alert(error.message));
            reset();
    };

    const reset =()=> {
        setEmployee({
         name: '',
        email: '',
        password: '',
    });
;}

    return (

        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Register
                </h2>
                <form onSubmit={register} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={employee.name}
                            onChange={inputHandler}
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={employee.email}
                            onChange={inputHandler}
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            value={employee.password}
                            onChange={inputHandler}
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register
