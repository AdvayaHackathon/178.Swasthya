import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Grid,
  Typography,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "../../styles/DiseaseStyles.css";
import bckgrd from "../layout/bckgrd.jpg";

// Doctor Directory
const doctorDirectory = {
  Hyderabad: {
    ayush: [
      { name: "Dr. Asha Sharma", specialization: "Ayurveda", contact: "9876543210", clinic: "Herbal Wellness Center" },
      { name: "Dr. Ravi Kumar", specialization: "Homeopathy", contact: "9871234567", clinic: "Ayush Care" }
    ],
    allopathy: [
      { name: "Dr. Meera Jain", specialization: "Dermatologist", contact: "9812345678", clinic: "City Hospital" },
      { name: "Dr. Anil Reddy", specialization: "Physician", contact: "9845678901", clinic: "Apollo Clinic" }
    ]
  },
  Bangalore: {
    ayush: [
      { name: "Dr. Rekha", specialization: "Ayurveda", contact: "9888777666", clinic: "Ayurveda Bliss" }
    ],
    allopathy: [
      { name: "Dr. Karthik", specialization: "Cardiologist", contact: "9811112233", clinic: "Fortis" }
    ]
  }
};

// Symptom library
const symptomLibrary = {
  respiratory: ["fever", "cough", "shortness of breath"],
  digestive: ["stomach pain", "diarrhea", "nausea", "constipation"],
  skin: ["itching", "rash", "dandruff"],
  urinary: ["burning sensation", "frequent urination"],
  neurological: ["headache", "sensitivity to light", "back pain"],
  general: ["fatigue", "joint pain", "weight loss", "chills", "calcium deficiency"],
  ENT: ["throat pain", "ear pain", "nosebleeds", "sorethroat"]
};

// Disease database
const diseaseDatabase = [
  { name: "Common Cold", symptoms: ["fever", "cough", "runny nose", "sneezing"], ayurveda: "Tulsi tea, turmeric milk, steam inhalation with eucalyptus oil.", allopathy: "Antihistamines, paracetamol, decongestants." },
  { name: "Flu", symptoms: ["fever", "cough", "headache"], ayurveda: "Giloy juice, warm kadha, rest, ginger tea.", allopathy: "Antiviral medication, paracetamol, hydration, rest." },
  { name: "Dengue", symptoms: ["fatigue", "joint pain"], ayurveda: "Papaya leaf juice, Giloy, coconut water.", allopathy: "Paracetamol, fluids, hospital care if severe." },
  { name: "Hypothyroidism", symptoms: ["fatigue", "weight loss", "joint pain"], ayurveda: "Ashwagandha, Guggul, iodine-rich foods.", allopathy: "Levothyroxine, regular thyroid monitoring." },
  { name: "Anemia", symptoms: ["fatigue", "chills", "weight loss"], ayurveda: "Beetroot juice, sesame seeds, pomegranate, jaggery.", allopathy: "Iron supplements, folic acid, vitamin B12 injections, diet changes." },
  { name: "Rheumatoid Arthritis", symptoms: ["joint pain", "calcium deficiency"], ayurveda: "Dashmool decoction, turmeric, castor oil massage, yoga.", allopathy: "NSAIDs, DMARDs like methotrexate, corticosteroids, physical therapy." },
  { name: "COVID-19", symptoms: ["fever", "cough", "shortness of breath"], ayurveda: "Ashwagandha, Guduchi, steam inhalation, Chyawanprash.", allopathy: "Antiviral drugs, oxygen support, symptomatic treatment." },
  { name: "Food Poisoning", symptoms: ["stomach pain", "diarrhea"], ayurveda: "Buttermilk with ajwain, ginger tea, pomegranate juice.", allopathy: "ORS, antibiotics, probiotics, antiemetics." },
  { name: "UTI (Urinary Tract Infection)", symptoms: ["burning sensation", "frequent urination"], ayurveda: "Punarnava, coriander seed water, barley water.", allopathy: "Antibiotics like nitrofurantoin, pain relief meds, fluids." },
  { name: "Migraine", symptoms: ["headache", "sensitivity to light"], ayurveda: "Brahmi, Shankhpushpi, oil massage on scalp, yoga.", allopathy: "Pain relievers, triptans, anti-nausea medications." },
  { name: "Back Pain", symptoms: ["back pain", "joint pain"], ayurveda: "Kati basti therapy, yoga, castor oil massage, turmeric milk.", allopathy: "NSAIDs, muscle relaxants, physiotherapy, corticosteroid injections." },
  { name: "Psoriasis", symptoms: ["itching", "rash", "dandruff"], ayurveda: "Neem and turmeric paste, Panchakarma, aloe vera, coconut oil.", allopathy: "Topical corticosteroids, vitamin D analogues, immunosuppressants." },
  { name: "Pharyngitis / Tonsillitis", symptoms: ["sorethroat", "throat pain", "swollen lymph nodes"], allopathy: "Antibiotics, lozenges, warm saline gargles", ayurveda: "Yashtimadhu, Talisadi Churna, honey, warm water gargles" },
  { name: "Epistaxis", symptoms: ["nosebleeds"], allopathy: "Pinch nose, nasal packing, cautery, manage BP", ayurveda: "Draksha, Gulkand, cold water splash, Sandal paste on forehead" },
  { name: "Otitis Media (Ear infection)", symptoms: ["ear pain"], allopathy: "Antibiotics, ear drops, analgesics", ayurveda: "Karna Purana (medicated oil in ears), Dashamoola, Bala Taila" }
];

