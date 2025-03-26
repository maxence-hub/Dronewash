<html lang="fr">
<head>
<link rel="icon" type="image/png" href="favicon.png">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://maxence-hub.github.io/toituredronefr/",
  "logo": "file:///C:/Users/ordi2225451/Documents/entreprise%20papa/derni%C3%A8re%20version/image.ing.webp"
}
</script>
    <link rel="manifest" href="manifest.json">
    <script>
        let deferredPrompt;

        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredPrompt = e;
            document.getElementById("installButton").style.display = "block";
        });

        function installApp() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                });
            }
        }
    </script>

<link rel="manifest" href="/manifest.json">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traitement de Toitures par Drones</title>
	<meta name="description" content="Découvrez nos services de traitement de toitures par drones : inspection, nettoyage et entretien rapide, écologique et efficace. Obtenez votre devis gratuit dès maintenant !">
	<script src="https://cdn.tailwindcss.com"></script>
    <script src="script1.js" defer></script>
    <style> 
.logo {
    width: 100px; /* Ajuste la taille selon tes besoins */
    height: auto;
    display: block;
}
	
	body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;  
        color: #333;
    }
    header {
        background-color: #2c3e50;
        color: white;
        padding: 20px 0;
        text-align: center;
    }
    nav {
        display: flex;
        justify-content: center;
        background-color: #34495e;
        padding: 10px;
    }
    nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        font-size: 1.2em;
        margin: 0 10px;
        transition: background-color 0.3s;
    }
    nav a:hover {
        background-color: #1abc9c;
    }
    section {
        padding: 40px 20px;
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        text-align: center;
    }
    .service-item {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
        transition: transform 0.3s;
    }
    .service-item:hover {
        transform: translateY(-5px);
    }
    .service-item img {
        width: 100%;
        border-radius: 10px;
    }
    .cta-button, .submit-button {
        background-color: #1abc9c;
		text-decoration: none;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        font-size: 1.5em;
        cursor: pointer;
        transition: background-color 0.3s;
        display: block;
        margin: 20px auto;
    }
    .cta-button:hover, .submit-button:hover {
        background-color: #16a085;
    }
    .devis-form, .prestation-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .devis-form input, .devis-form select, .prestation-form input {
        width: 100%;
        padding: 12px;
        font-size: 1.1em;
        border: 2px solid #ccc;
        border-radius: 5px;
        transition: border-color 0.3s, box-shadow 0.3s;
    }
    .prestation-form input:focus {
        border-color: #1abc9c;
        box-shadow: 0px 0px 5px rgba(26, 188, 156, 0.5);
        outline: none;
    }

    /* Ajout du style spécifique pour la section du formulaire */
    #prestation-form {
        display: none;
        margin-top: 30px;
        padding: 40px 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    #prestation-form .container {
        width: 80%;
        max-width: 600px;
        margin: 0 auto;
    }

    #prestation-form h2 {
        font-size: 1.8em;
        color: #2c3e50;
        margin-bottom: 20px;
    }

    /* Message de confirmation */
    #response-message {
        font-size: 1.2em;
        color: #2ecc71;
        margin-top: 15px;
        display: none;
    }

    /* Animation d’apparition du formulaire */
    #prestation-form.show {
        display: block;
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    footer {
        background-color: #2c3e50;
        color: white;
        text-align: center;
        padding: 20px 0;
        margin-top: 40px;
    }
	/* Formulaire en haut à droite */
        .profile-container {
            position: absolute;
            top: 10px;
            right: 20px;
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            width: 200px;
            text-align: center;
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            font-size: 0.9em;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .submit-button {
            background-color: #1abc9c;
            color: white;
            padding: 8px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
		}
        .sendEmail {
            background-color: #1abc9c;
            color: white;
            padding: 8px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;	
        }
        /* Profil utilisateur */
        .profile {
            display: none;
            text-align: center;
        }
        .profile img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
        }
        .dropdown {
            display: none;
            position: absolute;
            right: 0;
            background: white;
            width: 150px;
            border-radius: 5px;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            text-align: left;
        }
        .dropdown a, .dropdown button {
            display: block;
            padding: 8px;
            text-decoration: none;
            color: black;
            background: white;
            border: none;
            width: 100%;
            text-align: left;
        }
        .dropdown button:hover, .dropdown a:hover {
            background: #f1f1f1;
		}
        .email-button {
            background-color: #1abc9c;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 1.5em;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .email-button:hover {
            background-color: #16a085;
        }
		@media (max-width: 1024px) {
    .container {
        width: 90%;
    }

    nav {
        flex-direction: column;
        text-align: center;
    }

    nav a {
        padding: 10px;
        font-size: 1em;
    }
}

