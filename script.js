// To see if your script properly connected to your index.html
// Open your website in your browser, go to developer tools 
// and open the console. 
// You should see "Hello from Javascript written in the console."
console.log("Hello from Javascript"); // DELETE ME 

// ADD YOUR toggleMenu() function here
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// CODE HERE

// END