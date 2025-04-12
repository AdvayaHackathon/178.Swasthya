import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import bckgrd from "../layout/bckgrd.jpg";
import { Grid } from "@mui/material";
import "../../styles/HomeStyles.css";
import SpaIcon from "@mui/icons-material/Spa";
import Diseases from "./Diseases";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Home = () => {
  return (
    <Layout>
      <Grid>
        <div className="home" style={{ backgroundImage: `url(${bckgrd})` }}>
          {/* Overlay for better text visibility */}
          <div className="overlay"></div>

          {/* Ayurveda Label */}
          <div className="corner-text left hover-card">
            <SpaIcon className="icon" />
            <div>
              <strong>Ayurveda</strong>
              <p className="small-text">Ancient healing through herbs & lifestyle</p>
            </div>
          </div>

          {/* Allopathy Label */}
          <div className="corner-text right hover-card">
            <div>
              <strong>Allopathy</strong>
              <p className="small-text">Modern science for instant diagnosis</p>
            </div>
            <LocalHospitalIcon className="icon" />
          </div>

          {/* Center Box */}
          <div className="glassBox fade-in">
            <h1 className="title">Health Care</h1>
            <h2 className="tagline">
              MediBridge: Bridging Ayurveda and Allopathy <br />
              for Integrated Wellness
            </h2>
            <p className="subtitle">Empowering patients with holistic diagnosing solutions</p>
            <Link to="/diseases">
              <button className="actionBtn hover-scale">Search Your Disease</button>
            </Link>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default Home;
