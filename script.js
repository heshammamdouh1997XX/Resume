// Typewriter Effect for Header
const headerText = "SOC Analyst";
let i = 0;
const speed = 100; // Typing speed in milliseconds

function typeWriter() {
  if (i < headerText.length) {
    document.querySelector("header h1").textContent += headerText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
