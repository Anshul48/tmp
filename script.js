// CONFIGURATION
const clinicPhone = "+13105550123";
const clinicWhatsapp = "13105550123";

// REVIEW DATA - CENTRALIZED FOR EASY EDITING
const reviewsData = [
    {
        id: 1,
        name: "Sarah Jenkins",
        treatment: "Root Canal Patient",
        rating: 5,
        text: "The most gentle dental experience I've ever had. Dr. Mitchell explained everything clearly and made me feel completely at ease.",
        image: "assets/patient1.jpg", 
        fallback: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
        id: 2,
        name: "Michael Chen",
        treatment: "Regular Checkup",
        rating: 5,
        text: "Absolutely professional. The clinic is spotless and the staff are incredibly welcoming. Highly recommend for anxiety-free dentistry.",
        image: "assets/patient2.jpg",
        fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
        id: 3,
        name: "Emma Wilson",
        treatment: "Whitening & Veneers",
        rating: 5,
        text: "I finally have my confidence back thanks to the amazing cosmetic work done here. The results exceeded my expectations!",
        image: "assets/patient3.jpg",
        fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
];

// LOGIC FUNCTIONS
function triggerCall() {
    window.location.href = `tel:${clinicPhone}`;
}

function triggerWhatsApp() {
    window.open(`https://wa.me/${clinicWhatsapp}`, '_blank');
}

// DYNAMICALLY RENDER REVIEWS
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    container.innerHTML = reviewsData.map(review => {
        let starsHTML = '';
        for(let i=0; i<5; i++) {
            /* Changed to amber-400 for a softer, warmer gold */
            starsHTML += `<span class="material-symbols-outlined text-[20px] text-amber-400 icon-filled">star</span>`;
        }

        return `
        <div class="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg transition-all">
            <div class="flex items-center gap-1 mb-4">
                ${starsHTML}
            </div>
            <p class="text-stone-700 text-lg leading-relaxed italic mb-6">"${review.text}"</p>
            <div class="flex items-center gap-4">
                <div class="h-14 w-14 rounded-full overflow-hidden ring-4 ring-primary-light">
                    <img src="${review.image}" 
                         onerror="this.onerror=null; this.src='${review.fallback}';" 
                         alt="${review.name}" 
                         class="w-full h-full object-cover" />
                </div>
                <div>
                    <p class="text-stone-900 font-extrabold">${review.name}</p>
                    <p class="text-stone-400 text-sm font-semibold uppercase tracking-wider">${review.treatment}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', renderReviews);