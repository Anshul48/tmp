/**
 * REVIEW CONTENT CONFIGURATION
 * Easily add or edit reviews here.
 * Format: { id, name, category, rating, image, text }
 */
const REVIEWS_DATA = [
    {
        id: 1,
        name: "Sarah Jenkins",
        category: "Root Canal Patient",
        rating: 5,
        image: "assets/patient-1.jpg",
        text: "The most gentle dental experience I've ever had. Dr. Smith explained everything clearly and made me feel completely at ease."
    },
    {
        id: 2,
        name: "Michael Chen",
        category: "Regular Checkup",
        rating: 5,
        image: "assets/patient-2.jpg",
        text: "Absolutely professional. The clinic is spotless and the staff are incredibly welcoming. Highly recommend for anxiety-free dentistry."
    },
    {
        id: 3,
        name: "Emma Wilson",
        category: "Whitening & Veneers",
        rating: 4.5,
        image: "assets/patient-3.jpg",
        text: "I finally have my confidence back thanks to the amazing cosmetic work done here. The results exceeded my expectations!"
    }
];

/**
 * IMAGE FALLBACK CONFIGURATION
 * Maps local asset paths to CDN placeholders in case local files are missing.
 */
const IMAGE_PLACEHOLDERS = {
    'assets/hero-banner.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAggimeFWXh_wIIowjeJg-hED3jvKyVdDG3wPBIeUimQAsKDeTjc4tkwV9F29IdDU2ydhyv-6WzTSsX2ygyPiHC2t29Fjv0CPgnRAnK5YUFmw1963Ten4HYC_hKGYS9_HjxXkXJOE0LpBv2lknTg5rnHBpqKDrHsfBbPpgYcYJS7Dj20qfzBAVmb6R0mBm6jdZEqofKE0hfv1LxuJeoqpdHr4zJyKSF8fVRlg60Dz86QO1eD83dL7FkqcjT-BPm3L5VzqEuGI7Jxtw',
    'assets/dr-smith.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9w-AJjcuksXSaQzm7-ItljGgm02LT8BCGHy4rtADO0lVhbTzYeJOMD-j3zK0m84174j4A6aH35A3FsOnXwQIKHI7pdORf-p2q4cbHla2NyeFxJhHXifvnINdopdF6NoWcjRb-ZAF5lyygJJx178R7rMmN_Qh2XaiXt1FysEcD3zlg49jvsDUTSMD2XuLU4Gh9rQBjDIb5sAwn82zj_FJ1wDq-cEYB5pHswczFDI83VfKRsTxIisRW3WEtYS2nwMn7fZGGEZQPShA',
    'assets/gallery-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH9Avni_IhW-rPSfMNbwJB2QP_STQShM7f_jsaa9GnwiDrIZQwiZGz6S_ls2sbGxLkcaCGcD_5yAr62h6g8jjPJT7Hncp1l8miQ1rnVGNeH-dXvPCskGUFIxlPtPNzpXMUlfv89Twp1KmYq1LAx32xJv5qC6cjPdH94505IYzo9lMX6tEodK0U9mJu7qm7Akd6Pd5ff_CYPRI70IJbdb6vRquXAxhlWiQP2LKlU0mbOiRW4OVT4RDRxOcGO_f_ZB_b5GN7jIMF3AQ',
    'assets/gallery-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD9PyhZla8h8eSRRl5Km8A00BS1Kl0KCkrl7rkMmSXqxyzU3OxvmZc-MRkJHKzE6au-BY73mI06bE6_OSTL57LojZ28JzHBbShEXeX8adJ9VMuURKTqEwN815wBhoz0XqP8rzHPZGD6CH5KZBTDVps-7wxxtTe_WGbTayLV-Xg9LunjsqHCPfAfoPyGcqQW3i1CDuCZBa76hH6VIyCZroUc-H9IBjvHMjFbAzcqDScBYXXclWi63WIx4CO6DL4P0qdT0P20Zm0ccU',
    'assets/gallery-3.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFPzMffTX5FZkqndsxdAMF1n0e4IiFqtIasB4rWfLxPZvUdZEnOjDkRYxmoA9ZNiR5nvxPTsXXUtIxNaO_W_vNjOZ2-fJRZ_wYd7FOKQdvAjNhiUoW7zfTTlhRANlawfq8jd88o391Pngw4JbOjPncnRZ65Xi1WSYv1TC8BOJD8HHbiMdP9pilUmHHhhkq_Xw1kmbuLDUCRWwbTT1k5sn51zUuC-G3YAwpTrNcfT-V1yp8URaDbb46l5qfgIPXZGAFH4EsugRfcv8',
    'assets/patient-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoEIP3gKBXiAFm5WBurjiASvP1sscF-mn1y67HQ8M3SXlREu73Mo6EdfgnbCdNSkhgGuWK3BZfSXcxV4cYvz4v6adwdVESL1nfnzLpBCYk6iqOnPHtHhFQWNskGCRZ4apRecS4bMCJCyoWQ-UG_5v-P5SIz5VuiCMJmud5Veb_pwJQYXot0rRdBgMktvCHJeCLD5kCqGAP9BMF1QEoGyDR2h4pJYGyy8Wewd9WvPo9V8pbyT7kDJs2IttjeCP0VhwNZSJ9oILwjdk',
    'assets/patient-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Mr-zTbxzj4E-AOcZZq9iSA8q4n3ZNixQy3Tc8eoYZrnjIkreiFmuzNiUDxHhhIV9pJq70iQTVsUdWDdhI-KOjQgw5mI5xwkWT0s_oClJ22vAauco49F4vStJG7Kv-vZjXkQm1MVnEKU5yKXLxF_0dkYqxGScAwnSTe1b4Bj44EJiuCd9lFmBbwNd-SEppOeSBPY_PqkTRSGo8HPwD6BeNo2znmn-qp0UOr1g6I_mDw9pJYB9PLb5NITdC52J4q8dhDDi8R9WryQ',
    'assets/patient-3.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPKxVfA7GX6JOxYq4l3XdvIY_gOqKaXQGJ5a_w5nqnSnLTuv16-pQMFWbgd73xoqdmlPoR8tQIpj21-dQ0_6unS4Wzl4y3AFEMHJ17wMyczLZ1mP55y_OYJ7jHITSNQB29nU6ArYDbij92HCCRRzkXn-S4U1gTJgmi-TqRlNLbJEnPCJ1CYMcuPCN2gCYbyGZY2KZGW35xUxSIVQQv4QuQX3HbPLxiCzxA5SY-5LpMQhSLD9iCXeGI0n1tPODStwVUlBcis7xNaTI',
    'assets/map.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpfjGS8_nIKjWS4nVQGkRWRht3YVn0662a0QyNnDb4pVclx03FPIM4arzwPGR517hhTQefB37FRMxLAnxHdaAUf5JXhvlFLEp9niRh49i-oQc1oGiKcxS98aeAyjx2OmSFhi1_3rphsNkulphMr9n3DZaY9MP4htF8JoZvu1xcDlSqXv8Xfv8rUr6vUFBT7QyisAqFyEbAs3WmCyvr9TVLAktIy6SM3ZeE2L3b-3DcU6PPqA35_CZpJ006i0gH_bF7ZEMFhZfI5Y4'
};

