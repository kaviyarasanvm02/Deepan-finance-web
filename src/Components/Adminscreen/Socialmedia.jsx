import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, Grid } from "@mui/material";
import { instance } from "../../utils/api";

export default function Socialmedia() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    subTitle: "",
    description: "",
    url: null,
  });

  const [imageFile, setImageFile] = useState(null);
  const [socialData, setSocialData] = useState(null);

  const getSocialData = async () => {
    try {
      const response = await instance.get(`/landing/admin/CaseStudy`);
      if (response.status === 200 && response.data.length > 0) {
        setSocialData(response.data[0]);
        setFormData(response.data[0]);
      } else {
        setSocialData(null);
      }
    } catch (error) {
      console.error("Error fetching social data:", error);
    }
  };

  // Create new slider data
  const createSocialMedia = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      data.append("url", formData.url);
      if (imageFile) data.append("image", imageFile);

      await instance.post(`/landing/admin/CaseStudy`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await getSocialData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error creating socialMedia:", error);
      setFailureOpen(true);
    }
  };

  const updateSocialMedia = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      data.append("description", formData.description);
      data.append("url", formData.url);
  
      // Add the existing image URL or the new image file if available
      if (imageFile) {
        data.append("image", imageFile);
      } else if (socialData?.image) {
        data.append("image", socialData.image); // Include the existing image from `socialData`
      }
  
      const response = await instance.put(`/landing/admin/CaseStudy/1`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 200) {
        await getSocialData();
        setSuccessOpen(true);
      } else {
        setFailureOpen(true);
      }
    } catch (error) {
      console.error("Error updating social:", error);
      setFailureOpen(true);
    }
  };
  

  const handleSubmit = (e) => {
    if (socialData) {
      updateSocialMedia(e);
    } else {
      createSocialMedia(e);
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

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
                  label="Enter Subtitle"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter Describtion"
                  name="description"
                  value={formData.description}
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
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className="my-3"
                  fullWidth
                  label="Enter Yutube Link"
                  name="url"
                  type="url"
                  value={formData.url}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" className="my-5">
              <Grid item>
                <SubmitButton type="submit">
                  {socialData ? "Update" : "Create"}
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
        message="Form submission failed. Please fill all required fields."
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
