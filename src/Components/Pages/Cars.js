import React from 'react'
import { Helmet } from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import carData from '../../assets/data/carData'
import CarItem from '../UI/CarItem'

const Cars = () => {
  return (
    <>
      <Helmet title="Cars">
        <CommonSection title="Car Listing" />

        <div className="sorting-item flex md:ml-[120px] ml-5 md:mr-[120px] mr-5 space-x-5 mt-20 mb-10">
          <div className="icon">
            <i class="ri-sort-asc"></i> Sort By
          </div>
          <select className='px-1 py-1 rounded-[5px]'>
            <option value="Select">Select</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>

        <section className="md:grid md:grid-cols-3 gap-6 md:ml-[120px] md:mr-[120px]">
          {carData.map((item, index) => {
            return (
              <CarItem item={item} />
            )
          })}
        </section>
      </Helmet >
    </>
  )
}
export default Cars