@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-item {
        padding: 15px;
    }

    .cta-button {
        font-size: 1.2em;
        padding: 12px 25px;
    }
}

@media (max-width: 480px) {
    header {
        padding: 15px;
    }

    h1 {
        font-size: 1.5em;
    }

    .container {
        width: 95%;
    }

    .cta-button {
        font-size: 1em;
        padding: 10px 20px;
    }
}
    #topButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #1abc9c;
    color: white;
    padding: 10px 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: none;
}
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.visible {
    opacity: 1;
    transform: translateY(0);
}


</style>
</head>
<body>

<header>
<a href="index.html">
        <img src="file:///C:/Users/ordi2225451/Documents/entreprise%20papa/derni%C3%A8re%20version/image.ing.webp" class="logo">
		<button id="installButton" style="display: none;">📥 Installer le site</button>
    </a>
    <h1>Traitement de Toitures par Drones</h1>
    <p>Un service moderne, rapide et sécurisé pour la maintenance de votre toiture</p>
	<a href="téléchargement.html" download>📥 Télécharger le site</a>
</header>

<nav>
    <a href="#services">Nos Services</a>
	<a href="#choisir">Pourquoi nous découvrir ?</a>
    <a href="#devis">Devis Gratuit</a>
	<a href="#contact">Contact</a>

</nav>

<section id="services">
    <div class="container">
        <h2>Nos Services</h2>
        <div class="services-grid">
            <div class="service-item">
                <img src="https://nord-clean-drone.com/images/drone_pompe.webp" alt="Inspection de toiture">
                <h3>Inspection de toiture</h3>
                <p>Inspection aérienne par drone.</p>
            </div>
            <div class="service-item">
                <img src="https://pixwing.fr/wp-content/uploads/2023/03/traitement-toit-facade-drone-pixwing-11.jpg" alt="Nettoyage et entretien">
                <h3>Nettoyage et entretien</h3>
                <p>Nettoyage et démoussage haute précision.</p>
            </div>
            <div class="service-item">
                <img src="https://www.technidrone.fr/public/img/big/20221203044639jpg_64171f7ce55d87.55829949.jpg" alt="Réparation rapide">
                <h3>Réparation rapide</h3>
                <p>Application d'hydrofuge protecteur.</p>
            </div>
        </div>
    </div>
</section>

<section id="choisir">
    <div class="container">
        <h2>Pourquoi nous découvrir ?</h2>
        <div>
            <p>✔️ Expertise avancée en traitement de toitures</p>
            <p>✔️ Technologie de pointe et solutions écologiques</p>
            <p>✔️ Sécurité et efficacité garanties</p>
            <p>✔️ Service rapide et sans échafaudage</p>
            <p>✔️ Résultats longue durée et satisfaction client assurée</p>
        </div>
    </div>
</section>

<section id="devis">
    <div class="container">
        <h2>Obtenez Votre Devis Gratuit</h2>
        <form class="devis-form" onsubmit="generateQuote(event)">
            <input type="number" id="area" placeholder="Surface de la toiture (m²)" required>
            <select id="condition" required>
                <option value="bonne">Bonne</option>
                <option value="moyenne">Moyenne</option>
                <option value="mauvaise">Mauvaise</option>
            </select>
            <input type="number" id="height" placeholder="Hauteur de la toiture (m)" required>
            <button type="submit" class="cta-button">Obtenir le devis</button>
        </form>
        <div id="quote-result">
            <h3>Votre devis estimé:</h3>
            <p id="quote-text"></p>
			<button class="email-button" onclick="sendEmail()">📩 Envoyer Email</button>

