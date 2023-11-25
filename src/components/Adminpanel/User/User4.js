import React from 'react'
import HigherOrderComponent from '../HOC/HigherOrderComponent'


const User4 = ({ name, style }) => {
  return (
    <div>
      {style.map((item) => (
        <input style={{ width: `${item.width}`,backgroundColor:`${item.backgroundColor}` }} value={name} />
      ))}
      {/* <p style={{outline}}></p> */}
    </div>
  )
}

export default HigherOrderComponent(User4)
