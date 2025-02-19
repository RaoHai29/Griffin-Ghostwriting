const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);




document.addEventListener('DOMContentLoaded', function () {
   const faqQuestions = document.querySelectorAll('.h4-faq');

   faqQuestions.forEach(question => {
       question.addEventListener('click', function () {
           const currentAnswer = this.nextElementSibling;
           const currentIcon = this.querySelector('i');

           // Close any other open answers and reset icons
           faqQuestions.forEach(q => {
               const answer = q.nextElementSibling;
               const icon = q.querySelector('i');

               if (answer !== currentAnswer) {
                   answer.style.maxHeight = null; // Collapse other answers
                   answer.style.padding = null;
                   icon.classList.remove('fa-minus'); // Reset icon to +
                   icon.classList.add('fa-plus');
               }
           });

           // Toggle the current answer's visibility and icon
           if (currentAnswer.style.maxHeight) {
               currentAnswer.style.maxHeight = null; // Collapse the answer
               currentAnswer.style.padding = null;
               currentIcon.classList.remove('fa-minus');
               currentIcon.classList.add('fa-plus');
           } else {
               currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px"; // Expand the answer
               currentAnswer.style.padding = "10px"; // Add padding for visibility
               currentIcon.classList.remove('fa-plus');
               currentIcon.classList.add('fa-minus');
           }
       });
   });
});