import React from 'react'

const Slot = (props) => {
  return (
    <div className='container'>
        <h2>Select a Time Slot</h2>
      {props.data.map((el,i)=>(
        <h3 style={{backgroundColor:`${props.movieData === el?"#f08e33":"white"}`,}} onClick={()=>props.slotSelector(el)} className='element' key={i}>{el}</h3>
      ))}
    </div>
  )
}

export default Slot
