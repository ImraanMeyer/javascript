// NEVER TRUST USER INPUT 

// It is vital to validate user input before sending it to a server (and again once it arrives there, but lets take things one step at a time!).

// Validatiion can be as simple as making sure that the type of data is correct (number vs.string, valid email address, etc.); it can also be more complex - checking for password strength, for example, or parsing the a comment to make sure its contains no URLs.

// During input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const confirmPassword = document.getElementById('confirm-password');
const erroMsg = document.getElementById('error-message');

passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
});


// the input event is triggered whenever the user eneters data into a given < input > element. We can use this to check data as it is entered.


// After input

  // Add a blur event listener to the confirmPassword element.

  // Compare the value properties of both inputs.

    // if they are the same, set the border styles to thin solid green and set the display style of erroMsg so that it dissappears

    // If they are different, set the border styles to thin solid red and set the display style of errorMsg so that it appears
//




confirmPassword.addEventListener('blur', () => {
    if(passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'solid green';
        confirmPassword.style.border = 'solid green';
        errorMsg.style.display = 'none';
    } else {
        passwordInput.style.border = 'solid red';
        confirmPassword.style.border = 'solid red';
        errorMsg.style.display = 'inline';
    }
}); 


confirmPassword 
    