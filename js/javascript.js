var modal = document.getElementById("modal");
var confirmationModal = document.getElementById("confirmationModal");
var detailModal = document.getElementById("detailModal");
var notification = document.getElementById("notification");
var closeNotificationBtn = document.getElementById("closeNotification");

var openModalBtn = document.getElementById("openModal");
var openModalDetailBtns = document.querySelectorAll("#openModalDetailBtn");
var openModalConfirmationBtns = document.querySelectorAll("#openModalConfirmation");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

openModalDetailBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        detailModal.style.display = "block";
    });
});

openModalConfirmationBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        confirmationModal.style.display = "block";
    });
});

var confirmDeleteBtn = document.getElementById("confirmDelete");
var cancelDeleteBtn = document.getElementById("cancelDelete");

window.addEventListener("click", function (event) {
    if (event.target == modal || event.target == confirmationModal || event.target == detailModal) {
        closeAllModals();
    }
});

confirmDeleteBtn.addEventListener('click', function () {
    closeAllModals();
});

cancelDeleteBtn.addEventListener('click', function () {
    confirmationModal.style.display = "none";
});

closeNotificationBtn.addEventListener('click', function () {
    notification.style.display = "none";
});

var detailModal = document.getElementById("detailModal");
var openModalDetailBtns = document.querySelectorAll("#openModalDetailBtn");
var closeDetailModalBtn = document.getElementById("closeDetailModal");

openModalDetailBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        detailModal.style.display = "block";
    });
});

closeDetailModalBtn.addEventListener("click", function () {
    detailModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == detailModal) {
        detailModal.style.display = "none";
    }
});

var pembayaranModal = document.getElementById("pembayaranModal");
var openPembayaranModalBtns = document.getElementById("openPembayaranModal");
var closePembayaranModalBtn = document.getElementById("closePembayaranModal");
var metodePembayaranSelect = document.getElementById("metodePembayaran");
var qrisOptions = document.getElementById("qrisOptions");

openPembayaranModalBtns.addEventListener("click", function () {
    pembayaranModal.style.display = "block";
});


closePembayaranModalBtn.addEventListener("click", function () {
    pembayaranModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == pembayaranModal) {
        pembayaranModal.style.display = "none";
    }
});

metodePembayaranSelect.addEventListener("change", function () {
    if (metodePembayaranSelect.value === "qris") {
        qrisOptions.style.display = "block";
        cashOptions.style.display = "none";
    } else {
        qrisOptions.style.display = "none";
    }
});

function closeAllModals() {
    modal.style.display = "none";
    confirmationModal.style.display = "none";
    detailModal.style.display = "none";
    pembayaranModal.style.display = "none";
    templateModal.style.display = "none";
}

function showNotification() {
    notification.style.display = "block";
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}