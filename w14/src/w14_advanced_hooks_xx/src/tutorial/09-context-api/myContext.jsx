import { createContext,useContext,useState } from "react";
import { data } from '../../data';

const My23Context = createContext();
export const My23Provider = ({children})=>{

    const [people, setPeople] = useState(data);
    console.log('data', data);
    const removePerson = (id) => {
      setPeople((people) => {
        return people.filter((person) => person.id !== id);
      });
    };

    return <My23Context.Provider value={{people,removePerson }}>
    {children}
    
    </My23Context.Provider>


};
export const useMy23Context = ()=>{
    return useContext(My23Context);
}