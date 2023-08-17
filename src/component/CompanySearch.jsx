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
  console.log(data);
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
                  <div className="data-items">
                    {data.map((value, key) => {
                      <a href="#" className="item" style={{color: "black"}}>Help</a>
                    })}
                  </div>
                    
                </div>
            </div>
        </aside>
    </div>
    </>
  )
}

export default CompanySearch;
