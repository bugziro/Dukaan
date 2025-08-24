document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('signInBtn');
  if (!loginBtn) return;

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation checks
    if (!email && !password) {
      showPopup('Missing Fields', 'Please enter your email and password.', 'error');
      return;
    }

    if (!email) {
      showPopup('Email Required', 'Please enter your email address.', 'error');
      return;
    }

    if (!password) {
      showPopup('Password Required', 'Please enter your password.', 'error');
      return;
    }

    // Login handling by role
    if (role === 'customer') {
      if (email === 'customer@example.com' && password === 'customer123') {
        showPopup('Login Successful!', 'Welcome back to Dukaan - Simply Local.', 'success');
        setTimeout(() => {
          window.location.href = 'customers/customers-home.html';
        }, 2000);
      } else {
        showPopup('Invalid Credentials', 'Email or password is incorrect.', 'error');
      }
    } else if (role === 'shopkeeper') {
      if (email === 'shop@example.com' && password === 'shop123') {
        showPopup('Login Successful!', 'Welcome Shopkeeper!', 'success');
        setTimeout(() => {
          window.location.href = 'shopkeeper/profile.html';
        }, 2000);
      } else {
        showPopup('Invalid Credentials', 'Shopkeeper email or password is incorrect.', 'error');
      }
    } else if (role === 'delivery') {
      if (email === 'delivery@example.com' && password === 'deliver123') {
        showPopup('Login Successful!', 'Welcome Delivery Partner!', 'success');
        setTimeout(() => {
          window.location.href = 'delivery/delivery-dashboard.html';
        }, 2000);
      } else {
        showPopup('Invalid Credentials', 'Delivery personnel email or password is incorrect.', 'error');
      }
    } else {
      showPopup('Unsupported Login', 'Unknown login role selected.', 'error');
    }
  });

  function showPopup(title, message, type = 'info') {
    const existing = document.querySelector('.popup-overlay');
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.innerHTML = `
      <div class="popup-overlay">
        <div class="popup-box">
          <h2>${title}</h2>
          <p>${message}</p>
        </div>
      </div>
    `;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, type === 'success' ? 2000 : 2500);
  }
});
