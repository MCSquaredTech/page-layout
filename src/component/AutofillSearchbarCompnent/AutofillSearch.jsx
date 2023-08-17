import React, { useState } from 'react'
import * as fa  from 'react-icons/fa'
import * as gr from 'react-icons/gr'

import './AutofillSearch.css';

const AutofillSearch = ({placeholder, data}) => {
    const [ dataFilter, setDataFilter ] = useState([]);
    const [ search, setSearch ] = useState('');

    const handleSearch = (e) => {
        const searchWord = e.target.value; 
        setSearch(searchWord); 

        const newFilter = data.filter((value) => { 
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setDataFilter([]);
        } else { 
            setDataFilter(newFilter);
        }
    }

  return (
    <div className="company-content">
        <aside className="search-col">
            <div className="search">
                <div className="searchInput">
                    <input type='text'
                        name='company'
                        value={search}
                        size={"35"}
                        placeholder={placeholder}
                        onChange={handleSearch}
                        /> 
                    <div className="searchIcon">
                        {dataFilter.length === 0 ?
                            (
                            <fa.FaSearch size={"20"} color={"black"}/>   
                        ) : (
                            <gr.GrClose size={"20"}/>
                        )}
                    </div>       
                </div>
            </div>
        </aside>
    </div>
  )
}

export default AutofillSearch
