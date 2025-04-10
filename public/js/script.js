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
      
      /* // document.body.innerHTML = resultHTML ile tüm HTML’yi değiştiriyoruz bu yüzden controller'da json formatına geçildi sadece toast mesajı için yapılan bir işlem
      const resultHTML = await response.text(); // sunucudan gelen yanıtı alır
      document.body.innerHTML = resultHTML; // sayfanın içeriğini günceller */

      const result = await response.json(); // sunucudan gelen yanıtı alır
      showToast(result.message, result.status); // toast mesajını gösterir
    });
  }

  function showToast(message, status){
    
    // önce varsa eski toast mesajını temizler
    const existingToast = document.getElementById('liveToast');
    if(existingToast) existingToast.remove();

    // toast HTML oluşturma
    const toast = document.createElement('div');
    toast.id = 'liveToast';
    toast.className = `toast align-items-center text-bg-${status === 'success' ? 'success' : 'danger'} show position-fixed bottom-0 end-0 m-4`;
    toast.role = 'alert';
    toast.style.zIndex = 1050; // Bootstrap toast z-index değeri
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;

    document.body.appendChild(toast);

    const bsToast = new bootstrap.Toast(toast, {
      delay: 3000,
      autohide: true
    });
    bsToast.show();
  }
});
