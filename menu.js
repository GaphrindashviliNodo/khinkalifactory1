
// 🥟 რესტორნის მენიუს მუდმივი ლოკალური ბაზა (ფოტოები იტვირთება images ფოლდერიდან)
const initialProducts = [
    // === 🥟 1. აირჩიე შიგთავსი (KHINKALI FILLINGS) ===
    { id: 1, category: 'khinkali', nameKa: 'კალაკური ხინკალი', nameEn: 'Qalaquri Khinkali', descKa: 'საქონლის ხორცი, ღორის ხორცი, ქინძი, ხახვი, წიწაკა, ნიორი', descEn: 'Beef, pork, coriander, onion, pepper, cumin, garlic', price: 2.10, available: true, img: "images/qalaquri.webp" },
    { id: 2, category: 'khinkali', nameKa: 'მთიულური ხინკალი', nameEn: 'Mtiuluri Khinkali', descKa: 'საქონლის და ღორის ხორცი, წიწაკა, ხახვი და ძირა', descEn: 'Beef, pork, pepper, onion and cumin', price: 2.10, available: true, img: "images/mtiuluri.webp" },
    { id: 3, category: 'khinkali', nameKa: 'ფასანაურული ხინკალი', nameEn: 'Pasanauruli Khinkali', descKa: 'დაკეპილი საქონლის ხორცი, ღორის ხორცი, ძირა და ხახვი', descEn: 'Chopped beef, pork with onion, pepper, cumin', price: 2.10, available: true, img: "images/pasanauruli.webp" },
    { id: 4, category: 'khinkali', nameKa: 'საქონლის ხინკალი', nameEn: 'Beef Khinkali', descKa: 'საქონლის ხორცი, ძირა, ხახვი, წიწაკა და ნიორი', descEn: 'Beef, pepper, onion and cumin', price: 2.35, available: true, img: "images/beef.webp" },
    { id: 5, category: 'khinkali', nameKa: 'თუშური ხინკალი', nameEn: 'Tushuri Khinkali', descKa: 'ცხვრის და საქონლის ხორცი, ხახვი, წიწაკა', descEn: 'Lamb & beef, onion, pepper', price: 3.05, available: true, img: "images/tushuri.webp" },
    { id: 6, category: 'khinkali', nameKa: 'თელავური ხინკალი', nameEn: 'Telavuri Khinkali', descKa: 'ღორის ხორცი, წიწაკა, ხახვი, მთის ქონდარი, ძირა', descEn: 'Pork, pepper, onion, mountain savory and cumin', price: 2.10, available: true, img: "images/telavuri.webp" },
    { id: 7, category: 'khinkali', nameKa: 'ყველი ერბოთი', nameEn: 'Cheese with Clarified Butter', descKa: 'ტრადიციული ყველი და შემდნარი ერბო', descEn: 'Cheese with clarified butter', price: 2.10, available: true, img: "images/cheese-butter.webp" },
    { id: 8, category: 'khinkali', nameKa: 'ყველი ტრუფელით', nameEn: 'Cheese with Truffle', descKa: 'სპეციალური ყველი დახვეწილი ტრუფელის არომატით', descEn: 'Cheese with Truffle', price: 3.65, available: true, img: "images/cheese-truffle.webp" },
    { id: 9, category: 'khinkali', nameKa: 'სოკოს ხინკალი', nameEn: 'Oyster Mushroom Khinkali', descKa: 'ხის სოკო, წიწაკა, ნიორი, ტარხუნა, ხახვი, ქინძი', descEn: 'Pepper, garlic, tarragon, coriander', price: 1.75, available: true, img: "images/mushroom-khinkali.webp" },
    { id: 10, category: 'khinkali', nameKa: 'კარტოფილის ხინკალი', nameEn: 'Potato Khinkali', descKa: 'კარტოფილის გულსართი და ხახვი', descEn: 'Potato (Onion)', price: 1.35, available: true, img: "images/potato-khinkali.webp" },

    // === 🥢 2. აზიური კუთხე (ASIAN CORNER) ===
    { id: 11, category: 'asian', nameKa: 'კიოში კრევეტები და ღორი', nameEn: 'Kioshi with shrimp and pork', descKa: 'აზიური დამპლინგი კრევეტებით, ღორის ხორცითა და სუნელებით', descEn: 'Kioshi with shrimp and pork', price: 3.95, available: true, img: "images/kioshi.webp" },
    { id: 12, category: 'asian', nameKa: 'ტაკეში ქათამი და კრევეტები', nameEn: 'Takeshi with shrimp and chicken', descKa: 'აზიური დამპლინგი ნაზი ქათმის ხორცითა და კრევეტით', descEn: 'Takeshi with shrimp and chicken', price: 3.95, available: true, img: "images/takeshi.webp" },
    { id: 13, category: 'asian', nameKa: 'კეიტარო ღორის ხორცით', nameEn: 'Keitaro with pork', descKa: 'ტრადიციული აზიური გემო ღორის ხორცის შიგთავსით', descEn: 'Keitaro with pork', price: 3.95, available: true, img: "images/keitaro.webp" },
    { id: 14, category: 'asian', nameKa: 'კანდეა ვეგეტარიანული', nameEn: 'Kandea vegetarian', descKa: 'ბოსტნეულისა და აზიური სანელებლების მიქსი', descEn: 'Kandea vegetarian', price: 3.95, available: true, img: "images/kandea.webp" },

    // === 📐 3. ჩებურეკები (CHEBUREKI 5 ც.) ===
    { id: 15, category: 'chebureki', nameKa: 'ჩებურეკი შერეული ხორცით', nameEn: 'Chebureki Beef & Pork', descKa: '5 ცალი ხრაშუნა ჩებურეკი საქონლისა და ღორის ხორცით', descEn: '5 Pcs. Crispy chebureki with beef & pork mix', price: 15.00, available: true, img: "images/chebureki-mix.webp" },
    { id: 16, category: 'chebureki', nameKa: 'ჩებურეკი სოკოთი', nameEn: 'Chebureki Mushroom', descKa: '5 ცალი ხრაშუნა ჩებურეკი წვნიანი სოკოს შიგთავსით', descEn: '5 Pcs. Crispy chebureki with juicy mushroom filling', price: 14.00, available: true, img: "images/chebureki-mushroom.webp" },
    { id: 17, category: 'chebureki', nameKa: 'ჩებურეკი ბოსტნეულით', nameEn: 'Chebureki Veggie', descKa: '5 ცალი ხრაშუნა ჩებურეკი ვეგეტარიანული შიგთავსით', descEn: '5 Pcs. Crispy chebureki with veggie mix', price: 13.00, available: true, img: "images/chebureki-veggie.webp" },
    { id: 18, category: 'chebureki', nameKa: 'ჩებურეკი ყველით და კარტოფილით', nameEn: 'Chebureki Cheese & Potato', descKa: '5 ცალი ჩებურეკი დამდნარი ყველითა და კარტოფილით', descEn: '5 Pcs. Crispy chebureki with cheese & potato', price: 12.50, available: true, img: "images/chebureki-cheese.webp" }
];
// საწყისი კატეგორიების ბაზა
const initialCategories = {
    all: { ka: '✨ ყველაფერი', en: '✨ All' },
    khinkali: { ka: '🥟 ხინკლის შიგთავსი', en: '🥟 Hinkali Fillings' },
    asian: { ka: '🥢 აზიური კუთხე', en: '🥢 Asian Corner' },
    chebureki: { ka: '📐 ჩებურეკები (5ც.)', en: '📐 Chebureki (5 Pcs.)' }
};

