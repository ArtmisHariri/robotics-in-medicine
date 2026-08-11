$(document).ready(function () {
  // ارسال درخواست AJAX برای دریافت فایل JSON
  $.ajax({
    url: "data.json", // مسیر فایل JSON
    method: "GET",
    dataType: "json",
    success: function (data) {
      // انتخاب بخش tbody از جدول
      const tableBody = $("#roboticsTable tbody");

      // افزودن داده‌ها به جدول
      data["ربات‌های_پزشکی"].forEach(item => {
        const row = `
          <tr>
            <td>${item.نام}</td>
            <td>${item.کاربرد}</td>
            <td>${item.شرکت_سازنده}</td>
            <td>${item.کشور_سازنده}</td>
            <td>${item.سال_معرفی}</td>
          </tr>
        `;
        tableBody.append(row);
      });
    },
    error: function (xhr, status, error) {
      console.error("خطا در دریافت فایل JSON: ", error);
      console.log("جزئیات: ", xhr);
    }
  });
});
