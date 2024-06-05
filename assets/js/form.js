// Select the blog form element
const blogFormEl = $('#blog-form');

// Whenever the form is submitted...
blogFormEl.on('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Retrieve existing blogs from localStorage or initialize an empty array if none exist
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Get references to the input fields for username, title, and content
    const [usernameEl, titleEl, contentEl] = [
        blogFormEl.find('input[name=username]'),
        blogFormEl.find('input[name=title]'),
        blogFormEl.find('textarea[name=content]')
    ];

    // If any of the input fields are not found, exit the function
    if (!usernameEl || !titleEl || !contentEl) { return; }

    // Extract and trim the values from the input fields
    const formData = {
        username: usernameEl.val().trim(),
        title: titleEl.val().trim(),
        content: contentEl.val().trim()
    };

    // Ensure all fields are filled out before submitting
    if (formData.username === '' || formData.title  === '' || formData.content === '') {
        return alert('Please fill out all fields before submitting');
    }

    // Reset the values of the input fields after submission
    usernameEl.val('');
    titleEl.val('');
    contentEl.val('');

    // Add the current form data to the list of blogs
    blogs.push(formData);
    
    // Save the updated list of blogs to localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
    // Navigate to the blog page
    window.location.assign("blog.html");
});
