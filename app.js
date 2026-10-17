/* ==========================================================================
   STIWS STUDENT HUB - JAVASCRIPT APPLICATION CORE
   ========================================================================== */

// --- PRODUCT DATABASE ---
const PRODUCTS_DB = [
    {
        id: "prod-polo",
        name: "STIWS Polo Uniform",
        category: "uniforms",
        price: 670.00,
        desc: "Official premium STIWS button-up polo uniform. Made with highly breathable, durable cotton-blend fabric. Features detailed gold collar embroidery and the official STIWS emblem patch stitched securely on the left pocket.",
        stock: 85,
        sizes: ["S", "M", "L"],
        rating: 4.8,
        image: "poloproduct.jpg",
        // High fidelity custom SVGs
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- Torso -->
            <path d="M55 60 L145 60 L150 170 C150 175, 140 180, 100 180 C60 180, 50 175, 50 170 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <!-- Sleeves -->
            <path d="M55 60 L25 80 L35 110 L50 95" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <path d="M145 60 L175 80 L165 110 L150 95" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <!-- Sleeve Cuffs (Blue & Gold) -->
            <path d="M25 80 L35 110" stroke="#0A397B" stroke-width="3"/>
            <path d="M28 83 L38 113" stroke="#FFD100" stroke-width="1.5"/>
            <path d="M175 80 L165 110" stroke="#0A397B" stroke-width="3"/>
            <path d="M172 83 L162 113" stroke="#FFD100" stroke-width="1.5"/>
            <!-- Placket (Buttons Center) -->
            <rect x="95" y="80" width="10" height="100" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
            <circle cx="100" cy="95" r="3" fill="#E2E8F0"/>
            <circle cx="100" cy="120" r="3" fill="#E2E8F0"/>
            <circle cx="100" cy="145" r="3" fill="#E2E8F0"/>
            <!-- Pocket with Stitched Logo Badge -->
            <path d="M115 95 H135 V115 L125 122 L115 115 Z" fill="#FFFFFF" stroke="#0A397B" stroke-width="1"/>
            <circle cx="125" cy="107" r="4" fill="#0A397B"/>
            <circle cx="125" cy="107" r="2.5" fill="#FFD100"/>
            <!-- Collar Stripes (STI Blue and Yellow) -->
            <path d="M55 60 L80 80 L100 65 L120 80 L145 60" stroke="#0A397B" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M57 58 L82 78 L100 63 L118 78 L143 58" stroke="#FFD100" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <!-- Collar Flaps -->
            <path d="M55 60 L85 85 L100 70 Z" fill="#FFFFFF" stroke="#0A397B" stroke-width="1.5"/>
            <path d="M145 60 L115 85 L100 70 Z" fill="#FFFFFF" stroke="#0A397B" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: "prod-pe",
        name: "STI PE Shirt & Jogger Set",
        category: "uniforms",
        price: 850.00,
        desc: "Official physical education athletic uniform. Made from premium lightweight dry-fit jersey fabric with contrasting side stripes. Enforces maximum durability during sporting activities and comes complete with comfortable drawstring joggers.",
        stock: 12,
        sizes: ["S", "M", "L"],
        rating: 4.6,
        image: "peproduct.jpg",
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- PE Shirt Torso -->
            <path d="M60 50 L140 50 L145 115 H55 Z" fill="#FFD100" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Sleeves -->
            <path d="M60 50 L35 68 L48 90 L55 82" fill="#FFD100" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M140 50 L165 68 L152 90 L145 82" fill="#FFD100" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Sleeve Stripes (STI Blue) -->
            <path d="M35 68 L48 90" stroke="#0A397B" stroke-width="4.5"/>
            <path d="M165 68 L152 90" stroke="#0A397B" stroke-width="4.5"/>
            <!-- Front V-Neck Accent and STI Text logo -->
            <path d="M80 50 L100 68 L120 50" stroke="#0A397B" stroke-width="4" fill="none"/>
            <rect x="85" y="78" width="30" height="12" rx="3" fill="#0A397B"/>
            <text x="100" y="87" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-weight="900" font-size="8" text-anchor="middle">PE</text>
            <!-- Drawstring Joggers Pants below -->
            <path d="M70 125 H130 L135 180 H118 L113 145 L100 145 L95 145 L87 180 H70 Z" fill="#0A397B" stroke="#E2E8F0" stroke-width="1"/>
            <!-- Pants Side Stripes (Yellow) -->
            <path d="M72 125 L72 180" stroke="#FFD100" stroke-width="2.5"/>
            <path d="M128 125 L128 180" stroke="#FFD100" stroke-width="2.5"/>
            <!-- Drawstring -->
            <circle cx="100" cy="129" r="2.5" fill="#FFD100"/>
            <path d="M98 129 L95 137 M102 129 L105 137" stroke="#FFD100" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: "prod-jacket",
        name: "STI Premium Hoodie Jacket",
        category: "jackets",
        price: 1200.00,
        desc: "Exquisite, ultra-warm campus lifestyle collegiate hoodie jacket. Features thick STI blue fleeced knit cotton, deep dual pockets, an adjustable hood with rich gold drawstrings, and prominent premium varsity-style STI chest letters.",
        stock: 42,
        sizes: ["S", "M", "L"],
        rating: 4.9,
        image: "hoodieproduct.jpg",
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- Sleeves -->
            <path d="M50 65 L20 120 L30 160 L50 140" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <path d="M150 65 L180 120 L170 160 L150 140" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <!-- Sleeve Yellow Cuffs -->
            <rect x="20" y="153" width="10" height="8" transform="rotate(15 20 153)" fill="#FFD100"/>
            <rect x="170" y="153" width="10" height="8" transform="rotate(-15 170 153)" fill="#FFD100"/>
            <!-- Jacket Torso -->
            <path d="M50 65 H150 V160 C150 165, 140 170, 100 170 C60 170, 50 165, 50 160 Z" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <!-- Zipper (Gold Center Line) -->
            <line x1="100" y1="85" x2="100" y2="168" stroke="#FFD100" stroke-width="2.5" stroke-dasharray="1.5 1"/>
            <!-- Varsity Logo (STI in bold yellow) -->
            <rect x="70" y="98" width="60" height="24" rx="4" fill="rgba(255, 209, 0, 0.1)"/>
            <text x="100" y="116" fill="#FFD100" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" text-anchor="middle" letter-spacing="1">STI</text>
            <!-- Dual pockets -->
            <path d="M60 140 H85 V162 H60 Z" fill="#051C3E"/>
            <path d="M140 140 H115 V162 H140 Z" fill="#051C3E"/>
            <!-- Hood (Draped on shoulders) -->
            <path d="M60 65 C60 40, 140 40, 140 65 Z" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <path d="M75 65 C75 50, 125 50, 125 65" fill="#051C3E"/>
            <!-- Drawstrings (Gold rope lines) -->
            <path d="M85 65 L80 92 M115 65 L120 92" stroke="#FFD100" stroke-width="2" stroke-linecap="round"/>
            <circle cx="80" cy="93" r="2" fill="#FBB03B"/>
            <circle cx="120" cy="93" r="2" fill="#FBB03B"/>
        </svg>`
    },
    {
        id: "prod-bag",
        name: "STI Tech Backpack",
        category: "accessories",
        price: 950.00,
        desc: "Sleek heavy-duty water-resistant tech backpack engineered for the modern student. Features protective compartment padded sleeves (fits up to 15.6 inch laptops), robust gold buckles, chest straps, and integrated reflective safety lines.",
        stock: 0,
        sizes: ["L"],
        rating: 4.7,
        image: "bagproduct.jpg",
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- Main Backpack Body -->
            <path d="M60 50 C60 40, 140 40, 140 50 L145 165 C145 172, 138 178, 130 178 H70 C62 178, 55 172, 55 165 Z" fill="#1F2937" stroke="#111827" stroke-width="2"/>
            <!-- Top Handle -->
            <path d="M80 40 C80 30, 120 30, 120 40" stroke="#1F2937" stroke-width="4.5" fill="none"/>
            <!-- Outer Pocket (Blue) -->
            <path d="M65 105 H135 V165 C135 170, 130 174, 125 174 H75 C70 174, 65 170, 65 165 Z" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <!-- Pocket Zipper Line (Gold) -->
            <path d="M65 118 H135" stroke="#FFD100" stroke-width="2.5"/>
            <!-- Reflective Accent Strips -->
            <path d="M75 135 H125" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.3"/>
            <!-- STI Branding Emblem -->
            <circle cx="100" cy="78" r="14" fill="#FFD100"/>
            <text x="100" y="83" fill="#0A397B" font-family="'Outfit', sans-serif" font-weight="900" font-size="9" text-anchor="middle">STI</text>
            <!-- Side Mesh Pockets -->
            <path d="M55 110 C50 110, 48 135, 55 140 Z" fill="#111827"/>
            <path d="M145 110 C150 110, 152 135, 145 140 Z" fill="#111827"/>
            <!-- Buckles (Gold Accent blocks) -->
            <rect x="70" y="160" width="8" height="5" rx="1.5" fill="#FFD100"/>
            <rect x="122" y="160" width="8" height="5" rx="1.5" fill="#FFD100"/>
        </svg>`
    },
    {
        id: "prod-lanyard",
        name: "STI Lanyard & Card Case",
        category: "accessories",
        price: 120.00,
        desc: "Woven high-density double-sided polyester ribbon lanyard straps. Emblazoned with striking yellow and blue team lines. Comes complete with a sturdy chrome metal quick-release clasp hook and a premium clear frosted acrylic plastic ID card case.",
        stock: 150,
        sizes: ["S"],
        rating: 4.5,
        image: "lanyardproduct.jpg",
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- Lanyard Strap Loop (Blue and Gold Woven Ribbon) -->
            <path d="M60 20 C60 100, 100 120, 100 125" stroke="#0A397B" stroke-width="6.5" fill="none" stroke-linecap="round"/>
            <path d="M140 20 C140 100, 100 120, 100 125" stroke="#0A397B" stroke-width="6.5" fill="none" stroke-linecap="round"/>
            <!-- Strap inner Gold Stripe -->
            <path d="M60 20 C60 100, 100 120, 100 125" stroke="#FFD100" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M140 20 C140 100, 100 120, 100 125" stroke="#FFD100" stroke-width="2" fill="none" stroke-linecap="round"/>
            <!-- Clasp Key Hook (Chrome metal) -->
            <circle cx="100" cy="128" r="4.5" fill="#94A3B8" stroke="#475569" stroke-width="1.5"/>
            <rect x="97" y="132" width="6" height="12" fill="#E2E8F0" stroke="#475569" stroke-width="1.5"/>
            <!-- ID Card Holder Frame -->
            <rect x="75" y="144" width="50" height="42" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <!-- ID Card Inner Details -->
            <rect x="80" y="152" width="10" height="10" rx="1" fill="#0A397B"/>
            <rect x="94" y="152" width="24" height="2.5" fill="#475569"/>
            <rect x="94" y="157" width="16" height="2.5" fill="#94A3B8"/>
            <rect x="80" y="172" width="40" height="4" fill="#FFD100"/>
            <text x="100" y="181" fill="#0A397B" font-family="'Outfit', sans-serif" font-weight="900" font-size="5" text-anchor="middle">STI</text>
        </svg>`
    },
    {
        id: "prod-cap",
        name: "STI Collegiate Sports Cap",
        category: "accessories",
        price: 350.00,
        desc: "Structured, durable 6-panel athletic navy blue baseball cap. Features premium golden yellow ventilation eyelet stitching, a fully adjustable brass-buckle metal backstrap, and a stunning 3D-raised embroidered college logo.",
        stock: 3,
        sizes: ["M"],
        rating: 4.4,
        image: "capproduct.jpg",
        svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#F1F5F9"/>
            <!-- Cap Dome -->
            <path d="M50 115 C50 50, 150 50, 150 115 Z" fill="#0A397B" stroke="#051C3E" stroke-width="1.5"/>
            <!-- Crown Button -->
            <circle cx="100" cy="50" r="4.5" fill="#FFD100" stroke="#D1A700" stroke-width="1"/>
            <!-- Ventilation Eyelets -->
            <circle cx="78" cy="74" r="2.5" fill="none" stroke="#FFD100" stroke-width="1.5"/>
            <circle cx="122" cy="74" r="2.5" fill="none" stroke="#FFD100" stroke-width="1.5"/>
            <!-- Seam Lines -->
            <path d="M100 50 Q100 80 100 115" stroke="#051C3E" stroke-width="1.2" stroke-dasharray="1.5 1"/>
            <path d="M100 50 Q75 75 50 115" stroke="#051C3E" stroke-width="1.2" stroke-dasharray="1.5 1"/>
            <path d="M100 50 Q125 75 150 115" stroke="#051C3E" stroke-width="1.2" stroke-dasharray="1.5 1"/>
            <!-- 3D STI Emblem embroidery -->
            <rect x="80" y="80" width="40" height="18" rx="3" fill="#FFD100"/>
            <text x="100" y="93" fill="#0A397B" font-family="'Outfit', sans-serif" font-weight="900" font-size="12" text-anchor="middle" letter-spacing="0.5">STI</text>
            <!-- Cap Visor / Bill (Slightly curved) -->
            <path d="M148 112 C168 116, 185 130, 172 138 C155 148, 110 135, 100 135 C90 135, 45 148, 28 138 C15 130, 32 116, 52 112" fill="#051C3E" stroke="#031127" stroke-width="1"/>
        </svg>`
    }
];

