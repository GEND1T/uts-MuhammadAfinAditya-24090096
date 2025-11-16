document.addEventListener("DOMContentLoaded", function() {
    
    // --- BAGIAN LOGIN ---
    const CORRECT_EMAIL = "GEND1T";
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
                
                // 1. Ambil elemen toast
                const toast = document.getElementById('toast-notification');
                
                // 2. Tampilkan toast
                toast.classList.add('toast-visible');
                toast.classList.remove('toast-hidden');

                // 3. Tunggu 2 detik, lalu redirect
                setTimeout(function() {
                    // Sembunyikan toast lagi (opsional, tapi rapi)
                    toast.classList.remove('toast-visible');
                    toast.classList.add('toast-hidden');
                    
                    // Arahkan ke dashboard.html
                    window.location.href = "dashboard.html";
                }, 2000); // 2000ms = 2 detik
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

        
        document.getElementById('total-products').textContent = summary.totalProducts;

        
        document.getElementById('total-sales').textContent = summary.totalSales;

        
        const formattedRevenue = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0 
        }).format(summary.totalRevenue);
        
        document.getElementById('total-revenue').textContent = formattedRevenue.replace('IDR', 'Rp');
    }

    // --- PRODUCTS PAGE  ---
    
  
    const productListBody = document.getElementById('product-list-body');
    
    if (productListBody) {
        
        
        const products = [
            { id: 1,  name: "Teh Hijau", price: 100000, stock: 50 },
            { id: 2, name: "Coklat Dubai", price: 200000, stock: 30 },
            { id: 3, name: "Kopi Aren", price: 75000, stock: 20}
        ];

        
        function renderProducts() {
           
            productListBody.innerHTML = '';
            
            
            products.forEach((product, index) => {
                
                const row = document.createElement('tr');
                
                
                const formattedPrice = product.price.toLocaleString('id-ID');
                
                
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
                
                
                productListBody.appendChild(row);
            });
        }
        
        
        productListBody.addEventListener('click', function(event) {
            
            const target = event.target; 

            
            if (target.classList.contains('btn-edit')) {
                const productName = target.dataset.name;

                alert(`Edit produk ${productName}`);
            }
            
            
            if (target.classList.contains('btn-delete')) {
                
                if (confirm("Yakin hapus produk ini?")) {
                    
                    target.closest('tr').remove();
                }
            }
        });

                renderProducts();
    }
});