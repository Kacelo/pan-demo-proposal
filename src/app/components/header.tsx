import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function HeaderLandingPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 500, // Set the height of the container
          padding: 0,
        }}
      >
        <Image
          src="/images/1.jpg"
          layout="fill" // Fill the entire container
          objectFit="cover"
          alt="header image"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            color: "white",
          }}
        >
          <Stack spacing={2}>
            <Container maxWidth="xl">
              <Typography variant="h2" align="left">
                Welcome to PAN
              </Typography>
            </Container>

            <br></br>
            <Container maxWidth="sm">
              <Typography align="left">
                Welcome to the Payments Association of Namibia (PAN), the
                principal self-regulatory body for the Namibian payment
                industry. As a medium for payments industry collaboration, we
                promote a co-operative environment to drive payment system
                policy development and self-regulation. Our duty is to protect
                the safety and reliability of the payment system and to ensure
                that it conforms to international standards and best practices.
              </Typography>
            </Container>
            <Container>
              <Button
                variant="outlined"
                style={{ borderColor: "white", color: "white" }}
              >
                Become a member
              </Button>
            </Container>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
