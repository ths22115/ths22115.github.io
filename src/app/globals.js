// var mark = document.querySelector(".mark");
// function opacitySpikeTimer() {
//     // if (markRef.current) {
//       const randomTime = Math.random() * 3500;
//       const randomPeak = Math.random() * 0.04 + 0.03;
//       const randomX = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1); 
//       const randomY = (Math.random() * 150) * (Math.random() < 0.5 ? 1 : -1);

//       // markRef.current.style.opacity = randomPeak;
//       mark.style.transform = `translate(${randomX}px, ${randomY}px)`;
//       // markRef.current.style.transform = 'translate(50px, 100px)';
      
//       setTimeout(function() { 
//         mark.style.opacity = '';
//         mark.style.transform = '';
//       }, 50);
//       setTimeout(opacitySpikeTimer, randomTime); // Recursive call
//     // }
//   }

//   opacitySpikeTimer();