import React from 'react'
//seat func
const Seats = (props) => {
    const handleChange=(e ,el)=>{
        const seatsData= {
            seatType:el,
            seatNo:Number(e.target.value)
        }
        props.seatSelector(seatsData)
    }


  return (
    <div className='container'>
        <h2>Select the seats</h2>
        {props.data.map((el,i)=>(
            <div key={i} className='element'>
                <h3 style={{display:'flex',justifyContent:'center',}}>{el}</h3>
                <input style={{fontWeight:"bold",}} onChange={(e) => handleChange(e,el)} type="number" min="1" name="seats" step="1" max="10"/>
            </div>
    ))}
      
    </div>
  )
}

export default Seats
