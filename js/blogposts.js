const blogsContainer = document.querySelector(".blogposts");
const showMore = document.querySelector(".load-more");
const loader = document.querySelector(".results");

const baseUrl = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts?per_page=10&_embed";
const showMoreUrl = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts?offset=10&_embed";

async function fetchBlogs(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const getBlogs = await response.json();
    console.log(getBlogs);
    
    const createHTML = getBlogs;

    loader.innerHTML = `<div class="loader"></div>`;

    setTimeout(function() {

        loader.innerHTML = "";

        createHTML.forEach(function(blogPost) {
            blogsContainer.innerHTML += `
            <div class="container-posts">
            <div class="blogposts"><a href="blogdetails.html?id=${blogPost.id}"><img src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPost.slug} class="image1"</a></div>
            <div class="title">${blogPost.title.rendered}</div>
            <div class="blogText">${blogPost.excerpt.rendered}</div>
            </div>`;
        });
    },1200);
  } 
  catch(error) {
    console.log(error);
    blogsContainer.innerHTML = displayError("An error occurred when calling the API");
  }
}

fetchBlogs(baseUrl);

showMore.addEventListener("click", (e) => {
    e.preventDefault();
    fetchBlogs(showMoreUrl);
    showMore.remove();
});