
// Sample data for posts
const posts = [
    {
        username: 'user1',
        imageUrl: 'https://via.placeholder.com/600x400',
        caption: 'This is a sample post',
        likes: 42,
        comments: ['Great post!', 'Nice photo!']
    },
    {
        username: 'user2',
        imageUrl: 'https://via.placeholder.com/600x400',
        caption: 'Another sample post',
        likes: 28,
        comments: ['Awesome!', 'Love it!']
    }
];

// Function to create a post element
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <div class="post-header">
            <img src="https://via.placeholder.com/32" alt="${post.username} profile picture">
            <span>${post.username}</span>
        </div>
        <div class="post-image">
            <img src="${post.imageUrl}" alt="Post image">
        </div>
        <div class="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
        <div class="post-likes">${post.likes} likes</div>
        <div class="post-caption"><strong>${post.username}</strong> ${post.caption}</div>
        <div class="post-comments">
            ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
        </div>
    `;

    return postElement;
}

// Function to render posts
function renderPosts() {
    const postsContainer = document.querySelector('.posts');
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// Call renderPosts when the page loads
document.addEventListener('DOMContentLoaded', renderPosts);