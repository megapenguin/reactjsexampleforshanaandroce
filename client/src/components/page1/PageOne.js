import React from 'react'
import { Link, withRouter } from "react-router-dom";
import {
   
    Button,
    
  } from "antd";

function PageOne() {
    return (
        <div>
            <h1>Page One</h1>
                <Link to="/pagetwo"><Button type="primary">Page Two</Button></Link>
                <Link to="/admin"><Button type="primary">Admin</Button></Link>
        </div>
    )
}

export default PageOne 
