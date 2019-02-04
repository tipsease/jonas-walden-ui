class Feature {
  constructor() {
    this.element = element;
    this.element.addEventListener('click', () => this.read());
    console.log(this.element);
  }
  read() {
    TweenMax.to(this.element, 2, {
      opacity: 0,
      onComplete: (this.element.style.display = 'none')
    });
  }
}

let features = Array.from(document.querySelectorAll('#feature')).map(
  f => new features(f)
);
