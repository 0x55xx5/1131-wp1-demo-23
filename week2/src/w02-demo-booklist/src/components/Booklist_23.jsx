import React from 'react'
import Bok_23 from '../components/Bok_23' 
import book_data from '../assets/data/d'
console.log(book_data)

const Booklist_23 = () => {
    return (
      
        <section className="booklist">
          {book_data.map((book) => {
            const {id, img, title, author} = book
            return <Bok_23 key={id}  img={img} title={title} author={author} />
          })
          }
        </section>
      )
}
/*const Book = () => {
    return (
      <article className="book">
        <img src="https://cf-assets2.tenlong.com.tw/products/images/000/221/447/original/A770.jpg?1726824016" alt="" />
        <div className='book-info'>
          <h1>Title</h1>
          <h4>Author</h4>
        </div>
      </article>
    )
  }*/
export default Booklist_23
