document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const section = document.querySelector(".our-times");

    // Function to update the counters
    const runCounter = () => {
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / 200; // Adjust speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 10); // Adjust speed
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // IntersectionObserver to trigger the counter
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter();
                } else {
                    counters.forEach(counter => (counter.innerText = "0")); // Reset counters
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(section);
});
