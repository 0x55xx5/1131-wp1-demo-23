import { useContext, useState, createContext } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";



const setLocal = (lst) => {
  localStorage.setItem("23_itms", JSON.stringify(lst));
};
const getLocal = () => {
  if (localStorage.getItem("23_itms") === null) {
    localStorage.setItem("23_itms", JSON.stringify([]));
  } else {
    let local = JSON.parse(localStorage.getItem("23_itms"));
    setItms(local);
  }
};
const defItms = JSON.parse(localStorage.getItem('23_itms') || '[]');
console.log("2131231"+defItms);
const MyAppContext = createContext();

export const useMyDataProvider = ({ children }) => {
  const [itms, setItms] = useState(defItms);
  const addItem = (itemName) => {
    const newItem = { id: nanoid(), name: itemName, completed: false };
    const lst = [...itms, newItem];
    setItms(lst); //pending operator
    setLocal(lst);

    toast.success("item added");
  };
  const rmoItm = (rid) => {
    let lst = itms.filter((item) => item.id !== rid);
    //setItms(newItms);
    setLocal(lst);
    getLocal();
    toast.error("item removed");
  };
  const editItm = (eid) => {
    itms.forEach((item) => {
      if (item.id === eid) {
        item.completed = !item.completed;
      }
    });
    // setItms([...itms]);
    setLocal(itms);
    getLocal();
  };

  return (
    <MyAppContext.Provider value={{ itms, addItem, rmoItm, editItm }}>
     {children}
    </MyAppContext.Provider>
  );
};
export const useMyAppContext = () => {
  return useContext(MyAppContext);
};
