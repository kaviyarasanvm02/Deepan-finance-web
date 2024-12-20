import React, { useEffect, useState } from "react";
import SuccessPopup from "./Successpop";
import FailurePopup from "./Failurepop";
import styled from "styled-components";
import { TextField, TextareaAutosize, Grid, Button } from "@mui/material";
import { instance } from "../../utils/api";

export default function Aboutss() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [aboutData, setAboutData] = useState({ title: "", description: "" });

  // const [tempAboutData, setTempAboutData] = useState([]);
  // console.log(tempAboutData);
  console.log("aboutData", aboutData);

  const createAboutData = async () => {
    try {
      await instance.post(`/landing/admin/About`, {
        title: aboutData.title,
        description: aboutData.description,
      });
      await getAboutData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error updating about:", error);
      setFailureOpen(true);
    }
  };

  const updateAboutData = async (e) => {
    try {
      await instance.put(`/landing/admin/About/1`, {
        title: aboutData.title,
        description: aboutData.description,
      });
      await getAboutData();
      setSuccessOpen(true);
    } catch (error) {
      console.error("Error updating about:", error);
      setFailureOpen(true);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Close popups
  const handleClose = () => {
    setSuccessOpen(false);
    setFailureOpen(false);
  };
  const getAboutData = async () => {
    try {
      const response = await instance.get(`/landing/admin/About`);
      if (response.status === 200) {
        setAboutData(response.data[0] || { title: "", description: "" });
        // setTempAboutData(response.data);
      }
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <AdminContentPart>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <TextField
                className="my-3"
                fullWidth
                label="Enter Title"
                name="title"
                value={aboutData.title}
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
                value={aboutData.description}
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
          <Grid container justifyContent="flex-start" className="my-5">
            <Grid item>
              {aboutData.title === "" && aboutData.description === "" ? (
                <SubmitButton type="submit" onClick={createAboutData}>
                  Create
                </SubmitButton>
              ) : (
                <SubmitButton type="submit" onClick={updateAboutData}>
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
    background-color: #0056b3;
  }
`;
