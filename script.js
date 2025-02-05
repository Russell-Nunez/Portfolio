document.addEventListener('DOMContentLoaded', () => {
    // Particle background
    const particleBackground = document.getElementById('particle-background');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleBackground.appendChild(particle);
    }

    // Animate hero section
    const heroElements = ['name', 'title', 'position', 'description', 'cta-button'];
    heroElements.forEach((id, index) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            element.classList.add('animate-fadeInUp');
            element.classList.add('show');
        }, index * 200);
    });

    // Skills list
    const skills = [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'React Native', icon: 'fab fa-react' },
        { name: 'Ruby', icon: 'fas fa-gem' },
        { name: 'PHP', icon: 'fab fa-php' },
        { name: 'ADVPL', icon: 'fas fa-code' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'Flutter', icon: 'fas fa-mobile-alt' },
        { name: 'TypeScript', icon: 'fas fa-code' },
        { name: 'Ruby on Rails', icon: 'fas fa-train' },
        { name: 'Django', icon: 'fab fa-python' },
        { name: 'Express', icon: 'fab fa-node-js' },
        { name: 'Next.js', icon: 'fab fa-react' },
        { name: 'St.js', icon: 'fas fa-code' },
        { name: 'jQuery', icon: 'fab fa-js' },
        { name: 'Jest', icon: 'fas fa-vial' },
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'ReactJS', icon: 'fab fa-react' },
        { name: 'UX Design', icon: 'fas fa-user-circle' },
        { name: 'UI Design', icon: 'fas fa-palette' },
        { name: 'Oracle', icon: 'fas fa-database' },
        { name: 'PL/SQL', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'SQL Server', icon: 'fas fa-server' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'Redis', icon: 'fas fa-database' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Google Cloud', icon: 'fab fa-google' },
        { name: 'Azure', icon: 'fab fa-microsoft' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'DevOps', icon: 'fas fa-cogs' },
        { name: 'RabbitMQ', icon: 'fas fa-envelope' },
        { name: 'Data Analysis', icon: 'fas fa-chart-bar' },
        { name: 'Data Engineering', icon: 'fas fa-database' },
        { name: 'Data Science', icon: 'fas fa-atom' },
        { name: 'Machine Learning', icon: 'fas fa-robot' },
        { name: 'Redes Neurais', icon: 'fas fa-brain' },
        { name: 'Deep Learning', icon: 'fas fa-network-wired' },
        { name: 'TensorFlow', icon: 'fab fa-python' },
        { name: 'Selenium', icon: 'fas fa-vial' },
        { name: 'Puppeteer', icon: 'fas fa-spider' },
        { name: 'Kanban', icon: 'fas fa-columns' },
        { name: 'Scrum', icon: 'fas fa-users' },
        { name: 'Agile', icon: 'fas fa-running' }
    ];

    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item animate-fadeInUp';
        div.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <span>${skill.name}</span>
        `;
        skillsList.appendChild(div);
    });

    // Experience list
    const experiences = [
        {
            title: 'Programador Full Stack Sênior / Tech Lead',
            company: 'Rede Industrial',
            period: '09/2024 - Atual',
            description: 'Liderança técnica de equipe composta por desenvolvedores de diversos níveis. Desenvolvimento de software com foco em Inteligência Artificial, promovendo aprendizado colaborativo e inovação.',
            technologies: ['Python', 'JavaScript', 'Node.js', 'React', 'Ruby', 'PL/SQL', 'PHP', 'Java']
        },
        {
            title: 'Programador Full Stack Pleno',
            company: 'Grupo Provac',
            period: '03/2024 - Atual',
            description: 'Criação e manutenção de soluções empresariais. Implementação de projetos de Machine Learning, com foco em análise e suporte à decisão baseado em dados.',
            technologies: ['React', 'Node.js', 'Python', 'Ruby', 'RESTful APIs', 'Machine Learning']
        },
        {
            title: 'Analista de Sistemas JR',
            company: 'TOTVS',
            period: '09/2023 - 03/2024',
            description: 'Desenvolvimento e manutenção de bancos de dados Oracle e otimização de jobs para alta performance. Execução de testes de performance e melhorias em sistemas corporativos.',
            technologies: ['Python', 'SQL', 'PLSQL', 'ADVPL', 'Java', 'PHP']
        },
        {
            title: 'Programador Full Stack JR',
            company: 'Capgemini S.A.',
            period: '11/2020 - 08/2023',
            description: 'Desenvolvimento de aplicações Full Stack, atuando na manutenção, suporte e melhoria contínua. Participação ativa em projetos tecnológicos de grande escala.',
            technologies: ['SQL', 'Java', 'Python', 'PHP']
        }
    ];

    const experienceList = document.getElementById('experience-list');
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card animate-fadeInUp';
        card.innerHTML = `
            <h3 class="text-xl font-semibold text-amber-400 mb-2">${exp.title}</h3>
            <p class="text-lg font-medium mb-1">${exp.company}</p>
            <p class="text-sm text-gray-400 mb-4">${exp.period}</p>
            <p class="mb-4">${exp.description}</p>
            <div class="mb-2">
                <h4 class="font-semibold mb-2">Tecnologias:</h4>
                <div class="flex flex-wrap gap-2">
                    ${exp.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        experienceList.appendChild(card);
    });

    // Projects list
    const projects = [
        {
            title: 'Sistema de Bate Ponto',
            description: 'Sistema robusto e escalável para 5.000 usuários, processando 20.000 solicitações diárias. Inclui registro de ponto, delimitação geográfica, emissão de relatórios e microserviço de IA.',
            technologies: ['Node.js', 'React Native', 'Postgres', 'Python', 'IA'],
            icon: '<i class="fas fa-clock text-amber-400 text-4xl mb-4"></i>',
            impact: 'Otimizou o controle de horas dos funcionários e auxiliou na tomada de decisões de RH.'
        },
        {
            title: 'Sistema de Admissão e Demissão',
            description: 'Sistema abrangente para gerenciar o processo de admissão e demissão de funcionários, com triagem de documentos, OCR, integração Protheus e seleção de candidatos por IA.',
            technologies: ['React Native', 'Node.js', 'Python', 'ADVPL', 'Postgres'],
            icon: '<i class="fas fa-user-plus text-amber-400 text-4xl mb-4"></i>',
            impact: 'Automatizou processos de RH, reduzindo tempo e erros na admissão e demissão.'
        },
        {
            title: 'Sistema de Medição de Velocidade em Frota',
            description: 'Integração do sistema de medição de velocidade dos carros da frota, monitorando velocidade média, identificando excessos e medindo quilometragem.',
            technologies: ['Node.js', 'React.js', 'Typescript', 'Python', 'R', 'Postgres'],
            icon: '<i class="fas fa-car text-amber-400 text-4xl mb-4"></i>',
            impact: 'Melhorou a segurança da frota e otimizou custos de manutenção.'
        },
        {
            title: 'Menu de Inteligência Artificial',
            description: 'Menu de IA com diferentes agentes e funcionalidades, incluindo raspagem de dados, geração de gráficos e relatórios, e integração com diversos sistemas.',
            technologies: ['Flutter', 'Node.js', 'Python', 'PLSQL'],
            icon: '<i class="fas fa-brain text-amber-400 text-4xl mb-4"></i>',
            impact: 'Forneceu insights valiosos e melhorou a tomada de decisões em vários setores.'
        }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card animate-fadeInUp';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                ${project.icon}
                <h3 class="text-xl font-semibold ml-4">${project.title}</h3>
            </div>
            <p class="mb-4">${project.description}</p>
            <div class="mb-4">
                <h4 class="font-semibold mb-2">Tecnologias:</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
                </div>
            </div>
            <p class="text-sm text-amber-400">${project.impact}</p>
        `;
        projectsList.appendChild(card);
    });

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-amber-400');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-amber-400');
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fadeInUp');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
});