import  useToogle  from './myToogle/useToogle';

const ToggleExample = () => {
  const {show, toggle} = useToogle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff  onClick,toggle</h4>}
    </div>
  );
};
export default ToggleExample;
