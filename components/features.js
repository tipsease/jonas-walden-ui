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

window.addEventListener('mouseup', function(e) {}, false);
