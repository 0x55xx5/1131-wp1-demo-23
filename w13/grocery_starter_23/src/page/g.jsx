import React, { useState } from "react";
import Form_xx from "../components/Form_xx";
import Items_xx from "../components/Items_xx";
import {nanoid} from 'nanoid';
import {toast} from  'react-toastify';
 const Gro = () => {
  const [itms, setItms] = useState([]);
  const addItem = (itemName) => {
    const newItem = { id: nanoid(),name: itemName ,completed: false};
    setItms([...itms, newItem]);//pending operator
    toast.success('item added');

  }
  const rmoItm = (rid) => {
    setItms(itms.filter((item) => item.id !== rid));
    toast.error('item removed');
  }
  const editItm = (eid) => {
    itms.forEach((item) => {
      if (item.id === eid) {
        item.completed = !item.completed;
      }
    });
    setItms([...itms]);      
  }
  return (
    <section className="section-center">
      <Form_xx addItem={addItem} />
      <Items_xx lst={itms} rmItm={rmoItm} editItm={editItm} />
   

    </section>
  );

 
};
export default Gro;
