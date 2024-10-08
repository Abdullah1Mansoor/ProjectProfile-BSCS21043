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
function populateProfile(lang){
    document.querySelector('[data-lang="about-heading"]').innerText = profileData.about.heading[lang];
    document.querySelector('[data-lang="about-text"]').innerText = profileData.about.text[lang];
    document.querySelector('.profile-pic').src = profileData.about.image;

    const skillsContent=document.getElementById('skills-content');
    skillsContent.innerHTML=`
        <div class="skill-item">
            <h3>Hard Skills</h3>
            <ul>
                ${profileData.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        <div class="skill-item">
            <h3>Soft Skills</h3>
            <ul>
                ${profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;

    // Projects
    const projectsContent = document.getElementById('projects-content');
    projectsContent.innerHTML = profileData.projects.map(project => `
        <div class="project-item">
            <h3>${project.title}</h3>
            <time datetime="${project.date}">${project.date}</time>
            <p>${project.description}</p>
        </div>
    `).join('');

     // Awards
    const awardsContent = document.getElementById('awards-content');
    awardsContent.innerHTML = profileData.awards.map(award => `
         <div class="award-item">
             <h3>${award.title}</h3>
             <time datetime="${award.date}">${award.date}</time>
             <p>${award.description}</p>
         </div>
     `).join('');

    // Degrees
    const degreesContent = document.getElementById('degrees-content');
    degreesContent.innerHTML = profileData.degrees.map(degree => `
        <div class="degree-item">
            <h3>${degree.title}</h3>
            <time datetime="${degree.duration}">${degree.duration}</time>
            <p>${degree.description}</p>
        </div>
    `).join('');

    // Video
    const videoContent = document.getElementById('video-content');
    videoContent.innerHTML = `
        <iframe width="997" height="561" src="${profileData.video}" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}

// Language Change Function
function changeLanguage(lang) {
    populateProfile(lang);
}

populateProfile('en');

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
