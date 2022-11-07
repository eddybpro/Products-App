const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const brand_category = document.getElementById('brand-category')
const price_discount = document.getElementById('price-discount')
const rating = document.getElementById('rating')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

async function getData(){
    const res = await fetch('https://dummyjson.com/products');
    const {products} = await res.json();

    let randomNum = Math.floor(Math.random()*products.length)

    header.innerHTML = `
    <img src="${products[randomNum].thumbnail}" alt="${products[randomNum].title}">`

    title.innerHTML = `${products[randomNum].title}`

    excerpt.innerHTML=`${products[randomNum].description}`

    brand_category.innerHTML=`<h4>${products[randomNum].brand}</h4>
        <h4>${products[randomNum].category}</h4>`

    price_discount.innerHTML=`<strong>Price: $${products[randomNum].price}</strong>
    <h4>Discount: $${products[randomNum].discount?products[randomNum].discount:0}</h4>`

    const ratingList = [
        Math.ceil(products[randomNum].rating),
        Math.floor(products[randomNum].rating)
    ];
    const ratingValue = ratingList[Math.floor(Math.random()*ratingList.length)]

    rating.innerHTML=` <h4>Rating:</h4>`

    for (let index = 0; index < 5; index++) {
        const i = document.createElement('i');
        i.className = 'fa-regular fa-star';
        if (index < ratingValue) {
            i.className='fa-solid fa-star'
        } 
        rating.append(i)
    }

    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach(bg=>{
        bg.classList.remove('animated-bg-text')
    })


}





























