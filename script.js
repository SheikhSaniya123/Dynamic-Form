const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.innerText = message;
  errorMessage.style.display = 'block';
  input.style.borderColor = 'red';
}

function clearError(input) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.innerText = '';
  errorMessage.style.display = 'none';
  input.style.borderColor = '#6e8efb';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('label').forEach(label => {
      label.classList.remove('active');
    });
  }
});