const Diseases = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedSymptoms([]);
    setPredictions([]);
  };

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const findDisease = () => {
    const matches = diseaseDatabase
      .map((disease) => {
        const matchCount = disease.symptoms.filter((s) =>
          selectedSymptoms.includes(s.toLowerCase())
        ).length;
        return { ...disease, matchCount };
      })
      .filter((d) => d.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 3);

    setPredictions(matches);
  };

  return (
    <Layout>
      <Grid>
        <div className="disease-page" style={{ backgroundImage: `url(${bckgrd})` }}>
          <div className="overlay"></div>
          <div className="disease-box glassBox fade-in">
            <Typography variant="h4" className="disease-title" align="center">
              Symptom-Based Disease Prediction
            </Typography>

            <Box mt={3}>
              <FormControl fullWidth>
                <InputLabel>Select City</InputLabel>
                <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  {Object.keys(doctorDirectory).map((city) => (
                    <MenuItem key={city} value={city}>{city}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={3}>
              <FormControl fullWidth>
                <InputLabel>Select Body Area</InputLabel>
                <Select value={selectedArea} onChange={handleAreaChange} label="Select Body Area">
                  <MenuItem value=""><em>None</em></MenuItem>
                  {Object.keys(symptomLibrary).map((area) => (
                    <MenuItem key={area} value={area}>
                      {area.charAt(0).toUpperCase() + area.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={3}>
              {selectedArea && (
                <>
                  <Typography variant="h6">Select Symptoms:</Typography>
                  {symptomLibrary[selectedArea].map((symptom) => (
                    <FormControlLabel
                      key={symptom}
                      control={
                        <Checkbox
                          checked={selectedSymptoms.includes(symptom)}
                          onChange={() => handleSymptomToggle(symptom)}
                        />
                      }
                      label={symptom}
                    />
                  ))}
                </>
              )}
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={findDisease}
              style={{ marginTop: "1rem" }}
              disabled={selectedSymptoms.length === 0}
            >
              Predict Disease
            </Button>

            <Box mt={4}>
              {predictions.length > 0 ? (
                predictions.map((d, index) => (
                  <Box
                    key={index}
                    className="prediction-results treatment-box"
                    p={2}
                    mb={2}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Typography variant="h5" color="primary">
                      {d.name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" mt={2} gap={3}>
                      <Box flex={1}>
                        <Typography variant="subtitle1" fontWeight="bold">Ayurveda</Typography>
                        <ul>{d.ayurveda.split(", ").map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </Box>
                      <Box flex={1}>
                        <Typography variant="subtitle1" fontWeight="bold">Allopathy</Typography>
                        <ul>{d.allopathy.split(", ").map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                      </Box>
                    </Box>

                    {selectedCity && doctorDirectory[selectedCity] && (
                      <Box mt={3}>
                        <Typography variant="h6" color="secondary">Recommended Doctors in {selectedCity}:</Typography>
                        <Box mt={1}>
                          <Typography variant="subtitle2">Ayush Doctors:</Typography>
                          <ul>
                            {doctorDirectory[selectedCity].ayush.map((doc, i) => (
                              <li key={i}>{doc.name} ({doc.specialization}) - {doc.clinic}, Contact: {doc.contact}</li>
                            ))}
                          </ul>
                          <Typography variant="subtitle2">Allopathy Doctors:</Typography>
                          <ul>
                            {doctorDirectory[selectedCity].allopathy.map((doc, i) => (
                              <li key={i}>{doc.name} ({doc.specialization}) - {doc.clinic}, Contact: {doc.contact}</li>
                            ))}
                          </ul>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))
              ) : (
                selectedSymptoms.length > 0 && (
                  <Typography mt={2} align="center" color="textSecondary">
                    No likely matches found. Please consult a healthcare provider.
                  </Typography>
                )
              )}
            </Box>
          </div>
        </div>
      </Grid>
    </Layout>
  );
};

export default Diseases;
