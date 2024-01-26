const changeTitle = document.querySelector(".new-title");
const blogDetails = document.querySelector(".blog-details");
const loader = document.querySelector(".results");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogId = params.get("id");
console.log(blogId);

const url = "https://cors.noroff.dev/https://beyondborders.fun/wp-json/wp/v2/posts/" + blogId + "?_embed";

console.log(url);

async function fetchBlogDetails() {
    try {
        const response = await fetch(url);
        const blogDetails = await response.json();
        console.log(blogDetails);
        
        createHtml(blogDetails)            
    }
    catch(error) {
        console.log(error);
    }
}

fetchBlogDetails();

function createHtml(blogDetail) {
    changeTitle.innerHTML = `Beyond Borders | ${blogDetail.title.rendered}`;
    blogDetails.innerHTML = `<div class="blog-details"><img src="${blogDetail._embedded["wp:featuredmedia"]["0"].source_url}"</a></div>
                             <div class="blog-details-text">${blogDetail.content.rendered}</div>`;
        };