// საწყისი ფუტერის მონაცემები
const initialFooterData = {
    fb: "https://www.facebook.com/hinkalifactory/",
    ig: "https://www.instagram.com/hinkalifactory/",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2979.3567845348825!2d44.7699!3d41.7139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzUwLjAiTiA0NLCwNDYnMTEuNiJF!5e0!3m2!1ska!2sge!4v1700000000000",
    branches: [
        { id: 1, name: "საბურთალო", address: "ვაჟა-ფშაველას გამზ. #20", hours: "10:00-23:00" },
        { id: 2, name: "ვაკე", address: "ი. ჭავჭავაძის გამზ. #45", hours: "10:00-23:00" },
        { id: 3, name: "ძველი თბილისი", address: "კოტე აფხაზის ქუჩა #12", hours: "24/7" },
        { id: 4, name: "გლდანი", address: "ხიზანიშვილის ქუჩა #8", hours: "10:00-22:00" }
    ]
};

const translations = {
    ka: { subTitle: 'კაფე & ბარი', cartText: 'შეკვეთა', totalText: 'სულ', close: 'დახურვა', searchPlace: '🔍 მოძებნე კერძი...' },
    en: { subTitle: 'Cafe & Bar', cartText: 'Your Order', totalText: 'Total', close: 'Close', searchPlace: '🔍 Search product...' }
};

