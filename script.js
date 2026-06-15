// ============================================
// BASE DE DONNÉES DE LA LIBRAIRIE (JSON)
// ============================================
const RESOURCES_DATA = [
    { title: "Inégalités Classiques — Fiche Méthode", desc: "Toutes les inégalités incontournables pour la prépa : Cauchy-Schwarz, Minkowski, Jensen et bien d'autres (SUP & SPÉ).", mat: "maths", lvl: "SUP & SPÉ", tags: ["analyse", "spe"], file: "fiche-inegalites-classiques-sup-spe.pdf", topic: "Analyse" },
    { title: "Probabilités — Fiche Méthode", desc: "Méthodes et exercices classiques pour maîtriser les probabilités en prépa (niveau SUP & SPÉ).", mat: "maths", lvl: "SUP & SPÉ", tags: ["probabilites", "spe"], file: "fiche-probas-sup-spe.pdf", topic: "Probabilités" },
    { title: "Algèbre Linéaire — Fiche des Classiques", desc: "Exercices et méthodes incontournables pour maîtriser l’algèbre linéaire en prépa (SUP & SPÉ).", mat: "maths", lvl: "SUP & SPÉ", tags: ["algebre", "spe"], file: "fiche-classiques-algebre-lineaire-sup.pdf", topic: "Algèbre" },
    { title: "Algèbre Bilinéaire — Fiche des Classiques", desc: "Exercices et méthodes incontournables pour maîtriser l’algèbre bilinéaire en prépa (niveau SUP).", mat: "maths", lvl: "SUP", tags: ["algebre", "sup"], file: "fiche-classiques-algebre-bilineaire-sup.pdf", topic: "Algèbre" },
    { title: "Intégration sur un segment — Fiche des Classiques", desc: "Exercices classiques pour maîtriser l’intégration sur un segment en prépa (niveau SUP).", mat: "maths", lvl: "SUP", tags: ["analyse", "sup"], file: "fiche-classiques-integration-segment-sup.pdf", topic: "Analyse" },
    { title: "Développements Limités — Fiche des Classiques", desc: "Exercices classiques et incontournables pour maîtriser les DL en prépa (niveau SUP).", mat: "maths", lvl: "SUP", tags: ["analyse", "sup"], file: "fiche-classiques-dl-sup.pdf", topic: "Analyse" },
    { title: "Suites — Fiche des Classiques", desc: "Toutes les démonstrations et exercices incontournables pour maîtriser les suites en prépa.", mat: "maths", lvl: "SUP", tags: ["analyse", "sup"], file: "fiche-classiques-suites.pdf", topic: "Analyse" },
    { title: "Séries Numériques — Fiche des Classiques", desc: "Exercices et méthodes incontournables pour maîtriser les séries numériques en prépa (SUP & SPÉ).", mat: "maths", lvl: "SUP & SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-series-numeriques.pdf", topic: "Analyse" },
    { title: "Intégrales généralisées — Fiche des Classiques", desc: "Exercices classiques pour maîtriser les intégrales généralisées en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-integrales-generalisees-spe.pdf", topic: "Analyse" },
    { title: "Intégrales à paramètre — Fiche des Classiques", desc: "Exercices classiques pour maîtriser les intégrales à paramètre en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-integrales-a-parametre-spe.pdf", topic: "Analyse" },
    { title: "Topologie des EVN — Fiche des Classiques", desc: "Exercices classiques pour maîtriser la topologie des EVN en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-topologie-evn-spe.pdf", topic: "Analyse" },
    { title: "Suites de fonctions — Fiche des Classiques", desc: "Exercices classiques pour maîtriser les suites de fonctions en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-suites-de-fonctions-spe.pdf", topic: "Analyse" },
    { title: "Séries entières — Fiche des Classiques", desc: "Exercices classiques pour maîtriser les séries entières en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-series-entieres-spe.pdf", topic: "Analyse" },
    { title: "Calcul différentiel — Fiche des Classiques", desc: "Exercices classiques pour maîtriser le calcul différentiel en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-calcul-differentiel-spe.pdf", topic: "Analyse" },
    { title: "Séries de fonctions — Fiche des Classiques", desc: "Exercices classiques pour maîtriser les séries de fonctions en prépa (niveau SPÉ).", mat: "maths", lvl: "SPÉ", tags: ["analyse", "spe"], file: "fiche-classiques-series-de-fonctions-spe.pdf", topic: "Analyse" },
    { title: "Réduction — Fiche des Classiques (Partie 1)", desc: "Toutes les démonstrations et exercices incontournables pour maîtriser la réduction en prépa.", mat: "maths", lvl: "SPÉ", tags: ["algebre", "spe"], file: "reduction-exos-classiques.pdf", topic: "Algèbre" },
    { title: "Électrocinétique (filtres) — Fiche de cours", desc: "Résumé complet du cours d'électrocinétique SUP : définitions, lois, méthodes et points clés pour réussir.", mat: "physique", lvl: "SUP", tags: ["sup"], file: "fiche-electrocinétique-physique-sup.pdf", topic: null },
    { title: "Induction — Fiche de cours", desc: "Résumé complet du cours d'induction SUP : définitions, lois, méthodes et points clés pour réussir.", mat: "physique", lvl: "SUP", tags: ["sup"], file: "Fiche_physique_Induction.pdf", topic: null },
    { title: "Méthode — Système Anti-Friction", desc: "Plan d'action complet pour structurer vos semaines de prépa et garder un rythme durable.", mat: "methodes", lvl: "SUP & SPÉ", tags: ["sup", "spe"], file: "methode-systeme-anti-friction.pdf", topic: null },
    { title: "Protocole Anti-Fatigue & Sommeil", desc: "Routine en quatre étapes pour retrouver un sommeil réparateur et maintenir votre énergie en prépa.", mat: "methodes", lvl: "SUP & SPÉ", tags: ["sup", "spe"], file: "fiche-protocole-anti-fatigue.pdf", topic: null },
    { title: "Thermodynamique — Fiche de cours", desc: "Résumé complet du cours de thermodynamique SUP : définitions, théorèmes, méthodes et points clés pour réussir.", mat: "physique", lvl: "SUP", tags: ["sup"], file: "fiche-classiques-thermodynamique-sup.pdf", topic: null },
    { title: "Opérations vectorielles — Fiche de cours", desc: "Résumé des opérations vectorielles en Physique SPÉ : définitions, propriétés et méthodes essentielles.", mat: "physique", lvl: "SPÉ", tags: ["spe"], file: "operations-vectorielles.pdf", topic: null }
];

