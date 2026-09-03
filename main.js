document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Auth Page Form Switching (Login <-> Sign Up)
  const toggleAuthMode = document.getElementById('toggleAuthMode');
  const authTitle = document.getElementById('authTitle');
  const authBadge = document.getElementById('authBadge');
  const nameGroup = document.getElementById('nameGroup');
  const submitBtn = document.getElementById('submitBtn');
  const toggleText = document.getElementById('toggleText');
  const authForm = document.getElementById('authForm');

  let isSignUp = false;

  if (toggleAuthMode) {
    toggleAuthMode.addEventListener('click', (e) => {
      e.preventDefault();
      isSignUp = !isSignUp;
      
      if (isSignUp) {
        authTitle.textContent = "JOIN THE ECOSYSTEM";
        authBadge.textContent = "CREATE ACCOUNT";
        nameGroup.style.display = "block";
        submitBtn.textContent = "CREATE ACCOUNT →";
        toggleText.textContent = "Already have an account?";
        toggleAuthMode.textContent = "Log In";
      } else {
        authTitle.textContent = "ACCESS DASHBOARD";
        authBadge.textContent = "WELCOME BACK";
        nameGroup.style.display = "none";
        submitBtn.textContent = "LOG IN →";
        toggleText.textContent = "Don't have an account?";
        toggleAuthMode.textContent = "Create Free Account";
      }
    });
  }

  // Handle Form Submission -> Redirect to Dashboard
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
});