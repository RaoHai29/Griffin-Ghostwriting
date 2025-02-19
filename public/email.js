

    function SendMail() {
        // Collect form data
        let params = {
            user_name: document.getElementById("cn").value.trim(),
            user_phone: document.querySelector("input[name='pn']").value.trim(),
            user_email: document.getElementById("em").value.trim(),
            user_message: document.getElementById("msg").value.trim()
        };
    
        // Validate required fields
        if (!params.user_name || !params.user_phone || !params.user_email || !params.user_message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
        // Send data using EmailJS
        emailjs.send('service_n2fmko7', 'template_oxk9sba', params)
            .then(function (response) {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Your request has been submitted successfully!');
                // Redirect or reset form if necessary
                document.querySelector('.footer-form').reset(); // Clear form fields
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
    

   