document.addEventListener("DOMContentLoaded", function () {
    const toastEl = document.querySelector(".toast");
  
    if (toastEl) {
      const bsToast = new bootstrap.Toast(toastEl, {
        delay: 3000,
        autohide: true
      });
      bsToast.show();
    }
  });
  