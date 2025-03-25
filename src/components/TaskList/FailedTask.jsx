import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className="flex-shrink-0 w-[300px] min-h-fit p-5  bg-teal-950 rounded-xl">
    <div className="flex justify-between items-center">
        <h3 className="bg-red-400 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
    <p className="mt-3 text-sm">
        {data.taskDescription}
    </p>
    <div className="flex justify-between mt-8">
        <button className="bg-red-800 py-1 px-2 text-sm rounded">Failed Task</button>
    </div>
</div>
    )
}

export default FailedTask
