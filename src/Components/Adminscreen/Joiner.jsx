import React, { useState } from 'react';
import SuccessPopup from './Successpop';
import FailurePopup from './Failurepop';
import styled from 'styled-components';
import { TextField, Grid,  } from '@mui/material';

export default function Joiner() {
        const [successOpen, setSuccessOpen] = useState(false);
        const [failureOpen, setFailureOpen] = useState(false);
    const [formData, setFormData] = React.useState({
        title: '',
        btn1:" ",
        btn2:" ",
        image: null,
      });
    
      const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
          ...prev,
          image: file,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { title,  btn1,  btn2 ,image} = formData;
    
        if (title &&  btn1 &&  btn2 && image ) {
          console.log('Form submitted successfully:', formData);
          setSuccessOpen(true); // Show success popup
        } else {
          console.log('Form submission failed: Missing fields');
          setFailureOpen(true); // Show failure popup
        }
      };
    
      // Close popups
      const handleClose = () => {
        setSuccessOpen(false);
        setFailureOpen(false);
      };
    
  return (
   <AdminContentPart>
         <Grid container spacing={3}>
           <Grid item xs={12}>
             <form onSubmit={handleSubmit}>
               <Grid container spacing={2}>
               <Grid item md={12} xs={12}>
                   <TextField
                     className="my-3"
                     fullWidth
                     label="Enter Title"
                     name="title"
                     value={formData.title}
                     onChange={handleFormChange}
                     required
                   />
                     </Grid>
                 <Grid item md={12} xs={12}>
                   <TextField
                     className="my-3"
                     fullWidth
                     label="Enter First Button Name"
                     name="btn1"
                     value={formData.subtitle}
                     onChange={handleFormChange}
                     required
                   />
                  </Grid>
                  <Grid item md={12} xs={12}>
                   <TextField
                     className="my-3"
                     fullWidth
                     label="Enter Second Button Name"
                     name="btn2"
                     value={formData.subtitle}
                     onChange={handleFormChange}
                     required
                   />
                  </Grid>
                   
                 <Grid item md={12} xs={12}>
                   <TextField
                     className="my-3"
                     fullWidth
                     name="image"
                     type="file"
                     onChange={handleImageChange}
                     required
                   />
                 </Grid>
               </Grid>
               <Grid container justifyContent="flex-start" className="my-5">
                 <Grid item>
                   <SubmitButton type="submit">Update</SubmitButton>
                 </Grid>
               </Grid>
             </form>
           </Grid>
         </Grid>
              {/* Success and Failure Popups */}
      <SuccessPopup
        open={successOpen}
        message="Form submitted successfully!"
        onClose={handleClose}
      />
      <FailurePopup
        open={failureOpen}
        message="Form submission failed. Please fill all required fields."
        onClose={handleClose}
      />
       </AdminContentPart>
  )
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 15px;
`;
const SubmitButton = styled.button`
color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 10px 10px;
    border: 1px solid;
    margin: 10px 15px;
    text-align: center;
    width: 10rem;
    cursor: pointer;
    background:rgb(225, 35, 35);
    transition: all 0.5s ease-in-out;

  &:hover {
     background-color: #013396;
  }
`;
