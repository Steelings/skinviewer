const timeline = gsap.timeline();

timeline.from('#title', {
  opacity: 0,
  scale: 0.5,
  x: -800,
  duration: 0.8,
  delay: 0.5,
  ease: 'expo.out'
});

timeline.from('#paragraph1', {
  opacity: 0,
  scale: 0.5,
  z: 1000,
  duration: 0.5,
  ease: 'expo.out'
});

timeline.from('#paragraph2', {
  opacity: 0,
  scale: 0.5,
  z: 1000,
  duration: 0.5,
  ease: 'expo.out',
  delay: 0.25 
});

timeline.from('#image1', {
  opacity: 0,
  scale: 0.5,
  x: 100,
  y: 50,
  duration: 1,
  ease: 'expo.out'
});

timeline.from('#image2', {
  opacity: 0,
  scale: 0.5,
  x: 50,
  y: 200,
  duration: 1,
  ease: 'expo.out'
});

function toggleAFrameBoxVisibility() {
  const aframeBox = document.getElementById("aframeBox");
  const previewButton = document.getElementById("previewButton");

  if (aframeBox.style.display === "none") {
    aframeBox.style.display = "inline-block";
    previewButton.textContent = "Hide 3D Preview";
  } else {
    aframeBox.style.display = "none";
    previewButton.textContent = "Show 3D Preview";
  }
}

function toggleAFrameBoxVisibilityAk() {
  const aframeBoxAk = document.getElementById("aframeBoxAk");
  const previewButtonAk = document.getElementById("previewButtonAk");

  if (aframeBoxAk.style.display === "none") {
    aframeBoxAk.style.display = "inline-block";
    previewButtonAk.textContent = "Hide 3D Preview";
  } else {
    aframeBoxAk.style.display = "none";
    previewButtonAk.textContent = "Show 3D Preview";
  }
}

function toggleAFrameBoxVisibilityDlore() {
  const aframeBoxDlore = document.getElementById("aframeBoxDlore");
  const previewButtonDlore = document.getElementById("previewButtonDlore");

  if (aframeBoxDlore.style.display === "none") {
    aframeBoxDlore.style.display = "inline-block";
    previewButtonDlore.textContent = "Hide 3D Preview";
  } else {
    aframeBoxDlore.style.display = "none";
    previewButtonDlore.textContent = "Show 3D Preview";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const scrollToPopularLink = document.getElementById("scrollToPopular");

  scrollToPopularLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetSection = document.getElementById("popular-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function subscribe(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value;


  fetch('/subscribe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: email }),
})
  .then(response => {
    if (response.ok) {
      const successAlert = document.createElement('div');
      successAlert.className = 'bg-green-500 text-white p-4 rounded shadow-md';
      successAlert.textContent = 'Subscription successful! Please check your email for confirmation.';
      document.body.appendChild(successAlert);
    } else {
      const errorAlert = document.createElement('div');
      errorAlert.className = 'bg-red-500 text-white p-4 rounded shadow-md';
      errorAlert.textContent = 'Subscription failed. Please try again later.';
      document.body.appendChild(errorAlert);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
}

const subscriptionForm = document.getElementById('subscriptionForm');
const alertContainer = document.getElementById('alert-container');

subscriptionForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      showAlert('Subscription successful! Please check your email for confirmation.', 'bg-green-500');
    } else {
      showAlert('Subscription failed. Please try again later.', 'bg-red-500');
    }
  } catch (error) {
    console.error('Error:', error);
    showAlert('An error occurred. Please try again later.', 'bg-red-500');
  }
});

function showAlert(message, bgColorClass) {
  const alertElement = document.createElement('div');
  alertElement.className = `bg-opacity-75 ${bgColorClass} text-white p-4 rounded shadow-md`;
  alertElement.textContent = message;
  alertContainer.appendChild(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, 3500);
}



// fetch('RSS_FEED_URL')
//       .then((response) => response.text())
//       .then((xml) => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xml, 'text/xml');
//         const items = xmlDoc.querySelectorAll('item');

//         let rssHTML = '<ul>';
//         items.forEach((item) => {
//           const title = item.querySelector('title').textContent;
//           const link = item.querySelector('link').textContent;
//           rssHTML += `<li><a href="${link}" target="_blank">${title}</a></li>`;
//         });
//         rssHTML += '</ul>';

//         document.getElementById('rss-feed').innerHTML = rssHTML;
//       })
//       .catch((error) => {
//         console.error('Error fetching RSS feed:', error);
//       });




  function rotateObject() {
    const rotatingEntity = document.getElementById("rotatingObject");
    rotatingEntity.setAttribute("rotation", {
      x: rotatingEntity.getAttribute("rotation").x + 1,
      y: rotatingEntity.getAttribute("rotation").y + 1,
      z: rotatingEntity.getAttribute("rotation").z + 1,
    });
  }

  setInterval(rotateObject, 16); // 16ms ≈ 60fps

  const cameraContainer = document.getElementById("cameraContainer");
cameraContainer.setAttribute("rotation", { x: -90, y: 0, z: 0 });


// Function to animate the footer
function animateFooter() {
  // Select the footer element
  const footer = document.querySelector('footer');

  // Check if the footer element exists
  if (footer) {
    // Set initial opacity to 0
    gsap.set(footer, { opacity: 0 });

    // Define the animation
    gsap.to(footer, {
      opacity: 1,
      duration: 2, // Animation duration
      ease: "power2.inOut", // Easing function
      scrollTrigger: {
        trigger: footer, // Use the footer element as the trigger
        start: "top 80%", // Animation starts when 80% of the footer is visible
        end: "bottom top", // Animation ends when the footer is fully in view
        toggleActions: "play none none reverse" // Play the animation when scrolling down and reverse it when scrolling up
      }
    });
  }
}