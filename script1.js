document.addEventListener("DOMContentLoaded", () => {
    // Animate Progress Bars
    const progressBars = document.querySelectorAll(".bar");
    progressBars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      setTimeout(() => {
        bar.style.width = `${percent}%`;
      }, 500); // Delay to make the animation visible
    });
  
    // Animate Circular Counters
    const circularSkills = document.querySelectorAll(".circle1");
    circularSkills.forEach(circle1 => {
      const percent = parseInt(circle1.getAttribute("data-percent"));
      const countElement = circle1.querySelector(".count");
      let count = 0;
  
      const animateCircle = () => {
        const interval = setInterval(() => {
          if (count < percent) {
            count++;
            countElement.textContent = count;
            const angle = (count / 100) * 360;
            circle1.style.background = `conic-gradient(#00abf0 ${angle}deg, #333 ${angle}deg)`;
          } else {
            clearInterval(interval);
          }
        }, 20); // Adjust speed for the counter animation
      };
  
      // Trigger animation when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCircle();
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      }, { threshold: 0.5 });
  
      observer.observe(circle1);
    });
  });
  


  