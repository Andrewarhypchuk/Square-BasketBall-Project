
let tr1 = document.querySelector('#tr1');
let tr2 = document.querySelector('#tr2');
let tr3 = document.querySelector('#tr3');
let td1 = document.querySelector('#td1');
let td2 = document.querySelector('#td2');
let td3 = document.querySelector('#td3');
let td4 = document.querySelector('#td4');
let td5 = document.querySelector('#td5');
let td6 = document.querySelector('#td6');
let td7 = document.querySelector('#td7');
let td8 = document.querySelector('#td8');
let td9 = document.querySelector('#td9');
td1.addEventListener('click',function(){
    tr1.classList.toggle('blue');
});
td4.addEventListener('click',function(){
    td4.classList.toggle('blue');
    td5.classList.toggle('blue');
    td6.classList.toggle('blue');
});
td7.addEventListener('click',function(){
    tr3.classList.toggle('blue');
});
td5.addEventListener('click',function(){
 let arr = [tr1,tr2,tr3]
 for(let i = 0;i<arr.length;i++){
    if(!arr[i].classList.contains('blue')){
        arr[i].classList.toggle('green');
    }
}
});
td2.addEventListener('click',function(){
    td2.classList.toggle('yellow');
})
td3.addEventListener('click',function(){
    td3.classList.toggle('yellow');
})
td6.addEventListener('click',function(){
    td6.classList.toggle('yellow');
})
td8.addEventListener('click',function(){
    td8.classList.toggle('yellow');
})
td9.addEventListener('click',function(){
    td9.classList.toggle('yellow');
})








let ball = document.querySelector('#ball');
let scoreA = 0;
let scoreB = 0;
let teamA = document.querySelector('.teamA');
let teamB = document.querySelector('.teamB');
function returnEverything (){
    document.querySelector('.alert').innerHTML = ' ';
    let ball= document.querySelector('#ball');
    ball.style.left = '280px';
    ball.style.top = '145px';
}
document.querySelector('#court').onclick = function(event){
event = event || window.event;
let twen = 20;
let numb31 = 31;
let numb46 = 46;
let numb158 = 158;
let numb171 = 171;
let numb550 =550;
let numb565 = 565;
let numb3000 = 3000;
let ballx =-twen + event.offsetX+'px';
let bally =-twen + event.offsetY+'px';
ball.style.left = ballx;
ball.style.top = bally;
if(event.offsetX > numb31){
    if( event.offsetX < numb46 ){
        if(event.offsetY > numb158){
            if(event.offsetY< numb171){
     scoreB++;
     document.querySelector('#B').innerHTML = scoreB;
     let alert = document.querySelector('.alert');
         alert.style.color = 'red';
         alert.innerHTML = 'Team B score!';
         setTimeout(returnEverything,numb3000);
            }
          }
        }
      }
      if(event.offsetX > numb550){
        if( event.offsetX < numb565 ){
            if(event.offsetY > numb158){
                if(event.offsetY< numb171){
         scoreA++;
         document.querySelector('#A').innerHTML = scoreA;
         let alert = document.querySelector('.alert');
         alert.style.color = 'blue';
         alert.style.fontSize = '25px';
         alert.innerHTML = 'Team A score!';
         setTimeout(returnEverything,numb3000);
                }
              }
            }
          }
}

