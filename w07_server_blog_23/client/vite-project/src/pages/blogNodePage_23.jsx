import { FaGlobe, FaMugSaucer } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
let api_url = 'http://localhost:3000/api/supa/blog_23'

const blog_node_23 = () => {
  const [name, setName] = useState('my home123')
  const [stuNo, setStuNo] = useState('my _912410023')
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
          <h2 style={{fontSize:'1.2rem',marginBottom:'1rem'}}>{name}{stuNo} - SERVER : latest blogs using breakpoints data from API</h2>
        </div>
        <div className='blogs-center'>
          {myBlogs?.map(
            (b)=>{
              const { id, title, catlog, img,remote_img, desp } = b
              return (
                <article className='blog' key={b.id}>
                  <img
                    src={b.img}
                    alt='Coffee photo'
                    className='img blog-img'
                  />
                  <div className='blog-content'>
                    <span>
                      {b.catlog} {
                        (catlog==='lifestyle'?<FaMugSaucer />:<FaGlobe />)
                      }
                    </span>
                    <h3>{b.title}</h3>
                    <p>{b.desp}</p>
                    <a href='#'>read more</a>
                  </div>
                </article>
              )
            }
          )}
     
        </div>
      </section>
    </>
  )
}
export default blog_node_23
