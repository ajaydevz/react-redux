import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby5 } from '../../redux/counterSlice'



function Counter() {

    const count1 = useSelector((state)=>state.counter.count1)
    const count2 = useSelector((state)=>state.counter.count2)

    const dispatch = useDispatch()


  return (
    <div>
      <h1>counter app-redux</h1>
      <p> count1  :  {count1}</p>
      <button onClick={()=>dispatch(increment())}> increment by one</button>
      <button onClick={()=>dispatch(decrement())}> decrement by one</button>
      <button onClick={()=>dispatch(incrementby5())}> increment by 5</button>
      <p>count2  :  {count2}</p>
    
    </div>
  )
}

export default Counter