let currentLang = 'ka';
let selectedCategory = 'all';
let products = initialProducts;
let customCategories = initialCategories;
let footerData = initialFooterData;
let cart = {};
let logoClickCount = 0;
let uploadedImgBase64 = ""; 
let searchQuery = "";

// 📄 გვერდების ცვლადები (Pagination)
let currentPage = 1;
const itemsPerPage = 10;

function init() {
    renderFooter();
    renderCategories();
    renderMenu();
    updateCartBar();
    setupImageUploadListener();

    // ⏳ Splash Screen ტაიმერი (3 წამი)
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.add('fade-out');
    }, 2000);
}

// 📂 კატეგორიების ზოლის გადახატვა
function renderCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(customCategories).forEach(key => {
        const btn = document.createElement('div');
        btn.className = `category-tab ${selectedCategory === key ? 'active' : ''}`;
        btn.innerText = customCategories[key][currentLang];
        btn.onclick = () => filterCategory(key);
        container.appendChild(btn);
    });
}

function filterCategory(categoryKey) {
    selectedCategory = categoryKey;
    currentPage = 1;
    document.querySelectorAll('.category-tab').forEach((tab, index) => {
        const key = Object.keys(customCategories)[index];
        if(tab) tab.classList.toggle('active', key === categoryKey);
    });
    applyFilters();
}

// 🔍 ძებნის ფუნქცია მომხმარებლისთვის
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchQuery = searchInput.value.toLowerCase().trim();
        currentPage = 1;
        applyFilters();
    }
}

