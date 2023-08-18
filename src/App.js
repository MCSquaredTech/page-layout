
import React, { useState, useEffect } from "react";

import { Routes, Route } from 'react-router-dom';

import { CompanyDataSourceAPI } from './DataSourceAPI/CompanyDataSource';

import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import PersonDetail from "./pages/PersonDetail";
import PageLayout from "./pages/PageLayout";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import NewCompany from "./pages/NewCompany";

import './style.css';



function App() {
  const [ companies, setCompanies  ] = useState([]);
  const [ value, setValue ] = useState('');


  const getCompanyData = async () => { 
    setCompanies(await CompanyDataSourceAPI.getCompany());
  }

  const handleSelected = (company) => { 
    // Do Something
  }

  const handleChange = (e) => { 
    setValue(e.target.value());
  } 

  useEffect(() =>{ 
    // Companies DataSource - 
    getCompanyData();  
  },[]);
  
  return (
    <>
      {console.log(companies)}
      <Routes>
        <Route element={<PageLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" 
                 element={<Companies
                    placeholder={"Company Search..."}
                    data={companies}
                    onChange={handleChange}
                        />}  />
          <Route path="/companies/new" 
                  element={<NewCompany />} />                                     
              
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
