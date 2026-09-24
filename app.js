/**
 * OD34 RENTAL - SELF DRIVE CAR RENTAL
 * Location: Kalinga Nagar, Bhubaneswar, Odisha, India
 * Phone & WhatsApp: +91 81149 05426
 * Google Maps: https://maps.google.com/?q=Kalinga+Nagar,+Bhubaneswar,+Odisha
 */

// ==========================================================================
// 1. OFFICIAL CAR FLEET DATA (EXACT USER CARS & PRICES ONLY)
// ==========================================================================
const CARS_DATA = [
  {
    id: "alto-k10",
    name: "Maruti Suzuki Alto K10",
    brand: "Maruti Suzuki",
    tagline: "Compact, Quick & Most Affordable City Car",
    category: ["hatchback", "budget"],
    image: "images/alto_k10_user.jpg",
    price12h: 800,
    price24h: 1000,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    mileage: "24 km/l",
    badge: "Best Budget ₹800",
    features: ["Chilled AC", "Power Steering", "Super Fuel Efficient", "Easy Parking"],
    deposit: 1000,
    rating: 4.9,
    trips: 320
  },
  {
    id: "tata-punch",
    name: "Tata Punch",
    brand: "Tata",
    tagline: "5-Star Global NCAP Safety Micro SUV",
    category: ["suv", "compact"],
    image: "images/tata_punch_user.jpg",
    price12h: 1500,
    price24h: 2000,
    seats: 5,
    transmission: "Manual / AMT",
    fuel: "Petrol",
    mileage: "18 km/l",
    badge: "5-Star Safety",
    features: ["Harman Audio", "High Ground Clearance", "Dual Airbags", "Terrain Modes"],
    deposit: 1500,
    rating: 4.9,
    trips: 210
  },
  {
    id: "maruti-swift",
    name: "Maruti Suzuki Swift",
    brand: "Maruti Suzuki",
    tagline: "Sporty, Stylish & Dynamic Hatchback",
    category: ["hatchback"],
    image: "images/maruti_swift_user.jpg",
    price12h: 1500,
    price24h: 2000,
    seats: 5,
    transmission: "Manual / AMT",
    fuel: "Petrol",
    mileage: "22 km/l",
    badge: "Customer Favorite",
    features: ["Touchscreen Audio", "Keyless Push Start", "Sporty Steering", "Rear Camera"],
    deposit: 1500,
    rating: 4.9,
    trips: 395
  },
  {
    id: "maruti-victori",
    name: "Maruti Suzuki Victori",
    brand: "Maruti Suzuki",
    tagline: "Coupe Style Urban Crossover SUV",
    category: ["suv", "compact"],
    image: "images/maruti_fronx_user.jpg",
    price12h: 1500,
    price24h: 2000,
    seats: 5,
    transmission: "Manual / Auto",
    fuel: "Petrol",
    mileage: "20 km/l",
    badge: "Trending Crossover",
    features: ["Coupe Design", "SmartPlay Pro+", "LED DRLs", "Wireless Android Auto"],
    deposit: 1500,
    rating: 4.8,
    trips: 175
  },
  {
    id: "maruti-baleno",
    name: "Maruti Suzuki Baleno",
    brand: "Maruti Suzuki",
    tagline: "Spacious & Premium Hatchback",
    category: ["hatchback"],
    image: "images/maruti_baleno_user.jpg",
    price12h: 1500,
    price24h: 2000,
    seats: 5,
    transmission: "Manual / AMT",
    fuel: "Petrol",
    mileage: "21 km/l",
    badge: "Spacious Hatch",
    features: ["Heads Up Display", "Huge Legroom", "360 Camera", "Premium Interiors"],
    deposit: 1500,
    rating: 4.9,
    trips: 260
  },
  {
    id: "hyundai-i20",
    name: "Hyundai i20",
    brand: "Hyundai",
    tagline: "Feature-Packed Luxury Hatchback",
    category: ["hatchback", "luxury"],
    image: "images/hyundai_i20_user.jpg",
    price12h: 1500,
    price24h: 2000,
    seats: 5,
    transmission: "Manual / IVT",
    fuel: "Petrol",
    mileage: "19 km/l",
    badge: "Premium Class",
    features: ["Sunroof", "Bose Premium Sound", "Ambient Lighting", "Digital Cluster"],
    deposit: 1500,
    rating: 4.9,
    trips: 245
  },
  {
    id: "kia-sonet",
    name: "Kia Sonet",
    brand: "Kia",
    tagline: "Sporty, Bold & Feature-Rich Compact SUV",
    category: ["suv", "compact"],
    image: "images/kia_sonet_user.jpg",
    price12h: 1800,
    price24h: 2200,
    seats: 5,
    transmission: "Automatic / Manual",
    fuel: "Diesel / Petrol",
    mileage: "18 km/l",
    badge: "Sporty SUV",
    features: ["Electric Sunroof", "Ventilated Seats", "Bose Audio", "LED Crown Lamps"],
    deposit: 1500,
    rating: 4.8,
    trips: 180
  },
  {
    id: "hyundai-venue",
    name: "Hyundai Venue",
    brand: "Hyundai",
    tagline: "Smart Urban SUV with Connected Tech",
    category: ["suv", "compact"],
    image: "images/hyundai_venue_user.jpg",
    price12h: 1800,
    price24h: 2200,
    seats: 5,
    transmission: "Manual / Auto",
    fuel: "Petrol",
    mileage: "17 km/l",
    badge: "Connected SUV",
    features: ["Connected Car Tech", "Sunroof", "Cruise Control", "Voice Controlled AC"],
    deposit: 1500,
    rating: 4.8,
    trips: 190
  },
  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    brand: "Hyundai",
    tagline: "India's Ultimate Premium Midsize SUV",
    category: ["suv", "luxury"],
    image: "images/hyundai_creta_user.jpg",
    price12h: 2000,
    price24h: 2500,
    seats: 5,
    transmission: "Automatic / Manual",
    fuel: "Diesel / Petrol",
    mileage: "17 km/l",
    badge: "Best Seller SUV",
    features: ["Panoramic Sunroof", "Bose Audio", "Ventilated Seats", "Rear Window Shades"],
    deposit: 2000,
    rating: 4.9,
    trips: 340
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    brand: "Kia",
    tagline: "Ultra-Spacious 7-Seater Family Cruiser",
    category: ["family", "luxury"],
    image: "images/kia_carens_user.jpg",
    price12h: 2000,
    price24h: 2500,
    seats: 7,
    transmission: "Automatic / Manual",
    fuel: "Diesel / Petrol",
    mileage: "16 km/l",
    badge: "7-Seater Family",
    features: ["Captain Seats", "Air Purifier", "3-Row AC Vents", "One-Touch Electric Tumble"],
    deposit: 2000,
    rating: 4.9,
    trips: 225
  },
  {
    id: "thar-3door",
    name: "Mahindra Thar (3 Door)",
    brand: "Mahindra",
    tagline: "True 4x4 Offroad Icon with Hard Top",
    category: ["suv", "luxury"],
    image: "images/mahindra_thar_3door_user.jpg",
    price12h: 2500,
    price24h: 3000,
    seats: 4,
    transmission: "4x4 Manual / Auto",
    fuel: "Diesel",
    mileage: "13 km/l",
    badge: "4x4 Offroad King",
    features: ["4x4 Low/High Ratio", "Hard Top", "Touchscreen Audio", "Hill Hold & Descent"],
    deposit: 2500,
    rating: 5.0,
    trips: 280
  },
  {
    id: "mahindra-scorpio-n",
    name: "Mahindra Scorpio-N",
    brand: "Mahindra",
    tagline: "The Big Daddy of 7-Seater Luxury SUVs",
    category: ["suv", "family", "luxury"],
    image: "images/mahindra_scorpio_n_user.jpg",
    price12h: 3000,
    price24h: 4000,
    seats: 7,
    transmission: "Automatic / Manual",
    fuel: "mHawk Diesel",
    mileage: "14 km/l",
    badge: "Executive 7-Seater",
    features: ["mHawk Diesel", "Sunroof", "Sony 3D Audio", "Dual Zone Climate Control"],
    deposit: 3000,
    rating: 4.9,
    trips: 290
  },
  {
    id: "mahindra-xuv700",
    name: "Mahindra XUV700",
    brand: "Mahindra",
    tagline: "Flagship Luxury 7-Seater Tech SUV",
    category: ["suv", "family", "luxury"],
    image: "images/mahindra_xuv700_user.jpg",
    price12h: 3000,
    price24h: 4000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    mileage: "15 km/l",
    badge: "Flagship Luxury",
    features: ["Panoramic Skyroof", "Dual 10.25-inch Screens", "Sony 3D Sound", "ADAS Safety"],
    deposit: 3000,
    rating: 5.0,
    trips: 230
  },
  {
    id: "mahindra-thar-roxx",
    name: "Mahindra Thar Roxx (5 Door)",
    brand: "Mahindra",
    tagline: "Next-Gen 5-Door Luxury 4x4 Offroader",
    category: ["suv", "luxury"],
    image: "images/mahindra_thar_roxx_user.jpg",
    price12h: 3000,
    price24h: 4000,
    seats: 5,
    transmission: "Automatic / 4x4",
    fuel: "mHawk Diesel",
    mileage: "14 km/l",
    badge: "New Thar Roxx",
    features: ["Panoramic Sunroof", "Harman Kardon Audio", "Level 2 ADAS", "Electronic 4x4"],
    deposit: 3000,
    rating: 5.0,
    trips: 140
  }
];

