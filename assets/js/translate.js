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
                educationUniversity: "Unicesumar - Brazil",
                adminCert: "Admin Certified",
                sfCert: "Salesforce Certified",
                dpCert: "DP900 Certified",
                dpMS: "Microsoft Certified",
                az900: "AZ900 Certified",
                azMS: "Microsoft Certified",
                ai900: "AI900 Certified",
                ai900MS: "Microsoft Certified",
                computerNetworkers: "Computer Networks",
                computerS: "Senac MG - Brazil"
            },
            jobs: {
                j1: "Salesforce Developer Analyst",
                j2: "ArcelorMittal Systems",
                j3: "Computer Technician",
                j4: "TechInfor",
                j5: "Telecommunications Technician",
                j6: "Claro - Brazil"
            },
            portfolio: {
                p1: "Portfolio",
                p2: "Latest jobs"
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
        document.getElementById('14').textContent = content[language].qualification.adminCert;
        document.getElementById('15').textContent = content[language].qualification.sfCert;
        document.getElementById('16').textContent = content[language].qualification.dpCert;
        document.getElementById('17').textContent = content[language].qualification.dpMS;
        document.getElementById('18').textContent = content[language].qualification.az900;
        document.getElementById('19').textContent = content[language].qualification.azMS;
        document.getElementById('20').textContent = content[language].qualification.ai900;
        document.getElementById('21').textContent = content[language].qualification.ai900MS;
        document.getElementById('22').textContent = content[language].qualification.computerNetworkers;
        document.getElementById('23').textContent = content[language].qualification.computerS;
        
        document.getElementById('24').textContent = content[language].jobs.j1;
        document.getElementById('25').textContent = content[language].jobs.j2;
        document.getElementById('26').textContent = content[language].jobs.j3;
        document.getElementById('27').textContent = content[language].jobs.j4;
        document.getElementById('28').textContent = content[language].jobs.j5;
        document.getElementById('29').textContent = content[language].jobs.j6;

        document.getElementById('30').textContent = content[language].portfolio.p1;
        document.getElementById('31').textContent = content[language].portfolio.p2;
    }

    document.querySelector('.fi.fi-us').addEventListener('click', function() {
        updateContent('en');
    });

    document.querySelector('.fi.fi-br').addEventListener('click', function() {
        updateContent('pt');
    });
});