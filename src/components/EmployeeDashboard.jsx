import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get('https://employee-crud-3pz2.onrender.com/getAll')
      .then((response)=> setEmployees(response.data))
      .catch(() => console.log("Something went wrong"));
  }, []);

  const deleteEmployee = (id) => {
    axios
    .delete(`https://employee-crud-3pz2.onrender.com/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("Deleted"); 
          const remainingEmp= employees.filter((emp)=> emp.id!==id);
          setEmployees(remainingEmp);
        }
        else {
          alert("Not deleted");
        }
      })
      .catch((error) => alert(error.message))
  };

  const showEmployee =(id) => {
    alert(id);
    //navigate to EmployeeProfile with specific id
navigate('/employee-profile/${id}');
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Employee Dashboard
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Password</th>
                <th className="px-4 py-2 text-left">Action</th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {employees.map((emp, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{emp.id}</td>
                  <td className="px-4 py-2">{emp.name}</td>
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.password}</td>
                  <td className=" px-4 py-2">
                    <button onClick={()=> deleteEmployee(emp.id)} className='bg-red-600 text-shadow-white px-4 py-2 rounded-3xl mr-2'>
                      Delete
                    </button>
                    
                    <button onClick={()=> showEmployee(emp.id)} className='bg-green-400 text-shadow-white px-4 py-2 rounded-3xl'>
                      Show
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
