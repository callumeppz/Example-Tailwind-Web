/*
  File        : scripts.js
  Date Created: 2025-06-01
  Author      : Callum Apps
  Description : JavaScript logic to handle user interactions, such as button clicks.
  
  Usage:
    - This script is linked at the end of the HTML body with the defer attribute.
    - It adds event listeners to buttons with IDs "ExampleButtonTAIL" and "ExampleButtonCSS".
    - Modify or extend this script to handle more interactive behaviors on the page.
*/


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const TAILWIND_button = document.getElementById("ExampleButtonTAIL");
    const ExampleMessageTAIL = document.getElementById("ExampleMessageTAIL");

    const CSS_button = document.getElementById("ExampleButtonCSS");
    const ExampleMessageCSS = document.getElementById("ExampleMessageCSS");

    TAILWIND_button.addEventListener("click", function () {
        ExampleMessageTAIL.textContent = "This is an example JS script using TAILWIND styling.";
    });

    CSS_button.addEventListener("click", function () {
        ExampleMessageCSS.textContent = "This is an example JS script using personal CSS file.";
    });
});
