import React from 'react'
import CompanySearch from '../component/CompanySearch'
import AddressSearch from '../component/AddressSearch'

const Companies = () => {
  return (
    <>
      <div>
        <h1>Companies </h1> 
        <CompanySearch />
      </div>
      <div className='company-address-form'>
        <AddressSearch />
      </div>  
    </>
    )
}

export default Companies
