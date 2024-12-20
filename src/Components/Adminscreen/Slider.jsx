import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField, TextareaAutosize, Grid } from '@mui/material';
import SuccessPopup from './Successpop';
import FailurePopup from './Failurepop';
import { instance } from '../../utils/api';

export default function Slider() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    description: '',
    button_name: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [sliderData, setSliderData] = useState(null); 

 
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };


  const getHeader = async () => {
    try {
      const response = await instance.get(`/landing/admin/Header`);
      if (response.status === 200 && response.data.length > 0) {
        setSliderData(response.data[0]); 
        setFormData(response.data[0]); 
      } else {
        setSliderData(null); 
      }
    } catch (error) {
      console.error('Error fetching header data:', error);
    }
  };

  // Create new slider data
  const createHeader = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('subTitle', formData.subTitle);
      data.append('description', formData.description);
      data.append('button_name', formData.button_name);
      if (imageFile) data.append('images', imageFile);

      await instance.post(`/landing/admin/Header`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      await getHeader(); 
      setSuccessOpen(true);
    } catch (error) {
      console.error('Error creating header:', error);
      setFailureOpen(true);
    }
  };


  const updateHeader = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('subTitle', formData.subTitle);
      data.append('description', formData.description);
      data.append('button_name', formData.button_name);
      if (imageFile) data.append('images', imageFile);

      await instance.put(`/landing/admin/Header/1`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      await getHeader(); 
      setSuccessOpen(true);
    } catch (error) {
      console.error('Error updating header:', error);
      setFailureOpen(true);
    }
  };

  const handleSubmit = (e) => {
    if (sliderData) {
      updateHeader(e);
    } else {
      createHeader(e);
    }
  };

  useEffect(() => {
    getHeader();
  }, []);

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
                  label="Enter Subtitle"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextareaAutosize
                  className="my-3"
                  minRows={6}
                  placeholder="Enter Description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    background: '#f3f3f3',
                  }}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter Button Name"
                  name="button_name"
                  value={formData.button_name}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  name="images"
                  type="file"
                  onChange={handleImageChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" className="my-5">
              <Grid item>
                <SubmitButton type="submit">
                  {sliderData ? 'Update' : 'Create'}
                </SubmitButton>
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
        message="Form submission failed. Please try again."
        onClose={handleClose}
      />
    </AdminContentPart>
  );
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
  background: rgb(225, 35, 35);
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #013396;
  }
`;
