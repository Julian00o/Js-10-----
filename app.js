// // const btn = document.querySelector("#btn");
// // btn.onclick = function(){
// // 	alert('кнопка нажата')
// // 	btn.style.width = '500px'
// // }
// // console.log(btn);


// // btn.addEventListener('click', () => {
// // 	alert('кнопка нажата')
// // })

// // btn.addEventListener('mousehover', () => {
// // 	btn.style.backgroungColor = 'green'
// // })


// const list = document.querySelector
// ('#list')//ul

// const newEl = document.createElement('li')
// newEl.innerText = 'я появился'
// console.log(newEl);

// list.append (newEl)

// //---------------------------------------------------

// const btn = document.querySelector("#btn");

// btn.addEventListener('click', () => {
// 	newEl.remove()
// })




// const list = document.querySelector("#list")
// const btn2 = document.getElementById('btn2');
// btn2.onclick = function() {
//     const newEl = document.createElement('li');
//     newEl.innerText = 'я появился';
//     list.append(newEl);
// };



// const sun = document.querySelector('#sun')
// const moon = document.querySelector('#moon')
// const body = document.querySelector('body')

// moon.onclick = function () {
//   body.style.backgroundColor = 'black'
//   body.style.color = 'white'
// }

// sun.onclick = function () {
//   body.style.backgroundColor = 'white'
//   body.style.color = 'black'
// }

// const btn = document.querySelector('#btn')

// // btn.onclick = function () {
// //   alert('кнопка нажата')
// // }

// btn.addEventListener('click', () => {
//   alert('кнопка нажата')
// })

// btn.addEventListener('mouseover', () => {
//   btn.style.backgroundColor = 'green'
// })

// btn.addEventListener('mouseout', () => {
//   btn.style.backgroundColor = ''
// })

const list = document.querySelector('#list'); // ul
const add = document.querySelector('#add');

add.addEventListener('click', () => {
  const newEl = document.createElement('li');
  const newBtn = document.createElement('button');
  newEl.innerText = 'Я появился ';
  newBtn.innerText = 'Delete';
  newBtn.addEventListener('click', () => {
    newEl.remove();
  });
  newEl.append(newBtn);
  list.append(newEl);
});

// const del = document.querySelector('#del')

// del.addEventListener('click', () => {
//   newEl.remove()
// })
// remove


const input = document.getElementById("input");
const output = document.getElementById("output");
const btnCopy = document.getElementById("btnCopy");
const btnOutput = document.getElementById("btnOutput");

input.addEventListener("input", function() {
  const value = input.value.trim();
  output.textContent = value;
});

btnCopy.addEventListener("click", function() {
  const value = input.value.trim();
  btnOutput.textContent = value;
  input.value = "";
  output.textContent = "";
});

//--------------------------------------------------------------------

const modal = document.getElementById('modal')
const openBtn = document.getElementById('openBtn')
const close = document.getElementById('closeBtn')

openBtn.addEventListener('click', () => {
	modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})


window.addEventListener('click', (event => {
if(event.target === modal){
	modal.style.display = 'none'
}
})) 



const modal2 = document.getElementById('modal2')
const openBtn2 = document.getElementById('openBtn2')

openBtn2.addEventListener('click', () => {
	modal2.style.display = 'flex'
})

window.addEventListener('click', (event => {
if(event.target === modal2){
	modal2.style.display = 'none'
}
})) 




const modal3 = document.getElementById('modal3')
const openBtn3 = document.getElementById('openBtn3')

openBtn3.addEventListener('click', () => {
	modal3.style.display = 'flex'
})

window.addEventListener('click', (event => {
if(event.target === modal3){
	modal3.style.display = 'none'
}
})) 