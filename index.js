const form = document.querySelector('.contact__form');
const alertBox = document.getElementById('alertBox');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlert');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  fetch('https://yonis123.github.io/send_email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      // Display the alert box with the response message
      alertMessage.innerText = data.status;
      alertBox.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error:', error);
      alertMessage.innerText = 'An error occurred, please try again later.';
      alertBox.classList.remove('hidden');
    });
});

// Close alert when the button is clicked
closeAlertBtn.addEventListener('click', () => {
  alertBox.classList.add('hidden');
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
});


const hamMenu = document.querySelector('.header__main-ham-menu');
const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
const dropdown = document.querySelector('.dropdown');

hamMenu.addEventListener('click', () => {
  dropdown.style.display = 'flex';
  hamMenu.classList.add('d-none');
  hamMenuClose.classList.remove('d-none');
});



hamMenuClose.addEventListener('click', () => {
  dropdown.style.display = 'none';
  hamMenu.classList.remove('d-none');
  hamMenuClose.classList.add('d-none');
});