document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const target = document.getElementById('mail');
    
    // Smooth scrolling to the contact section
    target.scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('about').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const target = document.getElementById('bio');
    
    // Smooth scrolling to the contact section
    target.scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('services').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const target = document.getElementById('help');
    
    // Smooth scrolling to the contact section
    target.scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('work').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const target = document.getElementById('works');
    
    // Smooth scrolling to the contact section
    target.scrollIntoView({
        behavior: 'smooth'
    });
});


