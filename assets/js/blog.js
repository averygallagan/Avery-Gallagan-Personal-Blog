const posts = [];
const postlist = document.querySelector('ul')

function showposts() {
    const lastpost = JSON.parse(localStorage.getItem('post'));
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const li = document.createElement('li');
        li.textContent = post;
        postlist.appendChild(li)



    }
}