const cubeBlock = document.querySelector('.perspect');
const cube = document.querySelector('.perspect .cube');
let x = false;

cubeBlock.addEventListener('mousedown', function(){
    x = true;
});
cubeBlock.addEventListener('mouseup', function(){
    x = false;
});
cubeBlock.addEventListener('mouseleave', function(){
    x = false;
});
cubeBlock.addEventListener('mousemove', function(evt){
    if(!x) return;
    cube.style.transform = 'rotateY('+ evt.clientX / 3 + 'deg)';
});
