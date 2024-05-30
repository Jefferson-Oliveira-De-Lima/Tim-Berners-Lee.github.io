document.addEventListener('DOMContentLoaded', () => {
  // Get the elements
  const browseBtn = document.getElementById('browseBtn');
  const searchBtn = document.getElementById('searchBtn');
  const loginBtn = document.getElementById('loginBtn');
  const browseBox = document.getElementById('browseBox');
  const searchBox = document.getElementById('searchBox');
  const loginBox = document.getElementById('loginBox');

  // Function to toggle visibility of a box
  function toggleBox(box) {
      const allBoxes = [browseBox, searchBox, loginBox];
      allBoxes.forEach(b => {
          if (b !== box) {
              b.style.display = 'none';
          }
      });
      box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  // Event listeners for buttons
  browseBtn.addEventListener('click', (event) => {
      event.preventDefault();
      toggleBox(browseBox);
  });

  searchBtn.addEventListener('click', (event) => {
      event.preventDefault();
      toggleBox(searchBox);
  });

  loginBtn.addEventListener('click', (event) => {
      event.preventDefault();
      toggleBox(loginBox);
  });

  // Close boxes when clicking outside
  document.addEventListener('click', (event) => {
      if (!event.target.closest('header') && !event.target.closest('.dropdown-content')) {
          [browseBox, searchBox, loginBox].forEach(box => box.style.display = 'none');
      }
  });

  // Get the modal
  const modal = document.getElementById("imageModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const img = document.querySelector(".zoomable");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");

  img.onclick = function() {
    openModal(this);
  }

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

  // Get the zoom icon and set the click event to open the modal
  const zoomIcon = document.querySelector(".zoom-icon");
  zoomIcon.onclick = function() {
    openModal(img);
  }

  // Function to open the modal
  function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
  }

  // When the user clicks anywhere outside of the modal content, close the modal
  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
