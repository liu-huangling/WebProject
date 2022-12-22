// 設定移動效果
let toBottom = document.querySelector('.mouse');
toBottom.addEventListener('click',function(){
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
})
let toTop = document.querySelector('.to-top');
toTop.addEventListener('click',function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

// 偵測滑動

const inBox = document.querySelector('.inbox-img');

// 第二步 設立參數
let options = 
{
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
};

// 第三步 觀察對象
const img = document.querySelectorAll('.box-img');
const div = document.querySelectorAll('.box');

// 第四步  呼叫 callBack
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('animation'); //給他classname
    // stop observing this element
    observer.unobserve(entry.target)
  })
}

// 第一步 建立觀察對象
const observer = new IntersectionObserver(callback, options);
console.log(img)
img.forEach((imgs) => {
  observer.observe(imgs)
})
div.forEach((divs) => {
  observer.observe(divs)
})



// 關於IntersectionObserver解釋 https://ithelp.ithome.com.tw/articles/10279046
// 參考大大 https://codepen.io/rachel-liaw/pen/vYZXdRQ