const grid1 = document.querySelector('.grid--1');
const grid2 = document.querySelector('.grid--2');
const grid3 = document.querySelector('.grid--3');
const grid4 = document.querySelector('.grid--4');
const grid5 = document.querySelector('.grid--5');
const grid6 = document.querySelector('.grid--6');
const grid7 = document.querySelector('.grid--7');
const grid8 = document.querySelector('.grid--8');
const grid9 = document.querySelector('.grid--9');
const cross1 = document.querySelector('.cross--1');
const cross2 = document.querySelector('.cross--2');
const cross3 = document.querySelector('.cross--3');
const cross4 = document.querySelector('.cross--4');
const cross5 = document.querySelector('.cross--5');
const cross6 = document.querySelector('.cross--6');
const cross7 = document.querySelector('.cross--7');
const cross8 = document.querySelector('.cross--8');
const cross9 = document.querySelector('.cross--9');
const tick1 = document.querySelector('.tick--1');
const tick2 = document.querySelector('.tick--2');
const tick3 = document.querySelector('.tick--3');
const tick4 = document.querySelector('.tick--4');
const tick5 = document.querySelector('.tick--5');
const tick6 = document.querySelector('.tick--6');
const tick7 = document.querySelector('.tick--7');
const tick8 = document.querySelector('.tick--8');
const tick9 = document.querySelector('.tick--9');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const overlay = document.querySelector('.overlay');
const btnfloat = document.querySelector('.btn--float');
const model = document.querySelector('.modal');
const back = document.querySelector('.btn--back');
let option = Math.trunc(Math.random() * 9) + 1;
let move = 0;
let arr = [];
const winarray = [
  [tick1, tick2, tick3],
  [tick4, tick5, tick6],
  [tick7, tick8, tick9],
  [tick1, tick4, tick7],
  [tick2, tick5, tick8],
  [tick3, tick6, tick9],
  [tick1, tick5, tick9],
  [tick3, tick5, tick7],
  [cross1, cross2, cross3],
  [cross4, cross5, cross6],
  [cross7, cross8, cross9],
  [cross1, cross4, cross7],
  [cross2, cross5, cross8],
  [cross3, cross6, cross9],
  [cross1, cross5, cross9],
  [cross3, cross5, cross7],
];
const winfun = function () {
  for (pattern of winarray) {
    if (pattern.every(el => !el.classList.contains('hidden'))) {
      overlay.classList.remove('hidden');
      setTimeout(() => {
        model.classList.remove('hidden');
      }, 1000);
      document.querySelector('.text').textContent = `${
        pattern[0].classList.contains('tick') ? 'player 1' : 'computer'
      }  won the match 😍`;
    } else if (Number(move) === 9) {
      overlay.classList.remove('hidden');
      model.classList.remove('hidden');

      document.querySelector('.text').textContent = 'Match is Draw';
    }
  }
};
const computer = function () {
  let option = Math.trunc(Math.random() * 9) + 1;
  if (arr.includes(option)) {
    console.log(option);
    computer();
  } else {
    let cross = document.querySelector(`.cross--${option}`);
    cross.classList.remove('hidden');
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    move++;
    winfun();
    arr.push(option);
    console.log(move);
  }
};
function handleClick(tick, event) {
  if (player1.classList.contains('player--active')) {
    let alt = tick.getAttribute('alt');
    let index = alt.length - 1;
    let value = alt[index];
    arr.push(Number(value));
    tick.classList.remove('hidden');
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    move++;
    winfun();
    console.log(move);
  }
  if (player2.classList.contains('player--active')) {
    computer();
  }
}
function click(tick) {
  return function (event) {
    handleClick(tick, event);
    event.currentTarget.removeEventListener('click', arguments.callee);
  };
}

grid1.addEventListener('click', click(tick1));
grid2.addEventListener('click', click(tick2, cross2));
grid3.addEventListener('click', click(tick3, cross3));
grid4.addEventListener('click', click(tick4, cross4));
grid5.addEventListener('click', click(tick5, cross5));
grid6.addEventListener('click', click(tick6, cross6));
grid7.addEventListener('click', click(tick7, cross7));
grid8.addEventListener('click', click(tick8, cross8));
grid9.addEventListener('click', click(tick9, cross9));

btnfloat.addEventListener('click', function (e) {
  e.preventDefault();
  location.reload();
  model.classList.add('hidden');
  overlay.classList.add('hidden');
});
back.addEventListener('click', function () {
  window.location.href = 'home.html';
});
