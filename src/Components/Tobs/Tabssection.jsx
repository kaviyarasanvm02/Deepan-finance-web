import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Tabcontentbox from './Tabcontentbox';
import Accordion from 'react-bootstrap/Accordion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;       
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Tab labels and content grouped together
const tabData = [
  {
    label: "Who We Serve",
    content: [
      { title: "Expert Financial Advisors",
         description: "Comprehensive wealth management services for individuals and businesses" },
      { title: "Tailored Investment Solutions",
         description: "Personalized investment strategies for maximizing returns and minimizing risks." },
      { title: "Secure and Transparent Processes", 
        description: "Long-term financial planning for life goals like education, retirement, or property investments." },
        { title: "24/7 Customer Support",
          description: "Solutions for mergers, acquisitions, and corporate financial restructuring" },
       { title: "Innovation",
          description: "Comply to regulations, expand market access, enhance medical affairs experience and drive productivity of pharmacovigilance operations" },
       { title: "Innovation", 
         description: "Recruit patients for trials, manage operations and make the most of Real-World Data and Evidence (RWD, RWE)" },
    ],
  },
  {
    label: "What We Do",
    content: [
      { title: "Omnichannel Activation Solutions", description: "Grow revenue, enhance customer experience and augment teams with a modern go-to-market model" },
      { title: "Generative AI-Powered Commercialization", description: "Accelerate impact and build trust with deep industry context" },
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
    ],
  },
  {
    label: "How We Deliver",
    content: [
      { title: "Generative AI-Powered Commercialization", description: "Accelerate impact and build trust with deep industry context" },
      { title: "Omnichannel Activation Solutions", description: "Grow revenue, enhance customer experience and augment teams with a modern go-to-market model" },
    ],
  },
  {
    label: "How We Are Different",
    content: [
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
      { title: "Connected Commercial", description: "Transform commercial operations with an integrated ecosystem that accelerates decision-making, enhances engagement, and drives efficiency at scale" },
    ],
  },
];

export default function Tabscontent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Maindiv>
      <Container>
        <Largescreentabs>
          <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons="auto">
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  {...a11yProps(index)}
                  sx={{
                    border: '1px solid #013396',
                    padding: '10px 30px',
                    margin: '0 10px',
                    color: "#013396",
                    backgroundColor: 'transparent',
                    fontSize: "20px",
                    fontWeight: "800",
                    transition: "all 0.5s ease-in-out",
                    '&:hover': {
                      backgroundColor: '#013396',
                      color: "#fff",
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#013396',
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
                      <Tabcontentbox title={item.title} description={item.description} />
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
                        <Tabcontentbox title={item.title} description={item.description} />
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
  background-color: #f7f7f7;
  
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
