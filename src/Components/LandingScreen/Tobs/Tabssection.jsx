import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Tabcontentbox from "./Tabcontentbox";
import Accordion from "react-bootstrap/Accordion";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Tab labels and content grouped together
const tabData = [
  {
    label: "Who We Serve",
    content: [
      {
        title: "Investment Consultancy",
        description:
          "Comprehensive wealth management services for individuals and businesses",
      },
      {
        title: "Equities",
        description:
          "Short Term Less than 1 year,Medium Term 1 to 5 years,Long Term above 5 years",
      },
      {
        title: "Our team",
        description:
          "Our team suggest Right stocks @ Right price @ Right time to optimise return on investments including multi bagger which delivers 500% + returns",
      },
      {
        title: "Mutual funds",
        description:
          "Investing every month on chosen funds direct from auto debit from our bank",
      },
      {
        title: "Lumpsum",
        description:
          "One time Investment any time when we have surplus funds ,Systematic Withdraw Plan (SWP)",
      },
      {
        title: "Our Team assists",
        description:
          "RBI Treasury Bills 90 days /180 days / 364 days @ 6.3% p.a,Corporate Bonds from 8% to 10.5% p.a",
      },
    ],
  },
  {
    label: "What We Do",
    content: [
      {
        title: "Full time career opportunities",
        description: "Swing Trading, Day trading & Option strategies",
      },
      {
        title: "Second Income opportunities",
        description: "Swing Trading, Day trading & Option strategies",
      },
      {
        title: "Algo Trading Solutions",
        description: "Semi & Fully automated trading systems",
      },
    ],
  },
  {
    label: "How We Deliver",
    content: [
      {
        title: "Training",
        description:
          "Accelerate impact and build trust with deep industry context",
      },
      {
        title: "Choosing Right stock list",
        description: "Accelerate impact and build trust with Money",
      },
      {
        title: "Value investing for Wealth ",
        description:
          "Grow revenue, enhance customer experience and augment teams with a modern go-to-market model",
      },
    ],
  },
  {
    label: "How We Are Different",
    content: [
      {
        title: "Zero Office Expense",
        description:
          "No overhead costs—start earning without the need for physical office space.",
      },
      {
        title: "High Revenue Sharing",
        description:
          "Maximize your profits with our competitive and rewarding revenue-sharing model.",
      },
      {
        title: "Dedicated Training",
        description:
          "We ensure your success with tailored training and full support from industry experts.",
      },
      {
        title: "Marketing & Branding Support",
        description:
          "Amplify your reach with our proven marketing strategies and brand resources to boost your visibility.",
      },
    ],
  },
];

export default function Tabscontent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Maindiv image={backImage}>
      <Container>
        <Largescreentabs>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  {...a11yProps(index)}
                  sx={{
                    border: "1px solid #23395d;",
                    padding: "10px 30px",
                    margin: "0 10px",
                    color: " #23395d;",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                    fontWeight: "800",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      backgroundColor: " #23395d;",
                      color: "#fff",
                    },
                    "&.Mui-selected": {
                      backgroundColor: " #23395d;",
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Tabs>

            {tabData.map((tab, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <Row>
                  {tab.content?.map((item, idx) => (
                    <Col key={idx} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          padding: "10px",
                          // backgroundImage:
                          //   "linear-gradient(to right, white, #23395d)",
                          backgroundColor: "#23395d",
                          margin: "10px",
                          color: "white",
                          borderRadius:"0px 50px",
                          ":hover": {
                            border: "10px solid #23395d",
                            backgroundColor: "white",
                            color: "#23395d",
                          },
                        }}
                      >
                        <Tabcontentbox
                          title={item.title}
                          description={item.description}
                        />
                      </Box>
                    </Col>
                  ))}
                </Row>
              </CustomTabPanel>
            ))}
          </Box>
        </Largescreentabs>

        <Smallscreentabs>
          <Accordion defaultActiveKey="0">
            {tabData.map((tab, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{tab.label}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {tab.content?.map((item, idx) => (
                      <Col key={idx} sm={12} xs={12}>
                        <Box
                          sx={{
                            padding: "10px",
                            // backgroundImage:
                            // "linear-gradient(to left, white, #23395d)",
                            backgroundColor: "#23395d",
                            margin: "10px",
                            color: "white",
                            borderRadius:"0px 50px",
                            ":hover": {
                              border: "10px solid #23395d",
                              backgroundColor: "white",
                              color: "#23395d",
                            },
                          }}
                        >
                          <Tabcontentbox
                            title={item.title}
                            description={item.description}
                          />
                        </Box>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Smallscreentabs>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  padding: 85px 0;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const Largescreentabs = styled.div`
  display: block;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Smallscreentabs = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
