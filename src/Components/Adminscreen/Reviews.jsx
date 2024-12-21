import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextareaAutosize, Grid, TextField } from "@mui/material";
import { instance } from "../../utils/api";

export default function Reviews() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
  });
    const [tempAboutData, setTempAboutData] = useState([]);
  

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createReviewData = async () => {
    try {
      await instance.post(`/landing/admin/Reviews`, {
        title: formData.title,
        subTitle: formData.subTitle,
        description: formData.description,
      });
      await getReviewData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error updating review:", error);
      setFailureOpen(true);
    }
  };

  const updateReviewData = async (e) => {
    try {
      await instance.put(`/landing/admin/Reviews/1`, {
        title: formData.title,
        subTitle: formData.subTitle,
        description: formData.description,
      });
      await getReviewData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error updating review:", error);
      setFailureOpen(true);
    }
  };
  const getReviewData = async () => {
    try {
      const response = await instance.get(`/landing/admin/Reviews`);
      if (response.status === 200) {
        setFormData(
          response.data[0] || { title: "", subTitle: "", description: "" }
        );
        setTempAboutData(response.data);
      }
    } catch (error) {
      console.error("Error fetching review data:", error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  // Close popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };

  return (
    <AdminContentPart>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <TextareaAutosize
                className="my-3"
                minRows={6}
                placeholder="Enter Review"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#f3f3f3",
                }}
              />
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              className="my-3"
              placeholder="Enter CustomerName"
              name="subTitle"
              fullWidth
              value={formData.subTitle}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              className="my-3"
              placeholder="Enter CustomerDatails"
              name="description"
              fullWidth
              value={formData.description}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid container justifyContent="flex-start" className="my-5">
            <Grid item>
              {formData.title === "" && formData.subTitle === "" && formData.description === "" ? (
                <SubmitButton type="submit" onClick={createReviewData}>
                  Create
                </SubmitButton>
              ) : (
                <SubmitButton type="submit" onClick={updateReviewData}>
                  Update
                </SubmitButton>
              )}
            </Grid>
          </Grid>
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
