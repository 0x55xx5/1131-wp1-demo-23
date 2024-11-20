import { useEffect, useState } from 'react';
const ToggleChallenge = () => {

  const [toggleShow,setShow]=useState(true);

  return (
    <>
      <button className='btn' onClick={()=>{
        setShow(!toggleShow)
      }}>Work at Toggle</button>
      {toggleShow&&<Alert />}
    </>
  );
 
};
const Alert=()=>{
  return <div className='alert alert-success'>work at github </div>
} 



export default ToggleChallenge;
