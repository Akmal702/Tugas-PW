// Script untuk interaktivitas, seperti menu responsif (jika diperlukan)
// Contoh script untuk menambahkan kelas aktif pada menu saat halaman dimuat
// Script untuk interaktivitas, seperti menu responsif (jika diperlukan)
// Contoh script untuk menambahkan kelas aktif pada menu saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        if (window.location.href.indexOf(link.href) > -1) {
            link.classList.add('active');
        }
    });
});

