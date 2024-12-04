import SingleItem_xx from './SingleItem_xx';


const Items_xx = ({lst,rmItm,editItm}) => {
  return (
    <div className='items'>
      <h4>Items_xx input something.,,,</h4>
      {lst.map((item) => {
        return (
          <SingleItem_xx key={item.id} item={item}  rmItm={rmItm} editItm={editItm} />
        );
      })}
    </div>
  );
};
export default Items_xx;
