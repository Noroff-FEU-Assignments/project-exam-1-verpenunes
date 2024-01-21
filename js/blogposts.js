const blogsContainer = document.querySelector(".blogposts");
const showMore = document.querySelector(".load-more");

const baseUrl = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts?per_page=10&_embed";
const showMoreUrl = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts?offset=10&_embed";

async function fetchBlogs(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const getBlogs = await response.json();
    console.log(getBlogs);
    createHTML(getBlogs);
  } catch(error) {
    console.log(error);
  }
}

fetchBlogs(baseUrl);

function createHTML(posts) {
    posts.forEach(function(blogPost) {
        blogsContainer.innerHTML += `
        <div class="blogposts"><a href="blogdetails.html"id=${blogPost.id}><img src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPost.slug}"</a></div>
        <div class="title">${blogPost.title.rendered}</div>
        <div class="blogText">${blogPost.excerpt.rendered}</div>
                                    `;
    });     
}

showMore.addEventListener("click", (e) => {
    e.preventDefault();
    fetchBlogs(showMoreUrl);
    showMore.remove();
});

/* <div class="title">${blogPost.title.rendered}</div>
                                     <div class="blogposts">${blogPost.content.rendered}</div>*/



/*<div class="featured_post_container"><a href=".html?id=${blogPost.id}"><img src="${blogPost._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPost.slug}"</a></div>*/