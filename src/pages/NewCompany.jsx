import React from "react";
import { useLocation } from "react-router-dom";


const NewCompany = ({data}) => {
  const loc = useLocation();
  const CompanyName = loc.state 

  return (
    <div>
      Create the New Company {CompanyName}
    </div>
  );
};
export default NewCompany;