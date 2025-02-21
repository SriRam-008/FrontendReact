import React from 'react'
import {useState} from 'react'

const Content = () => {
    const greetlist = ['hello','hi','hola','namaste'];
    const greet = greetlist[Math.floor(Math.random()*10)];
    
    const [count,setcount] = useState(0);
    const [greet,setgreet] = useState("Good Morning");
    const handleclick = () => {
        if count === 0
        setcount(count+1);
        elseif count === 1
        setgreet("Good Afternoon");
    }
    
    
   
  return (
    <div>
        <h3>
            {greet} Good morning students welcome all!!
        </h3>
        <button onClick={handleclick}>{count}clickme</button>
    </div>
  )
}

export default Content;
