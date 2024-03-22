import React from 'react'

function Loader() {
  return (
    <div>
        <div className='h-screen w-screen overflow-hidden p-0 flex items-center justify-center'>
                <div className='custom-loader'></div>
        </div>
    </div>
  )
}

export default Loader