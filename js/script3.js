document.addEventListener('DOMContentLoaded', function () {
    // 1. افکت‌های ناوبری (لینک‌ها)
    const navLinks = document.querySelectorAll('.navbar .container a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.color = '#ffffff';
            link.style.backgroundColor = '#006d84';
            link.style.paddingLeft = '10px';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.color = '';
            link.style.backgroundColor = '';
            link.style.paddingLeft = '0';
        });
    });

    // 2. افکت‌های لینک‌های Pagination
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.color = '#ffffff';
            link.style.backgroundColor = '#005f73';
            link.style.paddingLeft = '5px';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.color = '';
            link.style.backgroundColor = '';
            link.style.paddingLeft = '0';
        });
    });

    // 3. افکت‌های برای تگ‌های h1
    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            heading.style.transition = 'all 0.3s ease';
            heading.style.color = '#ffffff';
            heading.style.backgroundColor = '#007f91';
            heading.style.padding = '10px';
            heading.style.borderRadius = '8px';
        });
        heading.addEventListener('mouseleave', () => {
            heading.style.transition = 'all 0.3s ease';
            heading.style.color = '#004d63';
            heading.style.backgroundColor = '';
            heading.style.padding = '0';
            heading.style.borderRadius = '0';
        });
    });

    // 4. افکت‌های Textbox
    const textboxes = document.querySelectorAll('.textbox');
    textboxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transition = 'all 0.3s ease';
            box.style.backgroundColor = '#cceeff';
            box.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
            box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transition = 'all 0.3s ease';
            box.style.backgroundColor = '#e6f7ff';
            box.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.1)';
            box.style.transform = 'scale(1)';
        });
    });

    // 5. افکت‌های کارت‌ها
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
    });

    // 6. افکت‌های عکس‌ها (کلاس .thumb)
    const thumbImages = document.querySelectorAll('.thumb');
    thumbImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.filter = 'brightness(80%)';
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.filter = 'brightness(100%)';
            image.style.transform = 'scale(1)';
        });
    });

    // 7. افکت متن داخل هدر (کلاس .header-container)
    const title = document.querySelector('.header-container .title');
    title.addEventListener('mouseenter', () => {
        title.style.transition = 'all 0.3s ease';
        title.style.color = '#ffffff';
        title.style.backgroundColor = '#007f91';
        title.style.fontSize = '48px';
        title.style.padding = '20px';
        title.style.borderRadius = '10px';
    });
    title.addEventListener('mouseleave', () => {
        title.style.transition = 'all 0.3s ease';
        title.style.color = '#005f8f';
        title.style.backgroundColor = '#ffffff';
        title.style.fontSize = '40px';
        title.style.padding = '10px';
        title.style.borderRadius = '0';
    });

    // 8. افکت بخش اصلی محتوا (کلاس .allContent)
    const allContent = document.querySelector('.allContent');
    allContent.addEventListener('mouseenter', () => {
        allContent.style.transition = 'all 0.3s ease';
        allContent.style.backgroundColor = '#eef6fc';
        allContent.style.border = '2px solid #007f91';
        allContent.style.padding = '25px';
        allContent.style.borderRadius = '15px';
    });
    allContent.addEventListener('mouseleave', () => {
        allContent.style.transition = 'all 0.3s ease';
        allContent.style.backgroundColor = '';
        allContent.style.border = '';
        allContent.style.padding = '20px';
        allContent.style.borderRadius = '0';
    });

    // 9. افزودن نمودار حرفه‌ای
    const existingChartContainer = document.querySelector('#chartContainer');
    if (existingChartContainer) {
        existingChartContainer.remove();
    }

    const chartContainer = document.createElement('div');
    chartContainer.id = 'chartContainer';
    chartContainer.style.width = '100%';
    chartContainer.style.maxWidth = '700px';
    chartContainer.style.margin = '30px auto';
    chartContainer.style.backgroundColor = '#ffffff';
    chartContainer.style.border = '2px solid #ddd';
    chartContainer.style.borderRadius = '12px';
    chartContainer.style.padding = '20px';
    chartContainer.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
    chartContainer.style.textAlign = 'center';

    // افزودن تگ canvas برای نمودار
    const chartCanvas = document.createElement('canvas');
    chartCanvas.id = 'myChart';
    chartContainer.appendChild(chartCanvas);

    // افزودن نمودار به DOM
    const mainContent = document.querySelector('.allContent');
    mainContent.parentElement.appendChild(chartContainer);

    // داده‌ها برای نمودار
    const data = {
        labels: ['ربات‌های جراحی', 'ربات‌های توان‌بخشی', 'ربات‌های پرستار', 'ربات‌های داروخانه‌ای'],
        datasets: [{
            label: 'تعداد پروژه‌ها',
            data: [20, 15, 30, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 2,
            hoverBackgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(54, 162, 235, 0.8)'
            ]
        }]
    };

    // تنظیمات نمودار
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutBounce',
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                        },
                        color: '#333'
                    }
                },
                title: {
                    display: true,
                    text: 'آمار پروژه‌های رباتیک (2024)',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    color: '#444'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.raw} پروژه`;
                        }
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5,
                        color: '#555'
                    },
                    grid: {
                        color: '#ddd',
                        borderDash: [5, 5]
                    }
                },
                x: {
                    ticks: {
                        color: '#555'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        },
    };

    // ایجاد نمودار
    new Chart(chartCanvas, config);
});
