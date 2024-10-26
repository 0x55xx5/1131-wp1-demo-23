
import { useState, useEffect } from 'react'
import { sdk } from '../sdk/SupaSDK'
import Blog_23 from '../components/Blog'

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
    
      <section className='blogs'>
        <div className='section-title'>
          <h2>SERVER : latest blogs using breakpoints data from SUPA db</h2>
        </div>
        <div className='blogs-center'>
        {myBlogs?.map(
            (b)=>{
              const { id, title, catlog, img,remote_img, desp } = b
              return (<Blog_23 key={id} title={title} catlog={catlog} img={img} remote_img={remote_img} desp={desp} />)
            }
          )}
        </div>
      </section>
    
  )
}
export default blog_node_23_Sdk
