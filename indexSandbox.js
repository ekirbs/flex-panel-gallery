// const panels = document.querySelectorAll('.panel');
// let timeout;

// // function toggleOpenWithDelay() {
// //   clearTimeout(timeout);
// //   const panel = this;
// //   timeout = setTimeout(() => {
// //     panel.classList.add('open');
// //   }, 500); // Adjust this delay as needed
// // };

// // function toggleOpen() {
// //   clearTimeout(timeout);
// //   this.classList.add('open');
// // };

// // function toggleClose() {
// //   this.classList.remove('open');
// // };

// function toggleActive(e) {
//   if(e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// };

// panels.forEach(panel => {
//   // panel.addEventListener('mouseenter', toggleOpenWithDelay);
//   // panel.addEventListener('mouseleave', toggleClose);
//   panel.addEventListener('transitionend', toggleActive);
// });

const panels = document.querySelectorAll('.panel');
let isTransitioning = false;

function toggleOpen() {
  if (!isTransitioning) {
    isTransitioning = true;
    this.classList.add('open');
    setTimeout(() => {
      isTransitioning = false;
    }, 700); // Adjust this duration to match your transition time
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => {
  panel.addEventListener('mouseenter', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});

panels.forEach(panel => {
  panel.addEventListener('mouseleave', function() {
    if (!isTransitioning) {
      this.classList.remove('open');
    }
  });
});