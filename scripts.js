const submit = document.querySelector('.submit');


const bOne = document.querySelector(".bone");
const bTwo = document.querySelector(".btwo");
const bThree = document.querySelector(".bthree");
const bFour = document.querySelector(".bfour");
const bFive = document.querySelector(".bfive");

let value = 0;

bOne.addEventListener('click', ()=> {
  value = 1;
  console.log (value);
})

bTwo.addEventListener('click', ()=> {
  value = 2;
  console.log (value);
})

bThree.addEventListener('click', ()=> {
  value = 3;
  console.log (value);
})

 bFour.addEventListener('click', ()=> {
   value = 4;
   console.log(value);
 })



bFive.addEventListener('click', ()=> {
  value = 5;
  console.log (value);
})

submit.addEventListener('click', ()=> {
console.log(`you clicked ${value}`)
document.querySelector('.one').style.display = "none";
document.querySelector('.two').style.display = "block";
document.querySelector('.p').textContent = `You selected ${value} out of 5`;
})



