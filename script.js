// ===================================
// MOBILE NAVIGATION
// ===================================

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


function closeNavigation() {

    navigation.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

}


document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", closeNavigation);

});


// ===================================
// PROJECT INFORMATION
// ===================================

const projectData = {

    news: {
        title: "News Reporting App",

        description:
            "A news reporting application developed for presenting and managing news-related content.",

        technologies:
            "Refer to the GitHub repository for the project's technology details.",

        github:
            "https://github.com/ArunJonathan/NewsReportingApp"
    },


    healthcare: {
        title: "Health Care Monitoring System",

        description:
            "A healthcare monitoring system developed to support healthcare-related information management.",

        technologies:
            "Refer to the GitHub repository for the project's technology details.",

        github:
            "https://github.com/ArunJonathan/Health-Monitoring-System"
    },


    car: {
        title: "Car Rental System",

        description:
            "A car rental system designed to support vehicle rental and booking-related operations.",

        technologies:
            "Refer to the GitHub repository for the project's technology details.",

        github:
            "https://github.com/ArunJonathan/Car-Rental-System"
    },


    cafe: {
        title: "Cafe Management System",

        description:
            "A cafe management application focused on supporting cafe-related operations and management.",

        technologies:
            "Refer to the GitHub repository for the project's technology details.",

        github:
            "https://github.com/ArunJonathan/cafe-management-system"
    },


    vision: {
        title: "Vision Mate – Emergency Assistance & Live Location Tracking App",

        description:
            "Developed a Flutter-based emergency assistance app for visually impaired users with SOS alerts, live GPS tracking, and Firebase integration. The application supports multiple emergency activation methods and helps users communicate their location during emergencies.",

        technologies:
            "Flutter, Dart, Firebase Authentication, Cloud Firestore, Firebase Cloud Messaging (FCM), Kotlin, Google Maps API, GPS, Speech-to-Text, Flutter TTS, Accelerometer.",

        github:
            "https://github.com/ArunJonathan/Vision-Mate"
    },


    library: {
        title: "Library Management System",

        description:
            "A library management system developed to organize library resources and manage related records.",

        technologies:
            "Refer to the GitHub repository for the project's technology details.",

        github:
            "https://github.com/ArunJonathan/Library-Management-System---PDSA"
    }

};


// ===================================
// PROJECT POPUP ELEMENTS
// ===================================

const projectModal = document.getElementById("project-modal");

const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const modalTechnologies = document.getElementById("modal-technologies");

const modalGithub = document.getElementById("modal-github");


// ===================================
// OPEN PROJECT POPUP
// ===================================

function openProject(projectKey) {

    const project = projectData[projectKey];

    if (!project) {
        return;
    }

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalTechnologies.textContent = project.technologies;

    modalGithub.href = project.github;

    projectModal.classList.add("active");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    modalClose.focus();

}


// ===================================
// CLOSE PROJECT POPUP
// ===================================

function closeProject() {

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


// ===================================
// PROJECT BUTTON EVENTS
// ===================================

document.querySelectorAll(".project-open").forEach(button => {

    button.addEventListener("click", () => {

        const projectKey = button.dataset.project;

        openProject(projectKey);

    });

});


// ===================================
// CLOSE BUTTON
// ===================================

modalClose.addEventListener("click", closeProject);


// ===================================
// CLOSE WHEN CLICKING OUTSIDE
// ===================================

projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {

        closeProject();

    }

});


// ===================================
// ESCAPE KEY
// ===================================

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("active")
    ) {

        closeProject();

    }

});


// ===================================
// FOOTER YEAR
// ===================================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} ARUN JONATHAN`;
}