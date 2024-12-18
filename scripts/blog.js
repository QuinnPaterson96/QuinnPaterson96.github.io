    // Select modal and its elements
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");

    // Add click event listeners to all images
    document.querySelectorAll(".image-grid img").forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; // Show modal
            modalImage.src = img.src; // Set modal image source to clicked image
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) { // Ensure the click is outside the image
            modal.style.display = "none";
        }
    });

    // Close modal when pressing the Esc key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { // Check if the pressed key is Esc
            modal.style.display = "none";
        }
    });