<script>
        function sendEmail() {
            let name = "Jean Dupont";
            let email = "jean.dupont@email.com";
            let surface = 100;
            let height = 10;

            let subject = encodeURIComponent("Demande de devis");
            let body = encodeURIComponent(
                `Bonjour,\n\nJe souhaiterais obtenir un devis pour le traitement de ma toiture. Veuillez changer les informations ci contre:\n\n` +
                `- Nom: ${name}\n- Email: ${email}\n- Surface: ${surface}m²\n- Hauteur: ${height}m\n\nMerci d'avance !`
            );

            // Lien pour Gmail
            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dhaeyermaxence@gmail.com&su=${subject}&body=${body}`;

            window.location.href = mailtoLink;
}
    </script>
        </div>
    </div>
</section>


<footer id="contact">
<button onclick="scrollToTop()" id="topButton">⬆ Haut</button>
    <p>Contactez-nous au +33 6 09 68 92 63 ou par email à dhaeyermanuel@gmail.com</p>
    <p>&copy; 2025 Traitement de Toitures par Drones</p>
	<a href="#Ajouter à l'accueil.html">Ajouter à l'accueil</a>
</footer>

<script>
    function generateQuote(event) {
        event.preventDefault();
        const area = document.getElementById("area").value;
        const condition = document.getElementById("condition").value;
        const height = document.getElementById("height").value;

        let price = area * 10;
        if (condition === "moyenne") price += 100;
        if (condition === "mauvaise") price += 200;
        if (height > 10) price += 150;

        document.getElementById("quote-text").textContent = `Le prix estimé pour votre projet est de ${price}€ TTC.`;
        document.getElementById("quote-result").style.display = "block";
    }

    function showPrestationForm() {
        document.getElementById("prestation-form").style.display = "block";
    }

    function submitPrestation(event) {
        event.preventDefault();
        showBanner();
    }

    function showBanner() {
        const banner = document.getElementById("success-banner");
        banner.style.display = "block";

        setTimeout(() => {
            banner.style.display = "none";
        }, 5000);
    }

document.querySelector(".prestation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "success") {
            document.getElementById("response-message").style.display = "block";
            this.reset();
        } else {
            alert("❌ Une erreur est survenue. Merci d’essayer à nouveau.");
        }
    })
    .catch(error => {
        console.error("Erreur:", error);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const areaInput = document.getElementById("area");
    const conditionInput = document.getElementById("condition");
    const heightInput = document.getElementById("height");
    const quoteText = document.getElementById("quote-text");

    function updateQuote() {
        let area = parseFloat(areaInput.value) || 0;
        let condition = conditionInput.value;
        let height = parseFloat(heightInput.value) || 0;

        let price = area * 10;
        if (condition === "moyenne") price += 100;
        if (condition === "mauvaise") price += 200;
        if (height > 10) price += 150;

        quoteText.textContent = `Le prix estimé pour votre projet est de ${price}€ TTC.`;
    }

    areaInput.addEventListener("input", updateQuote);
    conditionInput.addEventListener("change", updateQuote);
    heightInput.addEventListener("input", updateQuote);
});
let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        deferredPrompt = event;
        document.getElementById('install-banner').style.display = 'block';
    });

    document.getElementById('install-button').addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                document.getElementById('install-banner').style.display = 'none';
                deferredPrompt = null;
            });
        }
    });

    document.getElementById('dismiss-button').addEventListener('click', () => {
        document.getElementById('install-banner').style.display = 'none';
    });
	
	window.onscroll = function() {
    document.getElementById("topButton").style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

</script>
</html>
