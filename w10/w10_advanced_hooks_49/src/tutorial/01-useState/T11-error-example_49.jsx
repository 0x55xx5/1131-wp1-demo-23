const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count++
    console.log('countKK',count)
  }

  return (
    <>
    <h2>{count}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      increment click
    </button>
    </>
  )
}

export default ErrorExample
