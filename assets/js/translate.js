document.addEventListener('DOMContentLoaded', function() {
    const content = {
        en: {
            title: "Bruno | Salesforce Developer",
            nav: {
                home: "HOME",
                skills: "SKILLS",
                portfolio: "PORTFOLIO",
                contact: "CONTACT"
            },
            home: {
                title: "Bruno",
                subtitle: "Software Engineer",
                contactButton: "Contact"
            },
            skills: {
                title: "Skills",
                salesforceDeveloper: "SalesForce Developer",
                salesforceAdmin: "Salesforce Administrator | Analyst",
                // Add more translations as needed
            },
            // Add more sections as needed
        },
        pt: {
            title: "Bruno | Dev Salesforce",
            nav: {
                home: "INÍCIO",
                skills: "HABILIDADES",
                portfolio: "PORTIFÓLIO",
                contact: "CONTATOS"
            },
            home: {
                title: "Bruno",
                subtitle: "Engenheiro de Software",
                contactButton: "Contato"
            },
            skills: {
                title: "Habilidades",
                salesforceDeveloper: "SalesForce Developer",
                salesforceAdmin: "Salesforce Administrador | Analista",
                // Add more translations as needed
            },
            // Add more sections as needed
        }
    };

    function updateContent(language) {
        document.title = content[language].title;
        document.querySelector('.nav_link[href="#home"]').textContent = content[language].nav.home;
        document.querySelector('.nav_link[href="#skills"]').textContent = content[language].nav.skills;
        document.querySelector('.nav_link[href="#portfolio"]').textContent = content[language].nav.portfolio;
        document.querySelector('.nav_link[href="#contact"]').textContent = content[language].nav.contact;

        document.querySelector('.home_title').textContent = content[language].home.title;
        document.querySelector('.home_subtitle').textContent = content[language].home.subtitle;
        document.querySelector('.button.button--flex').textContent = content[language].home.contactButton;

        document.querySelector('.section_title').textContent = content[language].skills.title;
        document.querySelector('.skills_title').textContent = content[language].skills.salesforceDeveloper;
        document.querySelector('.skills_subtitle').textContent = content[language].skills.salesforceAdmin;

        // Update more sections as needed
    }

    document.querySelector('.fi.fi-us').addEventListener('click', function() {
        updateContent('en');
    });

    document.querySelector('.fi.fi-br').addEventListener('click', function() {
        updateContent('pt');
    });
});