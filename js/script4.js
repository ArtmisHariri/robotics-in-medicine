document.addEventListener("DOMContentLoaded", function () {
    // نمایش پیام خوشامدگویی در بدو ورود به صفحه
    setTimeout(function () {
        const welcomeMessage = document.createElement("div");
        welcomeMessage.textContent = "به سایت ما خوش آمدید! برای ثبت نام یا ارتباط با ما از طریق فرم زیر اقدام کنید.";
        welcomeMessage.style.position = "fixed";
        welcomeMessage.style.top = "50%";
        welcomeMessage.style.left = "50%";
        welcomeMessage.style.transform = "translate(-50%, -50%)";
        welcomeMessage.style.padding = "20px 40px";
        welcomeMessage.style.backgroundColor = "#333";
        welcomeMessage.style.color = "#fff";
        welcomeMessage.style.borderRadius = "10px";
        welcomeMessage.style.fontSize = "18px";
        welcomeMessage.style.textAlign = "center";
        welcomeMessage.style.opacity = "0";
        welcomeMessage.style.transition = "opacity 0.5s ease";
        welcomeMessage.style.zIndex = "1000";
        document.body.appendChild(welcomeMessage);

        // انیمیشن نمایش پیام خوشامدگویی
        setTimeout(() => {
            welcomeMessage.style.opacity = "1";
        }, 10);

        // مخفی کردن پیام خوشامدگویی بعد از 5 ثانیه
        setTimeout(() => {
            welcomeMessage.style.opacity = "0";
            setTimeout(() => welcomeMessage.remove(), 500);
        }, 5000);
    }, 500);

    // افکت‌های انیمیشنی برای تمام متون صفحه
    const allTexts = document.querySelectorAll("p, h1, h2, h3, h4, h5, label, .navbar a, .header-container p");
    allTexts.forEach((text, index) => {
        text.style.opacity = "0";
        text.style.transform = "translateY(30px)";
        text.style.transition = "all 0.5s ease-out";

        // افکت ورود متون به صفحه
        setTimeout(() => {
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";
        }, 300 * index); // هر متن با تأخیر بیشتری ظاهر شود
    });

    // افکت‌ها برای ورودی‌ها و دکمه‌ها
    const inputs = document.querySelectorAll("input, textarea, button");
    inputs.forEach((input, index) => {
        input.style.opacity = "0";
        input.style.transform = "scale(0.9)";
        input.style.transition = "all 0.5s ease-out";

        setTimeout(() => {
            input.style.opacity = "1";
            input.style.transform = "scale(1)";
        }, 300 * (index + allTexts.length)); // ورودی‌ها با تأخیر بعد از متون ظاهر می‌شوند
    });

    // افکت‌های دکمه‌ها
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#007f91";
            this.style.transform = "scale(1.05)";
            this.style.transition = "all 0.3s ease";
        });

        button.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#004d63";
            this.style.transform = "scale(1)";
        });
    });
});