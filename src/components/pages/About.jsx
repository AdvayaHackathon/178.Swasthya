import Layout from "../layout/Layout";
import { Grid } from "@mui/material";
import bckgrd from "../layout/bckgrd.jpg";
import SpaIcon from "@mui/icons-material/Spa";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import "../../styles/AboutStyles.css";

const About = () => {
  return (
    <Layout>
      <Grid>
        <div className="about" style={{ backgroundImage: `url(${bckgrd})` }}>
          <div className="overlay"></div>

          <div className="about-content glassBox fade-in">
            <h1 className="title">About MediBridge</h1>
            <p className="about-text">
              At <strong>MediBridge</strong>, we believe in the synergy of traditional and modern medicine. Our platform seamlessly integrates
              <strong> Ayurveda</strong> and <strong>Allopathy</strong> to offer patients a holistic approach to health and wellness.
            </p>

            <div className="icon-section">
              <div className="info-card hover-card">
                <SpaIcon className="icon" />
                <h3>Ayurveda</h3>
                <p>Embrace centuries-old wisdom using herbs, diet, and yoga for natural healing.</p>
              </div>

              <div className="info-card hover-card">
                <LocalHospitalIcon className="icon" />
                <h3>Allopathy</h3>
                <p>Utilize evidence-based modern diagnostics and treatment for fast and effective recovery.</p>
              </div>
            </div>

            <p className="about-footer">
              Our mission is to empower individuals with personalized, comprehensive healthcare options under one digital roof.
            </p>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default About;
