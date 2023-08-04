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


const aframeBoxDlore = document.getElementById("aframeBoxDlore");

fetch('RSS_FEED_URL')
      .then((response) => response.text())
      .then((xml) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        let rssHTML = '<ul>';
        items.forEach((item) => {
          const title = item.querySelector('title').textContent;
          const link = item.querySelector('link').textContent;
          rssHTML += `<li><a href="${link}" target="_blank">${title}</a></li>`;
        });
        rssHTML += '</ul>';

        document.getElementById('rss-feed').innerHTML = rssHTML;
      })
      .catch((error) => {
        console.error('Error fetching RSS feed:', error);
      });




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
