import React from 'react';
import Header from '../others/Header';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="p-6 min-h-screen bg-[#1C1C1C]">
      <Header changeuser={props.changeuser} data={props.data} />
      {/* <TaskListNumbers data={props.data} /> */}
      <TaskList data={props.data} changeuser={props.changeuser} /> {/* ✅ Pass changeuser here */}
    </div>
  );
};

export default EmployeeDashboard;
