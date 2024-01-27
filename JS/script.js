const containerOne = document.getElementById('_containerOne');
const neonLayts = document.querySelector('.neonLayts');
const submitButton = document.getElementById('submitButton');
let isBlurEnabled = false;

submitButton.addEventListener('click', () => {
    isBlurEnabled = !isBlurEnabled;

    if (isBlurEnabled) {
        neonLayts.classList.add('blur-effect');
        containerOne.querySelector('p').innerText = "John Doe is a dedicated and experienced software engineer with a passion for creating efficient and scalable web applications. He has a strong background in JavaScript, HTML, and CSS, and is proficient in various frameworks and libraries such as React and Node.js. John is a team player and enjoys collaborating with others to solve complex problems and deliver high-quality solutions. With excellent problem-solving skills and attention to detail, he consistently delivers projects on time and exceeds client expectations. In his free time, John enjoys exploring new technologies, attending tech conferences, and contributing to open-source projects."
        containerOne.querySelector('p').style.textAlign = "justify";
        containerOne.style.height = "400px";
        containerOne.querySelector('img').src = "./images/cat-nyan-cat.gif";
        containerOne.querySelector('img').style.width = "100px";
        neonLayts.style.height = "400px";
        submitButton.style.backgroundColor = "#0f0f0f";
    } else {
        neonLayts.classList.remove('blur-effect');
        submitButton.style.backgroundColor = "#0f0f0f";
    }

    containerOne.querySelector('h1').innerText = isBlurEnabled ? "Aight! My Bad!" : "Nothing's here";
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
