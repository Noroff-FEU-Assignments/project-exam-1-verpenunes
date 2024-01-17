const blogposts = document.querySelector(".blogposts");

const baseUrl = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts";


async function fetchBlogs() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    console.log(result);
}
fetchBlogs();