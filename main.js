const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})


  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleIndicators');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('mouseup', (e) => {
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX);

      if (walk > 0) {
        // Scrolling right
        const prevButton = carousel.querySelector('.carousel-control-prev');
        prevButton.click();
      } else {
        // Scrolling left
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
      }
    });
  });

  