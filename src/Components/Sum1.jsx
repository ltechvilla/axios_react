import React from 'react'
import { useState , useEffect } from 'react';


function Sum1() {
    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
   // document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p style={{color:"red"}}>You clicked {count} times</p>
      <button type='button'className='btn btn-success'onClick={() => setCount(count + 1)}>
        Click me
      </button>

{/* <div className='col-md-2'>
    <button type='button'className='btn btn-success'>Tesst Bootstrap</button>
   </div> */}

    </div>
  );
}
export default Sum1;