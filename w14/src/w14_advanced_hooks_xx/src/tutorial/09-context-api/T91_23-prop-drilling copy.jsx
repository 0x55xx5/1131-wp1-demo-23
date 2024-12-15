import { useMy23Context ,My23Provider } from "./myContext";



const PropDrillingMODContext = () => {
 
  return (
    <My23Provider>
      <h3>prop drilling....</h3>
      <List />
    </My23Provider>
  );
};
const List = () => {
  const {people} = useMy23Context();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
 // const removePerson = ctx.removePerson;
 const {removePerson} = useMy23Context();
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrillingMODContext;