// ============================================
// INITIALISATION DES ÉLÉMENTS DU DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initLibraryToggle();
    initLibraryEngine();
    initScrollAnimations();
});

// ============================================
// GESTION NAVIGATION ET MENU MOBILE
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (!toggle || !menu) return;

    const closeMenu = () => { menu.classList.remove('active'); toggle.classList.remove('active'); };

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
}

// ============================================
// ACCORDÉON DE LA LIBRAIRIE
// ============================================
function initLibraryToggle() {
    const toggleBtn = document.getElementById('library-toggle-btn');
    const contentZone = document.getElementById('library-content');
    const heroBtn = document.getElementById('hero-access-fiches');

    if (!toggleBtn || !contentZone) return;

    const handleToggle = () => {
        const isHidden = contentZone.classList.toggle('is-hidden');
        toggleBtn.textContent = isHidden ? "Voir toutes les fiches de révision ▼" : "Fermer les fiches de révision ▲";
    };

    toggleBtn.addEventListener('click', handleToggle);
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            contentZone.classList.remove('is-hidden');
            toggleBtn.textContent = "Fermer les fiches de révision ▲";
            document.querySelector('#ressources').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ============================================
// MOTEUR DE DYNAMISATION DE LA LIBRAIRIE
// ============================================
function initLibraryEngine() {
    const grid = document.getElementById('resources-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    let currentFilter = 'tous';
    let currentSearch = '';

    const render = () => {
        grid.innerHTML = '';
        
        const filtered = RESOURCES_DATA.filter(item => {
            const matchesFilter = currentFilter === 'tous' || item.mat === currentFilter || item.tags.includes(currentFilter);
            const matchesSearch = !currentSearch || 
                item.title.toLowerCase().includes(currentSearch) || 
                item.desc.toLowerCase().includes(currentSearch);
            return matchesFilter && matchesSearch;
        });

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'resource-card is-animated';
            card.innerHTML = `
                <div class="card-header">
                    <span class="matiere-tag ${item.mat}">${item.mat.charAt(0).toUpperCase() + item.mat.slice(1)}</span>
                    <span class="level-tag">${item.lvl}</span>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.desc}</p>
                ${item.topic ? `<div class="topic-tags"><span class="topic-tag">${item.topic}</span></div>` : ''}
                <a href="ressources/${item.file}" download class="download-btn">
                    <svg><use href="#icon-download"></use></svg>Télécharger
                </a>
            `;
            
            card.querySelector('.download-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                showNotification(`Téléchargement de "${item.title}" démarré !`);
            });

            grid.appendChild(card);
        });
    };

    // Listeners filtres
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            render();
        });
    });

    // Listeners recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            render();
        });
    }

    render(); // Premier affichage synchrone
}

// ============================================
// SYSTEM TOAST NOTIFICATIONS
// ============================================
function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'notification slide-in';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.replace('slide-in', 'slide-out');
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}

// ============================================
// LOGIQUE COMPORTEMENTALE (SCROLL ET EFFETS)
// ============================================
function initScrollAnimations() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .pilier-card, .apropos-content').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}
