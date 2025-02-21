import React from 'react'
import {useState} from 'react'

const Content = () => {
    // const greetlist = ['hello','hi','hola','namaste'];
    // const rand = greetlist[Math.floor(Math.random()*10)];
    // const greet = greetlist[rand]
    
    // const [count,setcount] = useState(0);
    // const [greet,setgreet] = useState("Hello");
    // const handleclick = () => {
    //     if(count === 0)
    //     setcount(count+1);
    //     else if (count === 1)
    //     setgreet("Namaste");
    // }
    const [color,setColor] = useState('');
    const [count,setCount] = useState(0);
    const handleClick =() =>{
      setCount(count+1);
    }
    
   
  return (
    <div style={{backgroundColor:color}}>
        <h3>
            {count} times clicked
        </h3>
        <button onClick={handleClick}>Clickme</button>
        <br>
        </br>
        <input type='text' placeholder='Enter Color' onChange={(e) =>{
          setColor(e.target.value);
          console.log("e.target.value")
        }}></input>
    </div>
  )
}

export default Content;
