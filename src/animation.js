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
    opacity: 0,
    stagger: 0.1,
  })
})
