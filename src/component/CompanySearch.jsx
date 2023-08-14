import React from 'react';

const CompanySearch = () => {
  return (
    <>
      <div class="company-content">
        <aside class="search-col">
            <div class="search-col-header">
                <div class="search-input-wrapper">
                    <input type="text" placeholder="Search" />
                </div>
                <div class="search-button-wrapper">
                    <button className='btn btn-dark' type="button" >Go</button>
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