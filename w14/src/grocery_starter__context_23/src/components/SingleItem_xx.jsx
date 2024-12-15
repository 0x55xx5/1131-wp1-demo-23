import { useMyAppContext } from "../gxcontext";

const SingleItem_xx = ({ item }) => {
  const{rmoItm,editItm} = useMyAppContext();
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
          rmoItm(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_xx;
