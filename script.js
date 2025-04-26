function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
    
    }
    
    document.getElementById('intro').addEventListener('click', () =>
    changeBackgroundColor("#2CA02C"));
    document.getElementById('react').addEventListener('click', () => changeBackgroundColor
    ("#FF7F0E"));
    document.getElementById('backend').addEventListener('click', () => changeBackgroundColor
    ("#9467BD"));
    
    
    
    // scrolling for about
    
    document.querySelector('a[href="#about"]').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    
    });
    
    // Add smooth scrolling for journey
    document.querySelector('a[href="#journey"]').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('coding-journey').scrollIntoView({
    behavior: 'smooth'
        });
    });
    
    
    // Add smoth for scrolling to goal
    document.querySelector('a[href="#goal"]').addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('goals').scrollIntoView({
    behavior: 'smooth'
        });
    });
    
    
    function updateFooterYear() {
        const currentYear = new Date().getFullYear();
        const footerParagraph = document.querySelector('footer p');
    
        if (footerParagraph) {
            footerParagraph.innerHTML = `Website Made With ❤ From Kigali © ${currentYear}`;
        } else {
            console.error("Footer paragraph not found");
        }
    }
    
    window.addEventListener('load', updateFooterYear);
    document.addEventListener('DOMContentLoaded', updateFooterYear);