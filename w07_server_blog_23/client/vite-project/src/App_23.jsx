import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog_23 from './pages/blogStaticPage_23'
import Blog_Node_23 from './pages/blogNodePage_23'
import Blog_node_23_Sdk from './pages/blogNodePage_23sdk'
const app_blog_23 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_my_blog' element={<Blog_23 />}></Route>
        <Route path='/node_ss_my_blog' element={<Blog_Node_23 />}></Route>
        <Route path='/SDK_ss_my_blog' element={<Blog_node_23_Sdk />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
/*
const app_23 = () => {
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>latest blogs using breakpoints</h2>
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
                lifestyle <i className='fa-solid fa-mug-saucer'></i>
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
                travel <i className='fa-solid fa-globe'></i>
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
                lifestyle <i className='fa-solid fa-mug-saucer'></i>
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
                lifestyle <i className='fa-solid fa-mug-saucer'></i>
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
}*/
export default app_blog_23
