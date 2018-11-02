white.onclick = function(){
   document.body.style.background = 'white';
   document.body.style.color = 'black';
}

black.onclick = function(){
   document.body.style.background = 'black';
   document.body.style.color = 'white';
}


const images = ['img/Lamborghini.jpg', 'img/Lamborghini1.jpg', 'img/Lamborghini2.jpg'];
var i = 0;

function slide(n){
   if(n === 'next'){
      i++;
      if(i === images.length){i = images.length - 1};
   }else{
      i--;
      if(i < 0) {i = 0};
   }
      document.getElementById('img-change').src = images[i];
}
