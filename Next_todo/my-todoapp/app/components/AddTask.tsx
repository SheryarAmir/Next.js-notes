import React from 'react'
import { FaPlus } from "react-icons/fa6";
function AddTask() {
  return (
    <div>
      <button className='btn btn-success w-full'>Add new task <FaPlus  size={20}/></button>
    </div>
  )
}

export default AddTask
