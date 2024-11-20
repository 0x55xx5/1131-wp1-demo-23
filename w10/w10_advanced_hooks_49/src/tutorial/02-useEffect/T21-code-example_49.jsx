import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value, setValueTest] = useState(0)

  // run each time when rendering
  useEffect(() => {
    console.log('value1 ' + value1)
  })

  // run only once
  useEffect(() => {
    console.log('value2 ' + value2)
  }, [])

  // run only value3 changes
  useEffect(() => {
    console.log('value3 ' + value3)
  }, [value3])

    // run each time when rendering
    useEffect(() => {
      console.log('btn value1 ' + value)
    })
  
    // run only once
    useEffect(() => {
      console.log('btn value2 ' + value)
    }, [])
  
    // run only value3 changes
    useEffect(() => {
      console.log('btn value3 ' + value)
    }, [value])

  return (
    <div>
      <h1>value1 : {value1}</h1>
      <button className='btn' onClick={() => setValue1(value1 + 1)}>
        click btn1
      </button>
      <h1>value2 : {value2}</h1>
      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        click btn2
      </button>
      <h1>value3 : {value3}</h1>
      <button className='btn' onClick={() => setValue3(value3 + 1)}>
        click btn3
      </button>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValueTest(value + 1)}>
        click btn4
      </button>
    </div>
  );
};
export default CodeExample;
