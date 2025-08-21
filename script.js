// BrewHaven Coffee Website - JavaScript

// Mock Data
const mockData = {
    // Hero products for homepage
    heroProducts: [
        {
            id: 'hero-1',
            name: 'Caramel Cloud Macchiato',
            description: 'Layers of rich espresso, creamy steamed milk, and fluffy cloud foam, finished with buttery caramel drizzle.',
            image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&h=600&fit=crop',
            price: 5.95,
            category: 'Hot Coffee',
            isNew: true
        },
        {
            id: 'hero-2',
            name: 'Iced Matcha Paradise',
            description: 'Premium ceremonial matcha blended with coconut milk and a hint of vanilla, served over ice.',
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&h=600&fit=crop',
            price: 6.25,
            category: 'Cold Tea',
            isNew: true
        }
    ],

    // Menu categories
    menuCategories: [
        { id: 'hot-coffee', name: 'Hot Coffee', icon: '☕', count: 12 },
        { id: 'cold-coffee', name: 'Cold Coffee', icon: '🧊', count: 10 },
        { id: 'hot-tea', name: 'Hot Tea', icon: '🍵', count: 8 },
        { id: 'cold-tea', name: 'Cold Tea', icon: '🥤', count: 6 },
        { id: 'frappuccinos', name: 'Frappuccinos', icon: '🥤', count: 15 },
        { id: 'refreshers', name: 'Refreshers', icon: '🌿', count: 8 },
        { id: 'food', name: 'Food', icon: '🥐', count: 20 }
    ],

    // Menu items
    menuItems: [
        // Hot Coffee
        {
            id: 'hc-1',
            name: 'Classic Pike Place Roast',
            description: 'Our signature medium roast with notes of cocoa and toasted nuts.',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
            price: 4.15,
            category: 'hot-coffee',
            sizes: ['Short', 'Tall', 'Grande', 'Venti'],
            customizations: ['Decaf', 'Extra Shot', 'Half Caff']
        },
        {
            id: 'hc-2',
            name: 'Caffè Americano',
            description: 'Rich espresso shots topped with hot water for a smooth, bold taste.',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
            price: 4.65,
            category: 'hot-coffee',
            sizes: ['Short', 'Tall', 'Grande', 'Venti'],
            customizations: ['Decaf', 'Extra Shot', 'Long Shot']
        },
        {
            id: 'hc-3',
            name: 'Cappuccino',
            description: 'Rich espresso with steamed milk and a deep layer of foam.',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop',
            price: 4.95,
            category: 'hot-coffee',
            sizes: ['Short', 'Tall', 'Grande'],
            customizations: ['Decaf', 'Extra Shot', 'Oat Milk', 'Almond Milk']
        },
        {
            id: 'hc-4',
            name: 'Caffe Latte',
            description: 'Rich espresso with steamed milk, topped with light foam.',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop',
            price: 5.25,
            category: 'hot-coffee',
            sizes: ['Short', 'Tall', 'Grande', 'Venti'],
            customizations: ['Decaf', 'Extra Shot', 'Vanilla', 'Caramel', 'Oat Milk']
        },

        // Cold Coffee  
        {
            id: 'cc-1',
            name: 'Iced Coffee',
            description: 'Our signature Pike Place roast served chilled over ice.',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
            price: 4.15,
            category: 'cold-coffee',
            sizes: ['Tall', 'Grande', 'Venti', 'Trenta']
        },
        {
            id: 'cc-2',
            name: 'Cold Brew',
            description: '20-hour slow-steeped coffee, smooth and naturally sweet.',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop',
            price: 4.75,
            category: 'cold-coffee',
            sizes: ['Tall', 'Grande', 'Venti', 'Trenta']
        },
        {
            id: 'cc-3',
            name: 'Iced Caramel Macchiato',
            description: 'Vanilla syrup and steamed milk topped with espresso and caramel drizzle.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            price: 5.95,
            category: 'cold-coffee',
            sizes: ['Tall', 'Grande', 'Venti']
        },

        // Hot Tea
        {
            id: 'ht-1',
            name: 'Earl Grey Tea',
            description: 'Traditional black tea with bergamot essence.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
            price: 3.45,
            category: 'hot-tea',
            sizes: ['Short', 'Tall', 'Grande', 'Venti']
        },
        {
            id: 'ht-2',
            name: 'Green Tea',
            description: 'Light and refreshing with delicate herbal notes.',
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
            price: 3.45,
            category: 'hot-tea',
            sizes: ['Short', 'Tall', 'Grande', 'Venti']
        },
        {
            id: 'ht-3',
            name: 'Chai Tea Latte',
            description: 'Spiced chai tea concentrate with steamed milk.',
            image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop',
            price: 4.95,
            category: 'hot-tea',
            sizes: ['Short', 'Tall', 'Grande', 'Venti']
        },

        // Cold Tea
        {
            id: 'ct-1',
            name: 'Iced Green Tea',
            description: 'Refreshing green tea served over ice.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
            price: 3.45,
            category: 'cold-tea',
            sizes: ['Tall', 'Grande', 'Venti', 'Trenta']
        },
        {
            id: 'ct-2',
            name: 'Iced Matcha Latte',
            description: 'Premium matcha powder with milk, served over ice.',
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop',
            price: 5.45,
            category: 'cold-tea',
            sizes: ['Tall', 'Grande', 'Venti']
        },

        // Frappuccinos
        {
            id: 'fr-1',
            name: 'Caramel Frappuccino',
            description: 'Buttery caramel syrup blended with coffee, milk and ice.',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
            price: 6.25,
            category: 'frappuccinos',
            sizes: ['Tall', 'Grande', 'Venti']
        },
        {
            id: 'fr-2',
            name: 'Mocha Frappuccino',
            description: 'Rich chocolate and coffee blended with milk and ice.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            price: 6.25,
            category: 'frappuccinos',
            sizes: ['Tall', 'Grande', 'Venti']
        },
        {
            id: 'fr-3',
            name: 'Vanilla Bean Frappuccino',
            description: 'Creamy vanilla bean blended with milk and ice.',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
            price: 5.95,
            category: 'frappuccinos',
            sizes: ['Tall', 'Grande', 'Venti']
        },

        // Food Items
        {
            id: 'f-1',
            name: 'Classic Croissant',
            description: 'Buttery, flaky pastry baked fresh daily.',
            image: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=400&h=400&fit=crop',
            price: 3.25,
            category: 'food'
        },
        {
            id: 'f-2',
            name: 'Blueberry Muffin',
            description: 'Moist muffin packed with fresh blueberries.',
            image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop',
            price: 3.75,
            category: 'food'
        },
        {
            id: 'f-3',
            name: 'Avocado Toast',
            description: 'Multigrain bread topped with fresh avocado and sea salt.',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop',
            price: 6.95,
            category: 'food'
        }
    ],

    // Store locations
    storeLocations: [
        {
            id: 1,
            name: 'Downtown Brew',
            address: '123 Main Street, Downtown',
            city: 'Seattle, WA 98101',
            phone: '(206) 555-0123',
            hours: {
                'Mon-Fri': '6:00 AM - 9:00 PM',
                'Sat-Sun': '7:00 AM - 10:00 PM'
            },
            distance: '0.2 miles',
            amenities: ['WiFi', 'Drive-Thru', 'Mobile Order', 'Outdoor Seating']
        },
        {
            id: 2,
            name: 'University Café',
            address: '456 College Ave, University District',
            city: 'Seattle, WA 98105',
            phone: '(206) 555-0456',
            hours: {
                'Mon-Fri': '5:30 AM - 11:00 PM',
                'Sat-Sun': '6:30 AM - 11:00 PM'
            },
            distance: '1.8 miles',
            amenities: ['WiFi', 'Study Area', 'Mobile Order', '24/7 Access']
        },
        {
            id: 3,
            name: 'Waterfront Roastery',
            address: '789 Pike Place, Waterfront',
            city: 'Seattle, WA 98101',
            phone: '(206) 555-0789',
            hours: {
                'Mon-Fri': '6:00 AM - 8:00 PM',
                'Sat-Sun': '7:00 AM - 9:00 PM'
            },
            distance: '2.1 miles',
            amenities: ['WiFi', 'Roastery Tours', 'Mobile Order', 'Parking']
        }
    ],

    // Rewards program data
    rewardsProgram: {
        tiers: [
            {
                name: 'Green Level',
                points: 0,
                benefits: [
                    'Free birthday drink',
                    'Mobile order & pay',
                    'Exclusive member offers'
                ]
            },
            {
                name: 'Gold Level',
                points: 450,
                benefits: [
                    'All Green benefits',
                    'Free drink or food item every 125 stars',
                    'Personalized offers',
                    'Free extra shot or dairy substitute'
                ]
            }
        ],
        waysToEarn: [
            { action: 'Purchase drinks', stars: 1, description: '1 star per $1 spent' },
            { action: 'Purchase food', stars: 2, description: '2 stars per $1 spent' },
            { action: 'Bonus challenges', stars: 25, description: 'Complete monthly challenges' }
        ]
    }
};

