class Feature {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.read());
  }
  read() {
    // TweenMax.to(this.element, 2, {
    //   opacity: 0,
    //   onComplete: (this.element.style.display = 'none')
    // });
    TweenMax.to(this.element, 1, {
      opacity: 0,
      rotation: 360,
      scaleX: 0,
      scaleY: 0,
      display: 'none'
    });
  }
}

let features = Array.from(document.querySelectorAll('.feature ')).map(
  f => new Feature(f)
);

const gitNoise = document.querySelector('.fa-github');

gitNoise.addEventListener('click', sound_1);

function sound_1() {
  let audio = new Audio('audio/blip.wav');
  audio.play();
}
const twitterNoise = document.querySelector('.fa-twitter');

twitterNoise.addEventListener('click', sound_2);

function sound_2() {
  let audio1 = new Audio('audio/bloop_x.wav');
  audio1.play();
}

const facebookNoise = document.querySelector('.fa-facebook-square');
facebookNoise.addEventListener('click', sound_3);

function sound_3() {
  let audio2 = new Audio('audio/boo.wav');
  audio2.play();
}

const instaNoise = document.querySelector('.fa-instagram');

instaNoise.addEventListener('click', sound_4);

function sound_4() {
  let audio3 = new Audio('audio/bubbling1.wav');
  audio3.play();
}

const addTip = document.querySelector('.box-2');

addTip.addEventListener('click', heresATip);

function heresATip() {
  const newH1 = document.createElement('h1');
  newH1.textContent = 'Here is a tip, Dont Tip Cows Tip People';

  addTip.appendChild(newH1);

  TweenMax.to(newH1, 2, {
    scaleX: 1.5,
    scaleY: 1.5,
    opacity: 0,
    display: 'none'
  });
}
