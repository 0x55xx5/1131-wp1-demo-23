import { useMyAppContext } from "../../../grocery_starter__context_23/src/components/gxContext";

const SingleItem_xx = ({ item }) => {
  const{rmItm,editItm} = useMyAppContext();
  return (
    <div className="single-item">
   
      <input type="checkbox" checked={item.completed} onChange={
        ()=>{
          editItm(item.id);
        }
      }  />

      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          rmItm(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_xx;
