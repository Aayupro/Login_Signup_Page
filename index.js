// Redirect after successful Signup
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const result = await response.text();
    alert(result);
  
    // Redirect to another page after successful signup
    if (response.ok) {
      window.location.href = "file:///Users/aayushmishra/Documents/Projects/Demo/learn_js/home.html";  // Replace with your URL
    }
  });
  
  // Redirect after successful Login
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const result = await response.text();
    alert(result);
  
    // Redirect to another page after successful login
    if (response.ok) {
      window.location.href = "file:///Users/aayushmishra/Documents/Projects/Demo/learn_js/home.html";  // Replace with your URL
    }
  });
  