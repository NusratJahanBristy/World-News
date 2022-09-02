const loadAllCategory = () => {
    const url = ('https://openapi.programming-hero.com/api/news/categories')
    fetch(url)
        .then(res => res.json())
        .then(data => setAllCategory(data.data.news_category))
}
const setAllCategory = (data) => {
    console.log(data)
    const categorie = document.getElementById('all-category')
    // const array=[];
    data.forEach(categories => {
        //    array.push(categories)
        const li = document.createElement('li');
        li.innerHTML = `
   <li class="nav-item">
   <a class="nav-link" href="#"> ${categories.category_name}</a>
    </li>`
   categorie.appendChild(li);
    });
}












loadAllCategory()