        document.querySelector('.menu-icon').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('hidden');
        });
        
        function toggleMenu() { // Função para alternar o menu dropdown
            const menu = document.getElementById("dropdownMenu");
            menu.style.display = menu.style.display === "block" ? "none" : "block";
          }
          
          // Fechar menu ao clicar fora
          window.addEventListener("click", function (e) {
            const menu = document.getElementById("dropdownMenu");
            const icon = document.querySelector(".menu-icon");
            if (!menu.contains(e.target) && !icon.contains(e.target)) {
              menu.style.display = "none";
            }
          });