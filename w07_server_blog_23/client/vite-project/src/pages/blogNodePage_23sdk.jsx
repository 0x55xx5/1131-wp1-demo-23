import { FaGlobe, FaMugSaucer } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { sdk } from '../sdk/SupaSDK'

const blog_node_23_Sdk = () => {
  const [myBlogs, setMyBlogs] = useState()
  const getMyBlogData = async () => {
    try {
      let { data: d, error } = await sdk.from('blog_post_23_s').select('*')
      console.log('db source:', d)
      setMyBlogs(d)
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
          <h2>SERVER : latest blogs using breakpoints data from SUPA db</h2>
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
export default blog_node_23_Sdk
