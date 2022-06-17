import React from 'react'

function FollowSuggesion({img,username}) {
  return (
    <div className='flex justify-start items-center mb-2 mt-2'>
      <img src={img} alt="" className=' rounded-full h-10 w-10'/>
      <p className='flex-1 mx-2 truncate'>{username}</p>
      <button className=' bg-blue-500  px-2 p-1 text-white text-sm rounded-md'> Follow </button>
    </div>
  )
}

export default FollowSuggesion