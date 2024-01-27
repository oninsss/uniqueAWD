const containerOne = document.getElementById('_containerOne');
const neonLayts = document.querySelector('.neonLayts');
const submitButton = document.getElementById('submitButton');
let isBlurEnabled = false;

submitButton.addEventListener('click', () => {
    isBlurEnabled = !isBlurEnabled;

    if (isBlurEnabled) {
        neonLayts.classList.add('blur-effect');
        containerOne.querySelector('h1').innerText = "Aight! My Bad!"; 
        submitButton.style.backgroundColor = "#0f0f0f";
    } else {
        neonLayts.classList.remove('blur-effect');
        containerOne.querySelector('h1').innerText = "Nothing's here"; 
        submitButton.style.backgroundColor = "#0f0f0f";
    }
});

containerOne.addEventListener('mousemove', (event) => {
    if (isBlurEnabled) {
        const rect = neonLayts.getBoundingClientRect();
        const x = event.clientX - rect.left; // Get the x-coordinate relative to the neonLayts element
        const y = event.clientY - rect.top; // Get the y-coordinate relative to the neonLayts element

        // Calculate the blur radius based on the mouse position
        const blurRadius = Math.sqrt((x - rect.width / 2) ** 2 + (y - rect.height / 2) ** 2) / 10;

        // Apply the blur effect to the neonLayts element
        neonLayts.style.filter = `blur(${blurRadius}px)`;
    }
});

containerOne.addEventListener('mouseleave', () => {
    // Remove the blur effect when the mouse leaves the containerOne element
    if (isBlurEnabled) {
        neonLayts.style.filter = 'none';
        neonLayts.style.transition = 'all 0.5s ease-in-out';
    }
});

// Add event listener to enable blur effect on hover
neonLayts.addEventListener('mouseenter', () => {
    if (isBlurEnabled) {
        neonLayts.classList.add('blur-effect');
    }
});

neonLayts.addEventListener('mouseleave', () => {
    if (isBlurEnabled) {
        neonLayts.classList.remove('blur-effect');
    }
});
