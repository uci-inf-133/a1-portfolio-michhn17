// script.js

import * as bootstrap from 'bootstrap';

// Runs when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio loaded!");
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Exclusive to sections of webpage
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Scroll to section
                    window.scrollTo({
                        top: targetSection.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Interactive button for project
    const projectButton = document.querySelector('.view-button');
    if (projectButton) {
        projectButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert("This is where you'd see more details about this project!");
        });
    }
})