// --- MOCK FAQS DATABASE ---
const FAQS_DB = [
    {
        q: "What are the designated days for wearing the STIWS uniform?",
        a: "The official STIWS button-up polo uniform (Academic Uniform) must be worn on Mondays, Tuesdays, Thursdays, and Fridays. The PE Shirt & Jogger Set is designated strictly for PE class days or Wednesdays (civilian athletic dress days) depending on individual campus bylaws."
    },
    {
        q: "Where do I claim my ordered merchandise items?",
        a: "All online orders placed through this portal are processed and sent to the campus bookstore panel located on the ground floor of the Academic Annex Building. Please present your digital order ticket (Order ID) along with your valid Student ID Card for claiming."
    },
    {
        q: "Can I pay for my merchandise using my outstanding tuition balance?",
        a: "No. Settle amounts for uniforms, jackets, or accessories are separate charges and cannot be charged directly to your academic ledger. Merchandise must be paid at checkout via our digital gateways or siphoned in cash at the cashier desk."
    },
    {
        q: "What is the return/exchange policy for incorrect merchandise sizes?",
        a: "Uniform sizes can be exchanged at the Bookstore Panel within 7 calendar days after claiming, provided the labels are intact and the uniform is unwashed, unworn, and shows no physical damage. We encourage referring to our sizing recommendation height tables before placing orders."
    },
    {
        q: "How does tuition online payment register in the portal database?",
        a: "Tuition assessments paid online (via GCash, Maya, or Debit Cards) process in real-time. The ledger deducts the settled payment amount instantly, reflecting your updated 'Paid to Date' and 'Current Balance Due' immediately in your portal screens."
    }
];

// --- STATE MANAGEMENT ---
let AppState = {
    currentUser: {
        name: "Ralphcj Paulino",
        id: "02000300183",
        section: "BSCS-401A",
        email: "ralphcj.paulino@student.sti.edu.ph",
        tuition: {
            totalAssessment: 26500.00,
            paidToDate: 8000.00,
            currentBalance: 18500.00,
            dueDate: "June 15, 2026",
            // Seed transaction histories
            transactions: [
                { date: "May 02, 2026", desc: "Downpayment (Enrollment)", amount: 5000.00, status: "Paid" },
                { date: "May 15, 2026", desc: "First Installment Payment", amount: 3000.00, status: "Paid" }
            ],
            // Track payment days (e.g. 2nd, 15th)
            paidDates: [2, 15]
        }
    },
    cart: [],
    wishlist: [],
    orders: [],
    currentView: "home",
    selectedFilters: {
        category: "all",
        size: "all",
        maxPrice: 2500
    },
    calendarDate: {
        year: 2026,
        month: 8 // September (0-indexed represents January, so 8 is Sept)
    },
    popupProduct: null,
    popupSelectedSize: "M",
    popupQty: 1,
    selectedPaymentGateway: "gcash",
    notifications: [
        { id: "not-1", date: "May 22", text: "Welcome to the new STI Student Hub Portal! Explore billing features & the shop." }
    ]
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Load local storage values if they exist
    loadPersistedData();
    
    // Bind input readonly details
    document.getElementById("ch-student-id").value = AppState.currentUser.id;
    document.getElementById("ch-section").value = AppState.currentUser.section;
    
    // Init rendering tasks
    renderHomeFeaturedProducts();
    renderShopProducts();
    renderTuitionPortal();
    updateMiniCalendar();
    updateLargeCalendar();
    updateCartUI();
    renderFAQs();
    renderOrders();
    renderNotifications();
    
    // Start slides transition timer loop
    startSlideLoop();
});

