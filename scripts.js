// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".zoomable");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
  openModal(this);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the zoom icon and set the click event to open the modal
var zoomIcon = document.querySelector(".zoom-icon");
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
