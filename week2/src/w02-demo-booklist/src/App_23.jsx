import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App_23.scss'

const App_23= ()=>{

    return (
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    )
  
}

const Book = () => {
  return (
    <article className="book">
      <img src="https://cf-assets2.tenlong.com.tw/products/images/000/221/447/original/A770.jpg?1726824016" alt="" />
      <div className='book-info'>
        <h1>Title</h1>
        <h4>Author</h4>
      </div>
    </article>
  )
}
export default App_23
