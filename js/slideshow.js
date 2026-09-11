/**
 * Minimalist Responsive Slideshow Component
 * Vanilla JavaScript (Zero Dependencies) - 100% compatible with GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  initSlideshows();
});

function initSlideshows() {
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach((container, sIndex) => {
    const slides = container.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentIndex = 0;
    const prevBtn = container.querySelector('.slide-btn.prev');
    const nextBtn = container.querySelector('.slide-btn.next');
    const counter = container.querySelector('.slide-counter');
    const caption = container.querySelector('.slide-caption');
    const dotsContainer = container.querySelector('.slide-dots');

    // Generate dots if dotsContainer exists
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });
    }

    function updateView() {
      // Update slides
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentIndex);
      });

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }

      // Update counter
      if (counter) {
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
      }

      // Update caption from active image data-caption or alt
      if (caption) {
        const activeImg = slides[currentIndex].querySelector('img');
        if (activeImg) {
          caption.textContent = activeImg.getAttribute('data-caption') || activeImg.getAttribute('alt') || '';
        }
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateView();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateView();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateView();
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Keyboard Arrow Navigation
    document.addEventListener('keydown', (e) => {
      // If there is only one slideshow on the page, or this is the focused/active one
      if (slideshows.length === 1 || container.matches(':hover')) {
        if (e.key === 'ArrowRight') {
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
        }
      }
    });

    // Touch Swipe Support for Mobile Devices
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance < 0) {
          nextSlide(); // Swiped left -> next
        } else {
          prevSlide(); // Swiped right -> prev
        }
      }
    }

    // Initial render
    updateView();
  });
}
