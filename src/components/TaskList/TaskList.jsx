import React, { useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import TaskListNumbers from "../others/TaskListNumbers";

const TaskList = ({ data, changeuser }) => {
  const employeeFirstName = data?.firstName;

  const handleCreateTask = () => {
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    changeuser("admin");
  };

  const [tasks, setTasks] = useState([]);
  
  // ✅ Load taskNumbers from localStorage first
  const [taskNumbers, setTaskNumbers] = useState(() => {
    const savedTaskNumbers = localStorage.getItem(`taskNumbers_${employeeFirstName}`);
    return savedTaskNumbers ? JSON.parse(savedTaskNumbers) : {
      newTask: 0,
      completed: 0,
      acceptedTask: 0, // ✅ Persistent accepted task count
      failed: 0,
    };
  });

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    if (employeeFirstName) {
      const savedTasks = localStorage.getItem(`tasks_${employeeFirstName}`);
      setTasks(savedTasks ? JSON.parse(savedTasks) : data.tasks || []);
    }
  }, [employeeFirstName, data.tasks]);

  // ✅ Update localStorage when tasks change
  useEffect(() => {
    if (employeeFirstName) {
      localStorage.setItem(`tasks_${employeeFirstName}`, JSON.stringify(tasks));
      updateTaskNumbers();
    }
  }, [tasks, employeeFirstName]);

  // ✅ Function to calculate task numbers and store them in localStorage
  const updateTaskNumbers = () => {
    const updatedNumbers = {
      newTask: tasks.filter((task) => task.newTask).length,
      completed: tasks.filter((task) => task.completed).length,
      acceptedTask: tasks.filter((task) => task.acceptedTask).length, // ✅ FIXED: No double count
      failed: tasks.filter((task) => task.failed).length,
    };
  
    setTaskNumbers(updatedNumbers);
    localStorage.setItem(`taskNumbers_${employeeFirstName}`, JSON.stringify(updatedNumbers));
  };
  

  return (
    <div className="p-5">
      {/* ✅ Pass consistent task numbers */}
      <TaskListNumbers data={{ taskNumbers }} />

      {/* 📝 Task Cards */}
      <div className="h-[50%] overflow-x-auto flex flex-wrap items-start gap-5 mt-5">
        {tasks.length === 0 ? (
          <p className="text-white">No tasks available.</p>
        ) : (
          tasks.map((elem, idx) => {
            if (elem.completed) return <CompleteTask key={idx} data={elem} />;
            if (elem.failed) return <FailedTask key={idx} data={elem} />;
            if (elem.acceptedTask)
              return (
                <AcceptTask
                  key={idx}
                  data={elem}
                  onComplete={() =>
                    setTasks((prev) => prev.map((t, i) => i === idx ? { ...t, completed: true } : t))
                  }
                  onFail={() =>
                    setTasks((prev) => prev.map((t, i) => i === idx ? { ...t, failed: true } : t))
                  }
                />
              );
            if (elem.newTask)
              return (
                <NewTask
                  key={idx}
                  data={elem}
                  onAccept={() =>
                    setTasks((prev) => prev.map((t, i) => i === idx ? { ...t, acceptedTask: true, newTask: false } : t))
                  }
                />
              );
            return null;
          })
        )}
      </div>

      {/* ➕ Create Task Button */}
      <div className="mt-5 bg-purple-950 text-white font-bold text-lg px-6 py-3 rounded-md shadow-md w-fit">
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
    </div>
  );
};

export default TaskList;
