import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isloading,setIsLoading]=useState(true);
  const [isErr,setErr]=useState(false);
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const  fetchUser=async()=>{
      try {
        const resp=await fetch(url);
        console.log(resp.status);
        if(resp.status!="200"){
            setIsLoading(false);
            setErr(true);
            return;
        }

        const data=await resp.json();
        console.log(data);
      } catch (error) {
        
      }
      setIsLoading(false);
    }
      fetchUser();
  },[])
  if(isloading){
    return <h2>loading,,,,,,, </h2>;
  }
  if(isErr){
    return <h2>Error,,,,,,, </h2>;
  }
  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
