import React, { useState } from 'react';
import SuccessPopup from './Successpop';
import FailurePopup from './Failurepop';
import styled from 'styled-components';
import {  TextareaAutosize, Grid,  } from '@mui/material';

export default function Reviews() {
        const [successOpen, setSuccessOpen] = useState(false);
        const [failureOpen, setFailureOpen] = useState(false);
    const [formData, setFormData] = React.useState({
        para: '',
      });
    
      const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { title, subtitle, para, image } = formData;
    
        if (  para ) {
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
                   <TextareaAutosize
                     className="my-3"
                     minRows={6}
                     placeholder="Enter Paragraph"
                     name="para"
                     value={formData.para}
                     onChange={handleFormChange}
                     style={{
                       width: '100%',
                       padding: '10px',
                       fontSize: '16px',
                       border: '1px solid #ccc',
                       borderRadius: '4px',
                       background: "#f3f3f3",
                     }}
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
