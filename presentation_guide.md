# Campus Hunt - Presentation Guide
## Complete Feature Walkthrough & User Manual

---

# TABLE OF CONTENTS
1. [Getting Started](#1-getting-started)
2. [Home Page & Browsing Items](#2-home-page--browsing-items)
3. [User Authentication](#3-user-authentication)
4. [Reporting Lost/Found Items](#4-reporting-lostfound-items)
5. [Item Details & Modal](#5-item-details--modal)
6. [Chat & Forum System](#6-chat--forum-system)
7. [Profile Page](#7-profile-page)
8. [Theme Toggle (Light/Dark Mode)](#8-theme-toggle-lightdark-mode)
9. [Quick Reference](#9-quick-reference)

---

# 1. GETTING STARTED

## Opening the Application
1. Open `index.html` in any modern web browser
2. You will see the **Campus Hunt** homepage with the hero section

## First-Time Visitors
- If you're not logged in, you'll see an **Auth Gate overlay**
- Click **"Continue as Guest"** to browse items without an account
- Or click **"Go to Login"** to create an account

---

# 2. HOME PAGE & BROWSING ITEMS

## Hero Section
The landing page features:
- **"Lost Something?"** title with animated green gradient
- **"Report Lost Item"** button (requires login)
- **"Browse Found Items"** button (scrolls to found section)

## Lost & Found Sections
Two main sections display reported items:

### Lost Items Section
- Blue badges with "LOST" label
- Shows items reported by students looking for their belongings

### Found Items Section  
- Green bordered "FOUND" badges
- Shows items turned in by helpful community members

## Category Filters
Each section has category filter pills:

| Category | Filter Name |
|----------|-------------|
| 📱 Electronics | Laptops, phones, chargers |
| 👕 Clothing | Jackets, bags, accessories |
| 📚 Books | Textbooks, notebooks |
| 🔑 Keys | Keys, wallets, ID cards |
| ⚽ Sports | Sports equipment, balls |
| 📦 Other | Anything else |

**How to use:**
1. Click any category pill (e.g., "Electronics")
2. Items not matching that category will be hidden
3. Click "All Items" to show everything again

## Sync Button
- Located in the navigation bar (refresh icon)
- Click to manually reload items from the database
- Useful if items aren't showing up

---

# 3. USER AUTHENTICATION

## Login Page (`login.html`)

### Switching Between Forms
1. Two tabs at the top: **"Sign In"** and **"Create Account"**
2. Click a tab to switch forms instantly

### Sign In Form
**Fields Required:**
- University Email (e.g., `student@university.edu`)
- Password

**Steps to Login:**
1. Enter your email
2. Enter your password
3. Click **"Sign In"** button
4. Success: Redirects to home page with welcome toast
5. Failure: Shows error message

### Create Account Form
**Fields Required:**
- Full Name
- Campus Registration Number
- University Email
- Password
- Confirm Password
- Terms of Service checkbox

### Registration Number Validation - IMPORTANT!
The registration number must follow this exact format:

```
ch.[branch].u4[department][year][section][roll]
```

**Breakdown:**
| Part | Example | Description |
|------|---------|-------------|
| `ch` | `ch` | Constant prefix |
| `[branch]` | `sc` or `en` | Science or Engineering |
| `u4` | `u4` | UG 4-year program |
| `[department]` | `cse`, `ece`, `mech`, etc. | 3-4 letter dept code |
| `[year]` | `22`, `23`, `24`, `25` | Admission year |
| `[section]` | `0`, `1`, `2` | A=0, B=1, C=2 |
| `[roll]` | `01` to `99` | Roll number |

**Valid Examples:**
- `ch.sc.u4cse25056` ✓
- `ch.en.u4mech24105` ✓
- `ch.sc.u4aid23234` ✓

**Real-Time Validation:**
- As you type, the system validates your registration number
- Green border = Valid ✓
- Red border + error message = Invalid ✗

### Password Requirements
- Minimum 8 characters
- Shows strength indicator (Weak → Fair → Good → Strong)
- Must match confirmation field

### Successful Registration
1. Fill all fields correctly
2. Check "I agree to Terms..."
3. Click **"Create Account"**
4. Auto-logs you in and redirects to home page

---

# 4. REPORTING LOST/FOUND ITEMS

## Accessing the Report Form
1. Click **"Report Item"** in the navigation bar
2. If not logged in → redirects to login
3. If logged in → shows report form

## Report Type Selection
Choose one:
- **"I Lost Something"** - You're looking for an item
- **"I Found Something"** - You found someone's item

## Form Fields

| Field | Required | Description |
|-------|----------|-------------|
| Item Name | ✓ | e.g., "Blue Water Bottle", "MacBook Pro" |
| Category | ✓ | Select from dropdown |
| Location | ✓ | Where lost/found (e.g., "Library, 2nd Floor") |
| Date | ✓ | Auto-filled with today |
| Description | ✓ | Detailed description |
| Contact Email | ✓ | Auto-filled from your account |
| Mobile Number | ✓ | Your phone number |
| Upload Image | Optional | Add a photo of the item |

## Image Upload Feature
**How to upload:**
1. Click the dashed upload area
2. Select an image file (PNG, JPG up to 5MB)
3. Preview appears below the upload area
4. Click the X button to remove the image

## Submitting the Report
1. Fill all required fields
2. Click **"Submit Report"**
3. Button shows "Submitting..." during processing
4. Success: Toast notification + redirect to home page
5. Your item now appears in the Lost/Found section!

---

# 5. ITEM DETAILS & MODAL

## Viewing Item Details
1. Find an item card on the home page
2. Click the **"View Details"** button (green)

## Modal Features
The modal popup shows:
- **Item Title** - Name of the item
- **Status Badge** - "Lost" or "Found" with color coding
- **Category Badge** - e.g., "Electronics"
- **Description** - Full detailed description
- **Details Grid:**
  - Location where lost/found
  - Time since reported
  - Reporter's name
  - Phone number

## Modal Actions
- **"Chat with Finder"** button - Opens the chat/forum
- **"Close"** button - Closes the modal
- Click outside the modal to close
- Click the X icon in top-right to close

---

# 6. CHAT & FORUM SYSTEM

## Forum Page (`forum.html`)
The forum allows you to chat with people about items.

### Accessing the Forum
1. Click **"Forum"** in the navigation bar
2. Must be logged in to access

## Forum Layout
```
┌─────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌─────────────────────────┐  │
│  │ CONVERSATIONS│  │   Chat Header           │  │
│  │              │  │   (Item name, time)    │  │
│  │ Thread 1     │  ├─────────────────────────┤  │
│  │ Thread 2  ←──│──│   Message bubbles       │  │
│  │ Thread 3     │  │   (Your messages: right)│  │
│  │              │  │   (Others: left)        │  │
│  │              │  ├─────────────────────────┤  │
│  │              │  │ [Meeting Place Input]   │  │
│  │              │  │ [Message input] [Send]  │  │
│  └──────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

## Starting a Chat
**Method 1: From Item Card**
1. On home page, find an item
2. Click the **"Chat"** button (blue with chat icon)
3. Automatically creates a thread if none exists
4. Redirects to forum with thread open

**Method 2: From Item Modal**
1. Click "View Details" on an item
2. Click **"Chat with Finder"** button
3. Redirects to forum with thread open

## Thread List (Left Panel)
- Shows all your conversations
- Most recent message shown with timestamp
- Click any thread to open it
- Active thread highlighted with accent color

## Chat Panel (Right Panel)

### Viewing Messages
- Your messages appear on the **right** (green bubbles)
- Others' messages appear on the **left** (glass bubbles)
- Each message shows:
  - Sender name (for others)
  - Message text
  - Timestamp
  - Meeting place (if suggested)

### Sending a Message
1. Type your message in the input field
2. (Optional) Suggest a meeting place in the location input
3. Click **"Send"** or press Enter
4. Message appears instantly in the chat

### Suggesting Meeting Places
- The location input is optional
- When filled, it's attached to your message
- Displayed with a 📍 pin icon in the message bubble
- Helps coordinate item exchanges!

## Chat Features
- Real-time message sending
- Auto-scroll to latest message
- Meeting place suggestions
- Conversation history per item

---

# 7. PROFILE PAGE

## Accessing Profile
1. Click your **profile link** in the navigation
2. Or click the **logo** when logged in

## Profile Display
Shows your account information:
- **Avatar** - User icon with green border
- **Full Name** - Your registered name
- **Registration Number** - Your campus ID
- **Email** - Your university email

## My Reported Items
Below your profile:
- Grid showing items you've reported
- You can view details or chat about your own items
- Empty state if no items reported yet

## Logging Out
1. Click **"Logout"** in the navigation bar
2. Returns to guest/home view
3. Your items remain in the system

---

# 8. THEME TOggle (Light/Dark Mode)

## Switching Themes
1. Click the **sun/moon icon** in the navigation bar
2. Located to the right of navigation links

## Theme States
| Icon | Theme | Description |
|------|-------|-------------|
| ☀️ Sun | Light Mode | Light background, white cards |
| 🌙 Moon | Dark Mode | Dark background, translucent cards |

## Theme Persistence
- Your preference is saved in browser storage
- Next visit remembers your chosen theme
- Available on all pages

## Dark Mode Features
- Dark glass backgrounds with more blur
- Preserved green accent colors
- Same functionality as light mode

---

# 9. QUICK REFERENCE

## Navigation Bar Links
| Link | Page | Access |
|------|------|--------|
| Home | index.html | Everyone |
| Lost Items | #lost (scroll) | Everyone |
| Found Items | #found (scroll) | Everyone |
| Forum | forum.html | Logged in only |
| Report Item | report.html | Logged in only |
| Login/Logout | login.html | Everyone |
| Profile | profile.html | Logged in only |

## Button Colors
| Button | Color | Action |
|--------|-------|--------|
| Report Item | Green gradient | Opens report form |
| View Details | Green | Opens item modal |
| Chat | Blue | Opens chat thread |
| Submit | Green gradient | Submits form |
| Close | Gray/glass | Closes modal |

## Status Badges
| Badge | Color | Meaning |
|-------|-------|---------|
| Lost | Solid green | Item owner is looking for it |
| Found | Green border, clear | Item found by someone |

## Form Validation Icons
| State | Color | Meaning |
|-------|-------|---------|
| Valid | Green border | Field is correctly filled |
| Invalid | Red border | Error message shown below |
| Neutral | Gray border | Not yet validated |

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| Enter (in chat) | Send message |
| Enter (in forms) | Submit form |
| Esc (in modal) | Close modal |
| Click outside modal | Close modal |

---

# DEMO SCRIPTS

## Demo 1: Browse as Guest
```
1. Open index.html
2. Click "Continue as Guest"
3. Browse Lost Items section
4. Click category filter "Books"
5. Click "View Details" on an item
6. Close modal
7. Toggle dark/light mode
```

## Demo 2: Register and Report
```
1. Click "Report Item"
2. Redirected to login
3. Click "Create Account" tab
4. Fill form:
   - Name: Demo User
   - Reg: ch.sc.u4cse25056
   - Email: demo@university.edu
   - Password: TestPass123
   - Confirm: TestPass123
5. Submit
6. Now on home page
7. Click "Report Item"
8. Fill: "Red Nike Shoes"
9. Category: Clothing
10. Location: Sports Ground
11. Submit
12. See item appear in Lost section
```

## Demo 3: Chat Feature
```
1. Log in with existing account
2. Go to home page
3. Find any item with "Chat" button
4. Click "Chat"
5. Redirected to forum with thread open
6. Type "Hi, is this still available?"
7. Suggest meeting: "Library Entrance, 4 PM"
8. Send message
9. See message appear in chat
```

## Demo 4: View Profile
```
1. Log in
2. Click your name in nav (or logo)
3. See profile with your info
4. View your reported items
5. Click "Report New Item" to add more
```

---

# TROUBLESHOOTING

## "Authentication Required" popup
- **Cause:** Trying to access restricted page without login
- **Fix:** Log in or use "Continue as Guest"

## Registration number not accepted
- **Cause:** Doesn't match format `ch.sc.u4cse25056`
- **Fix:** Check each part of the format carefully

## Item not appearing after report
- **Cause:** Page needs refresh
- **Fix:** Click sync button (refresh icon in nav)

## Chat thread not showing
- **Cause:** Not logged in
- **Fix:** Log in first, then start chat

## Dark mode not working
- **Cause:** Browser cache
- **Fix:** Clear cache or refresh page

---

# FEATURES SUMMARY

| Feature | Status | Notes |
|---------|--------|-------|
| Browse Lost Items | ✅ Working | Category filters available |
| Browse Found Items | ✅ Working | Category filters available |
| User Registration | ✅ Working | Strict reg number validation |
| User Login | ✅ Working | Local storage based |
| Report Items | ✅ Working | Instant local update |
| Image Upload | ✅ Working | Preview before submit |
| Item Modal | ✅ Working | Full details view |
| Chat System | ✅ Working | Meeting place suggestions |
| Forum/Threads | ✅ Working | Conversation history |
| Profile Page | ✅ Working | User's reported items |
| Dark Mode | ✅ Working | Theme persistence |
| Guest Mode | ✅ Working | Limited access |
| Mock Data | ✅ Working | 8 sample items included |

---

**End of Presentation Guide**

*Campus Hunt - Reuniting campus, one item at a time.*
