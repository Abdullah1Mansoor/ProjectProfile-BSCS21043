const profileData = {
    about: {
        heading: {
            en: "Welcome to My Professional Profile",
            ur: "میری پیشہ ورانہ پروفائل میں خوش آمدید",
            fr: "Bienvenue sur Mon Profil Professionnel"
        },
        text: {
            en: "Hello! I'm Muhammad Abdullah Mansoor, a software engineer with a passion for creating web applications and solving complex problems.",
            ur: "سلام! میں محمد عبداللہ منصور ہوں، ایک سافٹ ویئر انجینئر ہوں جو ویب ایپلی کیشنز بنانے اور پیچیدہ مسائل حل کرنے کا شوق رکھتا ہوں۔",
            fr: "Bonjour! Je suis Muhammad Abdullah Mansoor, un ingénieur logiciel passionné par la création d'applications web et la résolution de problèmes complexes."
        },
        image: "images/abdullah.jpg"
    },
    skills: {
        hardSkills: [
            "Web Development (HTML, CSS, React)",
            "Backend Development (FastAPI, Django)",
            "Database Management (SQLite, PostgreSQL)"
        ],
        softSkills: [
            "Teamwork",
            "Problem-Solving",
            "Time Management",
            "Leadership"
        ]
    },
    projects: [
        {
            title: "Feedback Relay",
            date: "2024-08-10",
            description: "A platform to relay user feedback to developers efficiently."
        },
        {
            title: "Web Scraping Tool",
            date: "2024-05-10",
            description: "An automated tool for extracting data from websites."
        }
    ],
    awards: [
        {
            title: "Gold Medalist Weight Lifting",
            date: "2019",
            description: "Awarded three times for outstanding performance in weightlifting."
        },
        {
            title: "Best Discipline Award",
            date: "2017",
            description: "Recognized for maintaining excellent discipline."
        },
        {
            title: "Good Behaviour Award",
            date: "2015",
            description: "Awarded for consistent good behavior and attitude."
        }
    ],
    degrees: [
        {
            title: "BSc in Computer Science",
            duration: "2020-2025",
            description: "Currently pursuing a Bachelor's degree in Computer Science."
        },
        {
            title: "FSC (Pre-Engineering)",
            duration: "2019-2021",
            description: "Completed FSC with a focus on engineering subjects."
        }
    ],
    video: "https://www.youtube.com/embed/vsWxs1tuwDk"
};

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


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
