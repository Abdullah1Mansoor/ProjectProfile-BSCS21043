// Toggle visibility function for each section
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Multi-language support function
const translations = {
    en: {
        'about-heading': 'Welcome to My Professional Profile',
        'about-text': 'Hello! I\'m Muhammad Abdullah Mansoor, a software engineer with a passion for creating web applications and solving complex problems.',
    },
    ur: {
        'about-heading': 'میری پیشہ ورانہ پروفائل میں خوش آمدید',
        'about-text': 'سلام! میں محمد عبداللہ منصور ہوں، ایک سافٹ ویئر انجینئر ہوں جو ویب ایپلی کیشنز بنانے اور پیچیدہ مسائل حل کرنے کا شوق رکھتا ہوں۔',
    },
    fr: {
        'about-heading': 'Bienvenue sur Mon Profil Professionnel',
        'about-text': 'Bonjour! Je suis Muhammad Abdullah Mansoor, un ingénieur logiciel passionné par la création d\'applications web et la résolution de problèmes complexes.',
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        el.innerText = translations[lang][key];
    });
}

// Back to Top button functionality
const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
