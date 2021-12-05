
var clickArea = document.querySelector('.image1');
var clickCount = document.querySelector('.count')
let  likeClick = 0;

clickArea.addEventListener('click', () => {
    clickCount.innerHTML = ++likeClick;
clickCount.style.color="red"

});
clickArea.addEventListener("click",()=>{
    clickArea.style.border="3px  solid black "
    clickArea.style.boxShadow="3px  3px 4px 4px  red "
    clickArea.style.backgroundImage="url('j3.jpeg')";
});