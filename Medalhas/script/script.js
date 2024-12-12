document.addEventListener("DOMContentLoaded",()=>{
    var body = document.body.id;
    if(body=="index")
    {    
        const insta = document.querySelector('.insta');
        const whats = document.querySelector('.whats');
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        const overlay = document.querySelector('.overlay');
        insta.addEventListener("click",()=>{
          var insta = "https://www.instagram.com/acrimade_personalizados/";
          window.open(insta,"_blank");
        })
        whats.addEventListener("click",()=>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de conversar sobre seus produtos';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })

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
        const insta = document.querySelector('.insta');
        const whats = document.querySelector('.whats');
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        const overlay = document.querySelector('.overlay');
        const carousel = document.getElementById('medcarr');
        const items = document.querySelectorAll('.fmedalha');
        let currentIndex = 0;
        var next = document.getElementById("next");
        var prev = document.getElementById("prev");
        const but = document.querySelector('.pedirmedalhas');
        insta.addEventListener("click",()=>{
          var insta = "https://www.instagram.com/acrimade_personalizados/";
          window.open(insta,"_blank");
        })
        whats.addEventListener("click",()=>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de conversar sobre seus produtos';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })

        but.addEventListener("click",() =>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de fazer um orçamento para compra de medalhas';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })
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
      const insta = document.querySelector('.insta');
      const whats = document.querySelector('.whats');
      const but = document.querySelector('.pedirtrofeus');
      const menuToggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.menu');
      const overlay = document.querySelector('.overlay');
      const carousel = document.getElementById('trofcarr');
      const items = document.querySelectorAll('.ftrofeu');
      let currentIndex = 0;
      var next = document.getElementById("next");
      var prev = document.getElementById("prev");
      
        insta.addEventListener("click",()=>{
          var insta = "https://www.instagram.com/acrimade_personalizados/";
          window.open(insta,"_blank");
        })
        whats.addEventListener("click",()=>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de conversar sobre seus produtos';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })

        but.addEventListener("click",() =>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de fazer um orçamento para compra de troféus';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })
       
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
    if(body=="fitas")
    {
      const but = document.querySelector('.pedirfitas');
      insta.addEventListener("click",()=>{
        var insta = "https://www.instagram.com/acrimade_personalizados/";
        window.open(insta,"_blank");
      })
      whats.addEventListener("click",()=>{
        const Telefone = '553592170284';
        const mensagem= 'Gostaria de conversar sobre seus produtos';

        const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

        window.open(whatsappLink,"_blank")
      })

        but.addEventListener("click",() =>{
          const Telefone = '553592170284';
          const mensagem= 'Gostaria de fazer um orçamento para compra de fitas';

          const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

          window.open(whatsappLink,"_blank")
        })
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

        const carousel = document.getElementById("carfitas");
        const items = document.querySelectorAll('.ffitas');
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

    