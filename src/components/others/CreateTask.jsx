import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  //  console.log(userData);

  const [taskTitle, setTaskTitle] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState("");
  // const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
  
    const newTask = {
      acceptedTask: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      date,
      category,
    };
  
    const updatedData = userData.map((employee) => {
      if (employee.firstName === employeeName) {
        const updatedTasks = [...employee.tasks, newTask];
  
        // Save the updated tasks to localStorage
        localStorage.setItem(`tasks_${employeeName}`, JSON.stringify(updatedTasks));
  
        return {
          ...employee,
          tasks: updatedTasks, // Update state correctly
          taskNumbers: {
            ...employee.taskNumbers,
            newTask: employee.taskNumbers.newTask + 1,
          },
        };
      }
      return employee;
    });
  
    // Update global state
    setUserData(updatedData);
  
    // Reset form fields
    setTaskTitle("");
    setEmployeeName("");
    setDate("");
    setCategory("");
    setTaskDescription("");
  
    // **Force re-render of TaskList** (Optional)
    window.dispatchEvent(new Event("storage"));
  };
  
  return (

    <div className="p-5 bg-[#181818] mt-6 rounded">
      <form onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start">

        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div>
            <h3 className="text-sm font-medium mb-1">Task Title</h3>
            <input
              // required
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value)
              }}
              type="text"
              placeholder="Make a UI design"
              className="w-4/5 text-sm p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Description (moved to come after Task Title) */}
          <div className="lg:hidden w-full mt-4">
            <h3 className="text-sm font-medium mb-1">Description</h3>
            <textarea
              // required
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              className="w-4/5 h-43 p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none flex-grow"
              placeholder="Write task"
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-1">Date</h3>
            <input
              // required
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              type="date"
              className="w-4/5 text-sm p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-1">Assign to</h3>
            <input
              required
              value={employeeName}
              onChange={(e) => {
                setEmployeeName(e.target.value)
              }}
              type="text"
              placeholder="Employee name"
              className="w-4/5 text-sm p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <h3 className="text-sm font-sm mb-1">Category</h3>
            <input
              // required
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-4/5 text-sm p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Button directly under textarea */}
          <button
            className="w-4/5 bg-green-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition mt-3 !mb-0 lg:hidden"
          >
            Create Task
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block lg:w-1/2 flex-col justify-end">
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm font-medium mb-1">Description</h3>
            <textarea
              // required
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              className="w-full h-44 p-2 bg-[#0f0f0f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none flex-grow"
              placeholder="Write task"
            ></textarea>
          </div>

          {/* Button directly under textarea */}
          <button
            className="w-full bg-green-900 text-black font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition mt-3 !mb-0"
          >
            Create Task
          </button>
        </div>

      </form>
    </div>


  )
}

export default CreateTask
