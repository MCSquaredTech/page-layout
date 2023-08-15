import React, { useState } from 'react'
import { AddressAutofill } from '@mapbox/search-js-react';

const AddressSearch = () => {
  const [value, setValue] = useState('')
  
  const handleChange = (e) => { 
    const { name, value } = e;
    setValue(value);
  } 

  return (
    <div className='company-address-form'>
      <form>
        <AddressAutofill accessToken={mapToken}>
          <input type='text'
            className='input-block'
            autoComplete='address-line1'
            name='searchAddress'
            value={value}
            size={"30"}
            placeholder='Address'
            onChange={handleChange}
            /> 
          <input type="text"
            className='input-block' 
            autoComplete='address-line2'
            name='addressLine2'
            value={value}
            size={"30"}

          /> 
        </AddressAutofill>
      </form>
    </div>
  )
}

export default AddressSearch
