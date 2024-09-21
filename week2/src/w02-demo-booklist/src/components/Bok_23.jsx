
import React from 'react'
const Bok_23 = ({img ,title,author}) => {
  return (
    <article className="book">
    <img src={img} alt="" />
    <div className='book-info'>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  </article>
  )
}

export default Bok_23
