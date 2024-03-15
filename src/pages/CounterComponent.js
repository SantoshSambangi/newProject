import React from 'react'

const CounterComponent = ({value, callback}) => {

    // const handleIncrease = ()=>{
    //         callback()
    // }

  return (
    <div>
        <button onClick={callback}>Increase</button>
        <h3>{value}</h3>
    </div>
  )
}

export default CounterComponent;