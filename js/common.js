const body = document.querySelector('body');
const left_gnb_close = document.querySelector('.left_gnb .close_btn');
const left_gnb_btn = document.querySelector('.left_gnb_btn');

const left_gnb_has_depth_02 = document.querySelector('.left_gnb .depth_01 > li:last-child a');

const gnb_has_depth_02 = document.querySelector('.gnb .has_depth_02 a');

const product_tab = document.querySelectorAll('#product .tab li');




left_gnb_btn.addEventListener('click', function(){
    body.classList.toggle('left_gnb_on');
});

left_gnb_close.addEventListener('click', function(){
    body.classList.toggle('left_gnb_on');
});



left_gnb_has_depth_02.addEventListener('click', function(){
    this.nextSibling.nextSibling.classList.toggle('on');
});

gnb_has_depth_02.addEventListener('click', function(){
    this.nextSibling.nextSibling.classList.toggle('on');
});

product_tab.forEach(function(element){
    element.addEventListener('click', function(e){
        e.preventDefault();
        product_tab.forEach(function(f){
            f.classList.remove('on');
        });
        this.classList.add('on');
    });
});


const slide_wrap = document.querySelector('.slide_wrap');
const slide_wrap_li = document.querySelectorAll('.slide_wrap li');


const products_item = document.querySelectorAll('products > li > a');

products_item.forEach(function(){
    
});