// Configuration
const CONFIG = {
  phone: "+918114905426",
  phoneDisplay: "+91 81149 05426",
  whatsappPhone: "918114905426",
  location: "Kalinga Nagar, Bhubaneswar, Odisha, India",
  mapsUrl: "https://maps.google.com/?q=Kalinga+Nagar,+Bhubaneswar,+Odisha",
  defaultCurrency: "₹"
};

// State
let currentDuration = "12h"; // '12h' or '24h'
let currentCategory = "all";
let selectedCarForBooking = null;

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderFleet();
  setupNavigation();
  setupDurationToggle();
  setupCategoryFilters();
  setupBookingModal();
  setupFAQs();
  setupQuickSearchWidget();
  setupNavbarScroll();
});

// ==========================================================================
// 3. RENDER FLEET CARS
// ==========================================================================
function renderFleet() {
  const carsGrid = document.getElementById("carsGrid");
  if (!carsGrid) return;

  const filteredCars = CARS_DATA.filter(car => {
    if (currentCategory === "all") return true;
    if (currentCategory === "budget") return car.price24h <= 2000;
    return car.category.includes(currentCategory);
  });

  carsGrid.innerHTML = filteredCars.map(car => {
    const is12h = currentDuration === "12h";
    
    return `
      <div class="car-card" data-car-id="${car.id}">
        <div class="car-card-header">
          <img src="${car.image}" alt="${car.name} self drive car in Kalinga Nagar, Bhubaneswar" loading="lazy" onerror="this.src='images/alto_k10_user.jpg'">
          <span class="car-badge">${car.badge}</span>
          <span class="car-segment-tag">Verified Fleet</span>
        </div>
        
        <div class="car-card-body">
          <div class="car-title-group">
            <span class="car-brand">${car.brand}</span>
            <h3 class="car-name">${car.name}</h3>
          </div>
          
          <div class="car-specs-grid">
            <div class="spec-item" title="Seating Capacity">
              <svg viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-3c0-1.66-1.34-3-3-3h-1v-4c0-2.21-1.79-4-4-4s-4 1.79-4 4v4H7c-1.66 0-3 1.34-3 3z"/></svg>
              <span>${car.seats} Seats</span>
            </div>
            <div class="spec-item" title="Transmission">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V7h2v3z"/></svg>
              <span>${car.transmission.split('/')[0].trim()}</span>
            </div>
            <div class="spec-item" title="Fuel & Mileage">
              <svg viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5z"/></svg>
              <span>${car.fuel.split('/')[0].trim()}</span>
            </div>
          </div>
          
          <div class="pricing-dual-box">
            <div class="price-col ${is12h ? 'active-pricing' : ''}">
              <span class="price-duration-label">⏱️ 12 Hours</span>
              <span class="price-value">₹${car.price12h.toLocaleString('en-IN')}</span>
            </div>
            <div class="price-col ${!is12h ? 'active-pricing' : ''}">
              <span class="price-duration-label">🕒 24 Hours</span>
              <span class="price-value">₹${car.price24h.toLocaleString('en-IN')}</span>
            </div>
          </div>
          
          <div class="car-card-actions">
            <button class="btn btn-secondary btn-sm" onclick="openCarDetails('${car.id}')" title="View Full Specs">
              Specs
            </button>
            <button class="btn btn-secondary btn-sm" onclick="sendCarQuery('${car.id}')" style="color: var(--color-primary); border-color: var(--color-primary-border);" title="Send Fast Inquiry">
              💬 Query
            </button>
            <button class="btn btn-primary btn-sm" onclick="openBookingModal('${car.id}')">
              Book
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 4. DURATION SWITCHER (12H vs 24H)
// ==========================================================================
function setupDurationToggle() {
  const toggleButtons = document.querySelectorAll(".duration-toggle-btn");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentDuration = btn.getAttribute("data-duration");
      renderFleet();
      showToast(`Switched to ${currentDuration === '12h' ? '12-Hour' : '24-Hour'} Rental Pricing`);
    });
  });
}

// ==========================================================================
// 5. CATEGORY FILTERS
// ==========================================================================
function setupCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderFleet();
    });
  });
}

// ==========================================================================
// 6. BOOKING MODAL & INTERACTIVE CALCULATOR
// ==========================================================================
function setupBookingModal() {
  const modalBackdrop = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const carSelect = document.getElementById("modalCarSelect");
  const durationType = document.getElementById("modalDurationType");
  const addonExtraKm = document.getElementById("addonExtraKm");
  const addonSeat = document.getElementById("addonSeat");
  const addonDamageWaiver = document.getElementById("addonDamageWaiver");
  const bookWhatsappBtn = document.getElementById("bookWhatsappBtn");
  const confirmBookingForm = document.getElementById("modalBookingForm");

  // Populate Car Select
  if (carSelect) {
    carSelect.innerHTML = CARS_DATA.map(car => 
      `<option value="${car.id}">${car.name} (12h: ₹${car.price12h} | 24h: ₹${car.price24h})</option>`
    ).join('');

    carSelect.addEventListener("change", (e) => {
      selectedCarForBooking = CARS_DATA.find(c => c.id === e.target.value);
      updateModalPriceCalculation();
    });
  }

  // Close Modal Events
  if (closeBtn) {
    closeBtn.addEventListener("click", closeBookingModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeBookingModal();
    });
  }

  // Change Listeners for Instant Calculation
  [durationType, addonExtraKm, addonSeat, addonDamageWaiver].forEach(elem => {
    if (elem) {
      elem.addEventListener("change", updateModalPriceCalculation);
    }
  });

  // WhatsApp Button Click
  if (bookWhatsappBtn) {
    bookWhatsappBtn.addEventListener("click", handleWhatsAppBooking);
  }

  // Form Submit
  if (confirmBookingForm) {
    confirmBookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleDirectBookingSubmit();
    });
  }
}

function openBookingModal(carId = null) {
  const modalBackdrop = document.getElementById("bookingModal");
  const carSelect = document.getElementById("modalCarSelect");
  const durationType = document.getElementById("modalDurationType");

  if (!modalBackdrop) return;

  if (carId) {
    selectedCarForBooking = CARS_DATA.find(c => c.id === carId) || CARS_DATA[0];
  } else if (!selectedCarForBooking) {
    selectedCarForBooking = CARS_DATA[0];
  }

  if (carSelect) {
    carSelect.value = selectedCarForBooking.id;
  }
  if (durationType) {
    durationType.value = currentDuration;
  }

  updateModalPriceCalculation();
  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modalBackdrop = document.getElementById("bookingModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function updateModalPriceCalculation() {
  if (!selectedCarForBooking) selectedCarForBooking = CARS_DATA[0];

  const durationType = document.getElementById("modalDurationType").value;
  const carThumb = document.getElementById("modalCarThumb");
  const carName = document.getElementById("modalCarName");
  const carTagline = document.getElementById("modalCarTagline");
  const baseRateLabel = document.getElementById("modalBaseRateLabel");
  const baseRateVal = document.getElementById("modalBaseRateVal");
  const depositVal = document.getElementById("modalDepositVal");
  const addonsVal = document.getElementById("modalAddonsVal");
  const totalAmount = document.getElementById("modalTotalAmount");

  // Update Summary
  if (carThumb) carThumb.src = selectedCarForBooking.image;
  if (carName) carName.textContent = selectedCarForBooking.name;
  if (carTagline) carTagline.textContent = `${selectedCarForBooking.seats} Seater • ${selectedCarForBooking.transmission} • ${selectedCarForBooking.fuel}`;

  let baseRental = 0;
  if (durationType === "12h") {
    baseRental = selectedCarForBooking.price12h;
    if (baseRateLabel) baseRateLabel.textContent = "12-Hour Rental Rate";
  } else if (durationType === "24h") {
    baseRental = selectedCarForBooking.price24h;
    if (baseRateLabel) baseRateLabel.textContent = "24-Hour Rental Rate";
  } else if (durationType === "48h") {
    baseRental = selectedCarForBooking.price24h * 2;
    if (baseRateLabel) baseRateLabel.textContent = "2 Days (48h) Rental Rate";
  } else if (durationType === "72h") {
    baseRental = selectedCarForBooking.price24h * 3;
    if (baseRateLabel) baseRateLabel.textContent = "3 Days (72h) Rental Rate";
  }

  // Addons
  let addons = 0;
  const addonKm = document.getElementById("addonExtraKm");
  const addonSeat = document.getElementById("addonSeat");
  const addonDamage = document.getElementById("addonDamageWaiver");

  if (addonKm && addonKm.checked) addons += 300;
  if (addonSeat && addonSeat.checked) addons += 200;
  if (addonDamage && addonDamage.checked) addons += 250;

  const deposit = selectedCarForBooking.deposit;
  const total = baseRental + addons; // deposit is refundable

  if (baseRateVal) baseRateVal.textContent = `₹${baseRental.toLocaleString('en-IN')}`;
  if (depositVal) depositVal.textContent = `₹${deposit.toLocaleString('en-IN')} (100% Refundable)`;
  if (addonsVal) addonsVal.textContent = `₹${addons.toLocaleString('en-IN')}`;
  if (totalAmount) totalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
}

// Quick WhatsApp Query for Specific Car
function sendCarQuery(carId) {
  const car = CARS_DATA.find(c => c.id === carId) || CARS_DATA[0];
  const msg = `👋 Hello OD34 Rental (Kalinga Nagar Hub)!
I have a quick query regarding *${car.name}* (12h: ₹${car.price12h} / 24h: ₹${car.price24h}).
Is this car available for self-drive booking?`;
  window.open(`https://wa.me/${CONFIG.whatsappPhone}?text=${encodeURIComponent(msg)}`, "_blank");
}

// General Quick Query
function openGeneralQuery() {
  const msg = `👋 Hello OD34 Rental (Kalinga Nagar, Bhubaneswar)!
I want to make an inquiry about renting a self-drive car (Swift / Victori / Baleno @ ₹1500 / 12h or SUV). Please share available slots.`;
  window.open(`https://wa.me/${CONFIG.whatsappPhone}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ==========================================================================
// QUICK QUERY MODAL LOGIC
// ==========================================================================
function openQuickQueryModal(preset = null) {
  const modal = document.getElementById("queryModal");
  if (!modal) return;

  const msgInput = document.getElementById("queryMessage");
  const carSelect = document.getElementById("queryCarModel");

  if (preset === "hub-special" || preset === "swift" || preset === "victori" || preset === "baleno") {
    if (carSelect) carSelect.value = "Swift, Victori & Baleno Special";
    if (msgInput) msgInput.value = "Hi, I am inquiring about the Kalinga Nagar Hub Special: Swift / Victori / Baleno @ ₹1,500 for 12 Hours (24h: ₹2,000). Please share availability.";
  } else if (preset) {
    if (msgInput) msgInput.value = `Hi, I want to inquire about: ${preset}`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickQueryModal() {
  const modal = document.getElementById("queryModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function selectQueryPreset(presetText) {
  const msgInput = document.getElementById("queryMessage");
  if (msgInput) {
    msgInput.value = `Hi OD34 Rental, I want to inquire about: ${presetText}`;
  }
  showToast(`Selected topic: ${presetText}`);
}

function submitQuickQueryWhatsApp() {
  const carModel = document.getElementById("queryCarModel")?.value || "General";
  const name = document.getElementById("queryUserName")?.value || "Customer";
  const phone = document.getElementById("queryUserPhone")?.value || "Not specified";
  const message = document.getElementById("queryMessage")?.value || "Please share car availability.";

  const fullText = `👋 Hello OD34 Rental (Kalinga Nagar Hub)!
💬 *Quick Customer Inquiry:*

🚗 *Car / Topic:* ${carModel}
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📝 *Query:* ${message}

Please reply with pricing and car availability. Thank you!`;

  closeQuickQueryModal();
  window.open(`https://wa.me/${CONFIG.whatsappPhone}?text=${encodeURIComponent(fullText)}`, "_blank");
}

// ==========================================================================
// MAP & LOCATION MODAL LOGIC
// ==========================================================================
function openMapModal() {
  const modal = document.getElementById("mapModal");
  if (!modal) {
    window.open(CONFIG.mapsUrl, "_blank");
    return;
  }
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMapModal() {
  const modal = document.getElementById("mapModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Open Google Maps
function openGoogleMaps() {
  window.open(CONFIG.mapsUrl, "_blank");
}

// WhatsApp Booking URL Generator
function handleWhatsAppBooking() {
  if (!selectedCarForBooking) return;

  const durationType = document.getElementById("modalDurationType").value;
  const pickupLoc = document.getElementById("modalPickupLocation").value || "Kalinga Nagar, Bhubaneswar";
  const pickupDate = document.getElementById("modalPickupDate").value || "Today";
  const custName = document.getElementById("modalCustName").value || "Customer";
  const custPhone = document.getElementById("modalCustPhone").value || "Not provided";
  
  const durationText = durationType === '12h' ? '12 Hours Package' : 
                       durationType === '24h' ? '24 Hours Package' : 
                       durationType === '48h' ? '2 Days (48 Hours)' : '3 Days (72 Hours)';

  const basePrice = durationType === '12h' ? selectedCarForBooking.price12h : selectedCarForBooking.price24h;

  const message = `👋 Hello OD34 Rental (Kalinga Nagar)!
I want to book a self-drive car in Bhubaneswar:

🚗 *Car:* ${selectedCarForBooking.name}
⏱️ *Duration:* ${durationText}
📅 *Pickup Date:* ${pickupDate}
📍 *Location:* ${pickupLoc}
💰 *Est. Rental:* ₹${basePrice} (+ ₹${selectedCarForBooking.deposit} Refundable Deposit)

👤 *Name:* ${custName}
📞 *Phone:* ${custPhone}

Please confirm car availability. Thank you!`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappPhone}?text=${encoded}`;
  window.open(whatsappUrl, "_blank");
}

function handleDirectBookingSubmit() {
  const bookingId = "OD34-" + Math.floor(100000 + Math.random() * 900000);
  closeBookingModal();
  
  showToast(`🎉 Booking Request Received! Ref ID: ${bookingId}. Our team will call you on WhatsApp/Phone (+91 81149 05426) within 5 minutes.`);
}

// Specs Modal
function openCarDetails(carId) {
  const car = CARS_DATA.find(c => c.id === carId);
  if (!car) return;
  
  alert(`${car.name} Details:\n\n• 12-Hour Rate: ₹${car.price12h}\n• 24-Hour Rate: ₹${car.price24h}\n• Seating: ${car.seats} Seats\n• Transmission: ${car.transmission}\n• Fuel & Mileage: ${car.fuel} (${car.mileage})\n• Features: ${car.features.join(', ')}\n• Refundable Deposit: ₹${car.deposit}\n• Booking Hotline: +91 81149 05426`);
}

// ==========================================================================
// 7. QUICK SEARCH WIDGET
// ==========================================================================
function setupQuickSearchWidget() {
  const searchBtn = document.getElementById("searchCarsBtn");
  const quickCategory = document.getElementById("quickCategory");
  const quickDuration = document.getElementById("quickDuration");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (quickDuration && quickDuration.value) {
        currentDuration = quickDuration.value;
        const toggleBtns = document.querySelectorAll(".duration-toggle-btn");
        toggleBtns.forEach(b => {
          if (b.getAttribute("data-duration") === currentDuration) {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });
      }

      if (quickCategory && quickCategory.value) {
        currentCategory = quickCategory.value;
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(b => {
          if (b.getAttribute("data-category") === currentCategory) {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });
      }

      renderFleet();
      const fleetSection = document.getElementById("fleet");
      if (fleetSection) {
        fleetSection.scrollIntoView({ behavior: "smooth" });
      }
      showToast("Filtered available cars based on your criteria!");
    });
  }
}

// ==========================================================================
// 8. FAQS ACCORDION
// ==========================================================================
function setupFAQs() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 9. NAVBAR & MOBILE NAVIGATION
// ==========================================================================
function setupNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ==========================================================================
// 10. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message) {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF8C00"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
