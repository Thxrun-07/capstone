# Campus Hunt - Feature Guide & Logic Breakdown

This document serves as a technical reference for all features, click events, and background processes in the Campus Hunt application.

## 1. Global Features (Available Everywhere)
* **Theme Toggle (Sun/Moon Icon):** 
  * *Action:* Toggles the `.dark-theme` class on the HTML `<body>`.
  * *Logic:* Updates `campus_theme` in `localStorage` so the user's preference persists across all pages.
* **Top Loading Bar:**
  * *Action:* A slim, animated green bar at the top of the screen.
  * *Logic:* Triggered by the `.is-loading` CSS class via `Sync.showLoading()` whenever a database fetch is actively pending.
* **Dynamic Logo/Avatar Navigation:**
  * *Action:* Clicking the Campus Hunt logo and avatar in the top left navigates the user.
  * *Logic:* `Navigation.update()` dynamically changes the href attribute. If logged in, it routes to `profile.html`. If a guest or logged out, it routes to `index.html`.
* **Heavy Glassmorphism UI:**
  * *Action:* All components use `backdrop-filter: blur(22px)` for a premium frosted glass effect.
  * *Logic:* CSS variables control blur intensity. Green accent colors (`#10b981`, `#047857`) are strictly maintained.

## 2. Authentication & Login Page (`login.html`)
* **Login/Create Account Tabs:**
  * *Action:* Flips the view between the sign-in form and registration form without reloading the page.
  * *Logic:* Managed by `AuthForms.initTabs()`. Modifies the `.hidden` class on the respective forms.
* **Campus Registration Number Input - STRICT VALIDATION:**
  * *Action:* Validates the student ID in real-time as they type.
  * *Logic:* Powered by `RegNumberValidator.validate()`. Uses a strict Regular Expression (`/^ch\.[a-z]{2}\.u4[a-z]{3,4}(22|23|24|25)[0-2]\d{2}$/i`) to ensure the user actually belongs to the university. Valid formats: `ch.sc.u4cse25056`, `ch.en.u4mech24105`.
* **Password Strength Meter:**
  * *Action:* Shows a colored bar (Red to Green) indicating password security.
  * *Logic:* `UI.calculatePasswordStrength()` checks for length, uppercase, lowercase, numbers, and special characters.

## 3. The Dashboard (`index.html`)
* **The Auth Gate (Page Load):**
  * *Action:* Checks who the user is before letting them see the page.
  * *Logic:* If `Auth.isAuthenticated()` is false AND `Auth.isGuest()` is false, it forces a popup. Clicking "Guest" saves a bypass token locally.
* **Sync Button (Nav Bar):**
  * *Action:* Manually refreshes the items on the page.
  * *Logic:* Calls `Sync.fetchItems()`, spins the icon, and re-renders the grid with mock data.
* **Category Filter Pills (Electronics, Books, etc.):**
  * *Action:* Instantly hides items that don't match the selected category.
  * *Logic:* `CategoryFilter.init()` reads the `data-category` attribute on the HTML cards and toggles their CSS `display` property.
* **Item Cards with Dual Actions:**
  * *View Details Button:* Opens the detailed modal popup with full item information.
  * *Chat Button:* Opens the chat thread for the item (creates one if doesn't exist).

## 4. Item Modal Popup (`index.html`)
* **Modal Overlay:**
  * *Action:* Opens when clicking "View Details" on any item card.
  * *Logic:* `UI.openItemModal()` creates and injects a modal with heavy glassmorphism (`backdrop-filter: blur(22px)`).
* **Modal Contents:**
  * Full item description, location, contact info, and timestamps.
  * "Chat with Finder" button to initiate conversation.
* **Close Modal:**
  * Click the X button, click outside the modal, or click "Close" button.

## 5. The Report Form (`report.html`)
* **Page Load Guard:**
  * *Action:* Kicks out unauthenticated users instantly.
  * *Logic:* `ReportForm.init()` checks `Auth.isAuthenticated()`. If false, forces an un-closeable Auth Gate redirecting to login.
* **Image Preview:**
  * *Action:* Shows a preview of the uploaded image.
  * *Logic:* `prevImg()` function reads the file and displays it in a preview container with a remove button.
* **Submit Button:**
  * *Action:* Saves the item to local mock data.
  * *Logic:* `Data.submitReport()` adds the item to the DI array, which instantly updates the home page grid.

## 6. Forum/Chat Page (`forum.html`)
* **Thread List (Left Panel):**
  * *Action:* Displays all conversations the user is part of.
  * *Logic:* `Forum.renderThreadList()` filters `DTH` array for threads where user email is in participants.
* **Chat Panel (Right Side):**
  * *Action:* Shows messages for the selected thread.
  * *Logic:* `Forum.openThread()` and `Forum.renderMessages()` display messages from `DMsgs` object.
* **Suggest Meeting Place:**
  * *Action:* Optional input field to suggest a meeting location.
  * *Logic:* Attached to each message when sending. Displayed with a location pin icon in the bubble.
* **Send Message:**
  * *Action:* Sends a message to the current thread.
  * *Logic:* `Forum.sendMessage()` adds message to `DMsgs[threadId]`, updates thread metadata, and re-renders.
* **Open Chat from Item:**
  * *Action:* Clicking "Chat" on any item card opens/creates a thread.
  * *Logic:* `UI.handleContactClick()` checks for existing thread or creates new one, then redirects to `forum.html?thread={id}`.

## 7. The Profile Page (`profile.html`)
* **Page Load Guard:**
  * *Action:* Kicks out unauthenticated users instantly.
  * *Logic:* `Profile.init()` checks `Auth.isAuthenticated()`. If false, forces a redirect to `login.html`.
* **User Identity Card:**
  * *Action:* Displays the user's name, ID, and email.
  * *Logic:* Pulls the active session data from localStorage (`Auth.getUserData()`) and injects it into the DOM.
* **Personal Item Grid:**
  * *Action:* Displays only the items this specific user has reported.
  * *Logic:* Calls `Data.fetchItems()`, but runs a `.filter()` array method to strictly match the `item["Email"]` from mock data against the currently logged-in user's email before rendering the cards.

## 8. Data Architecture (Mock Data)
* **In-Memory Storage:**
  * `DI` - Array of item objects (lost/found reports)
  * `DTH` - Array of thread objects (chat conversations)
  * `DMsgs` - Object mapping thread IDs to message arrays
* **No Google Sheets API:**
  * All data is stored in JavaScript arrays.
  * Adding reports instantly updates the `DI` array.
  * Changes persist only during the session (refresh will reset to default mock data).
