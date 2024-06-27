const Submit = document.querySelector('#submitbtn');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const comment = document.querySelector('#comments');

Submit.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "blog.html";

    const UserInput = {
        username: username.value,
        title: title.value,
        comment: comment.value.trim(),
    };
    console.log(UserInput)
    localStorage.setItem('post', JSON.stringify(UserInput))
});

