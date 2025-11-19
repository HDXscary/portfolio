document.getElementById('requeteform').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const requete = document.getElementById('requete').value;


    // Créer le lien mailto
    const subject = encodeURIComponent('requete depuis le site');
    const body = encodeURIComponent(
        `Nom: ${name}\n` +
        `Email: ${email}\n\n` +
        `requete:\n${requete}`
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