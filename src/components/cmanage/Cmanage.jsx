import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react'
import './Cmanage.css';

const Cmanage = () => {
    const initialCourses = [
        { id: 1, name: 'Introduction to React', instructor: 'Abhijith' },
        { id: 2, name: 'JavaScript Fundamentals', instructor: 'Sonu' },
      ];
    
      const [courses, setCourses] = useState(initialCourses);
      const [newCourse, setNewCourse] = useState({ id: '', name: '', instructor: '' });
      const [editingCourse, setEditingCourse] = useState(null);


      const handleAddCourse = () => {
        if (editingCourse) {
          
          const updatedCourses = courses.map(course =>
            course.id === editingCourse.id ? { ...newCourse, id: editingCourse.id } : course
          );
          setCourses(updatedCourses);
          setEditingCourse(null);
        } else {
          
          setCourses([...courses, newCourse]);
        }
    
        
        setNewCourse({ id: '', name: '', instructor: '' });
      };
    
      const handleEditCourse = (courseId) => {
        const courseToEdit = courses.find(course => course.id === courseId);
        setEditingCourse(courseToEdit);
        setNewCourse(courseToEdit);
      };

    
      const handleDeleteCourse = (courseId) => {
        const updatedCourses = courses.filter(course => course.id !== courseId);
        setCourses(updatedCourses);
      };
    

  return (
    <div>
<h2>Add New Course</h2>
      <TextField
        label="Course ID"
        variant="outlined"
        value={newCourse.id}
        onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
      />
      <TextField
        label="Course Name"
        variant="outlined"
        value={newCourse.name}
        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
      />
      <TextField
        label="Instructor"
        variant="outlined"
        value={newCourse.instructor}
        onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
      />
<br></br>
<br></br>

      <Button onClick={handleAddCourse} variant="contained" color="primary">
        Add Course
      </Button>
      <br></br>
      <br></br>

      <h3>Course Management</h3>
      <TableContainer component={Paper} className="table-container" style={{ maxWidth: '700px' }}     >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell style={{width :'10%'}}>Course ID</TableCell>
              <TableCell style={{width :'30%'}}>Course Name</TableCell>
              <TableCell style={{width :'30%'}}>Instructor</TableCell>
              <TableCell style={{width :'15%'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map(course => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>
                <Button onClick={() => handleEditCourse(course.id)} variant="outlined" color="primary">
                    Edit
                  </Button>

                  <Button onClick={() => handleDeleteCourse(course.id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      
    </div>
  )
}

export default Cmanage