// Global State
let currentUser = null;
let currentPage = 'home';
let cartItems = [];
let selectedCategory = 'all';
let searchQuery = '';
let sortBy = 'name';
let currentProduct = null;
let productQuantity = 1;

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Load saved data from localStorage
    loadUserData();
    loadCartData();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize homepage
    showPage('home');
    
    // Update UI based on auth state
    updateAuthUI();
    updateCartUI();
});

// Navigation and Page Management
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const pageElement = document.getElementById(page + 'Page');
    if (pageElement) {
        pageElement.classList.add('active');
        currentPage = page;
        
        // Update navigation active state
        updateNavigation();
        
        // Load page content
        switch(page) {
            case 'home':
                loadHomePage();
                break;
            case 'menu':
                loadMenuPage();
                break;
            case 'rewards':
                loadRewardsPage();
                break;
            case 'stores':
                loadStoresPage();
                break;
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close mobile menu if open
        closeMobileMenu();
    }
}

function updateNavigation() {
    // Update desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update mobile navigation
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        if (link.textContent.toLowerCase() === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        mobileMenu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileMenu.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Search Functionality
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    if (searchContainer.classList.contains('active')) {
        closeSearch();
    } else {
        searchContainer.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    }
}

function closeSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    searchContainer.classList.remove('active');
    searchInput.value = '';
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query.trim()) {
            // Navigate to menu page with search
            showPage('menu');
            document.getElementById('menuSearchInput').value = query;
            searchQuery = query;
            filterMenu();
        }
    }
}

function handleMobileSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query.trim()) {
            showPage('menu');
            document.getElementById('menuSearchInput').value = query;
            searchQuery = query;
            filterMenu();
        }
    }
}

// Authentication
function handleAuth() {
    if (currentUser) {
        logout();
    } else {
        openAuthModal();
    }
}

function handlePrimaryAction() {
    if (currentUser) {
        toggleCart();
    } else {
        openAuthModal();
    }
}

function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
}

function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tab + 'Tab').classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        const userData = {
            id: 1,
            name: email.split('@')[0],
            email: email,
            points: 125
        };
        
        login(userData);
        closeAuthModal();
        showToast('Welcome back!', 'You\'ve successfully signed in.', 'success');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showToast('Sign up failed', 'Passwords do not match.', 'error');
        return;
    }
    
    if (firstName && lastName && email && password) {
        const userData = {
            id: 1,
            name: `${firstName} ${lastName}`,
            email: email,
            points: 0
        };
        
        login(userData);
        closeAuthModal();
        showToast('Account created!', 'Welcome to BrewHaven Rewards. Start earning stars with your first purchase!', 'success');
    }
}

function login(userData) {
    currentUser = userData;
    localStorage.setItem('brewHaven_user', JSON.stringify(userData));
    updateAuthUI();
    
    // Reload current page to show authenticated content
    if (currentPage === 'rewards') {
        loadRewardsPage();
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('brewHaven_user');
    updateAuthUI();
    
    // Clear cart
    cartItems = [];
    localStorage.removeItem('brewHaven_cart');
    updateCartUI();
    
    // Reload current page to show non-authenticated content
    if (currentPage === 'rewards') {
        loadRewardsPage();
    }
    
    showToast('Signed out', 'You have been successfully signed out.', 'success');
}

function loadUserData() {
    const savedUser = localStorage.getItem('brewHaven_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const authText = document.getElementById('authText');
    const primaryBtn = document.getElementById('primaryBtn');
    
    const mobileAuthBtn = document.getElementById('mobileAuthBtn');
    const mobileAuthText = document.getElementById('mobileAuthText');
    const mobilePrimaryBtn = document.getElementById('mobilePrimaryBtn');
    
    if (currentUser) {
        // Desktop
        authText.textContent = currentUser.name || 'Account';
        primaryBtn.innerHTML = '<i data-lucide="shopping-cart"></i><span id="cartCount">0</span>';
        primaryBtn.onclick = toggleCart;
        
        // Mobile
        mobileAuthText.textContent = currentUser.name || 'Account';
        mobilePrimaryBtn.innerHTML = '<i data-lucide="shopping-cart"></i> Cart <span id="mobileCartCount">0</span>';
        mobilePrimaryBtn.onclick = toggleCart;
    } else {
        // Desktop
        authText.textContent = 'Sign in';
        primaryBtn.textContent = 'Join now';
        primaryBtn.onclick = openAuthModal;
        
        // Mobile
        mobileAuthText.textContent = 'Sign in';
        mobilePrimaryBtn.textContent = 'Join now';
        mobilePrimaryBtn.onclick = openAuthModal;
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Cart Management
function loadCartData() {
    const savedCart = localStorage.getItem('brewHaven_cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

function addToCart(item) {
    if (!currentUser) {
        showToast('Please sign in', 'You need to sign in to add items to your cart.', 'error');
        return;
    }
    
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    
    saveCartData();
    updateCartUI();
    showToast('Added to cart!', `${item.name} has been added to your cart.`, 'success');
}

function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    saveCartData();
    updateCartUI();
}

function updateCartQuantity(itemId, quantity) {
    if (quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cartItems.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity = quantity;
        saveCartData();
        updateCartUI();
    }
}

function clearCart() {
    cartItems = [];
    saveCartData();
    updateCartUI();
}

function saveCartData() {
    localStorage.setItem('brewHaven_cart', JSON.stringify(cartItems));
}

function getCartTotal() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemsCount() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function updateCartUI() {
    const cartCount = getCartItemsCount();
    
    // Update cart count in header
    const cartCountElement = document.getElementById('cartCount');
    const mobileCartCountElement = document.getElementById('mobileCartCount');
    
    if (cartCountElement) cartCountElement.textContent = cartCount;
    if (mobileCartCountElement) mobileCartCountElement.textContent = cartCount;
    
    // Update cart drawer content
    const cartContent = document.getElementById('cartContent');
    const cartItemCountElement = document.getElementById('cartItemCount');
    
    if (cartItemCountElement) {
        cartItemCountElement.textContent = cartCount;
    }
    
    if (cartContent) {
        if (cartItems.length === 0) {
            cartContent.innerHTML = `
                <div class="cart-empty">
                    <i data-lucide="shopping-bag"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some delicious items to get started</p>
                    <button class="btn-primary" onclick="closeCart(); showPage('menu');">
                        Start Shopping
                    </button>
                </div>
            `;
        } else {
            const tax = getCartTotal() * 0.08875;
            const total = getCartTotal() + tax;
            
            cartContent.innerHTML = `
                <div class="cart-items">
                    ${cartItems.map(item => `
                        <div class="cart-item">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <div class="cart-item-info">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                            </div>
                            <div class="cart-item-controls">
                                <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
                                    <i data-lucide="minus"></i>
                                </button>
                                <span class="cart-item-quantity">${item.quantity}</span>
                                <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
                                    <i data-lucide="plus"></i>
                                </button>
                                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                                    <i data-lucide="x"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Subtotal</span>
                        <span>$${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>Tax</span>
                        <span>$${tax.toFixed(2)}</span>
                    </div>
                    <div class="cart-summary-row total">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    
                    <div class="cart-actions">
                        <button class="btn-primary full-width" onclick="checkout()">
                            Checkout - $${total.toFixed(2)}
                        </button>
                        <button class="btn-outline full-width" onclick="clearCart()">
                            Clear Cart
                        </button>
                    </div>
                </div>
            `;
        }
        
        // Refresh icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

function toggleCart() {
    if (!currentUser) {
        showToast('Please sign in', 'You need to sign in to view your cart.', 'error');
        return;
    }
    
    const cartDrawer = document.getElementById('cartDrawer');
    cartDrawer.classList.toggle('active');
    
    if (cartDrawer.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        updateCartUI();
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cartItems.length === 0) return;
    
    const total = getCartTotal() + (getCartTotal() * 0.08875);
    showToast('Order placed successfully!', `Your order of $${total.toFixed(2)} has been placed. You'll receive a confirmation email shortly.`, 'success');
    
    clearCart();
    closeCart();
}

// Page Loaders
function loadHomePage() {
    loadFeaturedProducts();
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredProducts');
    if (!featuredGrid) return;
    
    featuredGrid.innerHTML = mockData.heroProducts.map(product => `
        <div class="featured-card" onclick="openProductModal('${product.id}')">
            <div class="featured-card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="featured-card-content">
                <div class="featured-card-header">
                    <h3 class="featured-card-title">${product.name}</h3>
                    ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                </div>
                <p class="featured-card-description">${product.description}</p>
                <div class="featured-card-footer">
                    <span class="featured-card-price">$${product.price.toFixed(2)}</span>
                    ${currentUser ? 
                        `<button class="btn-primary" onclick="event.stopPropagation(); addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            Add to Cart
                        </button>` : 
                        `<button class="btn-primary" onclick="event.stopPropagation(); showPage('menu')">
                            View Menu
                        </button>`
                    }
                </div>
            </div>
        </div>
    `).join('');
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function loadMenuPage() {
    loadCategories();
    filterMenu();
}

function loadCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    
    const allItemsCount = mockData.menuItems.length;
    
    categoryList.innerHTML = `
        <button class="category-btn ${selectedCategory === 'all' ? 'active' : ''}" onclick="selectCategory('all')">
            <span>All Items</span>
            <span class="category-count">${allItemsCount}</span>
        </button>
        ${mockData.menuCategories.map(category => `
            <button class="category-btn ${selectedCategory === category.id ? 'active' : ''}" onclick="selectCategory('${category.id}')">
                <span>${category.icon} ${category.name}</span>
                <span class="category-count">${category.count}</span>
            </button>
        `).join('')}
    `;
}

function selectCategory(categoryId) {
    selectedCategory = categoryId;
    loadCategories();
    filterMenu();
}

function filterMenu() {
    const searchInput = document.getElementById('menuSearchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    if (searchInput) searchQuery = searchInput.value.toLowerCase();
    if (sortSelect) sortBy = sortSelect.value;
    
    let filteredItems = mockData.menuItems;
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Sort items
    filteredItems.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    // Update results info
    const resultsTitle = document.getElementById('menuResultsTitle');
    const resultsCount = document.getElementById('menuResultsCount');
    
    if (resultsTitle) {
        if (selectedCategory === 'all') {
            resultsTitle.textContent = 'All Items';
        } else {
            const category = mockData.menuCategories.find(cat => cat.id === selectedCategory);
            resultsTitle.textContent = category ? category.name : 'All Items';
        }
    }
    
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredItems.length} items${searchQuery ? ` for "${searchQuery}"` : ''}`;
    }
    
    // Render items
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-results">
                <i data-lucide="search"></i>
                <h3>No items found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
        `;
    } else {
        menuGrid.innerHTML = filteredItems.map(item => `
            <div class="menu-item-card" onclick="openProductModal('${item.id}')">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <div class="menu-item-price-info">
                            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                            ${item.sizes ? `<span class="menu-item-sizes">${item.sizes.length} sizes available</span>` : ''}
                        </div>
                        <button class="add-btn" onclick="event.stopPropagation(); ${currentUser ? `addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})` : 'showToast(\'Please sign in\', \'You need to sign in to add items to your cart.\', \'error\')'}" ${!currentUser ? 'disabled' : ''}>
                            <i data-lucide="plus"></i>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function loadRewardsPage() {
    loadRewardsHero();
    loadRewardsContent();
}

function loadRewardsHero() {
    const heroContent = document.getElementById('rewardsHeroContent');
    if (!heroContent) return;
    
    if (currentUser) {
        const userPoints = currentUser.points || 0;
        const nextRewardAt = 125;
        const progressPercentage = (userPoints / nextRewardAt) * 100;
        
        heroContent.innerHTML = `
            <div class="rewards-progress-card">
                <div class="progress-header">
                    <span>Your Stars</span>
                    <span style="font-size: 1.5rem; font-weight: 700;">${userPoints}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <p class="progress-text">
                    ${nextRewardAt - userPoints} stars until your next reward
                </p>
            </div>
        `;
    } else {
        heroContent.innerHTML = `
            <button class="btn-white" onclick="openAuthModal()">
                Join BrewHaven Rewards
            </button>
        `;
    }
}

function loadRewardsContent() {
    const rewardsContent = document.getElementById('rewardsContent');
    if (!rewardsContent) return;
    
    if (currentUser) {
        loadAuthenticatedRewards(rewardsContent);
    } else {
        loadUnauthenticatedRewards(rewardsContent);
    }
}

function loadAuthenticatedRewards(container) {
    const userPoints = currentUser.points || 0;
    const nextRewardAt = 125;
    const progressPercentage = (userPoints / nextRewardAt) * 100;
    
    // Mock challenges data
    const challenges = [
        {
            id: 1,
            title: 'Weekend Warrior',
            description: 'Visit us 3 times this weekend',
            reward: '50 bonus stars',
            progress: 1,
            total: 3,
            expires: '2 days left',
            completed: false
        },
        {
            id: 2,
            title: 'Try Something New',
            description: 'Order a drink you\'ve never tried before',
            reward: '25 bonus stars',
            progress: 0,
            total: 1,
            expires: '1 week left',
            completed: false
        },
        {
            id: 3,
            title: 'Early Bird',
            description: 'Make 5 orders before 9 AM',
            reward: '75 bonus stars',
            progress: 5,
            total: 5,
            expires: 'Completed',
            completed: true
        }
    ];
    
    // Mock history data
    const rewardHistory = [
        {
            id: 1,
            date: '2024-01-15',
            action: 'Free Latte Redeemed',
            stars: -125,
            type: 'redeem'
        },
        {
            id: 2,
            date: '2024-01-14',
            action: 'Cappuccino Purchase',
            stars: 5,
            type: 'earn'
        },
        {
            id: 3,
            date: '2024-01-12',
            action: 'Croissant Purchase',
            stars: 7,
            type: 'earn'
        },
        {
            id: 4,
            date: '2024-01-10',
            action: 'Weekend Challenge Completed',
            stars: 50,
            type: 'bonus'
        }
    ];
    
    container.innerHTML = `
        <div class="rewards-tabs">
            <button class="tab-btn active" onclick="switchRewardsTab('overview', event)">Overview</button>
            <button class="tab-btn" onclick="switchRewardsTab('challenges', event)">Challenges</button>
            <button class="tab-btn" onclick="switchRewardsTab('history', event)">History</button>
            <button class="tab-btn" onclick="switchRewardsTab('benefits', event)">Benefits</button>
        </div>
        
        <div id="rewardsTabContent">
            <!-- Tab content will be loaded here -->
        </div>
    `;
    
    // Load initial tab
    switchRewardsTab('overview');
}

function switchRewardsTab(tab, event) {
    // Update active tab button
    if (event) {
        document.querySelectorAll('.rewards-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    
    const tabContent = document.getElementById('rewardsTabContent');
    if (!tabContent) return;
    
    const userPoints = currentUser.points || 0;
    const nextRewardAt = 125;
    const progressPercentage = (userPoints / nextRewardAt) * 100;
    
    switch (tab) {
        case 'overview':
            tabContent.innerHTML = `
                <div class="rewards-grid">
                    <div class="rewards-card" style="grid-column: span 2;">
                        <h3><i data-lucide="award"></i> Your Progress</h3>
                        <div class="user-stats">
                            <div class="stat-item">
                                <h4>${userPoints} Stars</h4>
                                <p>Current balance</p>
                            </div>
                            <div class="tier-badge">Gold Level</div>
                        </div>
                        <div class="progress-section">
                            <div class="progress-info">
                                <span>Next reward progress</span>
                                <span>${userPoints}/${nextRewardAt}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                            </div>
                            <p style="font-size: 0.875rem; color: var(--gray-500); margin-top: 0.5rem;">
                                ${nextRewardAt - userPoints} more stars for a free drink or food item
                            </p>
                        </div>
                    </div>
                    <div class="rewards-card">
                        <h3>Quick Actions</h3>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button class="btn-primary full-width">Redeem Reward</button>
                            <button class="btn-outline full-width">View Offers</button>
                            <button class="btn-outline full-width">Send a Gift</button>
                        </div>
                    </div>
                </div>
                
                <div class="rewards-card">
                    <h3>Recent Activity</h3>
                    <p style="color: var(--gray-600); margin-bottom: 1rem;">Your latest stars and rewards</p>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--gray-50); border-radius: var(--radius-lg);">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--red-500);"></div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900); font-size: 0.875rem;">Free Latte Redeemed</p>
                                    <p style="font-size: 0.75rem; color: var(--gray-500);">2024-01-15</p>
                                </div>
                            </div>
                            <span style="font-weight: 700; color: var(--red-600);">-125 stars</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--gray-50); border-radius: var(--radius-lg);">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--green-500);"></div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900); font-size: 0.875rem;">Cappuccino Purchase</p>
                                    <p style="font-size: 0.75rem; color: var(--gray-500);">2024-01-14</p>
                                </div>
                            </div>
                            <span style="font-weight: 700; color: var(--green-600);">+5 stars</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--gray-50); border-radius: var(--radius-lg);">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--yellow-500);"></div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900); font-size: 0.875rem;">Weekend Challenge Completed</p>
                                    <p style="font-size: 0.75rem; color: var(--gray-500);">2024-01-10</p>
                                </div>
                            </div>
                            <span style="font-weight: 700; color: var(--green-600);">+50 stars</span>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'challenges':
            tabContent.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Current Challenges</h2>
                    <p style="color: var(--gray-600);">Complete challenges to earn bonus stars and unlock special rewards.</p>
                </div>
                
                <div style="display: grid; gap: 1.5rem;">
                    <div class="challenge-card">
                        <div class="challenge-header">
                            <h3 class="challenge-title">Weekend Warrior</h3>
                        </div>
                        <p class="challenge-description">Visit us 3 times this weekend</p>
                        <div class="challenge-progress">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                <span>Progress</span>
                                <span>1/3</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 33%"></div>
                            </div>
                        </div>
                        <div class="challenge-footer">
                            <div class="reward-badge">50 bonus stars</div>
                            <span class="expires-text">2 days left</span>
                        </div>
                    </div>
                    
                    <div class="challenge-card">
                        <div class="challenge-header">
                            <h3 class="challenge-title">Try Something New</h3>
                        </div>
                        <p class="challenge-description">Order a drink you've never tried before</p>
                        <div class="challenge-progress">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                <span>Progress</span>
                                <span>0/1</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="challenge-footer">
                            <div class="reward-badge">25 bonus stars</div>
                            <span class="expires-text">1 week left</span>
                        </div>
                    </div>
                    
                    <div class="challenge-card completed">
                        <div class="challenge-header">
                            <h3 class="challenge-title">Early Bird</h3>
                            <i data-lucide="check" style="color: var(--emerald-600);"></i>
                        </div>
                        <p class="challenge-description">Make 5 orders before 9 AM</p>
                        <div class="challenge-progress">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                <span>Progress</span>
                                <span>5/5</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="challenge-footer">
                            <div class="reward-badge">75 bonus stars</div>
                            <span class="expires-text completed">Completed</span>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'history':
            tabContent.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Transaction History</h2>
                    <p style="color: var(--gray-600);">View all your stars earned and redeemed.</p>
                </div>
                
                <div class="rewards-card">
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; border-bottom: 1px solid var(--gray-200);">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--red-100);">
                                    <i data-lucide="gift" style="color: var(--red-600);"></i>
                                </div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900);">Free Latte Redeemed</p>
                                    <p style="font-size: 0.875rem; color: var(--gray-500);">2024-01-15</p>
                                </div>
                            </div>
                            <span style="font-size: 1.125rem; font-weight: 700; color: var(--red-600);">-125</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; border-bottom: 1px solid var(--gray-200);">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--green-100);">
                                    <i data-lucide="star" style="color: var(--green-600);"></i>
                                </div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900);">Cappuccino Purchase</p>
                                    <p style="font-size: 0.875rem; color: var(--gray-500);">2024-01-14</p>
                                </div>
                            </div>
                            <span style="font-size: 1.125rem; font-weight: 700; color: var(--green-600);">+5</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; border-bottom: 1px solid var(--gray-200);">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--green-100);">
                                    <i data-lucide="star" style="color: var(--green-600);"></i>
                                </div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900);">Croissant Purchase</p>
                                    <p style="font-size: 0.875rem; color: var(--gray-500);">2024-01-12</p>
                                </div>
                            </div>
                            <span style="font-size: 1.125rem; font-weight: 700; color: var(--green-600);">+7</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--yellow-100);">
                                    <i data-lucide="zap" style="color: var(--yellow-600);"></i>
                                </div>
                                <div>
                                    <p style="font-weight: 500; color: var(--gray-900);">Weekend Challenge Completed</p>
                                    <p style="font-size: 0.875rem; color: var(--gray-500);">2024-01-10</p>
                                </div>
                            </div>
                            <span style="font-size: 1.125rem; font-weight: 700; color: var(--green-600);">+50</span>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'benefits':
            tabContent.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Member Benefits</h2>
                    <p style="color: var(--gray-600);">Enjoy these exclusive perks as a BrewHaven Rewards member.</p>
                </div>
                
                <div style="display: grid; gap: 1.5rem;">
                    <div class="rewards-card">
                        <h3><i data-lucide="coffee" style="color: var(--emerald-600); margin-right: 0.75rem;"></i>Free Birthday Drink</h3>
                        <p style="color: var(--gray-600);">Get a complimentary handcrafted beverage on your special day.</p>
                    </div>
                    
                    <div class="rewards-card">
                        <h3><i data-lucide="star" style="color: var(--emerald-600); margin-right: 0.75rem;"></i>Mobile Order & Pay</h3>
                        <p style="color: var(--gray-600);">Skip the line with convenient mobile ordering.</p>
                    </div>
                    
                    <div class="rewards-card">
                        <h3><i data-lucide="gift" style="color: var(--emerald-600); margin-right: 0.75rem;"></i>Personalized Offers</h3>
                        <p style="color: var(--gray-600);">Receive exclusive offers tailored just for you.</p>
                    </div>
                    
                    <div class="rewards-card">
                        <h3><i data-lucide="zap" style="color: var(--emerald-600); margin-right: 0.75rem;"></i>Free Refills</h3>
                        <p style="color: var(--gray-600);">Get free refills on brewed coffee and tea during your visit.</p>
                    </div>
                </div>
            `;
            break;
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function loadUnauthenticatedRewards(container) {
    container.innerHTML = `
        <div style="margin-bottom: 3rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">How It Works</h2>
                <p style="font-size: 1.125rem; color: var(--gray-600); max-width: 32rem; margin: 0 auto;">
                    Join BrewHaven Rewards and start earning stars with every purchase. It's free and easy!
                </p>
            </div>

            <div class="how-it-works-grid">
                ${mockData.rewardsProgram.waysToEarn.map(way => `
                    <div class="how-it-works-card">
                        <div class="stars-icon">
                            <i data-lucide="star"></i>
                        </div>
                        <h3>${way.action}</h3>
                        <div class="stars-count">${way.stars} stars</div>
                        <p>${way.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div style="margin-bottom: 3rem;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">Membership Levels</h2>
                <p style="font-size: 1.125rem; color: var(--gray-600);">
                    The more you visit, the more benefits you unlock.
                </p>
            </div>

            <div class="membership-levels">
                ${mockData.rewardsProgram.tiers.map((tier, index) => `
                    <div class="membership-card ${index === 1 ? 'recommended' : ''}">
                        <div class="membership-header">
                            <h3 class="membership-title">${tier.name}</h3>
                            ${index === 1 ? '<span class="recommended-badge">Recommended</span>' : ''}
                        </div>
                        <p class="membership-points">
                            ${tier.points === 0 ? 'Join for free' : `${tier.points}+ stars required`}
                        </p>
                        <ul class="benefits-list">
                            ${tier.benefits.map(benefit => `
                                <li>
                                    <i data-lucide="check"></i>
                                    <span>${benefit}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="join-cta-card">
            <h2>Ready to start earning rewards?</h2>
            <p>Join BrewHaven Rewards today and get your first star with any purchase.</p>
            <button class="btn-primary" onclick="openAuthModal()">
                Join Now - It's Free!
            </button>
        </div>
    `;
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function loadStoresPage() {
    loadStoresList();
    updateStoreStats();
}

function loadStoresList() {
    const storesList = document.getElementById('storesList');
    if (!storesList) return;
    
    const filteredStores = filterStores();
    
    if (filteredStores.length === 0) {
        storesList.innerHTML = `
            <div class="rewards-card">
                <div style="text-align: center; padding: 3rem 1rem;">
                    <i data-lucide="map-pin" style="width: 4rem; height: 4rem; color: var(--gray-300); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.125rem; margin-bottom: 0.5rem;">No stores found</h3>
                    <p style="color: var(--gray-600);">
                        Try adjusting your search criteria or browse all locations.
                    </p>
                </div>
            </div>
        `;
    } else {
        storesList.innerHTML = filteredStores.map(store => `
            <div class="store-card">
                <div class="store-content">
                    <div class="store-header">
                        <div class="store-info">
                            <h3>${store.name}</h3>
                            <div class="store-address">
                                <i data-lucide="map-pin"></i>
                                <span>${store.address}</span>
                            </div>
                            <div>${store.city}</div>
                            <div class="store-phone">
                                <i data-lucide="phone"></i>
                                <span>${store.phone}</span>
                            </div>
                        </div>
                        <div class="distance-badge">${store.distance}</div>
                    </div>

                    <div class="store-hours">
                        <h4><i data-lucide="clock"></i> Store Hours</h4>
                        <div class="hours-grid">
                            ${Object.entries(store.hours).map(([days, hours]) => `
                                <div class="hours-row">
                                    <span>${days}:</span>
                                    <span>${hours}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="store-amenities">
                        <h4>Amenities</h4>
                        <div class="amenities-list">
                            ${store.amenities.map(amenity => `
                                <div class="amenity-badge">
                                    <i data-lucide="${getAmenityIcon(amenity)}"></i>
                                    <span>${amenity}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="store-actions">
                        <button class="btn-primary">Get Directions</button>
                        <button class="btn-outline">Call Store</button>
                        <button class="btn-outline">Store Details</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update results title
    const resultsTitle = document.getElementById('storeResultsTitle');
    if (resultsTitle) {
        resultsTitle.textContent = `Store Locations (${filteredStores.length})`;
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function filterStores() {
    const searchInput = document.getElementById('storeSearchInput');
    const filterSelect = document.getElementById('storeFilterSelect');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const filterValue = filterSelect ? filterSelect.value : 'all';
    
    return mockData.storeLocations.filter(store => {
        const matchesSearch = !searchTerm || 
            store.name.toLowerCase().includes(searchTerm) ||
            store.address.toLowerCase().includes(searchTerm) ||
            store.city.toLowerCase().includes(searchTerm);
        
        const matchesFilter = filterValue === 'all' || 
            store.amenities.some(amenity => 
                amenity.toLowerCase().replace(/[^a-z]/g, '').includes(filterValue.replace('-', ''))
            );
        
        return matchesSearch && matchesFilter;
    });
}

function updateStoreStats() {
    const mapStats = document.getElementById('mapStats');
    if (!mapStats) return;
    
    const filteredStores = filterStores();
    const driveThruCount = filteredStores.filter(store => store.amenities.includes('Drive-Thru')).length;
    const accessCount = filteredStores.filter(store => store.amenities.includes('24/7 Access')).length;
    
    mapStats.innerHTML = `
        <div class="stat-row">
            <span class="stat-label">Stores Found</span>
            <span class="stat-value">${filteredStores.length}</span>
        </div>
        <div class="stat-row">
            <span class="stat-label">Drive-Thru Available</span>
            <span class="stat-value">${driveThruCount}</span>
        </div>
        <div class="stat-row">
            <span class="stat-label">24/7 Locations</span>
            <span class="stat-value">${accessCount}</span>
        </div>
    `;
}

function getAmenityIcon(amenity) {
    const iconMap = {
        'WiFi': 'wifi',
        'Drive-Thru': 'car',
        'Mobile Order': 'coffee',
        'Outdoor Seating': 'users',
        'Study Area': 'users',
        'Roastery Tours': 'coffee',
        'Parking': 'car',
        '24/7 Access': 'clock'
    };
    
    return iconMap[amenity] || 'coffee';
}

// Product Modal
function openProductModal(productId) {
    // Find product in all data sources
    let product = mockData.menuItems.find(item => item.id === productId);
    if (!product) {
        product = mockData.heroProducts.find(item => item.id === productId);
    }
    
    if (!product) return;
    
    currentProduct = product;
    productQuantity = 1;
    
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('productModalImage');
    const modalName = document.getElementById('productModalName');
    const modalDescription = document.getElementById('productModalDescription');
    const modalPrice = document.getElementById('productModalPrice');
    const modalCategory = document.getElementById('productModalCategory');
    
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    modalCategory.textContent = product.category.replace('-', ' ');
    
    // Load customizations
    loadProductCustomizations();
    
    // Update total
    updateProductTotal();
    
    // Update add to cart button
    updateAddToCartButton();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    currentProduct = null;
    productQuantity = 1;
}

function loadProductCustomizations() {
    const customizationsContainer = document.getElementById('productCustomizations');
    if (!customizationsContainer || !currentProduct) return;
    
    let html = '';
    
    // Size selection
    if (currentProduct.sizes && currentProduct.sizes.length > 0) {
        html += `
            <div class="customization-section">
                <label>Size *</label>
                <select class="size-select" id="productSize">
                    ${currentProduct.sizes.map(size => `
                        <option value="${size}">${size}</option>
                    `).join('')}
                </select>
            </div>
        `;
    }
    
    // Customizations
    if (currentProduct.customizations && currentProduct.customizations.length > 0) {
        html += `
            <div class="customization-section">
                <label>Customizations</label>
                <div class="customization-options">
                    ${currentProduct.customizations.map(customization => `
                        <div class="customization-option">
                            <input type="checkbox" id="custom-${customization}" value="${customization}">
                            <label for="custom-${customization}">${customization}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    customizationsContainer.innerHTML = html;
}

function incrementQuantity() {
    productQuantity++;
    document.getElementById('productQuantity').textContent = productQuantity;
    updateProductTotal();
}

function decrementQuantity() {
    if (productQuantity > 1) {
        productQuantity--;
        document.getElementById('productQuantity').textContent = productQuantity;
        updateProductTotal();
    }
}

function updateProductTotal() {
    if (!currentProduct) return;
    
    const total = currentProduct.price * productQuantity;
    document.getElementById('productTotal').textContent = `$${total.toFixed(2)}`;
}

function updateAddToCartButton() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const authMessage = document.getElementById('authMessage');
    
    if (currentUser) {
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.disabled = false;
        authMessage.style.display = 'none';
    } else {
        addToCartBtn.textContent = 'Sign in to Order';
        addToCartBtn.disabled = true;
        authMessage.style.display = 'block';
    }
}

function addToCartFromModal() {
    if (!currentUser || !currentProduct) {
        showToast('Please sign in', 'You need to sign in to add items to your cart.', 'error');
        return;
    }
    
    const cartItem = {
        ...currentProduct,
        quantity: productQuantity
    };
    
    // Add selected size if available
    const sizeSelect = document.getElementById('productSize');
    if (sizeSelect) {
        cartItem.selectedSize = sizeSelect.value;
    }
    
    // Add selected customizations
    const customizationCheckboxes = document.querySelectorAll('#productCustomizations input[type="checkbox"]:checked');
    if (customizationCheckboxes.length > 0) {
        cartItem.selectedCustomizations = Array.from(customizationCheckboxes).map(cb => cb.value);
    }
    
    for (let i = 0; i < productQuantity; i++) {
        addToCart(cartItem);
    }
    
    closeProductModal();
    showToast('Added to cart!', `${productQuantity}x ${currentProduct.name} added to your cart.`, 'success');
}

// Toast Notifications
function showToast(title, description, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toastId = 'toast_' + Date.now();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = toastId;
    
    toast.innerHTML = `
        <div class="toast-header">
            <div class="toast-title">${title}</div>
            <button class="toast-close" onclick="removeToast('${toastId}')">
                <i data-lucide="x"></i>
            </button>
        </div>
        <div class="toast-description">${description}</div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => removeToast(toastId), 5000);
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function removeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.remove();
    }
}

// Event Listeners
document.addEventListener('click', function(event) {
    // Close modals when clicking outside
    if (event.target.classList.contains('modal')) {
        if (event.target.id === 'authModal') {
            closeAuthModal();
        } else if (event.target.id === 'productModal') {
            closeProductModal();
        }
    }
    
    // Close cart when clicking outside
    if (event.target.id === 'cartDrawer') {
        closeCart();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Close modals with Escape key
    if (event.key === 'Escape') {
        closeAuthModal();
        closeProductModal();
        closeCart();
        closeSearch();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on desktop
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Re-initialize if needed
    });
}