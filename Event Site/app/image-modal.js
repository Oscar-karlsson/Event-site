document.addEventListener('DOMContentLoaded', () => {
    // Select all the images in the image container
    const images = document.querySelectorAll('.event-page__image-container img');

    // Get references to the modal and modal content
    const modal = document.querySelector('.event-page__image-modal');
    const modalImage = document.querySelector('.event-page__image-modal-content');
    const closeButton = document.querySelector('.close');

    // Function to open the modal with the clicked image
    function openModal(imageSrc) {
      modalImage.src = imageSrc;
      modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
      modal.style.display = 'none';
    }

    // Attach click event listeners to each image
    images.forEach((image) => {
      image.addEventListener('click', () => {
        const imageSrc = image.getAttribute('src');
        openModal(imageSrc);
      });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', closeModal);

    // Close the modal when the user clicks outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    // Handle keyboard events (e.g., pressing Esc to close the modal)
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });
