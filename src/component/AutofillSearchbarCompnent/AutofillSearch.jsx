import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'; 
import CloseIcon from '@mui/icons-material/Close'; 
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom';

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
    const handleSelected = (value) => { 
        console.log(value);
    }

    const handleKeyPress = (e) => { 
        const keyPressed = e.key; 
        if (keyPressed === "Enter" ) {
            handleClear(); 

        }
    }

    const handleAdd = () => { 
        console.log("here!");
        return <Link to="/companies/new" state={search} />
    }

    const handleClear = () => { 
        setDataFilter([]);
        setSearch('')
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
                        onKeyDown={handleKeyPress}
                        /> 
                    <div className="searchIcon">
                        { search.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            dataFilter.length === 0 ? (    
                                <AddIcon id="cursorPointer" />     
                            ) : (
                                <CloseIcon id="cursorPointer" onClick={handleClear} />    
                            )
                        )}
                    </div>    
                    { search.length >= 3 && dataFilter.length != 0 && (           
                    <div className="dataResult">
                        {dataFilter.map((value, key) => {
                            return <a key={value.id} 
                                      href="#" 
                                      className='dataItem' 
                                      onClick={() => handleSelected(value)}
                                    >
                                        <p >{value.Name}</p>
                                    </a>
                        })}
                    </div>
                )}
                </div>
            </div>
        </aside>
    </div>
  )
}

export default AutofillSearch
