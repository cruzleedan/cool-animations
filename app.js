const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle('show', entry.isIntersecting));
    
});

const hiddenSections = document.querySelectorAll('.hidden');