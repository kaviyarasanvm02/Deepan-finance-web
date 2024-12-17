import React from 'react';
import styled from 'styled-components';
import { TextField, TextareaAutosize, Grid, Button } from '@mui/material';

export default function Cardss() {
    const [formData, setFormData] = React.useState({
        subtitle: '',
        title: '',
        para: '',
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
        console.log('Form submitted:', formData);
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
                     label="Enter Subtitle"
                     name="subtitle"
                     value={formData.subtitle}
                     onChange={handleFormChange}
                     required
                   />
                  </Grid>
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
       </AdminContentPart>
  )
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 15px;
  height: 600px;
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
    background-color: #0056b3;
  }
`;
