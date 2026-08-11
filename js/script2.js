document.addEventListener("DOMContentLoaded", function () {
    // 1. افکت‌های ناوبری (لینک‌ها)
    const menuLinks = document.querySelectorAll('nav .menu a');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            link.style.transition = 'all 0.2s';
            link.style.color = '#fff';
            link.style.backgroundColor = '#005f73';
            link.style.paddingLeft = '10px';
        });
        link.addEventListener('mouseleave', function () {
            link.style.transition = 'all 0.2s';
            link.style.color = '';
            link.style.backgroundColor = '';
            link.style.paddingLeft = '0';
        });
    });

    // 2. افکت‌های لینک‌های Pagination
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            link.style.transition = 'all 0.2s';
            link.style.color = '#fff';
            link.style.backgroundColor = '#005f73';
            link.style.paddingLeft = '10px';
        });
        link.addEventListener('mouseleave', function () {
            link.style.transition = 'all 0.2s';
            link.style.color = '';
            link.style.backgroundColor = '';
            link.style.paddingLeft = '0';
        });
    });

    // 3. افکت‌های برای تگ‌های h2 و h3
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function () {
            heading.style.transition = 'all 0.3s';
            heading.style.color = '#ffffff';
            heading.style.backgroundColor = '#007f91';
            heading.style.opacity = '0.8';
            heading.style.padding = '10px';
            heading.style.borderRadius = '5px';
        });
        heading.addEventListener('mouseleave', function () {
            heading.style.transition = 'all 0.3s';
            heading.style.color = '';
            heading.style.backgroundColor = '';
            heading.style.opacity = '1';
            heading.style.padding = '0';
            heading.style.borderRadius = '0';
        });
    });

    // 4. افکت جدید و متفاوت برای تگ‌های li
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.transition = 'all 0.5s ease';
            item.style.color = '#FF5733';
            item.style.fontSize = '1.2em';
            item.style.textShadow = '0 0 8px rgba(255, 87, 51, 0.8)';
            item.style.transform = 'translateX(20px)';
            item.style.opacity = '1';
        });
        item.addEventListener('mouseleave', function () {
            item.style.transition = 'all 0.5s ease';
            item.style.color = '';
            item.style.fontSize = '';
            item.style.textShadow = '';
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        });
    });

    // 5. افکت‌های flex-box ها (برای هر یک از قسمت‌های flex)
    const flexBoxes = document.querySelectorAll('.flex-box');
    flexBoxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
            box.style.transition = 'all 0.3s';
            box.style.backgroundColor = '#f1f1f1';
            box.style.transform = 'scale(1.05)';
            box.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
        });
        box.addEventListener('mouseleave', function () {
            box.style.transition = 'all 0.3s';
            box.style.backgroundColor = '';
            box.style.transform = 'scale(1)';
            box.style.boxShadow = '';
        });
    });

    // 6. افکت نمایشی هنگام اسکرول (Lazy Loading)
    const lazyElements = document.querySelectorAll('.flex-box');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 1s ease-in-out';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    lazyElements.forEach(element => {
        observer.observe(element);
    });

    // 7. اضافه کردن ویجت تاریخ و ساعت
    function updateDateTime() {
        const now = new Date();

        // فرمت تاریخ فارسی
        const formattedDate = now.toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // فرمت ساعت
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        // نمایش تاریخ و ساعت
        const dateTimeWidget = document.getElementById('date-time-widget');
        dateTimeWidget.textContent = `${formattedDate} | ${formattedTime}`;
    }

    // بروزرسانی هر ثانیه
    setInterval(updateDateTime, 1000);
});
