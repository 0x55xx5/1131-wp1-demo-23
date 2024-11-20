import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/0x55xx5';

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
        setUser(data);
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
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
