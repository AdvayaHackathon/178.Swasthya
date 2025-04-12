import React from "react";
import Layout from "../layout/Layout";
import { Grid, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import bckgrd from "../layout/bckgrd.jpg";
import "../../styles/HomeStyles.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
      e.target,
      "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );

    e.target.reset(); // Clear form
  };

  return (
    <Layout>
      <Grid>
        <div className="contact-page" style={{ backgroundImage: `url(${bckgrd})` }}>
          <div className="overlay"></div>

          <div className="contact-box glassBox fade-in">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">We’d love to hear from you. Feel free to reach out with questions or feedback!</p>
            <form className="contact-form" onSubmit={sendEmail}>
              <TextField name="name" label="Full Name" variant="outlined" fullWidth margin="normal" required />
              <TextField name="email" label="Email" type="email" variant="outlined" fullWidth margin="normal" required />
              <TextField name="message" label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} required />
              <Button variant="contained" color="primary" type="submit" className="submitBtn">Send Message</Button>
            </form>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default Contact;
