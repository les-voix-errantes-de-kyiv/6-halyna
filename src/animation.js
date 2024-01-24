import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelector('.reveal')

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'chars, words' })
  console.log(text)
})
