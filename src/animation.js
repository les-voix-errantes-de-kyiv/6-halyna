import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal')

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'chars' })
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 50%',
      end: 'top 20%',
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  // Function to update background color based on scroll position
  function updateBackgroundColor() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Calculate color based on scroll position
    const startColor = [157, 217, 156];
    const endColor = [206, 225, 205];

    const currentColor = startColor.map((start, index) => {
      const end = endColor[index];
      const colorValue = Math.round(start + (end - start) * (scrollPercentage / 100));
      return colorValue;
    });

    const backgroundColor = `rgb(${currentColor.join(', ')})`;

    body.style.backgroundColor = backgroundColor;
  }

  // Listen to the scroll event and update background color
  window.addEventListener('scroll', updateBackgroundColor);
});
