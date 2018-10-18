function white(){
   document.body.style.background = 'white';
   document.body.style.color = 'black';
}

function black(){
   document.body.style.background = 'black';
   document.body.style.color = 'white';
}

function next(){
   const change = document.getElementById('img-change');
   change.src = 'img/Lamborghini1.jpg';
}

function previous(){
   const change = document.getElementById('img-change');
   change.src = 'img/Lamborghini2.jpg';
}