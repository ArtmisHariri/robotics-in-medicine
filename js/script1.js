document.addEventListener("DOMContentLoaded", function () {
    // 1. نمایش و پنهان‌سازی منو در موبایل با انیمیشن چرخشی
    const mobileMenu = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');
    const icon = mobileMenu.querySelector('i');

    mobileMenu.addEventListener('click', function () {
        if (menu.style.height === '0px' || !menu.style.height) {
            menu.style.height = menu.scrollHeight + 'px';
            icon.classList.replace('icofont-navigation-menu', 'icofont-close');
            menu.style.transition = 'height 0.5s ease-in-out';
        } else {
            menu.style.height = '0';
            icon.classList.replace('icofont-close', 'icofont-navigation-menu');
            menu.style.transition = 'height 0.5s ease-in-out';
        }
    });

    // 2. اسکرول نرم به بخش‌ها با افکت چرخشی
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
        });
    });

    // 3. نمایش پیغام خوشامدگویی با انیمیشن لغزشی
    setTimeout(function () {
        const dialog = document.createElement('div');
        dialog.id = 'welcome-dialog';
        dialog.innerHTML = `
            <div class="dialog-content">
                <h2>خوش آمدید!</h2>
                <p>به سایت رباتیک در پزشکی خوش آمدید. از بازدید شما خوشحالیم!</p>
                <button id="close-dialog">بستن</button>
            </div>
        `;
        document.body.prepend(dialog);
        dialog.style.display = 'block';
        dialog.style.transform = 'translateY(-100%)';
        dialog.style.transition = 'transform 0.5s ease-out';
        setTimeout(() => dialog.style.transform = 'translateY(0)', 100);

        // بستن دیالوگ با دکمه
        const closeButton = document.getElementById('close-dialog');
        closeButton.addEventListener('click', function () {
            dialog.style.transform = 'translateY(-100%)';
            dialog.style.transition = 'transform 0.5s ease-out';
            setTimeout(() => dialog.style.display = 'none', 500);
        });
    }, 1000);

    // 4. افکت‌های زیبا برای لینک‌ها و دکمه‌ها با افکت درخشش
    const menuLinks = document.querySelectorAll('nav .menu a, .pagination a');
    menuLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function () {
            link.style.transition = 'all 0.3s';
            link.style.color = '#fff';
            link.style.backgroundColor = '#005f73';
            link.style.paddingLeft = '10px';
            link.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
        });

        link.addEventListener('mouseleave', function () {
            link.style.transition = 'all 0.3s';
            link.style.color = '';
            link.style.backgroundColor = '';
            link.style.paddingLeft = '0';
            link.style.boxShadow = '';
        });
    });

    // 5. افکت جدید برای متن‌های h2 و h3 با حرکت عمودی و تغییر رنگ
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach(function(heading) {
        heading.addEventListener('mouseenter', function () {
            heading.style.transition = 'all 0.5s ease';
            heading.style.color = '#8A2BE2'; // تغییر رنگ به بنفش
            heading.style.transform = 'translateY(-10px)'; // حرکت عمودی به سمت بالا
            heading.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // اضافه کردن سایه
        });

        heading.addEventListener('mouseleave', function () {
            heading.style.transition = 'all 0.5s ease';
            heading.style.color = ''; // بازگشت به رنگ اصلی
            heading.style.transform = 'translateY(0)'; // بازگشت به موقعیت اولیه
            heading.style.boxShadow = ''; // حذف سایه
        });
    });

    // 6. افکت نمایشی هنگام اسکرول (Lazy Loading) با تغییر مقیاس
    const elements = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1.05)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(function(element) {
        observer.observe(element);
    });

    // 7. افکت زیبا برای تصاویر با زوم و سایه
    const images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        image.addEventListener('mouseenter', function () {
            image.style.transform = 'scale(1.1)';  // افکت زوم
            image.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)'; // اضافه کردن سایه
        });

        image.addEventListener('mouseleave', function () {
            image.style.transform = 'scale(1)';  // بازگشت به اندازه اصلی
            image.style.boxShadow = '';  // حذف سایه
        });
    });
});
