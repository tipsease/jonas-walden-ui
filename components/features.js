//Feature Component
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
//Git Hub auio file
const gitNoise = document.querySelector('.fa-github');
gitNoise.addEventListener('click', sound_1);
//Github audio function
function sound_1() {
  let audio = new Audio('audio/blip.wav');
  audio.play();
}
//Twitter autio set up
const twitterNoise = document.querySelector('.fa-twitter');
twitterNoise.addEventListener('click', sound_2);
//Twitter audio function
function sound_2() {
  let audio1 = new Audio('audio/bloop_x.wav');
  audio1.play();
}
//Facebook audio setup
const facebookNoise = document.querySelector('.fa-facebook-square');
facebookNoise.addEventListener('click', sound_3);
//Facebook audio function
function sound_3() {
  let audio2 = new Audio('audio/boo.wav');
  audio2.play();
}
//Instagram audio setup
const instaNoise = document.querySelector('.fa-instagram');
instaNoise.addEventListener('click', sound_4);
//Instagram audio function
function sound_4() {
  let audio3 = new Audio('audio/bubbling1.wav');
  audio3.play();
}

//Adding DOM Element
const addTip = document.querySelector('.box-2');

addTip.addEventListener('click', heresATip);

function heresATip() {
  const newH1 = document.createElement('h1');
  newH1.textContent = 'Pro Tip....Dont Tip Cows Tip People';

  addTip.appendChild(newH1);

  TweenMax.to(newH1, 2, {
    scaleX: 1.5,
    scaleY: 1.5,
    opacity: 0,
    display: 'none'
  });
}