/**
 * CORE LOGIC
 */
function initApp() {
    renderReviews();
    handleImageFallbacks();
}

/**
 * Generates and injects HTML for each review in the data set.
 */
function renderReviews() {
    const container = document.getElementById('reviews-grid');
    if (!container) return;

    container.innerHTML = REVIEWS_DATA.map(review => {
        // Logic for star rating visualization
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(review.rating)) {
                starsHtml += '<span class="material-symbols-outlined icon-filled text-[20px]">star</span>';
            } else if (i === Math.ceil(review.rating) && review.rating % 1 !== 0) {
                starsHtml += '<span class="material-symbols-outlined icon-filled text-[20px]">star_half</span>';
            } else {
                starsHtml += '<span class="material-symbols-outlined text-[20px] text-slate-600">star</span>';
            }
        }

        return `
            <div class="review-card bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                <div>
                    <div class="flex text-yellow-400 mb-4">
                        ${starsHtml}
                    </div>
                    <p class="text-slate-300 leading-relaxed italic mb-6">"${review.text}"</p>
                </div>
                <div class="flex items-center gap-4">
                    <img src="${review.image}" alt="${review.name}" data-fallback class="w-12 h-12 rounded-full object-cover bg-slate-700">
                    <div>
                        <p class="font-bold">${review.name}</p>
                        <p class="text-xs text-slate-400">${review.category}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Attaches error listeners to images with the data-fallback attribute.
 */
function handleImageFallbacks() {
    document.querySelectorAll('img[data-fallback]').forEach(img => {
        // Check if current src is broken
        img.addEventListener('error', function() {
            const localSrc = this.getAttribute('src');
            if (IMAGE_PLACEHOLDERS[localSrc]) {
                this.src = IMAGE_PLACEHOLDERS[localSrc];
            }
        });
        
        // Trigger fallback if image is already broken (cache scenarios)
        if (img.complete && img.naturalWidth === 0) {
            img.dispatchEvent(new Event('error'));
        }
    });
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);