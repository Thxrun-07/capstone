/* ============================================
   CAMPUS HUNT - LOST & FOUND
   Comprehensive JavaScript - Phase 3
   Enhanced with Mock Data, Forum, Modal & Chat
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    STORAGE_KEYS: {
        THEME: 'campus_theme',
        AUTH: 'campus_auth',
        USER_DATA: 'campus_user',
        USERS_DB: 'campus_users',
        ITEMS: 'campus_items',
        THREADS: 'campus_threads'
    },
    
    AUTH_TOKEN: 'authenticated',
    
    REG_NUMBER_REGEX: /^ch\.[a-z]{2}\.u4[a-z]{3,4}(22|23|24|25)[0-2]\d{2}$/i,
    BRANCH_CODES: ['sc', 'en'],
    DEPARTMENT_CODES: ['cse', 'ece', 'mee', 'aie', 'cys', 'aid', 'rai', 'cce'],
    
    CATEGORY_ICONS: {
        electronics: '<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="30" width="50" height="40" rx="4" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="50" r="8" stroke="currentColor" stroke-width="3"/></svg>',
        clothing: '<svg viewBox="0 0 100 100" fill="none"><path d="M50 20 L30 35 L35 85 L65 85 L70 35 Z" stroke="currentColor" stroke-width="3"/><path d="M30 35 L15 45 L25 55 L35 50" stroke="currentColor" stroke-width="3"/><path d="M70 35 L85 45 L75 55 L65 50" stroke="currentColor" stroke-width="3"/></svg>',
        books: '<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="25" width="50" height="60" rx="2" stroke="currentColor" stroke-width="3"/><path d="M50 25 L50 85" stroke="currentColor" stroke-width="2"/><path d="M30 35 L45 35 M30 45 L45 45 M30 55 L45 55" stroke="currentColor" stroke-width="2"/></svg>',
        keys: '<svg viewBox="0 0 100 100" fill="none"><circle cx="35" cy="40" r="15" stroke="currentColor" stroke-width="3"/><path d="M45 50 L75 80" stroke="currentColor" stroke-width="3"/><path d="M60 65 L70 55" stroke="currentColor" stroke-width="3"/><path d="M70 75 L80 65" stroke="currentColor" stroke-width="3"/></svg>',
        sports: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="3"/><path d="M50 25 L50 75 M25 50 L75 50 M32 32 L68 68 M32 68 L68 32" stroke="currentColor" stroke-width="2"/></svg>',
        other: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="50" r="8" stroke="currentColor" stroke-width="3"/></svg>'
    },
    
    PLACEHOLDER_IMAGES: {
        electronics: '<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="30" width="50" height="40" rx="4" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="50" r="8" stroke="currentColor" stroke-width="3"/></svg>',
        clothing: '<svg viewBox="0 0 100 100" fill="none"><path d="M50 20 L30 35 L35 85 L65 85 L70 35 Z" stroke="currentColor" stroke-width="3"/><path d="M30 35 L15 45 L25 55 L35 50" stroke="currentColor" stroke-width="3"/><path d="M70 35 L85 45 L75 55 L65 50" stroke="currentColor" stroke-width="3"/></svg>',
        books: '<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="25" width="50" height="60" rx="2" stroke="currentColor" stroke-width="3"/><path d="M50 25 L50 85" stroke="currentColor" stroke-width="2"/><path d="M30 35 L45 35 M30 45 L45 45 M30 55 L45 55" stroke="currentColor" stroke-width="2"/></svg>',
        keys: '<svg viewBox="0 0 100 100" fill="none"><circle cx="35" cy="40" r="15" stroke="currentColor" stroke-width="3"/><path d="M45 50 L75 80" stroke="currentColor" stroke-width="3"/><path d="M60 65 L70 55" stroke="currentColor" stroke-width="3"/><path d="M70 75 L80 65" stroke="currentColor" stroke-width="3"/></svg>',
        sports: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="3"/><path d="M50 25 L50 75 M25 50 L75 50 M32 32 L68 68 M32 68 L68 32" stroke="currentColor" stroke-width="2"/></svg>',
        other: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="50" r="8" stroke="currentColor" stroke-width="3"/></svg>'
    }
};

// ============================================
// MOCK DATA - In-Memory Storage
// ============================================
let DI = [
    {
        id: 'item_001',
        "Type": 'lost',
        "Item Name": 'MacBook Pro 14"',
        "Category": 'electronics',
        "Location": 'Central Library, 2nd Floor',
        "Timestamp": new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        "Description": 'Space gray MacBook Pro with a sticker of a cat on the lid. Left on the study table near the window. Has my notes from Data Structures class inside.',
        "Email": 'rahul.sharma@university.edu',
        "Phone": '9876543210',
        "Reporter": 'Rahul Sharma',
        "RegNo": 'ch.sc.u4cse24056',
        "Image": 'macbook.png'
    },
    {
        id: 'item_002',
        "Type": 'found',
        "Item Name": 'Blue Water Bottle',
        "Category": 'other',
        "Location": 'Sports Complex, Basketball Court',
        "Timestamp": new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        "Description": 'Hydro Flask blue water bottle found during evening basketball practice. Still has water inside. Brand new, good condition.',
        "Email": 'priya.patel@university.edu',
        "Phone": '8765432109',
        "Reporter": 'Priya Patel',
        "RegNo": 'ch.en.u4ece23189',
        "Image": 'waterbottle.png'
    },
    {
        id: 'item_003',
        "Type": 'lost',
        "Item Name": 'Engineering Mathematics Textbook',
        "Category": 'books',
        "Location": 'Block C, Room 301',
        "Timestamp": new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        "Description": 'Big orange textbook for Engineering Mathematics III. My name is written on the first page. It has some highlighted portions.',
        "Email": 'amit.kumar@university.edu',
        "Phone": '7654321098',
        "Reporter": 'Amit Kumar',
        "RegNo": 'ch.en.u4mech24012',
        "Image": 'textbook.png'
    },
    {
        id: 'item_004',
        "Type": 'found',
        "Item Name": 'Car Keys with Toyota Keychain',
        "Category": 'keys',
        "Location": 'Parking Lot B, Near Canteen',
        "Timestamp": new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        "Description": 'Found a set of car keys with a Toyota keychain and a small hostel key attached. Has a red lanyard.',
        "Email": 'sneha.gupta@university.edu',
        "Phone": '6543210987',
        "Reporter": 'Sneha Gupta',
        "RegNo": 'ch.sc.u4cse23234',
        "Image": 'keys.png'
    },
    {
        id: 'item_005',
        "Type": 'lost',
        "Item Name": 'Nike Sports Bag',
        "Category": 'sports',
        "Location": 'Main Ground, During Cricket Match',
        "Timestamp": new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        "Description": 'Black Nike sports bag with cricket gear inside. Contains a gray cricket bat and tennis balls. My initials "V.K." are written on the bag.',
        "Email": 'vikram.singh@university.edu',
        "Phone": '5432109876',
        "Reporter": 'Vikram Singh',
        "RegNo": 'ch.en.u4cse25089',
        "Image": 'bag.png'
    },
    {
        id: 'item_006',
        "Type": 'found',
        "Item Name": 'iPad with Blue Case',
        "Category": 'electronics',
        "Location": 'Lecture Hall Complex, Auditorium',
        "Timestamp": new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        "Description": 'iPad in a blue protective case. Found it after the guest lecture ended. The wallpaper shows a sunset photo.',
        "Email": 'isha.sharma@university.edu',
        "Phone": '4321098765',
        "Reporter": 'Isha Sharma',
        "RegNo": 'ch.sc.u4aid24156',
        "Image": 'tab.png'
    },
    {
        id: 'item_007',
        "Type": 'lost',
        "Item Name": 'Denim Jacket',
        "Category": 'clothing',
        "Location": 'Food Court, Near Pizza Outlet',
        "Timestamp": new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        "Description": 'Blue denim jacket with patches on the elbows. Left on the chair while collecting my order. Has my student ID in the pocket.',
        "Email": 'arjun.nair@university.edu',
        "Phone": '3210987654',
        "Reporter": 'Arjun Nair',
        "RegNo": 'ch.en.u4ece24267',
        "Image": 'shirt.png'
    },
    {
        id: 'item_008',
        "Type": 'found',
        "Item Name": 'Scientific Calculator',
        "Category": 'electronics',
        "Location": 'Block D, Exam Hall',
        "Timestamp": new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        "Description": 'Casio fx-991EX scientific calculator. Found under the desk after the exam. The battery was low.',
        "Email": 'kavya.reddy@university.edu',
        "Phone": '2109876543',
        "Reporter": 'Kavya Reddy',
        "RegNo": 'ch.sc.u4cys23178',
        "Image": 'calculator.png'
    }
];

let DTH = [
    {
        id: 'thread_001',
        itemId: 'item_001',
        itemName: 'MacBook Pro 14"',
        participants: ['rahul.sharma@university.edu', 'priya.patel@university.edu'],
        lastMessage: 'Can we meet near the library entrance tomorrow?',
        lastMessageTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 'thread_002',
        itemId: 'item_004',
        itemName: 'Car Keys with Toyota Keychain',
        participants: ['sneha.gupta@university.edu', 'rahul.sharma@university.edu'],
        lastMessage: 'I will be at the parking lot at 5 PM.',
        lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
    }
];

let DMsgs = {
    'thread_001': [
        {
            id: 'msg_001',
            sender: 'rahul.sharma@university.edu',
            senderName: 'Rahul Sharma',
            text: 'Hi! I think my MacBook was found by you. Is it still with you?',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_002',
            sender: 'priya.patel@university.edu',
            senderName: 'Priya Patel',
            text: 'Yes! I found it in the library. I was waiting for someone to claim it. It matches your description perfectly.',
            meetingPlace: 'Central Library, 2nd Floor',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_003',
            sender: 'rahul.sharma@university.edu',
            senderName: 'Rahul Sharma',
            text: 'Thank you so much! Can we meet to collect it? I am really worried about my files.',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_004',
            sender: 'priya.patel@university.edu',
            senderName: 'Priya Patel',
            text: 'Sure! I am free tomorrow after 4 PM. Where would you like to meet?',
            meetingPlace: 'Library Entrance',
            timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_005',
            sender: 'rahul.sharma@university.edu',
            senderName: 'Rahul Sharma',
            text: 'Can we meet near the library entrance tomorrow at 4:30 PM?',
            meetingPlace: 'Library Entrance, 4:30 PM',
            timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString()
        }
    ],
    'thread_002': [
        {
            id: 'msg_101',
            sender: 'sneha.gupta@university.edu',
            senderName: 'Sneha Gupta',
            text: 'Hello! I found these keys near the parking lot. Are they yours?',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_102',
            sender: 'rahul.sharma@university.edu',
            senderName: 'Rahul Sharma',
            text: 'Yes! Those are my keys. The Toyota keychain was a gift from my father. Thank you for finding them!',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_103',
            sender: 'sneha.gupta@university.edu',
            senderName: 'Sneha Gupta',
            text: 'No problem! When are you free to pick them up?',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_104',
            sender: 'rahul.sharma@university.edu',
            senderName: 'Rahul Sharma',
            text: 'I can pick them up today evening. Is that okay?',
            meetingPlace: '',
            timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 'msg_105',
            sender: 'sneha.gupta@university.edu',
            senderName: 'Sneha Gupta',
            text: 'Perfect! I will be at the parking lot at 5 PM.',
            meetingPlace: 'Parking Lot B, 5 PM',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        }
    ]
};

// ============================================
// USER DATABASE MODULE
// ============================================
const UserDB = {
    getAll: function() {
        const data = localStorage.getItem(CONFIG.STORAGE_KEYS.USERS_DB);
        return data ? JSON.parse(data) : [];
    },
    
    save: function(users) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USERS_DB, JSON.stringify(users));
    },
    
    findByEmail: function(email) {
        const users = this.getAll();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
    },
    
    findByRegNumber: function(regNumber) {
        const users = this.getAll();
        return users.find(u => u.regNumber.toLowerCase() === regNumber.toLowerCase()) || null;
    },
    
    emailExists: function(email) {
        return this.findByEmail(email) !== null;
    },
    
    regNumberExists: function(regNumber) {
        return this.findByRegNumber(regNumber) !== null;
    },
    
    addUser: function(userData) {
        const users = this.getAll();
        
        if (this.emailExists(userData.email)) {
            return { success: false, message: 'An account with this email already exists.' };
        }
        
        if (this.regNumberExists(userData.regNumber)) {
            return { success: false, message: 'This registration number is already registered.' };
        }
        
        const newUser = {
            id: this.generateId(),
            fullName: userData.fullName,
            regNumber: userData.regNumber.toLowerCase(),
            email: userData.email.toLowerCase(),
            password: this.hashPassword(userData.password),
            createdAt: new Date().toISOString(),
            lastLogin: null
        };
        
        users.push(newUser);
        this.save(users);
        
        return { success: true, message: 'Account created successfully.', user: newUser };
    },
    
    validateCredentials: function(email, password) {
        const user = this.findByEmail(email);
        
        if (!user) {
            return { success: false, message: 'No account found with this email address.' };
        }
        
        if (!this.verifyPassword(password, user.password)) {
            return { success: false, message: 'Incorrect password. Please try again.' };
        }
        
        user.lastLogin = new Date().toISOString();
        const users = this.getAll();
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index] = user;
            this.save(users);
        }
        
        return { success: true, message: 'Login successful.', user: user };
    },
    
    generateId: function() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    hashPassword: function(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'hash_' + Math.abs(hash).toString(16) + '_' + password.length;
    },
    
    verifyPassword: function(password, storedHash) {
        return this.hashPassword(password) === storedHash;
    }
};

// ============================================
// REGISTRATION NUMBER VALIDATOR - STRICT
// ============================================
const RegNumberValidator = {
    validate: function(regNumber) {
        const result = {
            isValid: false,
            errors: [],
            format: null,
            breakdown: null
        };
        
        if (!regNumber || typeof regNumber !== 'string') {
            result.errors.push('Registration number is required');
            return result;
        }
        
        const cleaned = regNumber.trim().toLowerCase();
        const exactRegex = /^ch\.[a-z]{2}\.u4[a-z]{3,4}(22|23|24|25)[0-2]\d{2}$/;
        
        if (!exactRegex.test(cleaned)) {
            result.errors.push('Invalid format. Expected: ch.[branch].u4[dept][year][section][roll]');
            result.errors.push('Example: ch.sc.u4cse25056 or ch.en.u4mech24105');
            return result;
        }
        
        const parts = cleaned.split('.');
        
        if (parts[0] !== 'ch') {
            result.errors.push('Must start with "ch."');
        }
        
        const branchCode = parts[1];
        if (!/^[a-z]{2}$/.test(branchCode)) {
            result.errors.push('Branch code must be exactly 2 letters (e.g., sc, en)');
        } else if (!CONFIG.BRANCH_CODES.includes(branchCode)) {
            result.errors.push(`Unknown branch code "${branchCode}". Valid: ${CONFIG.BRANCH_CODES.join(', ')}`);
        }
        
        const remaining = parts[2];
        
        if (!remaining.startsWith('u4')) {
            result.errors.push('Must have "u4" prefix for undergraduate 4-year program');
        }
        
        const deptMatch = remaining.match(/^u4([a-z]{3,4})/);
        if (!deptMatch) {
            result.errors.push('Invalid department code (must be 3-4 letters)');
        } else {
            const deptCode = deptMatch[1];
            if (!CONFIG.DEPARTMENT_CODES.includes(deptCode)) {
                result.errors.push(`Unknown department "${deptCode}". Valid: ${CONFIG.DEPARTMENT_CODES.join(', ')}`);
            }
        }
        
        const yearMatch = remaining.match(/u4[a-z]{3,4}(22|23|24|25)/);
        if (!yearMatch) {
            result.errors.push('Year must be 22, 23, 24, or 25 (e.g., 25 for 2025)');
        }
        
        const sectionMatch = remaining.match(/\d{2}([0-2])/);
        if (!sectionMatch) {
            result.errors.push('Section must be 0 (A), 1 (B), or 2 (C)');
        } else {
            const sectionMap = { '0': 'A', '1': 'B', '2': 'C' };
            result.breakdown = {
                prefix: 'ch',
                branch: branchCode,
                program: 'u4',
                department: deptMatch ? deptMatch[1] : '',
                year: yearMatch ? yearMatch[1] : '',
                section: sectionMap[sectionMatch[1]],
                sectionCode: sectionMatch[1]
            };
        }
        
        const rollMatch = remaining.match(/[0-2](\d{2})$/);
        if (!rollMatch) {
            result.errors.push('Roll number must be 2 digits (00-99)');
        } else {
            const roll = parseInt(rollMatch[1], 10);
            if (roll < 0 || roll > 99) {
                result.errors.push('Roll number must be between 00 and 99');
            }
            if (result.breakdown) {
                result.breakdown.rollNumber = roll.toString().padStart(2, '0');
            }
        }
        
        if (result.errors.length === 0) {
            result.isValid = true;
            result.format = cleaned;
            result.message = this.getSuccessMessage(result.breakdown);
        }
        
        return result;
    },
    
    getSuccessMessage: function(breakdown) {
        if (!breakdown) return 'Registration number is valid';
        return `Valid: ${breakdown.branch.toUpperCase()} branch, ${breakdown.department.toUpperCase()} department, Section ${breakdown.section}, Roll ${breakdown.rollNumber}`;
    },
    
    getFormatExample: function() {
        return 'ch.sc.u4cse25056\nch.en.u4mech24105\nch.cs.u4cse24012';
    }
};

// ============================================
// AUTHENTICATION MODULE
// ============================================
const Auth = {
    isAuthenticated: function() {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.AUTH) === CONFIG.AUTH_TOKEN;
    },
    
    setGuest: function() {
        localStorage.setItem('campus_guest', 'true');
    },
    
    isGuest: function() {
        return localStorage.getItem('campus_guest') === 'true';
    },
    
    login: function(userData) {
        localStorage.removeItem('campus_guest');
        localStorage.setItem(CONFIG.STORAGE_KEYS.AUTH, CONFIG.AUTH_TOKEN);
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER_DATA, JSON.stringify({
            id: userData.id,
            fullName: userData.fullName,
            regNumber: userData.regNumber,
            email: userData.email,
            loginTime: new Date().toISOString()
        }));
    },
    
    logout: function() {
        localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH);
        localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
        localStorage.removeItem('campus_guest');
    },
    
    getUserData: function() {
        const data = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_DATA);
        return data ? JSON.parse(data) : null;
    }
};

// ============================================
// THEME MODULE
// ============================================
const Theme = {
    init: function() {
        const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    },
    
    toggle: function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
    }
};

// ============================================
// NAVIGATION MODULE
// ============================================
const Navigation = {
    update: function() {
        const loginLink = document.querySelector('.nav-link[href="login.html"]');
        const reportLink = document.querySelector('.nav-link[href="report.html"]');
        const forumLink = document.querySelector('.nav-link[href="forum.html"]');
        const logo = document.querySelector('.logo');
        
        if (Auth.isAuthenticated()) {
            const userData = Auth.getUserData();
            
            if (logo) logo.href = 'profile.html';
            
            if (loginLink) {
                loginLink.textContent = 'Logout';
                loginLink.href = '#';
                loginLink.dataset.action = 'logout';
                
                if (loginLink._logoutHandler) {
                    loginLink.removeEventListener('click', loginLink._logoutHandler);
                }
                
                loginLink._logoutHandler = function(e) {
                    e.preventDefault();
                    Auth.logout();
                    Navigation.update();
                    UI.showToast('Logged out successfully', 'success');
                    window.location.href = 'login.html';
                };
                loginLink.addEventListener('click', loginLink._logoutHandler);
            }
            
            if (reportLink) reportLink.style.display = '';
            if (forumLink) forumLink.style.display = '';
        } else {
            if (logo) logo.href = 'index.html';
            
            if (loginLink) {
                loginLink.textContent = 'Login';
                loginLink.href = 'login.html';
                loginLink.dataset.action = 'login';
                
                if (loginLink._logoutHandler) {
                    loginLink.removeEventListener('click', loginLink._logoutHandler);
                    loginLink._logoutHandler = null;
                }
            }
            
            if (reportLink) reportLink.style.display = '';
            if (forumLink) forumLink.style.display = '';
        }
    }
};

// ============================================
// UI MODULE
// ============================================
const UI = {
    showToast: function(message, type = 'info', duration = 4000) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = this.getToastIcon(type);
        toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastIn 0.3s ease-out reverse';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },
    
    getToastIcon: function(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
        };
        return icons[type] || icons.info;
    },
    
    showValidationMessage: function(elementId, message, isError = true) {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.textContent = message;
        element.className = `validation-message ${isError ? 'error' : 'success'}`;
        element.style.display = 'flex';
    },
    
    clearValidationMessage: function(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.textContent = '';
        element.className = 'validation-message';
        element.style.display = 'none';
    },
    
    updatePasswordStrength: function(password) {
        const fill = document.getElementById('strength-fill');
        const text = document.getElementById('strength-text');
        if (!fill || !text) return;
        
        const strength = this.calculatePasswordStrength(password);
        fill.style.width = `${strength.score * 25}%`;
        fill.className = `strength-fill ${strength.level}`;
        text.textContent = strength.text;
    },
    
    calculatePasswordStrength: function(password) {
        let score = 0;
        if (!password) return { score: 0, level: '', text: 'Enter password' };
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;
        
        if (score <= 2) return { score: 1, level: 'weak', text: 'Weak password' };
        if (score <= 4) return { score: 2, level: 'fair', text: 'Fair password' };
        if (score <= 5) return { score: 3, level: 'good', text: 'Good password' };
        return { score: 4, level: 'strong', text: 'Strong password' };
    },
    
    showAuthGate: function(message = 'Please log in to access this page', showGuestOption = false) {
        const existing = document.querySelector('.auth-gate-overlay');
        if (existing) existing.remove();
        
        const overlay = document.createElement('div');
        overlay.className = 'auth-gate-overlay';
        
        let guestButton = '';
        if (showGuestOption) {
            guestButton = '<button id="auth-gate-guest-btn" class="btn btn-secondary" style="margin-top: 10px; width: 100%;">Continue as Guest</button>';
        }
        
        overlay.innerHTML = `
            <div class="auth-gate-content">
                <svg class="auth-gate-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <h2 class="auth-gate-title">Authentication Required</h2>
                <p class="auth-gate-text">${message}</p>
                <button id="auth-gate-login-btn" class="btn btn-primary">Go to Login</button>
                ${guestButton}
            </div>
        `;
        document.body.appendChild(overlay);
        
        const loginBtn = document.getElementById('auth-gate-login-btn');
        if (loginBtn) loginBtn.addEventListener('click', (e) => { e.preventDefault(); window.location.href = 'login.html'; });
        
        const guestBtn = document.getElementById('auth-gate-guest-btn');
        if (guestBtn) guestBtn.addEventListener('click', (e) => {
            e.preventDefault();
            Auth.setGuest();
            overlay.remove();
            UI.showToast('Browsing as Guest', 'info');
        });
        
        requestAnimationFrame(() => overlay.classList.add('active'));
    },
    
    handleContactClick: function(itemData) {
        if (!Auth.isAuthenticated() && !Auth.isGuest()) {
            this.showToast('You must be logged in to contact about items', 'warning');
            setTimeout(() => window.location.href = 'login.html', 1500);
            return;
        }
        
        const userData = Auth.getUserData();
        const userEmail = userData ? userData.email : 'guest@university.edu';
        
        let existingThread = DTH.find(t => t.itemId === itemData.id && t.participants.includes(userEmail));
        
        if (!existingThread) {
            existingThread = {
                id: 'thread_' + Date.now(),
                itemId: itemData.id,
                itemName: itemData["Item Name"],
                participants: [itemData["Email"], userEmail],
                lastMessage: '',
                lastMessageTime: new Date().toISOString(),
                createdAt: new Date().toISOString()
            };
            DTH.push(existingThread);
            DMsgs[existingThread.id] = [];
        }
        
        window.location.href = 'forum.html?thread=' + existingThread.id;
    },
    
    openItemModal: function(item) {
        const existing = document.querySelector('.modal-overlay');
        if (existing) existing.remove();
        
        const badgeClass = item["Type"] === 'lost' ? 'lost-badge' : 'found-badge';
        const badgeText = item["Type"] === 'lost' ? 'Lost' : 'Found';
        const contactName = item["Reporter"] || (item["Email"] ? item["Email"].split('@')[0] : 'Unknown');
        const relativeTime = Data.formatRelativeTime(item["Timestamp"]);
        const description = item["Description"] || 'No description provided.';
        const location = item["Location"] || 'Unknown location';
        const category = item["Category"] ? item["Category"].charAt(0).toUpperCase() + item["Category"].slice(1) : 'Other';
        
        const hasImage = item["Image"] && item["Image"].trim() !== '';
        const imageHtml = hasImage 
            ? `<img src="images/${item["Image"]}" alt="${Data.escapeHtml(item["Item Name"])}" onerror="this.parentElement.innerHTML='<svg viewBox=\\'0 0 100 100\\' fill=\\'none\\'><rect x=\\'25\\' y=\\'30\\' width=\\'50\\' height=\\'40\\' rx=\\'4\\' stroke=\\'currentColor\\' stroke-width=\\'3\\'/></svg>'">` 
            : CONFIG.PLACEHOLDER_IMAGES[item["Category"]] || CONFIG.PLACEHOLDER_IMAGES.other;
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-container">
                <div class="modal-header">
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>
                <div class="modal-image">
                    ${imageHtml}
                </div>
                <div class="modal-body">
                    <h2 class="modal-title">${Data.escapeHtml(item["Item Name"])}</h2>
                    <div class="modal-badges">
                        <span class="card-badge ${badgeClass}">${badgeText}</span>
                        <span class="card-badge" style="background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-secondary);">${category}</span>
                    </div>
                    <p class="modal-description">${Data.escapeHtml(description)}</p>
                    <div class="modal-details">
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Location</div>
                            <div class="modal-detail-value">${Data.escapeHtml(location)}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Reported</div>
                            <div class="modal-detail-value">${relativeTime}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Contact</div>
                            <div class="modal-detail-value">${Data.escapeHtml(contactName)}</div>
                        </div>
                        <div class="modal-detail-item">
                            <div class="modal-detail-label">Phone</div>
                            <div class="modal-detail-value">${Data.escapeHtml(item["Phone"] || 'Not provided')}</div>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-primary" onclick="UI.handleContactClick(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Chat with Finder
                        </button>
                        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        requestAnimationFrame(() => modal.classList.add('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    }
};

// ============================================
// DATA MODULE - Mock Data Storage
// ============================================
const Data = {
    getItems: function() {
        return DI;
    },
    
    addItem: function(itemData) {
        const newItem = {
            id: 'item_' + Date.now(),
            ...itemData,
            "Timestamp": new Date().toISOString()
        };
        DI.unshift(newItem);
        return newItem;
    },
    
    getItemById: function(id) {
        return DI.find(item => item.id === id);
    },
    
    submitReport: function(formData) {
        return new Promise((resolve) => {
            const userData = Auth.getUserData();
            
            const itemData = {
                "Type": formData.reportType,
                "Item Name": formData.itemName,
                "Category": formData.category,
                "Location": formData.location,
                "Description": formData.description,
                "Email": formData.contact,
                "Phone": formData.phone,
                "Reporter": userData ? userData.fullName : 'Anonymous',
                "RegNo": userData ? userData.regNumber : '',
                "Image": formData.image || ''
            };
            
            const newItem = this.addItem(itemData);
            setTimeout(() => resolve({ success: true, item: newItem }), 500);
        });
    },
    
    fetchItems: async function() {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ data: DI }), 300);
        });
    },
    
    renderItems: function(items, containerId, type) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        if (!items || items.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </div>
                    <p class="empty-state-text">No items reported currently.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = items.map((item, index) => this.createItemCard(item, type, index)).join('');
        this.attachCardListeners(container);
    },
    
    createItemCard: function(item, type, index) {
        const badgeClass = type === 'lost' ? 'lost-badge' : 'found-badge';
        const buttonText = type === 'lost' ? 'View Details' : 'Claim';
        const contactName = item["Reporter"] || (item["Email"] ? item["Email"].split('@')[0] : 'Owner');
        const relativeTime = this.formatRelativeTime(item["Timestamp"]);
        const itemName = item["Item Name"] || 'Unnamed Item';
        const location = item["Location"] || 'Unknown';
        const description = item["Description"] || '';
        const category = item["Category"] || 'other';
        
        const hasImage = item["Image"] && item["Image"].trim() !== '';
        const cardImageContent = hasImage
            ? `<img src="images/${item["Image"]}" alt="${this.escapeHtml(itemName)}" class="card-img">`
            : `<div class="card-img-placeholder">${CONFIG.PLACEHOLDER_IMAGES[category] || CONFIG.PLACEHOLDER_IMAGES.other}</div>`;
        
        return `
            <article class="item-card" data-item-id="${item.id || index}" data-category="${category}" style="animation: fadeInUp 0.5s ease-out ${index * 0.1}s both;">
                <div class="card-image">
                    ${cardImageContent}
                </div>
                <div class="card-content">
                    <span class="card-badge ${badgeClass}">${type === 'lost' ? 'Lost' : 'Found'}</span>
                    <h3 class="card-title">${this.escapeHtml(itemName)}</h3>
                    <p class="card-desc">${this.escapeHtml(description)}</p>
                    <div class="card-meta">
                        <span class="card-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            ${relativeTime}
                        </span>
                        <span class="card-meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                            </svg>
                            ${this.escapeHtml(location)}
                        </span>
                    </div>
                    <div class="card-contact">
                        <span class="contact-name">${this.escapeHtml(contactName)}</span>
                        <div class="card-actions">
                            <button class="btn-contact" data-action="view" data-item='${JSON.stringify(item).replace(/'/g, "&#39;")}'>
                                ${buttonText}
                            </button>
                            <button class="btn-chat" data-action="chat" data-item='${JSON.stringify(item).replace(/'/g, "&#39;")}'>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                                Chat
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    },
    
    attachCardListeners: function(container) {
        const viewButtons = container.querySelectorAll('[data-action="view"]');
        const chatButtons = container.querySelectorAll('[data-action="chat"]');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemData = JSON.parse(this.dataset.item);
                UI.openItemModal(itemData);
            });
        });
        
        chatButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemData = JSON.parse(this.dataset.item);
                UI.handleContactClick(itemData);
            });
        });
    },
    
    formatRelativeTime: function(timestamp) {
        if (!timestamp) return 'Recently';
        
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return `${Math.floor(diffDays / 30)} months ago`;
    },
    
    escapeHtml: function(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// ============================================
// FORUM / CHAT MODULE
// ============================================
const Forum = {
    currentThread: null,
    
    init: function() {
        const urlParams = new URLSearchParams(window.location.search);
        const threadId = urlParams.get('thread');
        
        this.renderThreadList();
        if (threadId) this.openThread(threadId);
        this.initChatInput();
    },
    
    renderThreadList: function() {
        const container = document.getElementById('thread-list-items');
        if (!container) return;
        
        const userData = Auth.getUserData();
        const userEmail = userData ? userData.email : '';
        const userThreads = DTH.filter(t => t.participants.includes(userEmail));
        
        if (userThreads.length === 0) {
            container.innerHTML = `
                <div class="thread-empty">
                    <p>No conversations yet.</p>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Start by clicking "Chat" on any item.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = userThreads.map(thread => `
            <div class="thread-item ${this.currentThread?.id === thread.id ? 'active' : ''}" data-thread-id="${thread.id}">
                <div class="thread-item-title">
                    <span>${Data.escapeHtml(thread.itemName)}</span>
                </div>
                <div class="thread-item-meta">${Data.formatRelativeTime(thread.lastMessageTime)}</div>
            </div>
        `).join('');
        
        container.querySelectorAll('.thread-item').forEach(item => {
            item.addEventListener('click', () => this.openThread(item.dataset.threadId));
        });
    },
    
    openThread: function(threadId) {
        const thread = DTH.find(t => t.id === threadId);
        if (!thread) return;
        
        this.currentThread = thread;
        
        document.querySelectorAll('.thread-item').forEach(item => {
            item.classList.toggle('active', item.dataset.threadId === threadId);
        });
        
        const chatPanel = document.getElementById('chat-panel');
        const chatHeader = document.getElementById('chat-header');
        const chatMessages = document.getElementById('chat-messages');
        const chatNoThread = document.getElementById('chat-no-thread');
        
        if (chatPanel) chatPanel.style.display = 'flex';
        if (chatNoThread) chatNoThread.style.display = 'none';
        
        if (chatHeader) {
            chatHeader.innerHTML = `
                <div class="chat-header-title">${Data.escapeHtml(thread.itemName)}</div>
                <div class="chat-header-meta">Started ${Data.formatRelativeTime(thread.createdAt)}</div>
            `;
        }
        
        this.renderMessages(threadId);
        
        const chatInput = document.getElementById('chat-message-input');
        if (chatInput) chatInput.focus();
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    },
    
    renderMessages: function(threadId) {
        const container = document.getElementById('chat-messages');
        if (!container) return;
        
        const messages = DMsgs[threadId] || [];
        const userData = Auth.getUserData();
        const userEmail = userData ? userData.email : '';
        
        if (messages.length === 0) {
            container.innerHTML = `
                <div class="chat-no-thread" style="flex: 1;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <p>No messages yet. Start the conversation!</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = messages.map(msg => `
            <div class="chat-message ${msg.sender === userEmail ? 'own' : 'other'}">
                <div class="chat-bubble">
                    ${msg.sender !== userEmail ? `<div class="chat-message-sender">${Data.escapeHtml(msg.senderName)}</div>` : ''}
                    <div class="chat-message-text">${Data.escapeHtml(msg.text)}</div>
                    ${msg.meetingPlace ? `<div class="chat-message-meeting" style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">Meeting: ${Data.escapeHtml(msg.meetingPlace)}</div>` : ''}
                    <div class="chat-message-time">${this.formatTime(msg.timestamp)}</div>
                </div>
            </div>
        `).join('');
        
        container.scrollTop = container.scrollHeight;
    },
    
    formatTime: function(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    },
    
    initChatInput: function() {
        const sendBtn = document.getElementById('chat-send-btn');
        const input = document.getElementById('chat-message-input');
        
        if (sendBtn && input) {
            sendBtn.addEventListener('click', () => this.sendMessage());
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    },
    
    sendMessage: function() {
        if (!this.currentThread) {
            UI.showToast('Please select a conversation first', 'warning');
            return;
        }
        
        const input = document.getElementById('chat-message-input');
        const meetingInput = document.getElementById('chat-meeting-input');
        
        if (!input || !input.value.trim()) {
            UI.showToast('Please enter a message', 'warning');
            return;
        }
        
        const userData = Auth.getUserData();
        if (!userData) {
            UI.showToast('Please log in to send messages', 'error');
            return;
        }
        
        const message = {
            id: 'msg_' + Date.now(),
            sender: userData.email,
            senderName: userData.fullName,
            text: input.value.trim(),
            meetingPlace: meetingInput ? meetingInput.value.trim() : '',
            timestamp: new Date().toISOString()
        };
        
        if (!DMsgs[this.currentThread.id]) DMsgs[this.currentThread.id] = [];
        DMsgs[this.currentThread.id].push(message);
        
        this.currentThread.lastMessage = message.text;
        this.currentThread.lastMessageTime = message.timestamp;
        
        input.value = '';
        if (meetingInput) meetingInput.value = '';
        
        this.renderMessages(this.currentThread.id);
        this.renderThreadList();
    }
};

// ============================================
// SYNC MODULE
// ============================================
const Sync = {
    getElements: function() {
        return {
            loadingBar: document.getElementById('top-loading-bar'),
            syncBtn: document.getElementById('sync-btn'),
            lostGrid: document.getElementById('lost-items-grid'),
            foundGrid: document.getElementById('found-items-grid')
        };
    },
    
    showLoading: function() {
        const { loadingBar, syncBtn } = this.getElements();
        if (loadingBar) loadingBar.classList.add('is-loading');
        if (syncBtn) syncBtn.classList.add('syncing');
    },
    
    hideLoading: function() {
        const { loadingBar, syncBtn } = this.getElements();
        if (loadingBar) loadingBar.classList.remove('is-loading');
        if (syncBtn) syncBtn.classList.remove('syncing');
    },
    
    filterByType: function(items, type) {
        if (!items || !Array.isArray(items)) return [];
        return items.filter(item => (item["Type"] || '').toLowerCase() === type.toLowerCase());
    },
    
    fetchItems: async function() {
        this.showLoading();
        
        try {
            const response = await Data.fetchItems();
            let items = response?.data || response || [];
            
            const lostItems = this.filterByType(items, 'lost');
            const foundItems = this.filterByType(items, 'found');
            
            Data.renderItems(lostItems, 'lost-items-grid', 'lost');
            Data.renderItems(foundItems, 'found-items-grid', 'found');
            
            const totalItems = lostItems.length + foundItems.length;
            UI.showToast(totalItems > 0 ? `Loaded ${totalItems} items` : 'No items found', totalItems > 0 ? 'success' : 'info');
            
        } catch (error) {
            console.error('Sync error:', error);
            UI.showToast('Failed to sync with database.', 'error');
        } finally {
            this.hideLoading();
        }
    },
    
    init: function() {
        const { syncBtn } = this.getElements();
        if (syncBtn) syncBtn.addEventListener('click', () => this.fetchItems());
        this.fetchItems();
    }
};

// ============================================
// AUTH FORM HANDLERS
// ============================================
const AuthForms = {
    init: function() {
        this.initTabs();
        this.initLoginForm();
        this.initRegisterForm();
        this.initPasswordToggles();
    },
    
    initTabs: function() {
        const tabs = document.querySelectorAll('.auth-tab');
        const indicator = document.getElementById('tab-indicator');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const title = document.getElementById('auth-title');
        const subtitle = document.getElementById('auth-subtitle');
        
        if (!tabs.length || !indicator) return;
        
        const activeTab = document.querySelector('.auth-tab.active');
        if (activeTab) {
            indicator.style.width = `${activeTab.offsetWidth}px`;
            indicator.style.left = `${activeTab.offsetLeft}px`;
        }
        
        const switchTab = (tabName) => {
            tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.tab === tabName));
            const targetTab = document.querySelector(`.auth-tab[data-tab="${tabName}"]`);
            if (targetTab) {
                indicator.style.width = `${targetTab.offsetWidth}px`;
                indicator.style.left = `${targetTab.offsetLeft}px`;
            }
            
            if (tabName === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                title.textContent = 'Welcome Back';
                subtitle.textContent = 'Sign in to your Campus Hunt account';
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                title.textContent = 'Create Account';
                subtitle.textContent = 'Join the Campus Hunt community';
            }
        };
        
        tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
        document.querySelectorAll('.auth-toggle-link').forEach(link => {
            link.addEventListener('click', (e) => { e.preventDefault(); switchTab(link.dataset.target); });
        });
    },
    
    initLoginForm: function() {
        const form = document.getElementById('login-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            const submitBtn = document.getElementById('login-submit');
            
            if (!email || !password) {
                UI.showToast('Please fill in all fields', 'error');
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            setTimeout(() => {
                const result = UserDB.validateCredentials(email, password);
                
                if (result.success) {
                    localStorage.setItem(CONFIG.STORAGE_KEYS.AUTH, CONFIG.AUTH_TOKEN);
                    Auth.login(result.user);
                    Navigation.update();
                    UI.showToast(`Welcome back, ${result.user.fullName.split(' ')[0]}!`, 'success');
                    window.location.href = 'index.html';
                } else {
                    UI.showToast(result.message, 'error');
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('loading');
                }
            }, 500);
        });
    },
    
    initRegisterForm: function() {
        const form = document.getElementById('register-form');
        if (!form) return;
        
        const regNumberInput = document.getElementById('reg-number');
        const passwordInput = document.getElementById('reg-password');
        const confirmPasswordInput = document.getElementById('reg-confirm-password');
        const submitBtn = document.getElementById('register-submit');
        
        if (regNumberInput) {
            regNumberInput.addEventListener('input', () => {
                const value = regNumberInput.value;
                const validation = RegNumberValidator.validate(value);
                
                if (!value) {
                    UI.clearValidationMessage('reg-number-validation');
                    regNumberInput.classList.remove('valid', 'invalid');
                    return;
                }
                
                if (validation.isValid) {
                    UI.showValidationMessage('reg-number-validation', validation.message, false);
                    regNumberInput.classList.add('valid');
                    regNumberInput.classList.remove('invalid');
                } else {
                    UI.showValidationMessage('reg-number-validation', validation.errors[0], true);
                    regNumberInput.classList.add('invalid');
                    regNumberInput.classList.remove('valid');
                }
            });
            
            regNumberInput.addEventListener('blur', () => {
                regNumberInput.value = regNumberInput.value.toLowerCase().replace(/\s/g, '');
            });
        }
        
        if (passwordInput) {
            passwordInput.addEventListener('input', () => UI.updatePasswordStrength(passwordInput.value));
        }
        
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                const password = passwordInput.value;
                const confirm = confirmPasswordInput.value;
                
                if (!confirm) {
                    UI.clearValidationMessage('confirm-password-validation');
                    confirmPasswordInput.classList.remove('valid', 'invalid');
                    return;
                }
                
                if (password === confirm) {
                    UI.showValidationMessage('confirm-password-validation', 'Passwords match', false);
                    confirmPasswordInput.classList.add('valid');
                    confirmPasswordInput.classList.remove('invalid');
                } else {
                    UI.showValidationMessage('confirm-password-validation', 'Passwords do not match', true);
                    confirmPasswordInput.classList.add('invalid');
                    confirmPasswordInput.classList.remove('valid');
                }
            });
        }
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('reg-fullname').value.trim();
            const regNumber = document.getElementById('reg-number').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            const termsCheckbox = document.getElementById('terms-checkbox');
            
            if (!fullName || !regNumber || !email || !password || !confirmPassword) {
                UI.showToast('Please fill in all required fields', 'error');
                return;
            }
            
            if (!termsCheckbox.checked) {
                UI.showToast('Please accept the Terms of Service', 'error');
                return;
            }
            
            const regValidation = RegNumberValidator.validate(regNumber);
            if (!regValidation.isValid) {
                UI.showToast(`Invalid Registration Number: ${regValidation.errors[0]}`, 'error');
                document.getElementById('reg-number').focus();
                return;
            }
            
            if (password !== confirmPassword) {
                UI.showToast('Passwords do not match', 'error');
                document.getElementById('reg-confirm-password').focus();
                return;
            }
            
            const strength = UI.calculatePasswordStrength(password);
            if (strength.score < 2) {
                UI.showToast('Please choose a stronger password', 'error');
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            setTimeout(() => {
                const result = UserDB.addUser({
                    fullName: fullName,
                    regNumber: regNumber,
                    email: email,
                    password: password
                });
                
                if (result.success) {
                    Auth.login(result.user);
                    Navigation.update();
                    UI.showToast('Account created successfully!', 'success');
                    setTimeout(() => window.location.href = 'index.html', 1500);
                } else {
                    UI.showToast(result.message, 'error');
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('loading');
                }
            }, 800);
        });
    },
    
    initPasswordToggles: function() {
        document.querySelectorAll('.password-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const targetId = toggle.dataset.target;
                const input = document.getElementById(targetId);
                if (!input) return;
                
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                
                const eyeOpen = toggle.querySelector('.eye-open');
                const eyeClosed = toggle.querySelector('.eye-closed');
                
                if (eyeOpen) eyeOpen.classList.toggle('hidden', !isPassword);
                if (eyeClosed) eyeClosed.classList.toggle('hidden', isPassword);
            });
        });
    }
};

// ============================================
// REPORT FORM HANDLER
// ============================================
const ReportForm = {
    init: function() {
        if (!Auth.isAuthenticated()) {
            UI.showAuthGate('You must be logged in to report items');
            return;
        }
        
        const form = document.getElementById('report-form');
        const submitBtn = document.getElementById('submit-btn');
        
        if (!form || !submitBtn) return;
        
        const userData = Auth.getUserData();
        const contactInput = document.getElementById('contact');
        if (contactInput && userData && userData.email) {
            contactInput.value = userData.email;
        }
        
        const dateInput = document.getElementById('date');
        if (dateInput) dateInput.valueAsDate = new Date();
        
        this.initImagePreview();
        this.initPhoneValidation();
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const phoneInput = document.getElementById('phone');
            if (phoneInput && phoneInput.value.length !== 10) {
                UI.showToast('Please enter a valid 10-digit mobile number', 'error');
                phoneInput.focus();
                return;
            }
            
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            const userData = Auth.getUserData();
            const imageInput = document.getElementById('image');
            
            const formData = {
                reportType: document.querySelector('input[name="report-type"]:checked').value,
                itemName: document.getElementById('item-name').value,
                category: document.getElementById('category').value,
                location: document.getElementById('location').value,
                date: document.getElementById('date').value,
                description: document.getElementById('description').value,
                contact: document.getElementById('contact').value,
                phone: document.getElementById('phone').value,
                image: imageInput && imageInput.files[0] ? imageInput.files[0].name : '',
                reporterName: userData ? userData.fullName : 'Anonymous',
                reporterRegNo: userData ? userData.regNumber : ''
            };
            
            if (!formData.itemName || !formData.category || !formData.location || !formData.contact) {
                UI.showToast('Please fill in all required fields', 'error');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                return;
            }
            
            try {
                await Data.submitReport(formData);
                UI.showToast('Item reported successfully!', 'success');
                setTimeout(() => window.location.href = 'index.html', 1500);
            } catch (error) {
                console.error('Error submitting report:', error);
                UI.showToast('Error submitting report. Please try again.', 'error');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    },
    
    initImagePreview: function() {
        const fileInput = document.getElementById('image');
        const previewContainer = document.getElementById('image-preview');
        const previewImg = document.getElementById('preview-img');
        const removeBtn = document.getElementById('remove-image-btn');
        
        if (!fileInput || !previewContainer) return;
        
        fileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (previewImg) previewImg.src = e.target.result;
                    previewContainer.classList.add('active');
                };
                reader.readAsDataURL(file);
            }
        });
        
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                fileInput.value = '';
                previewContainer.classList.remove('active');
                if (previewImg) previewImg.src = '';
            });
        }
    },
    
    initPhoneValidation: function() {
        const phoneInput = document.getElementById('phone');
        if (!phoneInput) return;
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }
};

// ============================================
// CATEGORY FILTER HANDLER
// ============================================
const CategoryFilter = {
    init: function() {
        const pills = document.querySelectorAll('.category-pill');
        
        pills.forEach(pill => {
            pill.addEventListener('click', function() {
                const container = this.closest('.category-pills-container');
                container.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.textContent.toLowerCase();
                const section = this.closest('.items-section');
                const grid = section.querySelector('.items-grid');
                
                const cards = grid.querySelectorAll('.item-card');
                cards.forEach(card => {
                    if (category === 'all items') {
                        card.style.display = '';
                    } else {
                        const cardCategory = card.dataset.category || '';
                        const categoryMatch = cardCategory.toLowerCase().includes(category) || category.includes(cardCategory.toLowerCase());
                        card.style.display = categoryMatch ? '' : 'none';
                    }
                });
            });
        });
    }
};

// ============================================
// PROFILE MODULE
// ============================================
const Profile = {
    init: function() {
        if (!Auth.isAuthenticated() || Auth.isGuest()) {
            UI.showToast('Please log in to view your profile', 'warning');
            setTimeout(() => window.location.href = 'login.html', 1500);
            return;
        }

        const userData = Auth.getUserData();
        if (!userData) {
            window.location.href = 'login.html';
            return;
        }

        this.populateUserData(userData);
        this.loadUserItems(userData.email);
    },

    populateUserData: function(userData) {
        const nameEl = document.getElementById('profile-name');
        const regnoEl = document.getElementById('profile-regno');
        const emailEl = document.getElementById('profile-email');

        if (nameEl) nameEl.textContent = userData.fullName || 'Unknown User';
        if (regnoEl) regnoEl.textContent = userData.regNumber || '-';
        if (emailEl) emailEl.textContent = userData.email || '-';
    },

    loadUserItems: async function(userEmail) {
        const grid = document.getElementById('profile-items-grid');
        if (!grid) return;

        Sync.showLoading();

        try {
            const response = await Data.fetchItems();
            let items = response?.data || response || [];
            const userItems = items.filter(item => (item["Email"] || '').toLowerCase() === userEmail.toLowerCase());

            if (userItems.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>
                            </svg>
                        </div>
                        <p class="empty-state-text">You haven't reported any items yet.</p>
                        <a href="report.html" class="btn btn-primary" style="margin-top: 1rem;">Report Your First Item</a>
                    </div>
                `;
            } else {
                Data.renderItems(userItems, 'profile-items-grid', userItems[0]["Type"] || 'found');
            }
        } catch (error) {
            console.error('Error loading user items:', error);
        } finally {
            Sync.hideLoading();
        }
    }
};

// ============================================
// IMAGE PREVIEW FUNCTION
// ============================================
function prevImg(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            let preview = document.getElementById('img-preview');
            if (!preview) {
                preview = document.createElement('div');
                preview.id = 'img-preview';
                preview.className = 'image-preview active';
                preview.innerHTML = `
                    <img id="preview-img" src="" alt="Preview">
                    <button type="button" id="remove-image-btn" class="image-preview-remove">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                `;
                input.parentNode.appendChild(preview);
                
                document.getElementById('remove-image-btn').addEventListener('click', function() {
                    input.value = '';
                    preview.classList.remove('active');
                    document.getElementById('preview-img').src = '';
                });
            }
            document.getElementById('preview-img').src = e.target.result;
            preview.classList.add('active');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    Theme.init();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', () => Theme.toggle());
    
    Navigation.update();
    
    if (window.location.pathname.includes('login.html')) AuthForms.init();
    if (document.getElementById('report-form')) ReportForm.init();
    CategoryFilter.init();
    
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    const isIndexPage = window.location.pathname.includes('index.html') || 
                        window.location.pathname === '/' || 
                        window.location.pathname.endsWith('/') ||
                        window.location.pathname.endsWith('lost-and-found');
    if (isIndexPage) {
        if (!Auth.isAuthenticated() && !Auth.isGuest()) {
            UI.showAuthGate('Please log in or continue as a guest to view items.', true);
        }
        Sync.init();
    }
    
    if (window.location.pathname.includes('profile.html')) Profile.init();
    
    if (window.location.pathname.includes('forum.html')) {
        if (!Auth.isAuthenticated()) {
            UI.showToast('Please log in to access the forum', 'warning');
            setTimeout(() => window.location.href = 'login.html', 1500);
            return;
        }
        Forum.init();
    }
});

// ============================================
// EXPORT FOR TESTING
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Auth, Theme, Navigation, UI, Data, UserDB, RegNumberValidator, AuthForms, ReportForm, Profile, Forum, Sync, CONFIG, DI, DTH, DMsgs };
}
