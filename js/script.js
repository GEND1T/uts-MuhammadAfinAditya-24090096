document.addEventListener("DOMContentLoaded", function() {
    
    // --- BAGIAN LOGIN ---
    const CORRECT_EMAIL = "mafinaditya1606@gmail.com";
    const CORRECT_PASSWORD = "24090096";
    
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            if (emailValue === "" || passwordValue === "") {
                errorMessage.textContent = "Email dan Password tidak boleh kosong.";
                errorMessage.style.display = "block";
            } else if (emailValue !== CORRECT_EMAIL || passwordValue !== CORRECT_PASSWORD) {
                errorMessage.textContent = "Email atau Password Anda salah.";
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                // alert("Login berhasil");
                window.location.href = "dashboard.html"; 
            }
        });
    }

    // --- BAGIAN DASHBOARD ---
    const totalProductsElement = document.getElementById('total-products');

    if (totalProductsElement) {
        // Data dummy
        const summary = {
            totalProducts: 120,
            totalSales: 85,
            totalRevenue: 12500000
        };

        // 1. Mengisi Total Produk
        document.getElementById('total-products').textContent = summary.totalProducts;

        // 2. Mengisi Total Sales
        document.getElementById('total-sales').textContent = summary.totalSales;

        // 3. Mengisi Total Revenue (dengan format Rupiah)
        const formattedRevenue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0 
        }).format(summary.totalRevenue);
        
        document.getElementById('total-revenue').textContent = formattedRevenue.replace('IDR', 'Rp');
    }

    // --- BAGIAN BARU: PRODUCTS PAGE (Tambahkan kode ini) ---
    
    // 1. Cek apakah kita di halaman produk
    const productListBody = document.getElementById('product-list-body');
    
    if (productListBody) {
        
        // 2. Data dummy (Sesuai Spesifikasi)
        const products = [
            { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
            { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
            { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
        ];

        // 3. Fungsi untuk render data ke tabel
        function renderProducts() {
            // Kosongkan body tabel dulu
            productListBody.innerHTML = '';
            
            // Loop data menggunakan forEach (Sesuai Spesifikasi)
            products.forEach((product, index) => {
                // Buat elemen <tr> baru
                const row = document.createElement('tr');
                
                // Format harga ke Rupiah
                const formattedPrice = product.price.toLocaleString('id-ID');
                
                // Isi HTML untuk baris
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${formattedPrice}</td>
                    <td>${product.stock}</td>
                    <td>
                        <i class="fas fa-edit btn-edit action-btn" data-name="${product.name}"></i>
                        <i class="fas fa-trash btn-delete action-btn"></i>
                    </td>
                `;
                
                // Tambahkan baris ke body tabel
                productListBody.appendChild(row);
            });
        }
        
        // 4. Menangani Aksi (Edit & Delete)
        // Kita gunakan Event Delegation pada parent (tbody)
        productListBody.addEventListener('click', function(event) {
            
            const target = event.target; // Elemen yang diklik (ikon <i>)

            // Cek apakah yang diklik adalah tombol EDIT
            if (target.classList.contains('btn-edit')) {
                const productName = target.dataset.name;
                // Tampilkan alert (Sesuai Spesifikasi)
                alert(`Edit produk ${productName}`);
            }
            
            // Cek apakah yang diklik adalah tombol DELETE
            if (target.classList.contains('btn-delete')) {
                // Tampilkan konfirmasi (Sesuai Spesifikasi)
                if (confirm("Yakin hapus produk ini?")) {
                    // Hapus baris (<tr>) dari DOM (Sesuai Spesifikasi)
                    // target.closest('tr') akan mencari elemen <tr> terdekat
                    target.closest('tr').remove();
                }
            }
        });

        // 5. Panggil fungsi render saat halaman dimuat
        renderProducts();
    }
});