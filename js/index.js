function white(){
   const text = document.querySelector('main');
   document.body.style.background = 'white';
   text.style.color = 'black';
}

function black(){
   const text = document.querySelector('main');
   document.body.style.background = 'black';
   text.style.color = 'white';
}

function next(){
   const change = document.getElementById('img-change');
   change.src = 'img/Lamborghini1.jpg';
}

function previous(){
   const change = document.getElementById('img-change');
   change.src = 'img/Lamborghini2.jpg';
}