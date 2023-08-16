import React, { useState } from 'react';

const CompanySearch = () => {
  const [ search, setSearch ] =  useState('')

  const handleSearch = (e) => { 
      const search = e.target.value; 

      setSearch(search); 
      console.log(search);
  }

  return (
    <>
      <div class="company-content">
        <aside class="search-col">
            <div class="search-col-header input-block">
                <div class="search-input-wrapper">
                <input type='text'
                    className='input-block'
                    autoComplete='address-line1'
                    name='company'
                    value={ search }
                    size={"45"}
                    placeholder='Company Name'
                    onChange={handleSearch}
                    /> 
                </div>
            </div>
            <hr  style={{padding: "0"}}/>
            <div class="company-col-content"> 
            </div>
        </aside>
    </div>
    </>
  )
}

export default CompanySearch;
