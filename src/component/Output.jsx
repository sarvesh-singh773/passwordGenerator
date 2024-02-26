import React from 'react'

function Output(props) {
  return (
    <div className='flex justify-center'>
        <input 
        type="text"
        readOnly
        value={props.password}
        placeholder='Password'
        className='w-[80%] py-3 rounded-l-lg '
        ref={props.passwordRef}
        />
        <button className='bg-[red] text-[white] py-3 text-[20px] px-4 rounded-r-xl'
        onClick={()=>{props.copyclickboard()}}>COPY</button>
    </div>
  )
}

export default Output 