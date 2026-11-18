
/* ===================================
   MOBILE NAVIGATION
=================================== */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
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
}


/* ===================================
   PROJECT INFORMATION
=================================== */

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
            "Developed a Flutter-based emergency assistance app for visually impaired users with SOS alerts, live GPS tracking, and Firebase integration. The application supports voice commands, shake detection, screen taps, and power-button activation, along with helper communication during emergencies.",

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


/* ===================================
   PROJECT POPUP ELEMENTS
=================================== */

const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies");
const modalGithub = document.getElementById("modal-github");

let previousFocusedElement = null;


/* ===================================
   OPEN PROJECT POPUP
=================================== */

function openProject(projectKey) {
    const project = projectData[projectKey];

    if (
        !project ||
        !projectModal ||
        !modalTitle ||
        !modalDescription ||
        !modalTechnologies ||
        !modalGithub
    ) {
        return;
    }

    previousFocusedElement = document.activeElement;

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechnologies.textContent = project.technologies;
    modalGithub.href = project.github;

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    if (modalClose) {
        modalClose.focus();
    }
}


/* ===================================
   CLOSE PROJECT POPUP
=================================== */

function closeProject() {
    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (previousFocusedElement) {
        previousFocusedElement.focus();
    }
}


/* ===================================
   PROJECT BUTTON EVENTS
=================================== */

document.querySelectorAll(".project-open").forEach(button => {
    button.addEventListener("click", () => {
        const projectKey = button.dataset.project;
        openProject(projectKey);
    });
});


/* ===================================
   CLOSE BUTTON
=================================== */

if (modalClose) {
    modalClose.addEventListener("click", closeProject);
}


/* ===================================
   CLOSE WHEN CLICKING OUTSIDE
=================================== */

if (projectModal) {
    projectModal.addEventListener("click", event => {
        if (event.target === projectModal) {
            closeProject();
        }
    });
}


/* ===================================
   ESCAPE KEY
=================================== */

document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        projectModal &&
        projectModal.classList.contains("active")
    ) {
        closeProject();
    }
});


/* ===================================
   FLOATING BACK TO TOP BUTTON
=================================== */

const backToTop = document.getElementById("back-to-top");

function updateBackToTop() {
    if (!backToTop) {
        return;
    }

    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
}

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", updateBackToTop, {
        passive: true
    });

    updateBackToTop();
}


/* ===================================
   HEADER SCROLL EFFECT
=================================== */

const siteHeader = document.querySelector(".site-header");

function updateHeader() {
    if (!siteHeader) {
        return;
    }

    siteHeader.classList.toggle("scrolled", window.scrollY > 50);
}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

updateHeader();


/* ===================================
   SCROLL REVEAL ANIMATIONS
=================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-grid, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".experience-item, " +
    ".project-card, " +
    ".activity-item, " +
    ".contact-grid, " +
    ".reference-card"
);

// Add reveal classes to the selected elements
revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    // Stagger elements slightly for a smoother effect
    if (element.matches(".skill-card, .project-card, .reference-card")) {
        element.style.transitionDelay = `${(index % 4) * 0.08}s`;
    }
});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {
    // Fallback for older browsers
    revealElements.forEach(element => {
        element.classList.add("is-visible");
    });
}


/* ===================================
   ACTIVE NAVIGATION ON SCROLL
=================================== */

const pageSections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".navigation a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;

                    navigationLinks.forEach(link => {
                        const isActive =
                            link.getAttribute("href") === `#${currentId}`;

                        link.classList.toggle("active", isActive);
                    });
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        }
    );

    pageSections.forEach(section => {
        sectionObserver.observe(section);
    });
}


/* ===================================
   FOOTER YEAR
=================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} ARUN JONATHAN`;
}
