const changeTitle = document.querySelector(".new-title");
const blogDetails = document.querySelector(".blog-details");

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
    blogDetails.innerHTML = `<img src="${blogDetail._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogDetail.slug}">
                             <div class="blog-details-text">${blogDetail.content.rendered}</div>`;
    };

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeButton = document.querySelector(".closeModal");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    console.log(openModal);
}

function closeModal() {
    modal.style.display = "none";
    console.log(closeModal);
}

document.querySelector(".modal-container").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        openModal(e.target.src);
    }
});

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});