// --- HELPER PERSISTENCE FUNCTIONS ---
function loadPersistedData() {
    if (localStorage.getItem("sti_cart")) {
        AppState.cart = JSON.parse(localStorage.getItem("sti_cart"));
    }
    if (localStorage.getItem("sti_wishlist")) {
        AppState.wishlist = JSON.parse(localStorage.getItem("sti_wishlist"));
    }
    if (localStorage.getItem("sti_orders")) {
        AppState.orders = JSON.parse(localStorage.getItem("sti_orders"));
    }
    if (localStorage.getItem("sti_tuition")) {
        AppState.currentUser.tuition = JSON.parse(localStorage.getItem("sti_tuition"));
    }
    if (localStorage.getItem("sti_notifications")) {
        AppState.notifications = JSON.parse(localStorage.getItem("sti_notifications"));
    }
    if (localStorage.getItem("sti_uploaded_product_images")) {
        const uploadedImages = JSON.parse(localStorage.getItem("sti_uploaded_product_images"));
        Object.entries(uploadedImages).forEach(([id, image]) => {
            const product = PRODUCTS_DB.find(item => item.id === id);
            if (product) product.image = image;
        });
    }
}

function persistData(key) {
    if (key === "cart" || key === "all") {
        localStorage.setItem("sti_cart", JSON.stringify(AppState.cart));
    }
    if (key === "wishlist" || key === "all") {
        localStorage.setItem("sti_wishlist", JSON.stringify(AppState.wishlist));
    }
    if (key === "orders" || key === "all") {
        localStorage.setItem("sti_orders", JSON.stringify(AppState.orders));
    }
    if (key === "tuition" || key === "all") {
        localStorage.setItem("sti_tuition", JSON.stringify(AppState.currentUser.tuition));
    }
    if (key === "notifications" || key === "all") {
        localStorage.setItem("sti_notifications", JSON.stringify(AppState.notifications));
    }
}

function persistUploadedProductImages() {
    const uploadedImages = {};
    PRODUCTS_DB.forEach(product => {
        if (product.image) uploadedImages[product.id] = product.image;
    });
    localStorage.setItem("sti_uploaded_product_images", JSON.stringify(uploadedImages));
}

function getProductImageMarkup(product) {
    if (product.image) {
        return `<img src="${product.image}" alt="${product.name}" />`;
    }
    return product.svg;
}

// ==========================================================================
// PORTAL PAGE SYSTEM ROUTER
// ==========================================================================
function switchPage(pageId) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Remove active state from all nav buttons
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"));
    
    // Deactivate all page containers
    const pageContainers = document.querySelectorAll(".page-view");
    pageContainers.forEach(container => {
        container.classList.remove("active");
        if (container.id !== "login-view" && container.id !== "portal-view") {
            container.style.display = "none";
        }
    });

    // Make target active
    AppState.currentView = pageId;
    
    // Special Login redirection
    if (pageId === "login") {
        document.getElementById("portal-view").classList.remove("active");
        document.getElementById("login-view").style.display = "flex";
        setTimeout(() => document.getElementById("login-view").classList.add("active"), 50);
        return;
    }
    
    // Set Navigation Highlight Link
    const targetNav = document.getElementById(`nav-${pageId}`);
    if (targetNav) targetNav.classList.add("active");
    
    // Show Portal Shell and Specific Page Inner
    document.getElementById("portal-view").classList.add("active");
    
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.style.display = "flex";
        setTimeout(() => {
            targetPage.classList.add("active");
        }, 50);
    }
    
    // Close any floating headers dropdown panels
    toggleDropdown();
}

// ==========================================================================
// SIMULATED AUTHENTICATION LOGOUT & LOGIN
// ==========================================================================
function handleLogin() {
    const studentUser = document.getElementById("student-username").value.trim();
    if (!studentUser) return;
    
    // Parse Student Meta from name
    AppState.currentUser.id = studentUser;
    
    // Simulating Section & Name assignments based on ID
    if (studentUser.includes("02000300183") || studentUser === "02000300183") {
        AppState.currentUser.name = "Ralphcj Paulino";
        AppState.currentUser.section = "BSCS-401A";
        AppState.currentUser.email = "ralphcj.paulino@student.sti.edu.ph";
    } else {
        AppState.currentUser.name = "Student STIer";
        AppState.currentUser.section = "PROGRAM-YEAR";
        AppState.currentUser.email = "student.stier@student.sti.edu.ph";
    }
    
    // Rebind profile details
    document.getElementById("user-display-name").innerText = AppState.currentUser.name;
    document.getElementById("user-display-id").innerText = AppState.currentUser.id;
    document.getElementById("user-display-section").innerText = AppState.currentUser.section;
    document.getElementById("tuition-name").innerText = AppState.currentUser.name;
    document.getElementById("tuition-id").innerText = AppState.currentUser.id;
    document.getElementById("tuition-section").innerText = AppState.currentUser.section;
    document.getElementById("ch-student-id").value = AppState.currentUser.id;
    document.getElementById("ch-section").value = AppState.currentUser.section;
    
    // Init profile initials
    const initials = AppState.currentUser.name
        .split(" ")
        .map(w => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    document.querySelectorAll(".student-avatar").forEach(av => av.innerText = initials);
    
    // Switch views
    document.getElementById("login-view").classList.remove("active");
    setTimeout(() => {
        document.getElementById("login-view").style.display = "none";
        switchPage("home");
        showNotification(`Welcome back, ${AppState.currentUser.name}! Portal loaded successfully.`, "success");
    }, 400);
}

function handleMicrosoftLogin() {
    showNotification("Redirecting to Microsoft Office 365 Federated Login... Please wait.", "info");
    setTimeout(() => {
        handleLogin();
    }, 1500);
}

function handleLogout() {
    showNotification("Session terminated. Logging out...", "warning");
    setTimeout(() => {
        switchPage("login");
    }, 600);
}

// ==========================================================================
// SLIDESHOW ROTATOR BANNER
// ==========================================================================
let currentSlide = 0;
let slideInterval;

function startSlideLoop() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        setSlide((currentSlide + 1) % 3);
    }, 5000);
}

function setSlide(index) {
    currentSlide = index;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dot");
    
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    
    // Reset timer to prevent rapid transitions
    startSlideLoop();
}

// ==========================================================================
// DYNAMIC TEXT & CONTEXT FILTER GLOBAL SEARCH
// ==========================================================================
function handleGlobalSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    
    // Route redirects dynamically depending on keywords if press enter
    if (event.key === "Enter" && query) {
        if (query.includes("pay") || query.includes("tuition") || query.includes("balance") || query.includes("fee")) {
            switchPage("tuition");
            openPaymentModal();
            event.target.value = "";
            return;
        }
        if (query.includes("faq") || query.includes("help") || query.includes("policy")) {
            switchPage("help");
            document.getElementById("faq-search-input").value = query;
            handleFAQSearch(query);
            event.target.value = "";
            return;
        }
        if (query.includes("order") || query.includes("track") || query.includes("claim")) {
            switchPage("orders");
            event.target.value = "";
            return;
        }
        // Fallback: switch to shop
        switchPage("shop");
    }

    // Live search on active views
    if (AppState.currentView === "shop") {
        renderShopProducts(query);
    } else if (AppState.currentView === "help") {
        document.getElementById("faq-search-input").value = event.target.value;
        handleFAQSearch(query);
    } else if (AppState.currentView === "tuition") {
        filterLedgerHistory(query);
    }
}

