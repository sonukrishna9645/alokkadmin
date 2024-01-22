import { Button, TextField } from '@mui/material'
import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'


const Admin = () => {
  return (
    <div>
       <Link to="/cmanage">Go to Course Management</Link>
        <br></br>
      <h1>E-LEARNING PLATFORM</h1>
      <br></br>
      <br></br>
      <TextField className='textfield' id="outlined-basic" label="Adminid" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br></br>
      <br></br>
      <Button className='button' variant="contained">Login</Button>
    </div>
  )
}

export default Admin
