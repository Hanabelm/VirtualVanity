const loginBtn = document.getElementById("login-btn");
const loginPopup = document.getElementById("login-popup");

loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
loginPopup.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});
filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

    // deactivate existing active 'filter-item'
   filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
   event.target.classList.add("active");

   const filterValue = event.target.getAttribute("data-filter");

   galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }

      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }

    });
  }
});

function filterImages() {
  // Get the user input
  var input = document.getElementById("search-input").value.toLowerCase();

  // Get all the images in the gallery
  var images = document.getElementById("image-gallery").getElementsByClassName("image");

  // Loop through each image and check if it matches the search criteria
  for (var i = 0; i < images.length; i++) {
    var caption = images[i].getElementsByTagName("img")[0].getAttribute("alt").toLowerCase();
    if (caption.indexOf(input) > -1) {
      images[i].style.display = "";
    } else {
      images[i].style.display = "none";
    }
  }
}


