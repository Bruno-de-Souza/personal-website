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
                contactButton: "Contact",
                down: "GO DOWN"
            },
            skills: {
                title: "Skills",
                salesforceDeveloper: "SalesForce Developer",
                skillsDeveloper: "Apex Development | Triggers | Future Methods | DML | Asynchronous Apex",
                skillsDeveloperII: "LWC Components | JavaScript | HTML | CSS",
                skillsDeveloperIII: "Development of REST/SOAP APIs integrations "
            },
            skillsII: {
                salesforceAdministrator: "Salesforce Administrator | Analyst"
            }


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
                salesforceDeveloper: "SalesForce Developer"
            }
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
        document.querySelector('.home_scroll-name').textContent = content[language].home.down;

        document.querySelector('.section_title').textContent = content[language].skills.title;
        document.querySelector('.skills_title').textContent = content[language].skills.salesforceDeveloper;
        document.getElementById('1').textContent = content[language].skills.skillsDeveloper;
        document.getElementById('2').textContent = content[language].skills.skillsDeveloperII;
        document.getElementById('3').textContent = content[language].skills.skillsDeveloperIII;
        document.getElementById('4').textContent = content[language].skillsII.salesforceAdministrator;

    }

    document.querySelector('.fi.fi-us').addEventListener('click', function() {
        updateContent('en');
    });

    document.querySelector('.fi.fi-br').addEventListener('click', function() {
        updateContent('pt');
    });
});