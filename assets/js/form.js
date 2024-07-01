const Submit = document.querySelector('#submitbtn');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const toggleModeButton = document.querySelector('#toggleMode');

Submit.addEventListener("click", function(event) {
    event.preventDefault();
    
    const userInput = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.push(userInput);

    console.log(userInput)
    localStorage.setItem('posts', JSON.stringify(posts));
    
    window.location.href = "blog.html";
});

toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

