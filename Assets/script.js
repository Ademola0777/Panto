document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(0,0,0,0.9)';
                navLinks.style.padding = '20px';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // Product Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productsContainer = document.getElementById('products-container');

    // Mock Data for Products (Simulating different categories)
    const productsData = {
        chair: [
            { name: 'Sakarias Armchair', price: '$392', img: 'Assets/Images/sakarias-armchair.png', category: 'Chair' },
            { name: 'Baltsar Chair', price: '$299', img: 'Assets/Images/balstar-chair.png', category: 'Chair' },
            { name: 'Anjay Chair', price: '$519', img: 'Assets/Images/anjay-chair.png', category: 'Chair' },
            { name: 'Nyantuy Chair', price: '$921', img: 'Assets/Images/nyantuy-chair.png', category: 'Chair' }
        ],
        beds: [
            { name: 'Comfort Bed', price: '$500', img: 'Assets/Images/sakarias-armchair.png', category: 'Beds' }, // Reusing images for demo
            { name: 'Luxury Bed', price: '$800', img: 'Assets/Images/balstar-chair.png', category: 'Beds' },
            { name: 'King Size Bed', price: '$1200', img: 'Assets/Images/anjay-chair.png', category: 'Beds' },
            { name: 'Queen Bed', price: '$950', img: 'Assets/Images/nyantuy-chair.png', category: 'Beds' }
        ],
        sofa: [
            { name: 'Modern Sofa', price: '$600', img: 'Assets/Images/sakarias-armchair.png', category: 'Sofa' },
            { name: 'Leather Sofa', price: '$1000', img: 'Assets/Images/balstar-chair.png', category: 'Sofa' },
            { name: 'L-Shape Sofa', price: '$1500', img: 'Assets/Images/anjay-chair.png', category: 'Sofa' },
            { name: 'Cozy Sofa', price: '$450', img: 'Assets/Images/nyantuy-chair.png', category: 'Sofa' }
        ],
        lamp: [
            { name: 'Table Lamp', price: '$50', img: 'Assets/Images/sakarias-armchair.png', category: 'Lamp' },
            { name: 'Floor Lamp', price: '$120', img: 'Assets/Images/balstar-chair.png', category: 'Lamp' },
            { name: 'Desk Lamp', price: '$80', img: 'Assets/Images/anjay-chair.png', category: 'Lamp' },
            { name: 'Wall Lamp', price: '$60', img: 'Assets/Images/nyantuy-chair.png', category: 'Lamp' }
        ]
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-tab');
            renderProducts(category);
        });
    });


    function renderProducts(category) {
        productsContainer.innerHTML = '';
        const products = productsData[category] || [];

        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            // Add AOS attributes dynamically
            productCard.setAttribute('data-aos', 'zoom-in');
            productCard.setAttribute('data-aos-delay', (index + 1) * 100);
            
            productCard.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="category">${product.category}</span>
                    <h3>${product.name}</h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price-row">
                        <span class="price">${product.price}</span>
                        <button class="add-btn"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }
});

// Initialize AOS
AOS.init({
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 100, // Offset (in px) from the original trigger point
});
