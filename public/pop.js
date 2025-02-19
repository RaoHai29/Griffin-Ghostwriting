document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popup1");
    const closeButton = document.querySelector(".close-btn1");

    // Show modal after 5 seconds
    setTimeout(() => {
        modal.style.display = "flex";
    }, 2000);

    // Close modal on button click
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
