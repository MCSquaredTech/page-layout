import React, { useState } from "react";

import { Routes, Route } from 'react-router-dom';

import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";
import PersonCard from "./pages/PersonCard";
import PersonDetail from "./pages/PersonDetail";
import PageLayout from "./pages/PageLayout";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";

import './style.css'



function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
