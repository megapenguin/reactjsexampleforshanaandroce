import React from 'react'
import { Link, withRouter } from "react-router-dom";
import {
   
    Button,
    
  } from "antd";
function PageTwo() {
    return (
        <div>
            <h1>Page Two</h1>
            <Link to="/pageone"><Button type="primary">Page One</Button></Link>
            <Link to="/admin"><Button type="primary">Admin</Button></Link>
        </div>
    )
}

export default PageTwo
