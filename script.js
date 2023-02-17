// gsap.from('.header', { duration: 1, y: '-100%', ease: 'elastic' });

// gsap.from('.link', { duration: 1, opacity: 0, delay: 0.1, stagger: 0.1 });

// gsap.from('.left', { duration: 1, x: '-100vw', delay: 0.8, ease: 'power4' });
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1.1, ease: 'power4' });

// gsap.to('.footer', { duration: 1, y: 0, delay: 2, ease: 'elastic' });

// gsap.fromTo(
//   '.button',
//   {
//     duration: 1,
//     delay: 2.5,
//     opacity: 0,
//     scale: 0,
//     rotation: 720,
//   },
//   {
//     duration: 1,
//     delay: 2.5,
//     opacity: 1,
//     scale: 1,
//     rotation: 0,
//   }
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.header', { y: '-100%', ease: 'elastic' })
  .from('.link', { opacity: 0, stagger: 0.1 })
  .from('.left', { x: '-100vw', ease: 'power4' }, 1)
  .from('.right', { x: '-100vw', ease: 'power4' }, '<0.3')
  .to('.footer', { y: 0, ease: 'elastic' })
  .fromTo(
    '.button',
    {
      opacity: 0,
      scale: 0,
      rotation: 720,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
    }
  );

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  timeline.timeScale(3);
  timeline.reverse();
});
