// script.js

// Пример: активное выделение текущего пункта меню
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav__link');
    const currentPath = window.location.pathname;
  
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  });
  
  // Расширение: можешь добавить другие функции позже (например, смену темы)
  


// Login Validation
document.querySelector('.login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email.includes('@')) {
    alert('Please enter a valid email!');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters!');
    return;
  }

  window.location.href = 'profile.html';
});

// Community Posts
function addPost() {
  const postContent = document.getElementById('new-post').value;
  const forum = document.querySelector('.forum-posts');
  
  const newPost = document.createElement('div');
  newPost.className = 'post-card';
  newPost.innerHTML = `
    <h3>New Post</h3>
    <p>${postContent}</p>
    <span class="post-author">— User${Math.floor(Math.random()*100)}</span>
  `;
  
  forum.prepend(newPost);
  document.getElementById('new-post').value = '';
}

// Signup functionality
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const user = {
    username: document.getElementById('signupUsername').value,
    email: document.getElementById('signupEmail').value,
    password: document.getElementById('signupPassword').value,
    progress: 0,
    badges: []
  };

  // Save to localStorage
  localStorage.setItem('users', JSON.stringify([user]));
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  window.location.href = 'profile.html';
});

// Login functionality
document.querySelector('.login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const foundUser = users.find(u => 
    u.email === document.getElementById('login-email').value &&
    u.password === document.getElementById('login-password').value
  );

  if(foundUser) {
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    window.location.href = 'profile.html';
  } else {
    alert('Invalid email or password!');
  }
});

// Profile Page Load
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    document.getElementById('username').textContent = currentUser.username;
  }
});

// Выбор навыка
document.querySelectorAll('.select-skill').forEach(btn => {
  btn.addEventListener('click', function() {
    const skillCard = this.closest('.skill-card');
    alert(`Вы выбрали: ${skillCard.querySelector('h3').textContent}`);
    // Можно сохранить в localStorage
  });
});

// Добавление нового навыка
document.getElementById('add-skill-btn').addEventListener('click', () => {
  const skillName = document.getElementById('new-skill').value;
  if (skillName) {
    const newSkill = `
      <div class="skill-card" data-skill="${skillName.toLowerCase()}">
        <h3>${skillName}</h3>
        <div class="progress-bar" style="width: 0%"></div>
        <button class="select-skill">Выбрать</button>
      </div>
    `;
    document.querySelector('.skills-grid').insertAdjacentHTML('beforeend', newSkill);
  }
});