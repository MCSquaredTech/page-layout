import React, { useState } from 'react'
import { AddressAutofill } from '@mapbox/search-js-react';

const AddressSearch = () => {
  const [value, setValue] = useState('')
  
  const mapToken = process.env.REACT_APP_MAPBOX_APIKEY;
  console.log(mapToken);

  const handleChange = (e) => { 
    const { value } = e;
    setValue(value);
  } 

  return (
    <div className='company-address-form'>
      <form>
        <AddressAutofill accessToken={mapToken}>
          <input type='text'
            className='input-block'
            autoComplete='address-line1'
            name='address'
            value={value}
            size={"45"}
            placeholder='Address'
            onChange={handleChange}
            /> 
          </AddressAutofill>
          <input type="text"
            className='input-block' 
            autoComplete='address-line2'
            name='unit'
            value={value}
            size={"45"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level2'
            name='city'
            value={value}
            size={"20"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='address-level1'
            name='state'
            value={value}
            size={"5"}

          /> 
          <input type="text"
            className='input-inline' 
            autoComplete='postal-code'
            name='postalcode'
            value={value}
            size={"10"}

          /> 
          <input type="text"
            className='input-block' 
            autoComplete='country-name'
            name='country'
            value={value}
            size={"20"}

          /> 
        
      </form>
    </div>
  )
}

export default AddressSearch
