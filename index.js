require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HUBSPOT_API = "https://api.hubapi.com";
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const CUSTOM_OBJECT = process.env.HUBSPOT_CUSTOM_OBJECT_NAME;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Home route - list pets
app.get("/", async (req, res) => {
  try {
    const url = `${HUBSPOT_API}/crm/v3/objects/${CUSTOM_OBJECT}?properties=pet_name,pet_type`;
    const response = await axios.get(url, {
      headers: {
  Authorization: `Bearer ${HUBSPOT_TOKEN}`,
  "Content-Type": "application/json",
},
    });

    const pets = response.data.results || [];
    res.render("homepage", { title: "Pet List", pets });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error fetching pets from HubSpot.");
  }
});

// Form route
app.get("/update-cobj", (req, res) => {
  res.render("updates", { title: "Add New Pet | HubSpot Practicum" });
});

// Handle form submission
app.post("/update-cobj", async (req, res) => {
  const { pet_name, pet_type } = req.body;

  try {
    const url = `${HUBSPOT_API}/crm/v3/objects/${CUSTOM_OBJECT}`;
   await axios.post(
  url,
  {
    properties: { pet_name, pet_type },
  },
  {
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  }
);

    res.redirect("/");
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error creating new Pet in HubSpot.");
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
