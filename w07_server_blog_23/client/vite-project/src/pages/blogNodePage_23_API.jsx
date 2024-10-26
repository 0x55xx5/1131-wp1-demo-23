import { FaGlobe, FaMugSaucer } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
let api_url = 'http://localhost:3000/api/supa/blog_23'

const blog_node_23 = () => {
  const [myBlogs, setMyBlogs] = useState()
  const getMyBlogData = async () => {
    try {
      const resp = await fetch(api_url)
      const data = await resp.json()
      console.log('db source:', data)
      setMyBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMyBlogData() //格式看錯
  }, []) //只做一次
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>SERVER : latest blogs using breakpoints data from db</h2>
        </div>
        <div className='blogs-center'>
          <article className='blog'>
            <img
              src='./images/photo-1.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>889seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='./images/photo-2.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                travel <FaGlobe />
              </span>
              <h3>travel to paris</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='./images/photo-3.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='./images/photo-4.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export default blog_node_23
