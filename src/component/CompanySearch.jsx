import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const CompanySearch = ({placeholder, data, handleSelected}) => {
  const [ search, setSearch ] =  useState('')
 
  const handleSearch = (e) => { 
      const search = e.target.value; 

      setSearch(search); 
  }

  const handleHoverOver = () => { 
    // Do something 
  }

  return (
    <>
      <div className="company-content">
        <aside className="search-col">
            <div className="search-col-header">
                <div className="search-input-wrapper">
                  <div className="search">
                    <input type='text'
                      className='input-block'
                      autoComplete='search-list'
                      name='company'
                      value={ search }
                      size={"35"}
                      placeholder={placeholder}
                      onChange={handleSearch}
                      /> 
                    <div className="searchIcon">
                      <AiOutlineSearch size={"26"} />
                    </div> 
                  </div>  
                </div>
                <div className="search-results">
                  {data.map((value, key) => {
                    {console.log(value.Name)}
                    <a href="#" className="c">{value.Name}</a>
                  })}
                </div>
            </div>
        </aside>
    </div>
    </>
  )
}

export default CompanySearch;
