import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const updatedTaskData = userData.map((user) => {
      const savedNumbers = JSON.parse(localStorage.getItem(`taskNumbers_${user.firstName}`)) || {
        newTask: 0,
        acceptedTask: 0,  // ✅ Always keeps increasing
        completed: 0,
        failed: 0,
      };
      return { ...user, taskNumbers: savedNumbers };
    });
  
    setTaskData(updatedTaskData);
  }, [userData]);
  

  return (
    <div className="p-5 bg-[#181818] mt-5 rounded">
      <div className="bg-teal-900 rounded flex justify-between items-center gap-4 mb-6 py-3 px-4">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h2 className="w-1/5">Active Task</h2>
        <h2 className="w-1/5">Completed Task</h2>
        <h2 className="w-1/5">Failed Task</h2>
      </div>

      <div className="h-50 overflow-auto">
        {taskData.map((data, idx) => (
          <div
            key={idx}
            className="border-3 border-cyan-900 flex justify-between items-center gap-9 mb-2 py-3 px-4"
          >
            <h2 className="text-indigo-600 rounded p-2 w-1/5">{data.firstName}</h2>
            <h3 className="text-cyan-300 rounded p-2 w-1/5">{data.taskNumbers.newTask}</h3>
            <h3 className="text-yellow-300 rounded p-2 w-1/5">{data.taskNumbers.acceptedTask}</h3>
            <h3 className="text-purple-700 rounded p-2 w-1/5">{data.taskNumbers.completed}</h3>
            <h3 className="text-red-700 rounded p-2 w-1/5">{data.taskNumbers.failed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
