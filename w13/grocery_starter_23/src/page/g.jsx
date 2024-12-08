import React, { useState } from "react";
import Form_xx from "../components/Form_xx";
import Items_xx from "../components/Items_xx";
import {nanoid} from 'nanoid';
import {toast} from  'react-toastify';
 const Gro = () => {
  const [itms, setItms] = useState([]);
  const addItem = (itemName) => {
    const newItem = { id: nanoid(),name: itemName ,completed: false};
    const lst = [...itms, newItem];
    setItms(lst);//pending operator
    setLocal(lst);   
  
    toast.success('item added');

  }
  const rmoItm = (rid) => {
    let lst = itms.filter((item) => item.id !== rid);
    //setItms(newItms);
    setLocal(lst);   
    getLocal();
    toast.error('item removed');
   
  }
  const editItm = (eid) => {
    itms.forEach((item) => {
      if (item.id === eid) {
        item.completed = !item.completed;
      }
    });
   // setItms([...itms]);   
    setLocal(itms);   
    getLocal();
  }
  const setLocal = (lst) => {
    localStorage.setItem('23_itms', JSON.stringify(lst));
  }
  const getLocal = () => {
    if (localStorage.getItem('23_itms') === null) {
      localStorage.setItem('23_itms', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('23_itms'));
      setItms(local);
    }
  }
  
  return (
    <section className="section-center">
      <Form_xx addItem={addItem} />
      <Items_xx lst={itms} rmItm={rmoItm} editItm={editItm} />
   

    </section>
  );

 
};
export default Gro;
