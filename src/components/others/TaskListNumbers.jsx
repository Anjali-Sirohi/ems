import React from 'react'

const TaskListNumbers = ({data}) => {
  const { taskNumbers } = data;
  // console.log(taskNumbers);
  
  return (
    
        
    <div className='grid grid-cols-2 gap-5 p-4 w-full md:flex md:flex-row md:gap-10'>
    <div className='mt-6 h-full w-full md:w-64 rounded-xl bg-cyan-900'>
      <h2 className='px-8 mt-2 font-bold text-2xl'>{taskNumbers.newTask}</h2>
      <h3 className='px-8 py-2 font-medium'>New Task</h3>
    </div>
    <div className='mt-6 h-full w-full md:w-64 rounded-xl bg-emerald-900'>
      <h2 className='px-8 mt-2 font-bold text-2xl'>{taskNumbers.completed}</h2>
      <h3 className='px-8 py-2 font-medium'>Completed</h3>
    </div>
    <div className='mt-6 h-full w-full md:w-64 rounded-xl bg-purple-500'>
      <h2 className='px-8 mt-2 font-bold text-2xl'>{taskNumbers.acceptedTask}</h2>
      <h3 className='px-8 py-2 font-medium'>Accepted</h3>
    </div>
    <div className='mt-6 h-full w-full md:w-64 rounded-xl bg-red-900'>
      <h2 className='px-8 mt-2 font-bold text-2xl'>{taskNumbers.failed}</h2>
      <h3 className='px-8 py-2 font-medium'>Failed</h3>
    </div>
  </div>
  )
}

export default TaskListNumbers
