document.addEventListener("DOMContentLoaded", function () {
  const toastEl = document.querySelector(".toast");
  const form = document.querySelector("form");

  // toast mesajını otomatik kapatma
  if (toastEl) {
    const bsToast = new bootstrap.Toast(toastEl, {
      delay: 3000,
      autohide: true,
    });
    bsToast.show();
  }

  // ajax ile form gönderme
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault(); // formun varsayılan gönderimini engeller

      const formData = new FormData(form); // form verilerini alır
      const data = new URLSearchParams(formData); // form verilerini URL formatına çevirir

      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      });

      const resultHTML = await response.text(); // sunucudan gelen yanıtı alır
      document.body.innerHTML = resultHTML; // sayfanın içeriğini günceller
    });
  }
});
