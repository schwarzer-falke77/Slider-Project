const leftArr = document.querySelector('#leftarr')
const rightArr = document.querySelector('#rightarr')
const imgDiv = document.querySelector('.img')
const imgDivy = document.querySelectorAll('.img img')

let index = -3.5;
const size = imgDivy[0].clientWidth;
imgDiv.style.transform = 'translateX(' + (-size * index) + 'px)';

rightArr.addEventListener('click',()=>{
    imgDiv.style.transition = 'transform 0.4s ease-in-out'
    index++
    if(index >= 4.5){
        index = -3.5
        imgDiv.style.transition='none'
    }
    imgDiv.style.transform = 'translateX(' + (-size * index) + 'px)';
    console.log(index)

});
leftArr.addEventListener('click',()=>{
    imgDiv.style.transition = 'transform 0.4s ease-in-out'
    index--
    if(index <= -3.5){
        index = 3.5

        imgDiv.style.transition='none'
    }

    imgDiv.style.transform = 'translateX(' + (-size * index) + 'px)';
    console.log(index)

});
// imgDiv.addEventListener('focus',()=>{
//     imgDiv.classList.add=''
// })