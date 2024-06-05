// Select the unordered list element where blogs will be displayed
const blogsListEl = $('#blogs-list');
let blogs = [];

// Function to render saved blog posts from localStorage
function renderSavedPosts() {
    // Retrieve saved posts from localStorage and parse them into an array
    const savedPosts = JSON.parse(localStorage.getItem('blogs'));

    // If there are no saved posts, stop here
    if (!savedPosts && savedPosts.length < 1) { return; }

    // Iterate over each blog post and append it to the blogs list
    for (const blog of savedPosts) {
        const blogItem = $('<li>');

        const blogTitle = $('<h2>').text(blog.title);
        const blogContent = $('<p>').text(blog.content);
        const blogAuthor = $('<small>').text(`Posted By: ${blog.username}`);

        blogItem.append(blogTitle, blogContent, blogAuthor);
        blogsListEl.append(blogItem);
    }
}

// Handle the click event to go back to the previous page
$('#go-back').on('click', () => {
    window.history.back();
});

// Render saved posts on page load
renderSavedPosts();
