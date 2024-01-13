import React from 'react'
import { Helmet } from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import BlogList from '../UI/BlogList'
import blogData from '../../assets/data/blogData'


const Blogs = () => {
  return (
    <>
      <Helmet title="Blogs">
        <CommonSection title="Blogs" />

        <section className="md:flex md:ml-[120px] ml-5 md:mr-[120px] mr-5 gap-7 ">
          {blogData.map((item) => {
            return (
              <BlogList item={item} />
            )
          })}
        </section>

        <section className="md:flex md:ml-[120px] ml-5 md:mr-[120px] mr-5 gap-7 mb-20">
          {blogData.map((item) => {
            return (
              <BlogList item={item} />
            )
          })}
        </section>
      </Helmet>
    </>
  )
}
export default Blogs