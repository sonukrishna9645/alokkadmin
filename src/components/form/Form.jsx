import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'


const Form = () => {
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      
      console.log('Admin ID:', adminId);
      console.log('Password:', password);
    };
  

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <br />
        <h1>E-LEARNING PLATFORM</h1>
        <br />
        <br />
        <TextField
          className='textfield'
          id="outlined-basic"
          label="Admin ID"
          variant="outlined"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" className='button' variant="contained">
          Login
        </Button>
      </form>

    </div>
  )
}

export default Form
