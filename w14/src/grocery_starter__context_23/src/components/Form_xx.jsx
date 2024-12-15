import { useState } from "react";
import { useMyAppContext } from "../../../grocery_starter__context_23/src/components/gxContext";


const Form_xx = () => {
 
  const [itemName, setItemName] = useState('');
  
  const {addItem} = useMyAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);

    setItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery 23 bugs</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={itemName}
          onChange={(e) =>  setItemName(e.target.value)  }
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form_xx;
