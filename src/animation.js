import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)


const translations = {
  fr: {
      text1: "La guerre, le mauvais rêve dont on ne se réveille pas.",
      text2: "Il existe au moins deux situations dans lesquelles vous pouvez perdre une identité pourtant solidement bâtie année après année, expérience après expérience : les rêves et la guerre."
  },
  uk: {
      text1: " Війна - страшний сон, від якого ніколи не прокидаєшся.",
      text2: "Є щонайменше дві ситуації, в яких можна втратити ідентичність, що вибудовувалася рік за роком, досвід за досвідом: сни і війна."
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  // Function to update background color based on scroll position
  function updateBackgroundColor() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  // Fonction pour mettre à jour le contenu basé sur la langue
const updateLanguage = (language)=> {
  console.log(language);

  const reveals = document.querySelectorAll('.reveal')
  
  reveals.forEach((element, index) => {
    console.log(element.innerHTML)
    element.innerHTML = translations[language][`text${index + 1}`];
    console.log(element.innerHTML);

    const text = new SplitType(element, { types: 'words' })
    gsap.from(text.words, {
      scrollTrigger: {
        trigger: element,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    })
    
    // Calculate color based on scroll position
    const startColor = [157, 217, 156];
    const endColor = [206, 225, 205];
  });

    const currentColor = startColor.map((start, index) => {
      const end = endColor[index];
      const colorValue = Math.round(start + (end - start) * (scrollPercentage / 100));
      return colorValue;
    });
}

    const backgroundColor = `rgb(${currentColor.join(', ')})`;
const lang = new URL(window.location.href).searchParams.get('lang');
  // Définir la langue initiale
  updateLanguage(lang ?? 'fr');

    body.style.backgroundColor = backgroundColor;
  }
document.getElementById('text-fr').addEventListener('click', () => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("lang", "fr");
  window.location.search = searchParams.toString();
});
document.getElementById('text-uk').addEventListener('click', () =>{
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("lang", "uk");
  window.location.search = searchParams.toString();
});

  // Listen to the scroll event and update background color
  window.addEventListener('scroll', updateBackgroundColor);
});


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




