$(document).ready(function() {
    // Add a click event listener to category buttons
    $('.category-button').on('click', function(event) {
      event.preventDefault(); // Prevent the default button behavior
  
      // Get the category URL from the data-category-url attribute
      var categoryUrl = $(this).data('category-url');
  
      // Navigate to the category URL
      window.location.href = categoryUrl;
    });
  });