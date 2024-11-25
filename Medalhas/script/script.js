document.addEventListener("DOMContentLoaded",()=>{
    var body = document.body.id;
    if(body=="med")
        {
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

    