import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'; 
import CloseIcon from '@mui/icons-material/Close'; 
import AddIcon from '@mui/icons-material/Add'

import './AutofillSearch.css';
import { Search } from '@mui/icons-material';

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
                        placeholder={placeholder}
                        onChange={handleSearch}
                        /> 
                    <div className="searchIcon">
                        { search.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            dataFilter.length === 0 ? (
                                <AddIcon />
                            ) : (
                                <CloseIcon />
                            )
                        )}
                    </div>      
                    <div className="dataResult">
                        {data.map((value, key) => {
                            return <a className='dataItem'>
                                        <p>{value.Name}</p>
                                    </a>
                        })}
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}

export default AutofillSearch