// ==========================================================================
// CAMPUS BILLING & TUITION LEDGER SYSTEM
// ==========================================================================
function renderTuitionPortal() {
    const tuition = AppState.currentUser.tuition;
    
    // Recompute balance details
    tuition.currentBalance = tuition.totalAssessment - tuition.paidToDate;
    
    // Redraw view summaries
    document.getElementById("home-balance-val").innerText = `₱${tuition.currentBalance.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("home-due-date").innerText = tuition.dueDate;
    document.getElementById("tuition-total-assessment").innerText = `₱${tuition.totalAssessment.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("tuition-paid-assessment").innerText = `₱${tuition.paidToDate.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    const dueElement = document.getElementById("tuition-due-assessment");
    dueElement.innerText = `₱${tuition.currentBalance.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    dueElement.style.color = "var(--danger)";
    document.getElementById("tuition-due-date").innerText = tuition.dueDate;
    
    // Settle home indicators
    const statusDot = document.getElementById("home-status-dot");
    const statusText = document.getElementById("home-status-text");
    const profTuitionText = document.getElementById("user-display-tuition");
    
    if (tuition.currentBalance <= 0) {
        statusDot.style.backgroundColor = "var(--success)";
        statusDot.style.color = "var(--success)";
        statusText.innerText = "Fully Settle Paid";
        profTuitionText.innerText = "Fully Paid";
        profTuitionText.className = "badge badge-success";
    } else if (tuition.paidToDate > 0) {
        statusDot.style.backgroundColor = "var(--warning)";
        statusDot.style.color = "var(--warning)";
        statusText.innerText = "Partially Paid";
        profTuitionText.innerText = "Active Install";
        profTuitionText.className = "badge badge-gold";
    } else {
        statusDot.style.backgroundColor = "var(--danger)";
        statusDot.style.color = "var(--danger)";
        statusText.innerText = "Not Fully Paid";
        profTuitionText.innerText = "Unpaid";
        profTuitionText.className = "badge badge-danger";
    }
    
    // Settle Ledger History logs
    const historyContainer = document.getElementById("payments-history-rows");
    historyContainer.innerHTML = "";
    
    if (tuition.transactions.length === 0) {
        historyContainer.innerHTML = `<tr><td colspan="4" class="text-center" style="color:var(--text-muted);">No payment ledger events found.</td></tr>`;
        return;
    }
    
    tuition.transactions.forEach(tx => {
        historyContainer.innerHTML += `
            <tr>
                <td style="font-weight:600;">${tx.date}</td>
                <td>${tx.desc}</td>
                <td style="font-weight:700; color:var(--sti-blue);">₱${tx.amount.toLocaleString(undefined, {minimumFractionDigits:2})}</td>
                <td><span class="badge badge-success">${tx.status}</span></td>
            </tr>
        `;
    });
}

function filterLedgerHistory(query) {
    const historyContainer = document.getElementById("payments-history-rows");
    const filtered = AppState.currentUser.tuition.transactions.filter(tx => 
        tx.desc.toLowerCase().includes(query) || tx.date.toLowerCase().includes(query)
    );
    
    historyContainer.innerHTML = "";
    if (filtered.length === 0) {
        historyContainer.innerHTML = `<tr><td colspan="4" class="text-center" style="color:var(--text-muted);">No matching transactions.</td></tr>`;
        return;
    }
    
    filtered.forEach(tx => {
        historyContainer.innerHTML += `
            <tr>
                <td style="font-weight:600;">${tx.date}</td>
                <td>${tx.desc}</td>
                <td style="font-weight:700; color:var(--sti-blue);">₱${tx.amount.toLocaleString(undefined, {minimumFractionDigits:2})}</td>
                <td><span class="badge badge-success">${tx.status}</span></td>
            </tr>
        `;
    });
}

function openPaymentModal() {
    const tuition = AppState.currentUser.tuition;
    if (tuition.currentBalance <= 0) {
        showNotification("Account is already fully settled!", "info");
        return;
    }
    
    document.getElementById("pay-outstanding-display").value = `₱${tuition.currentBalance.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("pay-amount-input").value = Math.min(6166, tuition.currentBalance);
    
    document.getElementById("tuition-payment-modal").classList.add("active");
}

function closePaymentModal() {
    document.getElementById("tuition-payment-modal").classList.remove("active");
}

function selectPaymentGateway(gateway) {
    AppState.selectedPaymentGateway = gateway;
    
    // Highlight options
    const gateways = ["gcash", "maya", "card"];
    gateways.forEach(g => {
        const option = document.getElementById(`opt-${g}`);
        if (option) option.classList.remove("selected");
    });
    
    document.getElementById(`opt-${gateway}`).classList.add("selected");
}

function processOnlinePayment() {
    const inputAmt = parseFloat(document.getElementById("pay-amount-input").value);
    const tuition = AppState.currentUser.tuition;
    
    if (isNaN(inputAmt) || inputAmt <= 0) {
        showNotification("Please supply a valid numeric transaction amount.", "danger");
        return;
    }
    if (inputAmt > tuition.currentBalance) {
        showNotification(`Payment exceeds outstanding dues. Settle amount capped at ₱${tuition.currentBalance}.`, "warning");
        return;
    }
    
    // Process transactions ledger append
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    
    tuition.paidToDate += inputAmt;
    tuition.currentBalance = tuition.totalAssessment - tuition.paidToDate;
    
    // Add pay transaction
    tuition.transactions.unshift({
        date: formattedDate,
        desc: `Online Payment Settle (${AppState.selectedPaymentGateway.toUpperCase()})`,
        amount: inputAmt,
        status: "Paid"
    });
    
    // Mark current day as paid on calendar
    tuition.paidDates.push(today.getDate());
    
    // Persist
    persistData("tuition");
    
    // Create new Notification item
    pushNotification(`Billing Success: Settle transaction of ₱${inputAmt.toLocaleString()} authorized successfully.`);
    
    // Update Ledger UI and Calendar
    renderTuitionPortal();
    updateMiniCalendar();
    updateLargeCalendar();
    
    closePaymentModal();
    showNotification(`Settle transaction of ₱${inputAmt.toLocaleString()} approved. Thank you!`, "success");
}

// ==========================================================================
// CALENDAR MECHANICS (MINI AND LARGE RENDERS)
// ==========================================================================
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function changeCalendarMonth(offset) {
    AppState.calendarDate.month += offset;
    if (AppState.calendarDate.month > 11) {
        AppState.calendarDate.month = 0;
        AppState.calendarDate.year += 1;
    } else if (AppState.calendarDate.month < 0) {
        AppState.calendarDate.month = 11;
        AppState.calendarDate.year -= 1;
    }
    updateMiniCalendar();
    updateLargeCalendar();
}

function updateMiniCalendar() {
    const month = AppState.calendarDate.month;
    const year = AppState.calendarDate.year;
    
    document.getElementById("mini-calendar-month").innerText = `${MONTH_NAMES[month]} ${year}`;
    
    const grid = document.getElementById("mini-calendar-grid");
    grid.innerHTML = "";
    
    // Labels
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    days.forEach(d => grid.innerHTML += `<div class="calendar-day-label">${d}</div>`);
    
    // Dates calculation
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Padding empty blocks
    for (let i = 0; i < firstDayIndex; i++) {
        grid.innerHTML += `<div class="calendar-day empty"></div>`;
    }
    
    const today = new Date();
    
    for (let d = 1; d <= totalDays; d++) {
        let classes = "calendar-day";
        
        // Highlight logic
        // 15th is payment deadline
        if (d === 15 && month === 8) {
            classes += " active-deadline"; // September 15 is active deadline
        }
        
        // Highlight custom dates that have been paid in current month/year
        if (AppState.currentUser.tuition.paidDates.includes(d) && month === 8 && year === 2026) {
            classes += " active-payment";
        }
        
        if (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year) {
            classes += " today";
        }
        
        grid.innerHTML += `<div class="${classes}">${d}</div>`;
    }
}

function updateLargeCalendar() {
    const month = AppState.calendarDate.month;
    const year = AppState.calendarDate.year;
    
    document.getElementById("large-calendar-month").innerText = `${MONTH_NAMES[month]} ${year}`;
    
    const grid = document.getElementById("large-calendar-grid");
    grid.innerHTML = "";
    
    // Labels
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach(d => grid.innerHTML += `<div class="calendar-day-label" style="font-weight:700;">${d}</div>`);
    
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDayIndex; i++) {
        grid.innerHTML += `<div class="calendar-day empty"></div>`;
    }
    
    const today = new Date();
    
    for (let d = 1; d <= totalDays; d++) {
        let classes = "calendar-day";
        let style = "height: 48px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size:1rem;";
        
        if (d === 15 && month === 8) {
            classes += " active-deadline";
        }
        
        if (AppState.currentUser.tuition.paidDates.includes(d) && month === 8 && year === 2026) {
            classes += " active-payment";
        }
        
        if (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year) {
            classes += " today";
        }
        
        grid.innerHTML += `<div class="${classes}" style="${style}" onclick="showCalendarDetail(${d})">${d}</div>`;
    }
}

function showCalendarDetail(day) {
    const month = AppState.calendarDate.month;
    if (day === 15 && month === 8) {
        showNotification("Tuition Installment due date: ₱6,166.00 required. Pay online to clear.", "warning");
    } else if (AppState.currentUser.tuition.paidDates.includes(day) && month === 8) {
        showNotification(`You successfully processed a tuition transaction on this day. Ledger cleared!`, "success");
    } else {
        showNotification(`Academic Day scheduled: Normal classes in session.`, "info");
    }
}

// ==========================================================================
// MERCHANDISE SHOP RENDER FUNCTIONS
// ==========================================================================
function renderHomeFeaturedProducts() {
    const container = document.getElementById("home-featured-grid");
    container.innerHTML = "";
    
    // Choose 3 products as featured
    const featuredList = PRODUCTS_DB.slice(0, 3);
    
    featuredList.forEach(prod => {
        const isFav = AppState.wishlist.includes(prod.id);
        const cardHtml = makeProductCardHtml(prod, isFav);
        container.innerHTML += cardHtml;
    });
}

function renderShopProducts(searchQuery = "") {
    const container = document.getElementById("shop-products-grid");
    container.innerHTML = "";
    
    const filters = AppState.selectedFilters;
    let filteredList = PRODUCTS_DB.filter(prod => {
        // Category Filter
        if (filters.category !== "all" && prod.category !== filters.category) return false;
        
        // Size Filter
        if (filters.size !== "all" && !prod.sizes.includes(filters.size)) return false;
        
        // Price Filter
        if (prod.price > filters.maxPrice) return false;
        
        // Search Query
        if (searchQuery && !prod.name.toLowerCase().includes(searchQuery) && !prod.desc.toLowerCase().includes(searchQuery)) return false;
        
        return true;
    });
    
    // Update Results label
    document.getElementById("shop-results-count").innerText = `Showing ${filteredList.length} items`;
    
    // Draw categories stats counters
    updateCategoryStats();
    
    if (filteredList.length === 0) {
        container.innerHTML = `
            <div class="empty-state w-full" style="grid-column: 1 / -1;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h4>No Merchandise Matches Your Filters</h4>
                <p>Try resetting the filter sliders or switching categories to find other uniform alternatives.</p>
                <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }
    
    filteredList.forEach(prod => {
        const isFav = AppState.wishlist.includes(prod.id);
        const cardHtml = makeProductCardHtml(prod, isFav);
        container.innerHTML += cardHtml;
    });
}

function makeProductCardHtml(prod, isFav) {
    let stockClass = "badge-success";
    let stockLabel = "In Stock";
    
    if (prod.stock === 0) {
        stockClass = "badge-danger";
        stockLabel = "Out of Stock";
    } else if (prod.stock <= 15) {
        stockClass = "badge-warning";
        stockLabel = "Low Stock";
    }
    
    const heartClass = isFav ? "wishlist-heart-btn active" : "wishlist-heart-btn";
    const buyButtonText = prod.stock === 0 ? "OUT OF STOCK" : "QUICK BUY";
    const buyDisabled = prod.stock === 0 ? "disabled" : "";
    
    return `
        <article class="product-card">
            <!-- Heart button -->
            <div class="${heartClass}" onclick="toggleProductWishlist('${prod.id}', event)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            
            <!-- Graphic Image Wrapper -->
            <div class="product-image-container" onclick="openProductModal('${prod.id}')">
                ${getProductImageMarkup(prod)}
            </div>
            
            <!-- Product detail panel info -->
            <div class="product-info-panel">
                <span class="product-cat">${prod.category}</span>
                <h4 class="product-name" onclick="openProductModal('${prod.id}')" style="cursor:pointer;">${prod.name}</h4>
                
                <div class="flex align-center justify-between" style="margin-top:auto;">
                    <div class="product-price">₱${prod.price.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
                    <span class="badge ${stockClass} stock-tag">${stockLabel}</span>
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-outline" style="padding: 0.5rem;" onclick="openProductModal('${prod.id}')">Details</button>
                    <button class="btn btn-secondary" style="padding: 0.5rem;" onclick="handleQuickBuy('${prod.id}')" ${buyDisabled}>
                        ${buyButtonText}
                    </button>
                </div>
            </div>
        </article>
    `;
}

function updateCategoryStats() {
    document.getElementById("cat-cnt-all").innerText = PRODUCTS_DB.length;
    document.getElementById("cat-cnt-uniforms").innerText = PRODUCTS_DB.filter(p => p.category === "uniforms").length;
    document.getElementById("cat-cnt-jackets").innerText = PRODUCTS_DB.filter(p => p.category === "jackets").length;
    document.getElementById("cat-cnt-accessories").innerText = PRODUCTS_DB.filter(p => p.category === "accessories").length;
}

// --- FILTER CONTROLLERS ---
function filterByCategory(cat, element) {
    AppState.selectedFilters.category = cat;
    
    // Highlight category button
    const btns = document.querySelectorAll(".category-btn");
    btns.forEach(b => b.classList.remove("active"));
    element.classList.add("active");
    
    renderShopProducts();
}

function filterBySize(size, element) {
    AppState.selectedFilters.size = size;
    
    const btns = document.querySelectorAll(".size-btn");
    btns.forEach(b => b.classList.remove("active"));
    element.classList.add("active");
    
    renderShopProducts();
}

function handlePriceFilter(val) {
    AppState.selectedFilters.maxPrice = parseFloat(val);
    document.getElementById("price-filter-display").innerText = `₱${parseFloat(val).toLocaleString()}`;
    renderShopProducts();
}

function resetFilters() {
    AppState.selectedFilters = {
        category: "all",
        size: "all",
        maxPrice: 2500
    };
    
    document.getElementById("price-slider").value = 2500;
    document.getElementById("price-filter-display").innerText = "₱2,500";
    
    // Rehighlight sidebar buttons
    const catBtns = document.querySelectorAll(".category-btn");
    catBtns.forEach((b, idx) => {
        if (idx === 0) b.classList.add("active");
        else b.classList.remove("active");
    });
    
    const sizeBtns = document.querySelectorAll(".size-btn");
    sizeBtns.forEach((b, idx) => {
        if (idx === 0) b.classList.add("active");
        else b.classList.remove("active");
    });
    
    renderShopProducts();
}

// ==========================================================================
// PRODUCT POPUP SIZE GUIDE AND ACTION HANDLERS
// ==========================================================================
function openProductModal(prodId) {
    const prod = PRODUCTS_DB.find(p => p.id === prodId);
    if (!prod) return;

    AppState.popupProduct = prod;
    AppState.popupQty = 1;
    AppState.popupSelectedSize = prod.sizes[0] || "M";

    const popupImg = document.getElementById("popup-product-img");
    const popupCat = document.getElementById("popup-product-cat");
    const popupName = document.getElementById("popup-product-name");
    const popupPrice = document.getElementById("popup-product-price");
    const popupDesc = document.getElementById("popup-product-desc");
    const popupQtyDisplay = document.getElementById("popup-qty-display");
    const popupSelectedSize = document.getElementById("popup-selected-size");
    const modal = document.getElementById("product-details-modal");
    const wishlistHeart = document.getElementById("popup-wishlist-heart");
    const stockBadge = document.getElementById("popup-product-stock");
    const stockDesc = document.getElementById("popup-product-stock-desc");
    const sizesContainer = document.getElementById("popup-size-options");

    if (!popupImg || !popupCat || !popupName || !popupPrice || !popupDesc || !popupQtyDisplay || !popupSelectedSize || !modal || !sizesContainer || !stockBadge || !stockDesc) {
        return;
    }

    // Render Modal Content
    popupImg.innerHTML = getProductImageMarkup(prod);
    popupCat.innerText = prod.category;
    popupName.innerText = prod.name;
    popupPrice.innerText = `₱${prod.price.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    popupDesc.innerText = prod.desc;
    popupQtyDisplay.innerText = "1";

    if (prod.stock === 0) {
        stockBadge.innerText = "OUT OF STOCK";
        stockBadge.className = "badge badge-danger";
        stockDesc.innerText = "Available for pre-order reservations only.";
    } else if (prod.stock <= 15) {
        stockBadge.innerText = "LOW STOCK";
        stockBadge.className = "badge badge-warning";
        stockDesc.innerText = `Only ${prod.stock} items remaining in Bookstore.`;
    } else {
        stockBadge.innerText = "IN STOCK";
        stockBadge.className = "badge badge-success";
        stockDesc.innerText = "Sufficient stocks available for immediate pickup.";
    }

    // Size option buttons
    sizesContainer.innerHTML = "";
    prod.sizes.forEach(sz => {
        const activeClass = sz === AppState.popupSelectedSize ? "active" : "";
        sizesContainer.innerHTML += `<button class="size-btn ${activeClass}" onclick="selectPopupSize('${sz}', this)">${sz}</button>`;
    });
    popupSelectedSize.innerText = AppState.popupSelectedSize;

    if (AppState.wishlist.includes(prod.id)) {
        wishlistHeart.classList.add("active");
        wishlistHeart.style.color = "var(--danger)";
    } else {
        wishlistHeart.classList.remove("active");
        wishlistHeart.style.color = "";
    }

    modal.classList.add("active");
}

function closeProductModal() {
    document.getElementById("product-details-modal").classList.remove("active");
    AppState.popupProduct = null;
}

function selectPopupSize(size, element) {
    AppState.popupSelectedSize = size;
    document.getElementById("popup-selected-size").innerText = size;
    
    // Toggle active classes on siblings
    const btns = element.parentElement.querySelectorAll(".size-btn");
    btns.forEach(b => b.classList.remove("active"));
    element.classList.add("active");
}

function adjustPopupQty(offset) {
    if (!AppState.popupProduct) return;
    
    const newQty = AppState.popupQty + offset;
    if (newQty < 1) return;
    
    if (AppState.popupProduct.stock > 0 && newQty > AppState.popupProduct.stock) {
        showNotification(`Cannot exceed bookstore stock limits of ${AppState.popupProduct.stock} items.`, "warning");
        return;
    }
    
    AppState.popupQty = newQty;
    document.getElementById("popup-qty-display").innerText = newQty;
}

function addPopupProductToCart() {
    const prod = AppState.popupProduct;
    if (!prod) return;
    
    if (prod.stock === 0) {
        showNotification("Item is currently out of stock.", "danger");
        return;
    }
    
    addToCart(prod.id, AppState.popupQty, AppState.popupSelectedSize);
    closeProductModal();
}

function togglePopupProductWishlist() {
    const prod = AppState.popupProduct;
    if (!prod) return;
    
    toggleProductWishlist(prod.id);
    
    const wishlistHeart = document.getElementById("popup-wishlist-heart");
    if (AppState.wishlist.includes(prod.id)) {
        wishlistHeart.classList.add("active");
        wishlistHeart.style.color = "var(--danger)";
    } else {
        wishlistHeart.classList.remove("active");
        wishlistHeart.style.color = "";
    }
}

function handleProductImageUpload(event) {
    const file = event.target.files && event.target.files[0];
    const product = AppState.popupProduct;
    if (!file || !product) return;

    const reader = new FileReader();
    reader.onload = () => {
        product.image = reader.result;
        persistUploadedProductImages();
        renderShopProducts();
        renderHomeFeaturedProducts();
        openProductModal(product.id);
        event.target.value = "";
    };
    reader.readAsDataURL(file);
}

// ==========================================================================
// WISHLIST MECHANICS & EMPTY VIEWS
// ==========================================================================
function toggleProductWishlist(prodId, event) {
    if (event) event.stopPropagation(); // prevent modal opening if clicked on grid
    
    const index = AppState.wishlist.indexOf(prodId);
    if (index === -1) {
        AppState.wishlist.push(prodId);
        showNotification("Added item to student wishlist.", "success");
    } else {
        AppState.wishlist.splice(index, 1);
        showNotification("Removed item from wishlist.", "info");
    }
    
    persistData("wishlist");
    updateWishlistUI();
    
    // Refresh shop lists to update active heart classes
    if (AppState.currentView === "shop") renderShopProducts();
    if (AppState.currentView === "home") renderHomeFeaturedProducts();
}

function updateWishlistUI() {
    const count = AppState.wishlist.length;
    document.getElementById("wishlist-count").innerText = count;
    document.getElementById("wishlist-badge-qty").innerText = `${count} items`;
    
    const dropdown = document.getElementById("wishlist-dropdown-items");
    dropdown.innerHTML = "";
    
    if (count === 0) {
        dropdown.innerHTML = `
            <div class="empty-state" style="padding:1rem;">
                <p style="font-weight:600; color:var(--text-muted);">No saved items yet</p>
                <p style="font-size:0.75rem;">Save shirts and caps here for quick access later.</p>
            </div>
        `;
        return;
    }
    
    AppState.wishlist.forEach(prodId => {
        const prod = PRODUCTS_DB.find(p => p.id === prodId);
        if (!prod) return;
        
        dropdown.innerHTML += `
            <div class="dropdown-item-row">
                <div class="dropdown-item-img">${prod.svg}</div>
                <div class="dropdown-item-meta">
                    <h5>${prod.name}</h5>
                    <p>₱${prod.price.toLocaleString()}</p>
                </div>
                <button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onclick="handleQuickBuy('${prod.id}')">Buy</button>
                <button class="cart-trash-btn" onclick="toggleProductWishlist('${prod.id}')">✕</button>
            </div>
        `;
    });
}

// ==========================================================================
// SHOPPING CART CONTROLLER & RENDER SYSTEMS
// ==========================================================================
function addToCart(prodId, qty = 1, size = "M") {
    const prod = PRODUCTS_DB.find(p => p.id === prodId);
    if (!prod) return;
    
    // Check if duplicate item with same size already exists
    const existing = AppState.cart.find(item => item.id === prodId && item.size === size);
    
    if (existing) {
        const newQty = existing.qty + qty;
        if (prod.stock > 0 && newQty > prod.stock) {
            showNotification(`Cannot exceed bookstore stock limits. Quantity capped at ${prod.stock}.`, "warning");
            existing.qty = prod.stock;
        } else {
            existing.qty = newQty;
            showNotification(`Updated item quantity in cart.`, "success");
        }
    } else {
        AppState.cart.push({
            id: prodId,
            name: prod.name,
            price: prod.price,
            size: size,
            qty: qty,
            category: prod.category
        });
        showNotification("Added merchandise to cart.", "success");
    }
    
    persistData("cart");
    updateCartUI();
}

function handleQuickBuy(prodId) {
    const prod = PRODUCTS_DB.find(p => p.id === prodId);
    if (prod && prod.stock > 0) {
        addToCart(prodId, 1, prod.sizes[0] || "M");
        switchPage("cart");
    }
}

function updateCartUI() {
    const cartCount = AppState.cart.reduce((acc, curr) => acc + curr.qty, 0);
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-badge-qty").innerText = `${AppState.cart.length} items`;
    
    // Recompute total calculations
    const cartSubtotal = AppState.cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    
    // Update labels
    document.getElementById("cart-dropdown-total").innerText = `₱${cartSubtotal.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("cart-calc-subtotal").innerText = `₱${cartSubtotal.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("cart-calc-total").innerText = `₱${cartSubtotal.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    document.getElementById("checkout-calc-total").innerText = `₱${cartSubtotal.toLocaleString(undefined, {minimumFractionDigits:2})}`;
    
    // Wishlist syncing
    updateWishlistUI();
    
    // Draw Cart Dropdown Widgets
    const dropdownList = document.getElementById("cart-dropdown-items");
    dropdownList.innerHTML = "";
    
    if (AppState.cart.length === 0) {
        dropdownList.innerHTML = `
            <div class="empty-state" style="padding:1rem;">
                <p style="font-weight:600; color:var(--text-muted);">Your cart is empty</p>
                <p style="font-size:0.75rem;">Explore uniform merch to load items.</p>
            </div>
        `;
    } else {
        AppState.cart.forEach((item, idx) => {
            const prodRef = PRODUCTS_DB.find(p => p.id === item.id);
            dropdownList.innerHTML += `
                <div class="dropdown-item-row">
                    <div class="dropdown-item-img">${prodRef.svg}</div>
                    <div class="dropdown-item-meta">
                        <h5>${item.name} (${item.size})</h5>
                        <p>${item.qty}x - ₱${(item.price * item.qty).toLocaleString()}</p>
                    </div>
                    <button class="cart-trash-btn" onclick="removeFromCart(${idx})">✕</button>
                </div>
            `;
        });
    }
    
    // Draw Main Cart Page lists
    const mainCartContainer = document.getElementById("cart-items-list-container");
    mainCartContainer.innerHTML = "";
    
    if (AppState.cart.length === 0) {
        mainCartContainer.innerHTML = `
            <div class="empty-state card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <h4>Your cart is empty</h4>
                <p>You haven't saved any uniforms, jackets, or accessories to checkout yet. Settle your assessments or explore products.</p>
                <button class="btn btn-primary" onclick="switchPage('shop')">Start Browsing Merchandise</button>
            </div>
        `;
    } else {
        AppState.cart.forEach((item, idx) => {
            const prodRef = PRODUCTS_DB.find(p => p.id === item.id);
            mainCartContainer.innerHTML += `
                <div class="cart-item-row">
                    <input type="checkbox" class="cart-item-check" checked style="pointer-events: none;">
                    
                    <div class="cart-item-img">${prodRef.svg}</div>
                    
                    <div class="cart-item-meta">
                        <h4>${item.name}</h4>
                        <p>Category: ${item.category.toUpperCase()} | Selected Size: <strong>${item.size}</strong></p>
                    </div>
                    
                    <div class="qty-input-group" style="scale:0.95;">
                        <button class="qty-btn" onclick="modifyCartQty(${idx}, -1)">-</button>
                        <span class="qty-display">${item.qty}</span>
                        <button class="qty-btn" onclick="modifyCartQty(${idx}, 1)">+</button>
                    </div>
                    
                    <div class="cart-item-total">
                        ₱${(item.price * item.qty).toLocaleString(undefined, {minimumFractionDigits:2})}
                    </div>
                    
                    <div class="cart-trash-btn" onclick="removeFromCart(${idx})" style="padding: 0.5rem;">✕</div>
                </div>
            `;
        });
    }
    
    // Draw checkout checklist items summaries
    const checkSummaryList = document.getElementById("checkout-items-summary-list");
    checkSummaryList.innerHTML = "";
    
    AppState.cart.forEach(item => {
        const prodRef = PRODUCTS_DB.find(p => p.id === item.id);
        checkSummaryList.innerHTML += `
            <div class="dropdown-item-row">
                <div class="dropdown-item-img">${prodRef.svg}</div>
                <div class="dropdown-item-meta">
                    <h5 style="font-size:0.9rem;">${item.name} (${item.size})</h5>
                    <p style="color: var(--sti-blue); font-weight:600;">Qty: ${item.qty}x | ₱${(item.price * item.qty).toLocaleString()}</p>
                </div>
            </div>
        `;
    });
}

function modifyCartQty(idx, offset) {
    if (!AppState.cart[idx]) return;
    
    const item = AppState.cart[idx];
    const prodRef = PRODUCTS_DB.find(p => p.id === item.id);
    
    const newQty = item.qty + offset;
    if (newQty < 1) return;
    
    if (prodRef.stock > 0 && newQty > prodRef.stock) {
        showNotification(`Bookstore stock limits reached for this size.`, "warning");
        return;
    }
    
    item.qty = newQty;
    persistData("cart");
    updateCartUI();
}

function removeFromCart(idx) {
    AppState.cart.splice(idx, 1);
    persistData("cart");
    updateCartUI();
    showNotification("Removed item from cart.", "info");
}

function clearCart() {
    AppState.cart = [];
    persistData("cart");
    updateCartUI();
    showNotification("Cleared shopping cart.", "warning");
}

// ==========================================================================
// SECURE CHECKOUT & ORDER HISTORY TRACKER
// ==========================================================================
function submitOrder() {
    if (AppState.cart.length === 0) {
        showNotification("Your cart is empty! Cannot submit order.", "danger");
        return;
    }
    
    const fName = document.getElementById("ch-first-name").value.trim();
    const lName = document.getElementById("ch-last-name").value.trim();
    const email = document.getElementById("ch-email").value.trim();
    
    if (!fName || !lName || !email) {
        showNotification("Please complete all student billing form details.", "warning");
        return;
    }
    
    const totalOrderCost = AppState.cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const today = new Date();
    const orderId = `STI-${Math.floor(100000 + Math.random() * 900000)}`;
    const pickupDate = new Date();
    pickupDate.setDate(today.getDate() + 3); // 3 days after
    
    const formattedPickup = pickupDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    const newOrder = {
        id: orderId,
        date: today.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        items: [...AppState.cart],
        total: totalOrderCost,
        pickupDate: formattedPickup,
        status: "Pending", // States: Pending, Ready, Claimed
        student: {
            name: `${fName} ${lName}`,
            email: email,
            id: AppState.currentUser.id,
            section: AppState.currentUser.section
        }
    };
    
    // Add to orders DB
    AppState.orders.unshift(newOrder);
    persistData("orders");
    
    // Send background notification
    pushNotification(`Order Settle: Order ticket ${orderId} created successfully. Settle status is pending.`);
    
    // Clear shopping cart
    AppState.cart = [];
    persistData("cart");
    updateCartUI();
    
    // Settle tracker views
    renderOrders();
    switchPage("orders");
    showNotification(`Merch Order ${orderId} placed! Claim at Bookstore.`, "success");
    
    // --- MOCK AUTO FULFILLMENT TRIGGER (50% Interactive Automation) ---
    // Simulate Bookstore workers marking order "Ready for Pickup" after 6 seconds!
    setTimeout(() => {
        const targetOrder = AppState.orders.find(o => o.id === orderId);
        if (targetOrder && targetOrder.status === "Pending") {
            targetOrder.status = "Ready";
            persistData("orders");
            renderOrders();
            pushNotification(`Fulfillment Update: Order ${orderId} is now READY FOR PICKUP at Ground Floor Bookstore!`);
            showNotification(`Order ${orderId} is now READY FOR PICKUP!`, "success");
        }
    }, 6000);
}

function renderOrders(filterStatus = "all") {
    const container = document.getElementById("orders-list-container");
    container.innerHTML = "";
    
    let filteredOrders = AppState.orders;
    if (filterStatus !== "all") {
        filteredOrders = AppState.orders.filter(o => o.status === filterStatus);
    }
    
    if (filteredOrders.length === 0) {
        container.innerHTML = `
            <div class="empty-state card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <h4>No matching order tickets found</h4>
                <p>Settle your uniforms shopping basket or check another status tab to view orders.</p>
            </div>
        `;
        return;
    }
    
    filteredOrders.forEach(order => {
        let statusBadgeClass = "badge-blue";
        if (order.status === "Ready") statusBadgeClass = "badge-success";
        if (order.status === "Claimed") statusBadgeClass = "badge-gold";
        
        let cancelBtnHtml = "";
        if (order.status === "Pending") {
            cancelBtnHtml = `<button class="btn btn-outline btn-dark" style="padding:0.4rem 1rem; font-size:0.85rem;" onclick="cancelPendingOrder('${order.id}')">Cancel Order</button>`;
        } else if (order.status === "Ready") {
            // Provide simulation trigger to claim
            cancelBtnHtml = `<button class="btn btn-secondary" style="padding:0.4rem 1rem; font-size:0.85rem;" onclick="simulateClaimOrder('${order.id}')">Claimed Settle (Sim)</button>`;
        }
        
        // Timeline stages highlight
        let step1 = "completed"; // ordered is always completed
        let step2 = order.status === "Ready" || order.status === "Claimed" ? "completed" : "current";
        let step3 = order.status === "Claimed" ? "completed" : (order.status === "Ready" ? "current" : "");
        let step4 = order.status === "Claimed" ? "current" : "";
        
        // Draw item listings
        let itemsHtml = "";
        order.items.forEach(item => {
            const refProd = PRODUCTS_DB.find(p => p.id === item.id);
            itemsHtml += `
                <div class="order-summary-item">
                    <div class="order-item-img">${refProd.svg}</div>
                    <div class="order-item-meta">
                        <div class="order-item-title">${item.name} (${item.size})</div>
                        <div class="order-item-qty">Qty: ${item.qty}x | Price: ₱${(item.price * item.qty).toLocaleString()}</div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML += `
            <div class="order-card card">
                <div class="order-card-header">
                    <div>
                        <span class="order-id-meta">Order Ticket #${order.id}</span>
                        <span class="order-date-meta"> | Placed Date: ${order.date}</span>
                    </div>
                    <span class="badge ${statusBadgeClass}">${order.status === 'Ready' ? 'Ready to Claim' : order.status}</span>
                </div>
                
                <div class="order-card-body">
                    <div class="order-details-grid">
                        <div class="order-items-summary">
                            ${itemsHtml}
                        </div>
                        
                        <div class="order-actions-panel text-center">
                            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Grand Settle Total</span>
                            <h3 style="font-size:1.6rem; color:var(--sti-blue); font-weight:800;">₱${order.total.toLocaleString(undefined, {minimumFractionDigits:2})}</h3>
                            
                            <div style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.5rem;">
                                ${cancelBtnHtml}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Visual Timeline Tracker -->
                    <div class="order-status-timeline">
                        <div class="timeline-step ${step1}">
                            <div class="timeline-dot">✓</div>
                            <span class="timeline-label">Ordered</span>
                        </div>
                        <div class="timeline-step ${step2}">
                            <div class="timeline-dot">⚙</div>
                            <span class="timeline-label">Processing</span>
                        </div>
                        <div class="timeline-step ${step3}">
                            <div class="timeline-dot">📦</div>
                            <span class="timeline-label">Ready for Pickup</span>
                        </div>
                        <div class="timeline-step ${step4}">
                            <div class="timeline-dot">★</div>
                            <span class="timeline-label">Claimed</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 1.5rem; text-align: center; font-size: 0.85rem; color:var(--text-secondary); background-color:var(--bg-primary); padding:0.6rem; border-radius:var(--radius-sm);">
                        <strong>Bookstore Instructions:</strong> ${order.status === 'Pending' ? 'Bookstore operators are consolidating your uniforms package.' : (order.status === 'Ready' ? 'Your package is ready! Visit ground floor Annex Building Bookstore. Claim code: <strong>' + order.id + '</strong>' : 'Order successfully claimed. Receipt settled.')}
                    </div>
                </div>
            </div>
        `;
    });
}

function filterOrders(status, element) {
    const tabs = document.querySelectorAll(".order-tab-btn");
    tabs.forEach(t => t.classList.remove("active"));
    element.classList.add("active");
    
    renderOrders(status);
}

function cancelPendingOrder(orderId) {
    const idx = AppState.orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    
    AppState.orders.splice(idx, 1);
    persistData("orders");
    renderOrders();
    showNotification(`Merch Order ticket ${orderId} successfully canceled.`, "warning");
}

function simulateClaimOrder(orderId) {
    const order = AppState.orders.find(o => o.id === orderId);
    if (!order) return;
    
    order.status = "Claimed";
    persistData("orders");
    renderOrders();
    pushNotification(`Bookstore Claim: Order ${orderId} successfully claimed by ${order.student.name}.`);
    showNotification(`Bookstore operator registered claim. Receipt printed!`, "success");
}

// ==========================================================================
// FAQ ACCORDION ENGINE
// ==========================================================================
function renderFAQs() {
    const container = document.getElementById("faq-accordion-list");
    container.innerHTML = "";
    
    FAQS_DB.forEach((faq, idx) => {
        container.innerHTML += `
            <div class="faq-item" id="faq-${idx}">
                <div class="faq-question" onclick="toggleFAQ(${idx})">
                    <span>${faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                <div class="faq-answer">
                    <p>${faq.a}</p>
                </div>
            </div>
        `;
    });
}

function toggleFAQ(idx) {
    const item = document.getElementById(`faq-${idx}`);
    if (!item) return;
    
    const isActive = item.classList.contains("active");
    
    // Close other FAQs
    const items = document.querySelectorAll(".faq-item");
    items.forEach(i => i.classList.remove("active"));
    
    if (!isActive) {
        item.classList.add("active");
    }
}

function handleFAQSearch(val) {
    const query = val.toLowerCase().trim();
    const items = document.querySelectorAll(".faq-item");
    
    FAQS_DB.forEach((faq, idx) => {
        const item = document.getElementById(`faq-${idx}`);
        if (!item) return;
        
        if (faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query)) {
            item.style.display = "block";
            // Expand automatically if searching
            if (query.length > 2) item.classList.add("active");
            else item.classList.remove("active");
        } else {
            item.style.display = "none";
        }
    });
}

// ==========================================================================
// NOTIFICATIONS DROPDOWN PANEL AND WIDGETS
// ==========================================================================
function toggleDropdown(panelId) {
    const panels = ["dropdown-notifications", "dropdown-wishlist", "dropdown-cart", "dropdown-profile"];
    
    panels.forEach(p => {
        const el = document.getElementById(p);
        if (p === panelId) {
            el.classList.toggle("active");
        } else {
            if (el) el.classList.remove("active");
        }
    });
}

// Close dropdowns when clicking outside
window.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-actions") && !e.target.closest(".header-dropdown-panel") && !e.target.closest(".wishlist-heart-btn") && !e.target.closest(".btn-secondary") && !e.target.closest(".btn-outline")) {
        toggleDropdown();
    }
});

function renderNotifications() {
    const list = document.getElementById("notifications-list");
    const countDot = document.getElementById("noti-dot");
    
    list.innerHTML = "";
    
    if (AppState.notifications.length === 0) {
        countDot.style.display = "none";
        list.innerHTML = `
            <div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">
                No unread notifications.
            </div>
        `;
        return;
    }
    
    countDot.style.display = "block";
    AppState.notifications.forEach(noti => {
        list.innerHTML += `
            <div class="dropdown-item-row" style="border-bottom: 1px dashed var(--border-color); padding: 0.5rem 0;">
                <div class="dropdown-item-meta" style="padding-left:0.5rem;">
                    <p style="font-size:0.8rem; font-weight:500; color:var(--text-primary);">${noti.text}</p>
                    <span style="font-size:0.65rem; color:var(--text-muted);">${noti.date}</span>
                </div>
            </div>
        `;
    });
}

function pushNotification(text) {
    const today = new Date();
    const timeStr = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    AppState.notifications.unshift({
        id: `not-${Date.now()}`,
        date: `${today.toLocaleDateString([], { month: 'short', day: '2-digit' })} ${timeStr}`,
        text: text
    });
    
    persistData("notifications");
    renderNotifications();
}

function clearNotifications() {
    AppState.notifications = [];
    persistData("notifications");
    renderNotifications();
    showNotification("Cleared all portal notifications.", "info");
}

// ==========================================================================
// TOAST NOTIFICATIONS DRAWER
// ==========================================================================
function showNotification(message, type = "success") {
    const holder = document.getElementById("toast-holder");
    const toast = document.createElement("div");
    
    toast.className = `toast ${type}`;
    
    let typeSymbol = "✓";
    if (type === "warning") typeSymbol = "⚠";
    if (type === "danger") typeSymbol = "✕";
    if (type === "info") typeSymbol = "ℹ";
    
    toast.innerHTML = `
        <span style="font-weight:900; font-size:1.1rem;">${typeSymbol}</span>
        <span>${message}</span>
    `;
    
    holder.appendChild(toast);
    
    // Trigger slide-in active style
    setTimeout(() => {
        toast.classList.add("active");
    }, 50);
    
    // Expire toast after 4.5 seconds
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4500);
}
