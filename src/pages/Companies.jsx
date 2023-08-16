import React from 'react'
import CompanySearch from '../component/CompanySearch'
import AddressSearch from '../component/AddressSearch'

const Companies = ({placeholder, data}) => {
  return (
    <>
      <div>
        <h3>Company</h3>
        <CompanySearch placeholder={placeholder} data={data} />
      </div>
      <div className='company-address-form'>
        <AddressSearch mapToken/>
      </div>  
    </>
    )
}

export default Companies
