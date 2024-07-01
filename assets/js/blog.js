const postlist = document.querySelector('ul');
const backButton = document.querySelector('#backBtn');
const toggleModeButton = document.querySelector('#toggleMode');

document.addEventListener("DOMContentLoaded", function() {
function showPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    postlist.innerHTML = '';
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const li = document.createElement('li');
        li.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>Posted by ${post.username}</small>`;
        postlist.appendChild(li);
    }
}

showPosts();

backButton.addEventListener('click', function() {
    window.history.back();
});

toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
});