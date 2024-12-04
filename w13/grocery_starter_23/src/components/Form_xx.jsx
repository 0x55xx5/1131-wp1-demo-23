import { useState } from "react";

const Form_xx = ({addItem}) => {
  const [itemName, setItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);

    setItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bugs</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form_xx;
