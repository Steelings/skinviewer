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



function showPopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "block";
  }
  
  document.getElementById("previewButton").addEventListener("click", showPopup);

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
