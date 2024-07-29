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

let move = 0;

const win = function () {
  if (
    !tick1.classList.contains('hidden') &&
    !tick2.classList.contains('hidden') &&
    !tick3.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick4.classList.contains('hidden') &&
    !tick5.classList.contains('hidden') &&
    !tick6.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick7.classList.contains('hidden') &&
    !tick8.classList.contains('hidden') &&
    !tick9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick1.classList.contains('hidden') &&
    !tick4.classList.contains('hidden') &&
    !tick7.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick2.classList.contains('hidden') &&
    !tick5.classList.contains('hidden') &&
    !tick8.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick3.classList.contains('hidden') &&
    !tick6.classList.contains('hidden') &&
    !tick9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick1.classList.contains('hidden') &&
    !tick5.classList.contains('hidden') &&
    !tick9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !tick3.classList.contains('hidden') &&
    !tick5.classList.contains('hidden') &&
    !tick7.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 1 Won the Game 😍';
  } else if (
    !cross1.classList.contains('hidden') &&
    !cross2.classList.contains('hidden') &&
    !cross3.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross4.classList.contains('hidden') &&
    !cross5.classList.contains('hidden') &&
    !cross6.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross7.classList.contains('hidden') &&
    !cross8.classList.contains('hidden') &&
    !cross9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross1.classList.contains('hidden') &&
    !cross4.classList.contains('hidden') &&
    !cross7.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross2.classList.contains('hidden') &&
    !cross5.classList.contains('hidden') &&
    !cross8.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross3.classList.contains('hidden') &&
    !cross6.classList.contains('hidden') &&
    !cross9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross1.classList.contains('hidden') &&
    !cross5.classList.contains('hidden') &&
    !cross9.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Player 2 Won the Game 😍';
  } else if (
    !cross3.classList.contains('hidden') &&
    !cross5.classList.contains('hidden') &&
    !cross7.classList.contains('hidden')
  ) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log('player 2 win the game');
  } else if (Number(move) === 9) {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.text').textContent = 'Match is Draw';
  }
};

// }
function handleClick(tick, cross, event) {
  if (player1.classList.contains('player--active')) {
    tick.classList.remove('hidden');
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    move++;
    win();
    console.log(move);
  } else if (player2.classList.contains('player--active')) {
    cross.classList.remove('hidden');
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    move++;
    win();
    console.log(move);
  }
}
function createClickHandler(tick, cross) {
  return function (event) {
    handleClick(tick, cross, event);
    event.currentTarget.removeEventListener('click', arguments.callee);
  };
}
grid1.addEventListener('click', createClickHandler(tick1, cross1));
grid2.addEventListener('click', createClickHandler(tick2, cross2));
grid3.addEventListener('click', createClickHandler(tick3, cross3));
grid4.addEventListener('click', createClickHandler(tick4, cross4));
grid5.addEventListener('click', createClickHandler(tick5, cross5));
grid6.addEventListener('click', createClickHandler(tick6, cross6));
grid7.addEventListener('click', createClickHandler(tick7, cross7));
grid8.addEventListener('click', createClickHandler(tick8, cross8));
grid9.addEventListener('click', createClickHandler(tick9, cross9));

btnfloat.addEventListener('click', function (e) {
  e.preventDefault();
  location.reload();
  model.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  location.reload();
  model.classList.add('hidden');
  overlay.classList.add('hidden');
});
