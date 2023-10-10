$(document).ready(function() {
    $('.event-show-more').on('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
  
      
      // Find the event description within the same event card
      var $description = $(this).closest('.event-card').find('.event-description');
  
      // Toggle the 'hidden' class to show or hide the description
      $description.toggleClass('hidden');
  
      // Change the text of the 'Show More' link based on visibility
      var isHidden = $description.hasClass('hidden');
      $(this).text(isHidden ? 'Show More' : 'Show Less');
    });
  });