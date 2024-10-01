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
                salesforceAdministrator: "Salesforce Administrator | Analyst",
                skillsAdministrator: "Business requirements analysis and scalable solutions",
                skillsAdministratorII: "Process automation using Flow Builder | Approval Process | Validation Rules | Einstein Next Best Action | Einstein Bots",
                skillsAdministratorIII: "Perform regression and new functionality tests, impact tests and business rules"
            },
            qualification: {
                title: "Qualification",
                subtitle: "My personal journey",
                qualificationStudy: "Education",
                qualificationJob: "Job",
                education: "Bachelor's Degree in Software Engineering",
                educationUniversity: "Unicesumar - Brazil"
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
        document.getElementById('5').textContent = content[language].skillsII.skillsAdministrator;
        document.getElementById('6').textContent = content[language].skillsII.skillsAdministratorII;
        document.getElementById('7').textContent = content[language].skillsII.skillsAdministratorIII;

        document.getElementById('8').textContent = content[language].qualification.title;
        document.getElementById('9').textContent = content[language].qualification.subtitle;
        document.getElementById('10').textContent = content[language].qualification.qualificationStudy;
        document.getElementById('11').textContent = content[language].qualification.qualificationJob;
        document.getElementById('12').textContent = content[language].qualification.education;
        document.getElementById('13').textContent = content[language].qualification.educationUniversity;
    }

    document.querySelector('.fi.fi-us').addEventListener('click', function() {
        updateContent('en');
    });

    document.querySelector('.fi.fi-br').addEventListener('click', function() {
        updateContent('pt');
    });
});