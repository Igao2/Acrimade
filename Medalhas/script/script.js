document.addEventListener("DOMContentLoaded",()=>{
    var body = document.body.id;
    if(body=="index")
    {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        const overlay = document.querySelector('.overlay');
        
        // Abre e fecha o menu
        menuToggle.addEventListener('click', () => {
          menu.classList.toggle('active');
          overlay.classList.toggle('active');
        });
        
        // Fecha o menu ao clicar fora
        overlay.addEventListener('click', () => {
          menu.classList.remove('active');
          overlay.classList.remove('active');
        });
        
        var med = document.getElementById("med");
        var trof = document.getElementById("trof");
        var fitas = document.getElementById("fitas");
        med.addEventListener("click",()=>{
            window.location.href="medals.html"
        })
        trof.addEventListener("click",()=>{
            window.location.href="trofeus.html"
        })
        fitas.addEventListener("click",()=>{
            window.location.href="fitas.html"
        })
    }
    if(body=="med")
        {
            const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        const overlay = document.querySelector('.overlay');
        
        // Abre e fecha o menu
        menuToggle.addEventListener('click', () => {
          menu.classList.toggle('active');
          overlay.classList.toggle('active');
        });
        
        // Fecha o menu ao clicar fora
        overlay.addEventListener('click', () => {
          menu.classList.remove('active');
          overlay.classList.remove('active');
        });
            const carousel = document.getElementById('medcarr');
            const items = document.querySelectorAll('.fmedalha');
            let currentIndex = 0;
            var next = document.getElementById("next");
            var prev = document.getElementById("prev");
            
            function updateCarousel() {
                const offset = -currentIndex * 100; // Calcula o deslocamento com base no índice
                carousel.style.transform = `translateX(${offset}%)`;
            }
            
            
            next.addEventListener("click",()=>{
                
                    currentIndex = (currentIndex + 1) % items.length; // Avança para o próximo slide
                    updateCarousel();
                
            })
                
            prev.addEventListener("click",()=>{
                
                    currentIndex = (currentIndex - 1 + items.length) % items.length; 
                    updateCarousel();
                
            })
        }
    if(body=="trof")
    {
        const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

// Abre e fecha o menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

        const carousel = document.getElementById('trofcarr');
        const items = document.querySelectorAll('.ftrofeu');
        let currentIndex = 0;
        var next = document.getElementById("next");
        var prev = document.getElementById("prev");
        function updateCarousel() {
            const offset = -currentIndex * 100; 
            carousel.style.transform = `translateX(${offset}%)`;
        }
        
        
        next.addEventListener("click",()=>{
            
                currentIndex = (currentIndex + 1) % items.length; 
                updateCarousel();
            
        })
            
        prev.addEventListener("click",()=>{
            
                currentIndex = (currentIndex - 1 + items.length) % items.length; 
                updateCarousel();
            
        })
           
            
            
    }
    
   
})

    