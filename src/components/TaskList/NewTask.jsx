import React from "react";

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="flex-shrink-0 w-[300px] min-h-fit p-5 bg-teal-950 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-400 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-3 text-sm">{data.taskDescription}</p>
      <div className="mt-8">
        <button className="bg-pink-900 py-1 px-2 text-sm rounded" onClick={onAccept}>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
