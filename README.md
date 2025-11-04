# Integrating With HubSpot I: Foundations Practicum — Afnan Mohamed

This project was created for the **Integrating With HubSpot I: Foundations Practicum** as part of the HubSpot Academy Developer certification.  
It demonstrates how to build a simple **Node.js integration** with the HubSpot CRM API using **custom objects**.

---

## 🐾 Custom Object: "Pets"

This custom object was created inside my HubSpot **Developer Test Account**.  
It stores records for different types of pets, with three main properties:

- **Name** (string)  
- **Type** (string)  

Each record can be created, viewed, and listed through this Node.js app.

---

## 🔗 Custom Object List View (required link)

**Custom Object URL:**  
[View Pet Records in HubSpot](https://app.hubspot.com/contacts/147156219/objects/2-194228293/views/all/list)

---

## 🧠 Tech Stack
- **Node.js**
- **Express.js**
- **Axios**
- **Pug** (for server-side templates)
- **CSS** (for styling)
- **HubSpot CRM v3 API**

---

## 🧩 Functionality

### Homepage (`/`)
- Displays all Pet records in a clean HTML table.

### Add Record (`/update-cobj`)
- Form to create a new Pet record in HubSpot.
- After submission, redirects back to the homepage.

---

## ⚙️ Setup Instructions

1. Clone this repository:
2. Install dependencies:
   npm install
3. Create a .env file locally (do not push this to GitHub):
   PORT=3000
   HUBSPOT_PRIVATE_APP_TOKEN=your_token_here
   HUBSPOT_CUSTOM_OBJECT_NAME=p_pets
4. Run the app:
   node index.js
5. Open your browser at http://localhost:3000 to see the homepage and add new records.
   

   git clone https://github.com/AfnanAli537/practicum_HubSpot_task1.git
   cd practicum_HubSpot_task1