// 🔥 კომბინირებული ფილტრაცია და გვერდების გამოთვლა
function applyFilters() {
    const filteredProducts = products.filter(prod => {
        const matchesCategory = (selectedCategory === 'all' || prod.category === selectedCategory);
        const name = (currentLang === 'ka' ? prod.nameKa : prod.nameEn).toLowerCase();
        const desc = (currentLang === 'ka' ? prod.descKa : prod.descEn).toLowerCase();
        const matchesSearch = name.includes(searchQuery) || desc.includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    products.forEach(prod => {
        const card = document.getElementById(`product-card-${prod.id}`);
        if (!card) return;
        
        const isVisible = productsToDisplay.some(p => p.id === prod.id);
        if (isVisible) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    renderPaginationControls(totalPages);
}

// 📄 გვერდების ღილაკების დინამიური გენერირება
function renderPaginationControls(totalPages) {
    const container = document.getElementById('pagination-controls');
    if (!container) return;
    container.innerHTML = '';

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${currentPage === i ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => {
            currentPage = i;
            applyFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        container.appendChild(btn);
    }
}

// 🍽️ მენიუს ქარდების ავტომატური გენერირება
function renderMenu() {
    const container = document.getElementById('menu-products');
    if (!container) return;
    container.innerHTML = '';

    products.forEach(prod => {
        const card = document.createElement('div');
        card.id = `product-card-${prod.id}`;
        card.className = 'product-card';
        if (!prod.available) card.classList.add('out-of-stock');

        const count = cart[prod.id] || 0;
        // თუ სურათი ცარიელია, ავტომატურად სვამს Placeholder ფოტოს ბექგრაუნდად
        const imgSrc = prod.img || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80';

        card.innerHTML = `
            <img src="${imgSrc}" class="product-img" alt="product">
            <div class="product-details">
                <div class="product-info">
                    <h3>${currentLang === 'ka' ? prod.nameKa : prod.nameEn}</h3>
                    <p>${currentLang === 'ka' ? prod.descKa : prod.descEn}</p>
                </div>
                <div class="product-bottom">
                    <span class="product-price">${prod.price.toFixed(2)} ₾</span>
                    ${prod.available ? `
                        <div class="controls">
                            <button onclick="updateQty(${prod.id}, -1)">-</button>
                            <span class="count">${count}</span>
                            <button onclick="updateQty(${prod.id}, 1)">+</button>
                        </div>
                    ` : `<span style="color: #ff6b6b; font-size: 13px; font-weight: bold;">Stop List</span>`}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    applyFilters(); 
}

function updateQty(id, change) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    if (!cart[id]) cart[id] = 0;

    cart[id] += change;

    if (cart[id] <= 0) {
        delete cart[id];
    }

    // ✨ მიკრო-ანიმაცია ციფრებზე
    const card = document.getElementById(`product-card-${id}`);
    if (card) {
        const countSpan = card.querySelector('.count');
        if (countSpan) {
            countSpan.innerText = cart[id] || 0;
            countSpan.classList.add('count-pop');
            setTimeout(() => countSpan.classList.remove('count-pop'), 150);
        }
    }

    updateCartBar();
    if(document.getElementById('cart-modal').style.display === 'flex') renderCartModal();
}

function updateCartBar() {
    const bar = document.getElementById('cart-bar');
    if (!bar) return;
    let totalItems = 0; let totalPrice = 0;
    Object.keys(cart).forEach(id => {
        const prod = products.find(p => p.id == id);
        if (prod) { totalItems += cart[id]; totalPrice += cart[id] * prod.price; }
    });
    
    if (totalItems > 0) {
        if (!bar.classList.contains('cart-bar-animate')) {
            bar.classList.add('cart-bar-animate');
        }
        document.getElementById('cart-text').innerText = `${translations[currentLang].cartText}: ${totalItems}`;
        
        const totalSpan = document.getElementById('cart-total');
        if (totalSpan) {
            totalSpan.innerText = `${totalPrice.toFixed(2)} ₾`;
            totalSpan.classList.add('pulse-price');
            setTimeout(() => totalSpan.classList.remove('pulse-price'), 300);
        }
    } else { 
        bar.classList.remove('cart-bar-animate');
        bar.style.display = 'none'; 
    }
}

function toggleCartModal(show) {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;
    modal.style.display = show ? 'flex' : 'none';
    if(show) renderCartModal();
}

function renderCartModal() {
    const list = document.getElementById('cart-items-list'); 
    const totalTextEl = document.getElementById('modal-total-text');
    const totalPriceEl = document.getElementById('modal-total-price');
    const closeBtnEl = document.getElementById('btn-close');

    if (!list) return;
    list.innerHTML = ''; 
    let totalPrice = 0;
    let khinkaliCount = 0;

    Object.keys(cart).forEach(id => {
        const prod = products.find(p => p.id == id);
        if(!prod) return;
        const qty = cart[id];
        const itemPrice = qty * prod.price; 
        totalPrice += itemPrice;

        if (prod.category === 'khinkali') khinkaliCount += qty;

        const row = document.createElement('div'); 
        row.style = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05);';
        row.innerHTML = `
            <div>
                <div style="font-weight:600; font-size:14px;">${currentLang === 'ka' ? prod.nameKa : prod.nameEn}</div>
                <div style="color:var(--accent-color); font-size:13px; margin-top:2px;">${itemPrice.toFixed(2)} ₾</div>
            </div>
            <div class="controls" style="background: rgba(255,255,255,0.03); padding: 2px; border-radius: 20px;">
                <button onclick="updateQty(${prod.id}, -1)">-</button>
                <span class="count" style="margin: 0 8px; min-width: 15px; text-align: center;">${qty}</span>
                <button onclick="updateQty(${prod.id}, 1)">+</button>
            </div>
        `;
        list.appendChild(row);
    });

    // სახალისო სტატუსების მართვა
    let statusText = '';
    if (khinkaliCount >= 1 && khinkaliCount <= 9) statusText = '💡 წასახემსებლად კარგია!';
    else if (khinkaliCount >= 10 && khinkaliCount <= 19) statusText = '💪 სერიოზული მჭამელი ხარ!';
    else if (khinkaliCount >= 20) statusText = '👑 ხინკლის ჩემპიონი ხარ!';

    const statusDiv = document.getElementById('modal-status-text');
    if (statusDiv) {
        statusDiv.innerText = statusText;
        statusDiv.style.display = statusText ? 'block' : 'none';
    }

    if (totalPriceEl) totalPriceEl.innerText = `${totalPrice.toFixed(2)} ₾`;
    if (totalTextEl) totalTextEl.innerText = translations[currentLang].totalText + ':';
    if (closeBtnEl) closeBtnEl.innerText = translations[currentLang].close;
}

function switchLanguage(lang) {
    currentLang = lang;
    const kBtn = document.getElementById('btn-ka');
    const eBtn = document.getElementById('id-en');
    if (kBtn) kBtn.classList.toggle('active', lang === 'ka');
    if (eBtn) eBtn.classList.toggle('active', lang === 'en');
    
    const subTitle = document.getElementById('sub-title');
    const searchInp = document.getElementById('search-input');
    if (subTitle) subTitle.innerText = translations[lang].subTitle;
    if (searchInp) searchInp.placeholder = translations[lang].searchPlace;
    
    renderCategories();
    renderMenu();
    updateCartBar();
}

// 🗺️ ფუტერის დინამიური გადახატვა საიტზე
function renderFooter() {
    const branchesList = document.getElementById('footer-branches-list');
    const mapContainer = document.getElementById('footer-map-container');
    
    if (branchesList) {
        branchesList.innerHTML = '';
        footerData.branches.forEach(b => {
            const div = document.createElement('div');
            div.className = 'mini-branch';
            div.innerHTML = `
                <div class="mini-branch-title">
                    <svg viewBox="0 0 24 24" class="pin-svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    ${b.name}
                </div>
                ${b.address} <span class="hours">${b.hours}</span>
            `;
            branchesList.appendChild(div);
        });
    }

    if (mapContainer && footerData.map) {
        mapContainer.innerHTML = `<iframe src="${footerData.map}" width="100%" height="160" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy"></iframe>`;
    }

    const fbLink = document.getElementById('footer-link-fb');
    const igLink = document.getElementById('footer-link-ig');
    if (fbLink) fbLink.href = footerData.fb || 'https://facebook.com';
    if (igLink) igLink.href = footerData.ig || 'https://instagram.com';
}

// 👨‍💼 მენეჯერის ადმინ პანელი
function handleLogoClick() {
    logoClickCount++;
    if (logoClickCount >= 5) {
        logoClickCount = 0;
        const pin = prompt("შეიყვანეთ მენეჯერის PIN კოდი:");
        if (pin === "7777") openAdminPanel();
        else if (pin !== null) alert("კოდი არასწორია!");
    }
}

function openAdminPanel() {
    const modal = document.getElementById('admin-modal');
    if (modal) modal.style.display = 'flex';
    updateAdminCategorySelect();
    renderAdminCategoriesList();
    renderAdminItemsList();

    const branchSelect = document.getElementById('admin-branch-select');
    if (branchSelect) {
        branchSelect.innerHTML = '';
        footerData.branches.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.innerText = b.name;
            branchSelect.appendChild(opt);
        });
        loadBranchToAdmin();
    }
    
    const efFb = document.getElementById('edit-footer-fb');
    const efIg = document.getElementById('edit-footer-ig');
    const efMap = document.getElementById('edit-footer-map');
    
    if(efFb) efFb.value = footerData.fb || '';
    if(efIg) efIg.value = footerData.ig || '';
    if(efMap) efMap.value = footerData.map || '';
}

function loadBranchToAdmin() {
    const select = document.getElementById('admin-branch-select');
    if (!select) return;
    const branchId = parseInt(select.value);
    const branch = footerData.branches.find(b => b.id === branchId);
    
    if (branch) {
        document.getElementById('edit-branch-name').value = branch.name;
        document.getElementById('edit-branch-address').value = branch.address;
        document.getElementById('edit-branch-hours').value = branch.hours;
    }
}

function saveFooterSettings() {
    const select = document.getElementById('admin-branch-select');
    const branchId = parseInt(select.value);
    const branch = footerData.branches.find(b => b.id === branchId);

    if (branch) {
        branch.name = document.getElementById('edit-branch-name').value.trim();
        branch.address = document.getElementById('edit-branch-address').value.trim();
        branch.hours = document.getElementById('edit-branch-hours').value.trim();
    }

    footerData.fb = document.getElementById('edit-footer-fb').value.trim();
    footerData.ig = document.getElementById('edit-footer-ig').value.trim();
    footerData.map = document.getElementById('edit-footer-map').value.trim();

    localStorage.setItem('kf_footer_data', JSON.stringify(footerData));
    renderFooter();
    
    const activeOpt = select.querySelector(`option[value="${branchId}"]`);
    if(activeOpt) activeOpt.innerText = branch.name;

    alert("🗺️ ფუტერის მონაცემები წარმატებით განახლდა!");
}

function updateAdminCategorySelect() {
    const select = document.getElementById('new-cat-select');
    if(!select) return;
    select.innerHTML = '';
    Object.keys(customCategories).forEach(key => {
        if (key === 'all') return;
        const opt = document.createElement('option');
        opt.value = key;
        opt.innerText = customCategories[key].ka;
        select.appendChild(opt);
    });
}

function renderAdminCategoriesList() {
    const list = document.getElementById('admin-categories-list');
    if(!list) return;
    list.innerHTML = '';
    Object.keys(customCategories).forEach(key => {
        if(key === 'all') return;
        const div = document.createElement('div');
        div.className = 'admin-item-row';
        div.innerHTML = `
            <span style="font-size:13px;">${customCategories[key].ka} (${key})</span>
            <button onclick="deleteCategory('${key}')" style="background:none; border:none; color:#ff6b6b; cursor:pointer;">🗑️</button>
        `;
        list.appendChild(div);
    });
}

function addNewCategory() {
    const id = document.getElementById('new-cat-id').value.trim().toLowerCase();
    const ka = document.getElementById('new-cat-ka').value.trim();
    const en = document.getElementById('new-cat-en').value.trim();

    if(!id || !ka || !en) { alert("შეავსეთ კატეგორიის ყველა ველი!"); return; }
    if(customCategories[id]) { alert("ეს ID უკვე არსებობს!"); return; }

    customCategories[id] = { ka: ka, en: en };
    localStorage.setItem('kf_categories', JSON.stringify(customCategories));
    
    document.getElementById('new-cat-id').value = '';
    document.getElementById('new-cat-ka').value = '';
    document.getElementById('new-cat-en').value = '';

    renderCategories();
    updateAdminCategorySelect();
    renderAdminCategoriesList();
}

function deleteCategory(key) {
    if(confirm(`დარწმუნებული ხართ?`)) {
        delete customCategories[key];
        localStorage.setItem('kf_categories', JSON.stringify(customCategories));
        if(selectedCategory === key) selectedCategory = 'all';
        renderCategories();
        updateAdminCategorySelect();
        renderAdminCategoriesList();
    }
}

function renderAdminItemsList() {
    const list = document.getElementById('admin-items-list'); if(!list) return;
    list.innerHTML = '';
    products.forEach(prod => {
        const row = document.createElement('div'); row.className = 'admin-item-row';
        row.innerHTML = `
            <span style="font-size:14px; max-width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${prod.nameKa}</span>
            <div style="display:flex; gap:10px; align-items:center;">
                <input type="number" step="0.1" value="${prod.price}" onchange="updatePrice(${prod.id}, this.value)"> ₾
                <input type="checkbox" ${prod.available ? 'checked' : ''} onchange="toggleAvailability(${prod.id}, this.checked)">
                <button onclick="deleteProduct(${prod.id})" style="background:none; border:none; color:#ff6b6b; cursor:pointer; font-size:16px;">🗑️</button>
            </div>
        `;
        list.appendChild(row);
    });
}

function setupImageUploadListener() {
    const fileInput = document.getElementById('new-img'); if (!fileInput) return;
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) { uploadedImgBase64 = event.target.result; document.getElementById('img-preview-text').innerText = "✅ ფოტო მზად არის!"; };
            reader.readAsDataURL(file);
        }
    });
}

