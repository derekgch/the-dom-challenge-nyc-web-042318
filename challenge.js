const counter = document.getElementById("counter");
console.log(counter);

let i = 0;
let flag = true;
let likeCounter =1;

setInterval(function () {
  if(flag){
  counter.innerText = ++i ;
  likeCounter =1;
  submit.disabled = false;

  }
 },1000);

const plus = document.getElementById('+');
const minus = document.getElementById('-');
const pause = document.getElementById("pause");
const love = document.getElementById("<3");
const submit = document.getElementById("submit");
const comments = document.getElementById("comment-form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const likes = document.querySelector(".likes");


console.log(likes);

plus.addEventListener('click' ,function () {
  i++;
  counter.innerText = i;
});

minus.addEventListener('click' ,function () {
  i--;
  counter.innerText = i;
});

console.log(minus);
console.log(pause);

pause.addEventListener('click' ,function () {
  if(flag){flag = false}
  else {flag = true};

  if(pause.innerText === "pause"){
    submit.disabled = true;
    pause.innerText = "resume"
  }else {
    submit.disabled = false;
    pause.innerText = "pause"
  }

});

submit.addEventListener('click', function (event) {
    event.preventDefault();

    let newComment = document.createElement('p')
    newComment.innerText = input.value;
    input.value = "";
    list.appendChild(newComment);


});

love.addEventListener('click',function () {

  let newlike = document.createElement('li')
  newlike.innerText = `${i} have been like ${likeCounter} time.`;
  newlike.setAttribute("data-id", `${i}`);

  // debugger;

  // let lastChild = likes.lastElementChild;
  //
  // if(lastChild !== null && parseInt(lastChild.dataset.id) === i ){
  //
  //   likeCounter++;
  //   newlike.innerText = `${i} have been like ${likeCounter} times.`;
  //   likes.replaceChild(newlike, lastChild);
  // }else{
  //   likes.appendChild(newlike);
  //   likeCounter = 1;
  // }

  let allTheLikes = likes.querySelectorAll("li")
  if(allTheLikes.length > 0){
    let found =null;
    allTheLikes.forEach(e => {
      // console.log(e.dataset.id)
      if(parseInt(e.dataset.id) === i ) {
        found = e; };
    });
    if(found != null){
      let text = found.innerText.split(' ');
      likeCounter = parseInt(text[4]);
      likeCounter ++;
      found.innerText = `${i} have been like ${likeCounter} times.`;
    }else{
      // debugger;
      likes.appendChild(newlike);
      likeCounter = 1;
    }
    // newlike.innerText = `${i} have been like ${likeCounter} times.`;
    // e.innerText = newlike.innerText;
    // likes.replaceChild(newlike, e);


  }else {
    // debugger;
    likes.appendChild(newlike);
    likeCounter = 1;
  };

  // debugger;

});

comments.addEventListener('click', function (event) {
  // debugger;
})



console.log(love);
