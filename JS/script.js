const containerOne = document.getElementById('_containerOne');
const containerOne2 = document.getElementById('_containerOne2');
const containerOne3 = document.getElementById('_containerOne3');
const containerOne4 = document.getElementById('_containerOne4');
const containerOne5 = document.getElementById('_containerOne5');

const neonLayts1 = document.getElementById('neonLayts1');
const neonLayts2 = document.getElementById('neonLayts2');
const neonLayts3 = document.getElementById('neonLayts3');
const neonLayts4 = document.getElementById('neonLayts4');
const neonLayts5 = document.getElementById('neonLayts5');

const submitButton = document.getElementById('submitButton');
const submitButton2 = document.getElementById('submitButton2');
const submitButton3 = document.getElementById('submitButton3');
const submitButton4 = document.getElementById('submitButton4');
const submitButton5 = document.getElementById('submitButton5');

let isBlurEnabled = false;

function movementDetector(neonLayts){
    if (isBlurEnabled) {
        const rect = neonLayts.getBoundingClientRect(); // Fix: Replace 'neonLayts' with 'neonLayts1'
        const x = event.clientX - rect.left; // Get the x-coordinate relative to the neonLayts1 element
        const y = event.clientY - rect.top; // Get the y-coordinate relative to the neonLayts1 element

        // Calculate the blur radius based on the mouse position
        const blurRadius = Math.sqrt((x - rect.width / 2) ** 2 + (y - rect.height / 2) ** 2) / 10;

        // Apply the blur effect to the neonLayts1 element
        neonLayts.style.filter = `blur(${blurRadius}px)`; // Fix: Replace 'neonLayts' with 'neonLayts1'
    }
}

function mouseLeavers(neonLayts){
    // Remove the blur effect when the mouse leaves the containerOne element
    if (isBlurEnabled) {
        neonLayts.style.filter = 'none'; // Fix: Replace 'neonLayts' with 'neonLayts1'
        neonLayts.style.transition = 'all 0.5s ease-in-out'; // Fix: Replace 'neonLayts' with 'neonLayts1'
    }
}

function toggleBlurEffect(container, submitButton, neonLayts, descript) {
    isBlurEnabled = !isBlurEnabled;

    if (isBlurEnabled) {
        neonLayts.classList.add('blur-effect');
        container.querySelector('p').innerText = descript;
        container.querySelector('p').style.textAlign = "justify";
        container.style.height = "fit-content";
        container.querySelector('img').src = "./images/cat-nyan-cat.gif";
        container.querySelector('img').style.width = "100px";
        neonLayts.style.height = (container.scrollHeight - 5) + "px";
        submitButton.querySelector('h3').innerText = "Go back 👈";
        submitButton.style.backgroundColor = "#0f0f0f";
    } else {
        neonLayts.style.height = "fit-content";
        neonLayts.classList.remove('blur-effect');
        container.querySelector('p').innerText = "";
        container.querySelector('img').src = "";
        container.querySelector('img').style.width = "100px";
        container.style.boxShadow = "none";
        submitButton.querySelector('h3').innerText = "Know me better 👉";
        submitButton.style.backgroundColor = "green";

        neonLayts.style.filter = 'none'; // Remove the blur effect
    }
}

submitButton.addEventListener('click', () => {
    const description = "<John Doe is a dedicated and experienced software engineer with a passion for creating efficient and scalable web applications. He has a strong background in JavaScript, HTML, and CSS, and is proficient in various frameworks and libraries such as React and Node.js. John is a team player and enjoys collaborating with others to solve complex problems and deliver high-quality solutions. With excellent problem-solving skills and attention to detail, he consistently delivers projects on time and exceeds client expectations. In his free time, John enjoys exploring new technologies, attending tech conferences, and contributing to open-source projects."
    toggleBlurEffect(containerOne, submitButton, neonLayts1, description);
});

submitButton2.addEventListener('click', () => {
    const description = "Annie Batumbakal is a skilled IT professional specializing in database management and system optimization. With a keen eye for detail, she ensures data integrity and implements efficient solutions for streamlined processes. Annie is proficient in SQL and database administration, contributing to the success of the IT team with her expertise. Outside of work, she enjoys keeping up with the latest trends in data analytics and is an advocate for continuous learning."
    toggleBlurEffect(containerOne2, submitButton2, neonLayts2,description);
});

submitButton3.addEventListener('click', () => {
    const description = "Izpanz Bahbb is a dynamic IT professional with a focus on cybersecurity and network infrastructure. With a deep understanding of security protocols and risk mitigation, he plays a crucial role in safeguarding the company's digital assets. Izpanz is well-versed in network architecture and employs proactive measures to ensure a secure IT environment. Beyond his cybersecurity expertise, he is passionate about staying ahead of emerging threats and sharing knowledge with the IT community."
    toggleBlurEffect(containerOne3, submitButton3, neonLayts3, description);
});

submitButton4.addEventListener('click', () => {
    const description = "Dhie Koh Lam is a creative and versatile IT specialist with expertise in front-end development and user interface design. Proficient in HTML, CSS, and JavaScript, Dhie is dedicated to crafting visually appealing and user-friendly web applications. His passion for creating seamless user experiences extends to exploring new design trends and staying updated on the latest advancements in web technologies. Dhie's collaborative approach and artistic flair contribute to the innovation and success of the IT team."
    toggleBlurEffect(containerOne4, submitButton4, neonLayts4, description);
});

submitButton5.addEventListener('click', () => {
    const description = "John Floyd Cruz is a dedicated and experienced IT professional specializing in software engineering. With a strong background in JavaScript, HTML, and CSS, John excels in developing efficient and scalable web applications. Proficient in frameworks and libraries such as React and Node.js, he collaborates effectively with his team to solve complex problems and deliver high-quality solutions. John's commitment to excellence, coupled with his passion for exploring new technologies, makes him a valuable asset to the IT company. Outside of work, he enjoys attending tech conferences and contributing to open-source projects."
    toggleBlurEffect(containerOne5, submitButton5, neonLayts5, description);
});

containerOne.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts1);
});

containerOne2.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts2);
});

containerOne3.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts3);
});

containerOne4.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts4);
});

containerOne5.addEventListener('mousemove', (event) => {
    movementDetector(neonLayts5);
});

// containerOne.addEventListener('mouseleave', () => {
//     mouseLeavers(neonLayts1);
// });
// containerOne.addEventListener('mouseleave', () => {
//     mouseLeavers(neonLayts2);
// });
// containerOne.addEventListener('mouseleave', () => {
//     mouseLeavers(neonLayts3);
// });
// containerOne.addEventListener('mouseleave', () => {
//     mouseLeavers(neonLayts4);
// });
// containerOne.addEventListener('mouseleave', () => {
//     mouseLeavers(neonLayts5);
// });

// // Add event listener to enable blur effect on hover
// neonLayts1.addEventListener('mouseenter', () => { // Fix: Replace 'neonLayts' with 'neonLayts1'
//     if (isBlurEnabled) {
//         neonLayts1.classList.add('blur-effect'); // Fix: Replace 'neonLayts' with 'neonLayts1'
//     }
// });

// neonLayts1.addEventListener('mouseleave', () => { // Fix: Replace 'neonLayts' with 'neonLayts1'
//     if (isBlurEnabled) {
//         neonLayts1.classList.remove('blur-effect'); // Fix: Replace 'neonLayts' with 'neonLayts1'
//     }
// });
