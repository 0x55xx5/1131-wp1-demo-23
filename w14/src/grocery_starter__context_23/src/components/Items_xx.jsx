import SingleItem_xx from './SingleItem_xx';
import { useMyAppContext } from "./gxContext";

const Items_xx = () => {
  //
  const {itms} = useMyAppContext();

  return (
    <div className='items'>
      <h4>Items_xx input something.,,,</h4>
      {itms.map((item) => {
        return (
          <SingleItem_xx key={item.id} item={item} />
        );
      })}
    </div>
  );
};
export default Items_xx;
