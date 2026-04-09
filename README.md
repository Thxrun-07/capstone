# Campus Hunt - Lost & Found

A premium, serverless web application designed to reunite university students with their lost belongings. Built with a modern Glassmorphism UI and powered entirely by Vanilla JavaScript and Google Sheets.

## Architecture & Tech Stack
* **Frontend:** HTML5, CSS3 (Pure CSS Variables, Glassmorphism UI, Responsive CSS Grid/Flexbox).
* **Logic:** Vanilla JavaScript (ES6+), custom client-side routing, and DOM manipulation.
* **Backend / Database:** Google Sheets API via Google Apps Script (Web App Deployment).
* **Authentication:** Client-side state management using `localStorage` and Custom Regex Validation for specific university roll numbers.

## Core Workflow
1. **Authentication Gate:** Users arriving at the platform are prompted to either Login, Register, or browse as a Guest.
2. **Strict Registration:** The system enforces a strict Regex pattern (`ch.[branch].u4[dept][year][section][roll]`) to ensure only verified university students can create an account.
3. **Data Fetching (GET):** The homepage automatically contacts the Google Apps Script via the `fetch()` API, retrieving JSON data of active lost/found items and dynamically rendering them into Glass UI cards.
4. **Item Reporting (POST):** Authenticated users can submit a detailed report. The JavaScript packages this payload and sends it to the Google Sheet, categorizing it instantly.
5. **Claiming/Contact:** Guest users can view items but cannot view contact details. Authenticated users can click "Claim/Contact" to reveal a generated `mailto:` link connecting them with the finder/owner.
6. **Personalized Profiles:** Authenticated users have a dedicated profile dashboard that securely filters the global database to display only their reported items.

## Project Structure
* `index.html` - The dynamic dashboard and item grids.
* `login.html` - The dual-state Login and Registration portal.
* `report.html` - The protected form for submitting new items.
* `profile.html` - The secure user dashboard displaying personal details and report history.
* `styles.css` - The global design system (Light/Dark themes, Glass UI).
* `script.js` - The modular application logic (Auth, Data, UI, Validation).
