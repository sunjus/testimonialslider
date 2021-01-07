const prev=document.querySelector('.prev'),
    next=document.querySelector('.next'),
    slides=document.querySelectorAll('.slide');

let index=0;
display(index);

function display(index){
    slides.forEach(slide=>{
        slide.style.display='none';
    })
    slides[index].style.display='flex';
};

function prevSlide(){
    index--;
    if (index<0){
        index=slides.length-1;
    }
    display(index);   
};

function nextSlide(){
    index++;
    if(index>slides.length-1){
        index=0;
    }
   display(index);   
};

    next.addEventListener('click',nextSlide);
    prev.addEventListener('click',prevSlide);