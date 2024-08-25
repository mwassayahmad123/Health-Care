import React, { useState } from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import { BASE_URL } from '../../config'
import usefetchData from '../../hooks/usefetchData'
import Loader from '../../components/Loaders/Loading'
import Error from '../../components/Error/Error'


const Doctors = () => {
  const [query, setQuery] = useState('')

  const handleSearch=()=>{
    setQuery(query.trim())

    console.log('handle search')
  }

  const {data:doctors , loading, error} = usefetchData(`${BASE_URL}/doctors?query=${query}`)
  
  
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input type='search'
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-twxtColor'
              placeholder='Search doctor by name or specification'
              value={query}
              onChange={e=>setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch} >Search</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          
        {loading && <Loader/>}
        {error && <Error/>}

         {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor.id} />))}


          </div>}

        </div>
      </section>
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patient say</h2>
            <p className='text_para text-center'>World-class care for everyone. Our health systems offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Doctors