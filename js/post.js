document.getElementById('loading-spinner').style.display = 'block';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
    

const displayPost = posts => {
    document.getElementById('loading-spinner').style.display = 'none';
    const postContainer = document.getElementById('post-container');

    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('m-10','border','rounded', 'p-5');
        div.innerHTML = `
            <h2 class=" mb-3 text-2xl font-semibold text-red-400">${post.title}</h2>
            <p class="text-gray-500">${post.body}</p>
            <button onclick="showInfo('${post.id}')" class="bg-blue-500 py-2 text-white mt-3 rounded px-4">Details</button>
        `;
        postContainer.appendChild(div);
    }
}

const showInfo = postId => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data))
}

const displayInfo = postInfo => {
    
    document.getElementById('modal').style.display = 'block';
    const postInfoContainer  = document.getElementById('post-info-container');
    postInfoContainer.innerHTML = `
        <span id='close' class="absolute cursor-pointer top-0 right-0 text-red-500">
            <i class="fa-solid fa-xmark"></i>
        </span>
        <h2 class="text-2xl mb-3">${postInfo.title}</h2>
        <p>${postInfo.body}</p>
    `;
    document.getElementById('close').addEventListener('click', function(){
        document.getElementById('modal').style.display = 'none';
    });
}
