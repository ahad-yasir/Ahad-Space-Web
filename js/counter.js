// عدادات تفاعلية
document.addEventListener('DOMContentLoaded', function() {
    // عداد المشاريع
    const projectsCount = document.getElementById('projects-count');
    if (projectsCount) {
        let count = 0;
        const target = 24;
        const interval = setInterval(() => {
            if (count < target) {
                count++;
                projectsCount.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    // عداد المقالات
    const articlesCount = document.getElementById('articles-count');
    if (articlesCount) {
        let count = 0;
        const target = 37;
        const interval = setInterval(() => {
            if (count < target) {
                count++;
                articlesCount.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 30);
    }

    // عداد الزوار (مثال)
    const visitorsCount = document.getElementById('visitors-count');
    if (visitorsCount) {
        // يمكن استبدال هذا برقم حقيقي من API
        visitorsCount.textContent = '12.5k';
    }
});
