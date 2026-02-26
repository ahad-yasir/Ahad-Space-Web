document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Data for projects
    const projects = [
        {
            id: 1,
            title: 'تحليل مبيعات متجر إلكتروني',
            description: 'تحليل بيانات مبيعات 3 سنوات باستخدام Python وPower BI',
            tags: ['Python', 'Power BI', 'SQL'],
            image: 'https://picsum.photos/seed/p1/400/250',
            link: 'project-template.html?id=1'
        },
        {
            id: 2,
            title: 'نموذج توقع أسعار العقارات',
            description: 'بناء نموذج تعلم آلة للتنبؤ بأسعار العقارات بدقة 89%',
            tags: ['Scikit-learn', 'Python', 'Regression'],
            image: 'https://picsum.photos/seed/p2/400/250',
            link: 'project-template.html?id=2'
        },
        {
            id: 3,
            title: 'لوحة معلومات تفاعلية',
            description: 'تصور بيانات العملاء وسلوكهم باستخدام Tableau',
            tags: ['Tableau', 'SQL', 'Dashboard'],
            image: 'https://picsum.photos/seed/p3/400/250',
            link: 'project-template.html?id=3'
        }
    ];

    // Data for articles
    const articles = [
        {
            id: 1,
            title: 'مقدمة في علم البيانات للمبتدئين',
            category: 'تقني',
            date: '20 فبراير 2026',
            image: 'https://picsum.photos/seed/b1/400/200',
            description: 'ما هو علم البيانات؟ وما المهارات المطلوبة لتصبح عالم بيانات؟',
            link: 'blog-post-template.html?id=1'
        },
        {
            id: 2,
            title: 'كيف نبني عادة القراءة اليومية',
            category: 'تطوير ذاتي',
            date: '15 فبراير 2026',
            image: 'https://picsum.photos/seed/b2/400/200',
            description: 'تجربتي في بناء عادة القراءة وأثرها على حياتي المهنية',
            link: 'blog-post-template.html?id=2'
        },
        {
            id: 3,
            title: 'التصوير كهواية وتأثيره على الإبداع',
            category: 'عام',
            date: '10 فبراير 2026',
            image: 'https://picsum.photos/seed/b3/400/200',
            description: 'كيف ساعدني التصوير على رؤية العالم من زاوية مختلفة',
            link: 'blog-post-template.html?id=3'
        }
    ];

    function createProjectCard(project) {
        return `
            <div class="project-card glow-on-hover">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="read-more">عرض المشروع <i class="fas fa-arrow-left"></i></a>
                </div>
            </div>
        `;
    }

    function createBlogCard(article) {
        return `
            <article class="blog-card glow-on-hover">
                <img src="${article.image}" alt="${article.title}" referrerPolicy="no-referrer">
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${article.date}</span>
                        <span class="blog-category">${article.category}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.link}" class="read-more">اقرأ المزيد <i class="fas fa-arrow-left"></i></a>
                </div>
            </article>
        `;
    }

    // Populate portfolio page
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    }

    // Populate blog page
    const articlesGrid = document.querySelector('.articles-grid');
    if (articlesGrid) {
        articlesGrid.innerHTML = articles.map(createBlogCard).join('');
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                alert(`شكراً لاشتراكك! تم تسجيل البريد: ${email}`);
                this.reset();
            }
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .blog-card, .orbit-card, .event-card, .about-card, .vision-card, .collab-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // --- Calendar Logic ---
    const eventsData = {
        "2026-01": [
            {title:"Consumer Electronics Show (CES)",location:"لاس فيغاس، الولايات المتحدة",date:"6-9 يناير 2026",description:"أكبر معرض للإلكترونيات الاستهلاكية في العالم.","type":"tech","region":"international","link":"https://www.ces.tech/","badge":"تقني"}
        ],
        "2026-02": [
            {title:"يوم التأسيس السعودي",location:"المملكة العربية السعودية",date:"22 فبراير 2026",description:"ذكرى تأسيس الدولة السعودية الأولى.","type":"national","region":"saudi","link":"#","badge":"🇸🇦 وطني"},
            {title:"Modernism Week",location:"بالم سبرينغز، الولايات المتحدة",date:"12-22 فبراير 2026",description:"فعالية تصميم وعمارة تجمع بين الحداثة والتقنية.","type":"tech","region":"international","link":"https://modernismweek.com/","badge":"تقني"}
        ],
        "2026-03": [
            {title:"بداية رمضان",location:"العالم الإسلامي",date:"1 مارس 2026 (تقريبي)",description:"بداية شهر الصيام والعبادة.","type":"religious","region":"international","link":"#","badge":"ديني"},
            {title:"Mobile World Congress (MWC)",location:"برشلونة، إسبانيا",date:"2-5 مارس 2026",description:"أكبر مؤتمر للاتصالات المتنقلة في العالم.","type":"tech","region":"international","link":"https://www.mwcbarcelona.com/","badge":"تقني"},
            {title:"عيد الفطر المبارك",location:"العالم الإسلامي",date:"30 مارس 2026 (تقريبي)",description:"نهاية شهر رمضان وبداية عيد الفطر.","type":"religious","region":"international","link":"#","badge":"ديني"}
        ],
        "2026-04": [
            {title:"LEAP",location:"الرياض، المملكة العربية السعودية",date:"13-16 أبريل 2026",description:"أكبر مؤتمر تقني في السعودية ومنطقة الشرق الأوسط.","type":"tech","region":"saudi","link":"https://www.onegiantleap.com/","badge":"🇸🇦 تقني"}
        ],
        "2026-09": [
            {title:"اليوم الوطني السعودي",location:"المملكة العربية السعودية",date:"23 سبتمبر 2026",description:"ذكرى توحيد المملكة العربية السعودية.","type":"national","region":"saudi","link":"#","badge":"🇸🇦 وطني"}
        ]
    };

    function getMonthName(monthIndex) {
        const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return months[monthIndex];
    }

    function createEventCard(event) {
        const typeClass = `event-type-${event.type}`;
        const linkContent = event.link === '#' ? '' : `<a href="${event.link}" target="_blank" rel="noopener noreferrer" class="event-link">التفاصيل <i class="fas fa-external-link-alt"></i></a>`;
        
        return `
            <div class="event-card glow-on-hover">
                <div class="event-badge ${typeClass}">${event.badge}</div>
                <div class="event-content">
                    <div class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</div>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
                    <p class="event-description">${event.description}</p>
                    <div class="event-footer">
                        ${linkContent}
                    </div>
                </div>
            </div>`;
    }

    function updateCalendarDisplay(year, month) {
        const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
        const events = eventsData[monthKey] || [];
        const eventsGrid = document.getElementById('events-grid-container');
        const noEventsMsg = document.getElementById('no-events-message');
        const currentMonthDisplay = document.getElementById('current-month-display');

        if (!eventsGrid || !noEventsMsg || !currentMonthDisplay) return;

        currentMonthDisplay.textContent = `${getMonthName(month)} ${year}`;

        if (events.length > 0) {
            eventsGrid.innerHTML = events.map(createEventCard).join('');
            eventsGrid.style.display = 'grid';
            noEventsMsg.style.display = 'none';
        } else {
            eventsGrid.innerHTML = '';
            eventsGrid.style.display = 'none';
            noEventsMsg.style.display = 'block';
        }
    }

    const calendarSection = document.querySelector('.events-calendar-section');
    if (calendarSection) {
        const today = new Date();
        let currentYear = 2026;
        let currentMonth = 0; // Start with January

        updateCalendarDisplay(currentYear, currentMonth);

        const prevBtn = document.querySelector('.prev-month');
        const nextBtn = document.querySelector('.next-month');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                updateCalendarDisplay(currentYear, currentMonth);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                updateCalendarDisplay(currentYear, currentMonth);
            });
        }
    }
});
