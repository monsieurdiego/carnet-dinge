// ============================================
// MENU MOBILE
// ============================================

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle mobile menu
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ============================================
// SYSTÈME DE FILTRES DES RESSOURCES
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const resourceCards = document.querySelectorAll('.resource-card');
const searchInput = document.getElementById('search-input');

// Fonction pour filtrer les ressources
function filterResources(filterValue, searchTerm = '') {
    resourceCards.forEach(card => {
        const matiere = card.getAttribute('data-matiere');
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        
        const matchesFilter = filterValue === 'tous' || matiere === filterValue;
        const matchesSearch = searchTerm === '' || 
                            title.includes(searchTerm.toLowerCase()) || 
                            description.includes(searchTerm.toLowerCase());
        
        if (matchesFilter && matchesSearch) {
            card.classList.remove('hidden');
            // Animation d'apparition
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.classList.add('hidden');
        }
    });
}

// Gestion des boutons de filtres
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        // Filtrer les ressources
        const filterValue = button.getAttribute('data-filter');
        const searchTerm = searchInput ? searchInput.value : '';
        filterResources(filterValue, searchTerm);
    });
});

// Gestion de la barre de recherche
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const activeFilter = document.querySelector('.filter-btn.active');
        const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'tous';
        
        filterResources(filterValue, searchTerm);
    });
}

// ============================================
// GESTION DES BOUTONS TÉLÉCHARGER
// ============================================

const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.resource-card');
        const title = card.querySelector('.card-title').textContent;
        
        // Animation de feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Notification (remplacer par un vrai système de téléchargement)
        showNotification(`Téléchargement de "${title}" en cours...`);
        
        // Ici, vous pouvez ajouter la logique réelle de téléchargement
        // Par exemple, déclencher un téléchargement de PDF :
        // window.location.href = 'path/to/resource.pdf';
    });
});

// Fonction pour afficher une notification
function showNotification(message) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Styles inline pour la notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '350px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.9375rem',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Retirer la notification après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Ajouter les animations pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL AMÉLIORÉ
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

// Observer pour animer les éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-header, .methode-card, .apropos-content');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});

// ============================================
// HEADER AU SCROLL
// ============================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter une ombre plus prononcée lors du scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// COMPTEUR ANIMÉ POUR LES STATISTIQUES
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target === Infinity ? '∞' : Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start);
        }
    }, 16);
}

// Observer pour les statistiques
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                if (text === '∞') {
                    stat.style.animation = 'pulse 2s ease-in-out infinite';
                } else {
                    const target = parseInt(text.replace('+', ''));
                    stat.textContent = '0';
                    setTimeout(() => {
                        animateCounter(stat, target);
                        if (text.includes('+')) {
                            setTimeout(() => {
                                stat.textContent = target + '+';
                            }, 2000);
                        }
                    }, index * 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observer les stats
const aproposStats = document.querySelector('.apropos-stats');
if (aproposStats) {
    statsObserver.observe(aproposStats);
}

// Animation pulse pour l'infini
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(pulseStyle);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Carnet d\'Ingé', 'font-size: 20px; font-weight: bold; color: #007BFF;');
console.log('%cRéussir la Prépa avec les bonnes méthodes!', 'font-size: 14px; color: #666;');
console.log('%cDéveloppé avec ❤️ pour les étudiants MPSI/PSI', 'font-size: 12px; color: #FF6B6B;');
