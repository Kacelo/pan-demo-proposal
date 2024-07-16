// components/WhatsNew.js
import * as React from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Image from "next/image";

const ImageWithOverlay = ({ src, alt, title }: any) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingBottom: "56.25%",
    }}
  >
    <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "",
        alignItems: "center",
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <Container style={{ justifyContent: "left", marginTop: "20px" }}>
        <Typography variant="h6" align="left">
          {title}
        </Typography>
      </Container>
      <Container style={{ marginTop: "auto", marginBottom: "20px" }}>
        <Button
          variant="outlined"
          style={{ borderColor: "white", color: "white" }}
          sx={{ mt: 2 }}
        >
          View More
        </Button>
      </Container>
    </Box>
  </Box>
);

const WhatsNew = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="left" gutterBottom color={"black"}>
        What&rsquo;s New?{" "}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ImageWithOverlay
            src="/images/eft.webp" // Replace with your large image path
            alt="large article image"
            title="Adoption Of The Nampay System"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ImageWithOverlay
                src="/images/card.webp" // Replace with your large image path
                alt="small article image 1"
                title="Replacement Of Current Eft System"
              />
            </Grid>
            <Grid item xs={6}>
              <ImageWithOverlay
                src="/images/cheque.webp" // Replace with your large image path
                alt="small article image 2"
                title="Phasing Out Of Cheque By 30Th June 2019"
              />
            </Grid>
            <Grid item xs={6}>
              <ImageWithOverlay
                src="/images/eft.webp" // Replace with your large image path
                alt="small article image 3"
                title="Nampay - A Namibian Payment Revolution On The Horizon"
              />
            </Grid>
            <Grid item xs={6}>
              <ImageWithOverlay
                src="/images/Cybersecurity.png" // Replace with your large image path
                alt="small article image 4"
                title="Fraudulent Proof Of Payments Scam"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatsNew;
