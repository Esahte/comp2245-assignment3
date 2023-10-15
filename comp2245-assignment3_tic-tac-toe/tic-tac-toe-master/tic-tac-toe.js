"use strict";

// Use onload event to ensure the DOM is loaded before running the script
window.onload = function() {
    // Add event listener to each square
    Array.from(document.getElementById('board').children).forEach(element => element.setAttribute('class', 'square'));
}