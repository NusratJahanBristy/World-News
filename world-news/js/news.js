// document.getElementById('loading-spinner').style.display="none"
const loadAllCategory = () => {
    const url = ('https://openapi.programming-hero.com/api/news/categories')
    fetch(url)
        .then(res => res.json())
        .then(data => setAllCategory(data.data.news_category))
        
}
const setAllCategory = (data) => {
    // console.log(data)
    const categorie = document.getElementById('all-category')
    // const array=[];
    data.forEach(categories => {
        //    array.push(categories)
        
        const li = document.createElement('li');
       
        li.innerHTML = `
   <li class="nav-item">
   <a class="nav-link" onclick="loadCategories('${categories.category_id}')" href="#"> ${categories.category_name}</a>
    </li>`
        categorie.appendChild(li);
         
    });
    
}




const loadCategories = async id => {
    toggleSpiner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // displayCategories(data);
    
    displayCategories(data.data)

}

const displayCategories = post => {
    // console.log(post)
    // document.getElementById('loading-spinner').style.display="none"
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';
    post.forEach(posts => {
        const { image_url, title, details, author, total_view } = posts
        console.log(post)
        const row = document.createElement('div')
        row.classList.add('row')
        row.innerHTML = `
        <div class="row g-4">
                        <div class="col-md-3">
                            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${details.length > 300 ? details.slice(0, 300) + '....' : details}</p>
                                <div class="d-flex">
                                <img style="width: 40px;border-radius: 50px ;" src="${author.img}">
                                <p class="card-text px-2"><small class="text-muted">${author.name?author.name:"No data available"}</small> <small
                                        class="text-muted px-5">${total_view?total_view+'M':"No data available"}</small> </p>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        
                                        <i onclick=loadDetails('${posts._id}') class="fa-solid fa-arrow-right text-info px-5"data-bs-toggle="modal" data-bs-target="#postDetailsModal"></i>
                                        
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
        `
        postContainer.appendChild(row)
    });
    toggleSpiner(false)

}


const loadDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data[0])
}
const displayDetails = post => {
    console.log(post)
    const modalTitle = document.getElementById('postDetailsModalLabel');
    const{title,author,total_view}=post;
    modalTitle.innerText = title;
    const postDetails=document.getElementById('post-details')
    postDetails.innerHTML=`
    <p>Author Name: ${author.name}</p>
    <p>Total View: ${total_view}</p>`
 
}

// toggle spinner 
const toggleSpiner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none')
    }
}


loadDetails()
loadCategories()
loadAllCategory()
