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




const loadCategories=async id=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${id}`;
    const res=await fetch(url);
    const data=await res.json();
    // displayCategories(data);
    displayCategories(data.data)

}

const displayCategories=post=>{
    // console.log(post)
    const postContainer=document.getElementById('post-container');
    post.forEach(posts => {
        const row=document.createElement('div')
        row.classList.add('row')
        row.innerHTML=`
        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title Card title Card title Card title Card title Card title
                                </h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><img src="fsd"><small class="text-muted">jane cooper </small> <small
                                        class="text-muted">1.5M</small> </p>
                            </div>
                        </div>
                    </div>
        `
        postContainer.appendChild(row)
    });
   
}



loadCategories()
loadAllCategory()