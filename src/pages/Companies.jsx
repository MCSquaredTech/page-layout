import React from 'react'
import CompanySearch from '../component/CompanySearch'
import AddressSearch from '../component/AddressSearch'
import AutofillSearch from '../component/AutofillSearchbarCompnent/AutofillSearch'

const Companies = ({placeholder, data}) => {
  return (
    <>
      <div>
        <h3>Company</h3>
        <AutofillSearch placeholder="Company Search ..." data={data} />
      </div>
      <div className='company-address-form'>
        <AddressSearch mapToken/>
      </div>  
    </>
    )
}

export default Companies
