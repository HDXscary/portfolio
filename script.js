// Gestion du menu de navigation
// Afficher/masquer le menu lors du clic sur le logo
document.getElementById("lg").onclick = function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle('show');
};

// 1. On sélectionne toutes les sections et tous les liens de la navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav #menu a');

// 2. On ajoute un écouteur d'événement sur le scroll de la fenêtre
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        // La distance depuis le haut de la page
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // On vérifie si on a scrolldé jusqu'à cette section
        // Le "- 60" est une petite marge pour compenser la hauteur de la navbar fixe
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // 3. On met à jour les classes "active"
    navLinks.forEach(link => {
        // On enlève la classe active de tous les liens
        link.classList.remove('active');
        
        if (current) {
        // Si le href du lien correspond à l'ID de la section actuelle, on ajoute "active"
            if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            }
        } else {
            // Si aucune section n'est active, on met "active" sur le premier lien (Accueil)
            if (link.getAttribute('href').includes('tom-link')) {
                link.classList.add('active');
            }
        }      
    });
});

// Gestion du formulaire de contact
document.getElementById('requeteform').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const requete = document.getElementById('requete').value;


    // Créer le lien mailto
    const subject = encodeURIComponent('contact depuis le site portfolio');
    const body = encodeURIComponent(
        `Nom: ${name}\n` +
        `Email: ${email}\n\n` +
        `raison du contact:\n${requete}`
    );

     // Ouvrir le client email
    window.location.href=`mailto:tomhilaire9@gmail.com?subject=${subject}&body=${body}`;

    // Afficher un message de confirmation
    const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Votre client email va s\'ouvrir. Merci de votre message !';
        formMessage.className = 'success';

    setTimeout(() => {
        document.getElementById('requeteform').reset();
        formMessage.style.display = 'none';
    }, 3000);
});


function toggleCode() {
    // 1. On récupère les éléments
    var bloc = document.getElementById("code-projet");
    var bouton = document.getElementById("btn-afficher-code");

    // 2. On vérifie le style
    if (bloc.style.display === "none") {
        // SI CACHÉ -> ON AFFICHE
        bloc.style.display = "block";
        bouton.innerHTML = "Masquer le code";
    } else {
        // SI VISIBLE -> ON CACHE
        bloc.style.display = "none";
        bouton.innerHTML = "Afficher le code";
    }
}