import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null);
  const [userData] = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null);


  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setloggedInUserData(userData.data)
      }
    }
  }, [userData]);


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == 123) {
      setUser('admin');
      setloggedInUserData()
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData.find((e) =>
        email == e.email && password == e.password)
      if (employee) {
        setUser('employee');
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }


    }
    else {
      alert('Wrong information')
    }
  }


  // console.log(user)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin'
        ?
        <AdminDashboard changeuser={setUser} />
        :
        (user == 'employee'
          ?
          <EmployeeDashboard changeuser={setUser} data={loggedInUserData} /> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}

    </>
  )
}

export default App
