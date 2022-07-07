import React from 'react'


const Starrating = () =>{
  const arr=[2,4,4,1,2,3,4,1,4,2,5,3];
  var allstar=0;
  let totalviews=arr.length;
  let viewer=[];
  let strmap=[];
   
  let strrate=[" . "," . "," . "," . "," . "];
  
  viewer=arr.map((item)=>{
    return item +",";
  });
 
  for(var i=0;i<totalviews;i++)
  {
    allstar=allstar+arr[i];
  }
  var averagestar=allstar/totalviews;
 
 
  if(!Number.isInteger(averagestar)){
    strrate.unshift("-");
    strrate.pop();
    }

  for(let j=1;j<=averagestar;j++)
  {
    strrate.unshift("*");
     strrate.pop();
  }
 
  
  strmap=strrate.map((item)=>{
    return item +" ";
  });
 averagestar=averagestar.toFixed(4);
 return <>
  <div className="main_div" align="center">
   <h1 style={{color:"red"}}>Rating Of Stars</h1>
   <h2> Given stars by viewers : [{viewer}]</h2>
   <h2>Total views: {totalviews}</h2>
   <h2>Average Stars: {averagestar}</h2><br/>
   <h2>Star Rating</h2>
   <h1 style={{color:"blue"}}>{strmap}</h1>
   
  </div>
  {/* <div className='col-md-2'>
    <button type='button'className='btn btn-success'>Tesst Bootstrap</button>
   </div> */}
  </>
}
export default Starrating;