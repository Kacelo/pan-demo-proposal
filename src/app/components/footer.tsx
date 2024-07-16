// components/Footer.js
import * as React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Container style={{ maxWidth: "100%", padding:0 }}>
      <Box sx={{ backgroundColor: "#4F4C4C", color: "#BBBA68", p: 5, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Company Info
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              OUR HISTORY
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              CORPORATE THEMES
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              LIST OF CURRENT MEMBERS
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              LIST OF CURRENT SERVICE PROVIDERS
            </Link>
            <br />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              NPS Vision
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              BACKGROUND
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              NPS DOCUMENT 2021-2025
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              PAN Structure
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              OUR CONSTITUTION
            </Link>
            <br />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              PAN Management
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              PAN MANAGEMENT COUNCIL
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              PAN EXECUTIVE OFFICE
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              OUR CONSTITUTION
            </Link>
           
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              4th Floor, Ikon Building,
              <br />
              144 Jan Jonker Avenue, Ausspannplatz, Windhoek
              <br />
              Tel. No.: (+264 61) 415 420
              <br />
              Fax No.: (+264 61) 415 430
              <br />
              P.O. Box 134, Windhoek, Namibia
            </Typography>
          </Grid>
        </Grid>
        <Container >
            <Typography textAlign="center" sx= {{py:3}}>
            © Copyright 2024 The Payments Association of Namibia. All Rights Reserved.
            </Typography>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;
