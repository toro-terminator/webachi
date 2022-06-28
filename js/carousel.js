//init objects
var Carousel = function Carousel(el) {
    this.element = el;
    return this.init();
};

//main function
Carousel.prototype.init = function () {
    this.activeIndex = 0;
    this.slides = [];

    var children = this.element.querySelectorAll('.c-item');
    for (var i = 0, ii = children.length; i < ii; i++) {
        var item = children[i];
        this.slides.push(item);
    }

    //animation class
    this.anime = this.element.getAttribute("data-animation");

    //ARIA summary
    this.summaryIndex = this.element.querySelector('.index');
    this.summaryTotal = this.element.querySelector('.total');
    this.summaryTotal.innerHTML = children.length;

    // Bind events to the handler
    var that = this;
    var handleEvent = function handleEvent() {
        that.handleEvent.call(that);
    };

    this.previousButton = this.element.querySelector('.prev');
    this.previousButton.addEventListener('click', this, false);

    this.nextButton = this.element.querySelector('.next');
    this.nextButton.addEventListener('click', this, false);

    return this;

};

//the handler
Carousel.prototype.handleEvent = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var type = e.type;

    if (target === this.previousButton) { this.previousSlide(); }
    if (target === this.nextButton) { this.nextSlide(); }
};

Carousel.prototype.setActiveSlide = function (index, direction) {
    for (var i = 0, ii = this.slides.length; i < ii; i++) {
      this.slides[i].classList.remove("active");
      if(this.anime){
        this.slides[i].classList.remove(this.anime);
      }
    }

    this.slides[index].classList.add("active");

    if(this.anime){
        this.slides[index].classList.add(this.anime);
    }

    this.summaryIndex.innerHTML = (index+1);
    this.activeIndex = index;
};

Carousel.prototype.nextSlide = function () {
    var nextIndex = this.activeIndex + 1;

    if (nextIndex >= this.slides.length) {
        nextIndex = 0;
    }

    this.setActiveSlide(nextIndex, 'next');
    return true;
};

Carousel.prototype.previousSlide = function () {
    var previousIndex = this.activeIndex - 1;

    if (previousIndex < 0) {
        previousIndex = this.slides.length - 1;
    }

    this.setActiveSlide(previousIndex, 'previous');
    return true;
};


//look for elements
var single_carousels = document.getElementsByClassName('carousel');

//initialize elements
if (single_carousels.length) {
    initializeUI(single_carousels, Carousel);
}
