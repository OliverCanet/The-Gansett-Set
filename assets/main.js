document.addEventListener("DOMContentLoaded", function(event) { 
    // Hide loader and show content when page is fully loaded
    window.addEventListener('load', function() {
      var loader = document.querySelector('.loader-wrapper');
      var content = document.querySelector('.content');
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
        content.style.opacity = 1;
      }, 300); // Delay for smoother transition
    });
  });