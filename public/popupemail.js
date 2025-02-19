function popupMail() {
      // Collect form data
      let params = {
        user_name: document.getElementById("cn1").value.trim(),
        user_phone: document.querySelector("input[name='pn1']").value.trim(),
        user_email: document.getElementById("em1").value.trim(),
        user_message: document.getElementById("msg1").value.trim()
    };

 
    // Send data using EmailJS
    emailjs.send('service_4duzbbj', 'template_gjbygbb', params)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Your request has been submitted successfully!');
            // Clear form fields
            document.querySelector('.popop-form').reset();
        })
        .catch(function (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your request. Please try again later.');
        });
}

// Initialize EmailJS SDK
(function () {
    emailjs.init("CeS2HEwqpG7TBBxJE"); // Replace with your EmailJS User ID
})();