function addNewProduct() {
    const selectEl = document.getElementById('new-cat-select');
    if(!selectEl) return;
    const cat = selectEl.value;
    const nameKa = document.getElementById('new-name-ka').value.trim();
    const nameEn = document.getElementById('new-name-en').value.trim();
    const descKa = document.getElementById('new-desc-ka').value.trim();
    const descEn = document.getElementById('new-desc-en').value.trim();
    const price = parseFloat(document.getElementById('new-price').value);

    if (!cat) { alert("ჯერ შექმენით ან აირჩიეთ კატეგორია!"); return; }
    if (!nameKa || !nameEn || isNaN(price)) { alert("გთხოვთ შეავსოთ სახელი და ფასი!"); return; }

    const newProd = {
        id: Date.now(), category: cat, nameKa: nameKa, nameEn: nameEn, descKa: descKa || "", descEn: descEn || "", price: price, available: true,
        img: uploadedImgBase64 || ""
    };

    products.push(newProd); saveProducts(); renderAdminItemsList();

    document.getElementById('new-name-ka').value = ''; document.getElementById('new-name-en').value = '';
    document.getElementById('new-desc-ka').value = ''; document.getElementById('new-desc-en').value = '';
    document.getElementById('new-price').value = ''; document.getElementById('new-img').value = '';
    const prevText = document.getElementById('img-preview-text'); if(prevText) prevText.innerText = ''; 
    uploadedImgBase64 = "";
    alert("🎉 კერძი წარმატებით დაემატა!");
}

function deleteProduct(id) {
    if (confirm("დარწმუნებული ხართ?")) { products = products.filter(p => p.id !== id); delete cart[id]; saveProducts(); renderAdminItemsList(); }
}
function updatePrice(id, newPrice) { const prod = products.find(p => p.id === id); if(prod) { prod.price = parseFloat(newPrice) || 0; saveProducts(); } }
function toggleAvailability(id, isChecked) { const prod = products.find(p => p.id === id); if(prod) { prod.available = isChecked; if(!isChecked) delete cart[id]; saveProducts(); } }
function saveProducts() { localStorage.setItem('kf_products', JSON.stringify(products)); renderMenu(); updateCartBar(); }
function closeAdminPanel() { const modal = document.getElementById('admin-modal'); if(modal) modal.style.display = 'none'; }

// სტარტი
init();