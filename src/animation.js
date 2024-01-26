import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)


const translations = {
  fr: {
      text1: "La guerre, le mauvais rêve dont on ne se réveille pas.",
      text2: "Il existe au moins deux situations dans lesquelles vous pouvez perdre une identité pourtant solidement bâtie année après année, expérience après expérience : les rêves et la guerre.",
      text3: "Des lieux, des visages, des sensations que vous savez être les vôtres, mais qui se retrouvent subitement transformés par des forces sur lesquelles vous n’avez aucun contrôle.",
      text4: "Vous en avez peut être fait l’expérience, les rêves sont parfois difficiles à raconter tant ils sont intimes et éloignés de notre réalité. ",
      text5: "Ina nous partage avec courage son infatigable cauchemar, dans lequel elle court en vain derrière son identité qui semble avoir fui en même temps qu’elle essayait de sauver sa vie",
      text6:"Nous avons décidé de retranscrire 4 faits : un condensé d’étapes à franchir, de décisions à prendre, d’épreuves à affronter.",
      text7:"Une somme de tragédies humaines à laquelle l'âme et le cerveau ne devraient jamais faire face, mais qui engagent pourtant l'entièreté d’une vie, d’un corps, d’un esprit. ",
      text8:"Une histoire sans morale, de laquelle ne peut émaner de positif qu’une substance invisible composée d’empathie et d’humilité.",
      text9:"N’essayons pas de nous mettre à une place qui ne nous appartient pas, acceptons le fardeau de notre impuissance, et partageons pour au moins quelques secondes à une échelle infiniment réduite, le désespoir d’une odyssée dramatique.",
      text10:"Plantons d’emblé le décor macabre. Ina fait partie de la 4e génération de sa famille à subir les séquelles irréparables d’une vie recouverte par le voile de la guerre, celui qui ne laisse passer aucune lumière.",
      text11:"La première guerre mondiale. Puis la famine perpétrée par le régime Stalinien à partir de 1933. Puis la seconde guerre mondiale.",
      text12:"Puis enfin (et nous souhaitons que ce terme soit justement employé), la guerre actuelle qui déracine aujourd’hui Ina de son sol.",
      text13:"Quatres phrases courtes  sur lesquelles s’entassent des millions de destinées arrachées à l’espoir d’une vie décente.",
      text14:"Voilà le terreau morbide dans lequel le premier dilemme d’Ina est né. Rester, ou fuire ? ",
      text15:"Une telle décision est lourde quand elle engage votre propre futur, mais quel est l’adjectif adéquat lorsqu’ elle conditionne aussi celui d’une mère handicapée,...",
      text16:"...privée de son traitement d’origine française, à mesure brutale que l’Ukraine se coupe du monde, comme un doigt prêt à céder sous le poids d’une porte à l’élan aveugle et puissant, continuité d’un mouvement d’impulsivité opaque.",
      text17:"Le fait est qu’Ina est aujourd'hui parmis nous pour nous raconter que l’option qui conduisait à la santé de sa mère, menait aussi à la forêt de l’oublie.",
      text18:"Celle où l’on sacrifie tout ce dont on se croit solidement bâtie. Vingt années d’expériences en psychologie, un titre de professeur à l'université de tourisme...",
      text19:"...troqués contre la pitié momentanée de ses accueillants, contre une langue que l’on ne maîtrisera jamais assez pour soulager ses pensées...",
      text20:"...contre des bâtiments et monuments éclairés pendant quelques instants aux couleurs d’un drapeau tâché de sang, son propre sang.",
      text21:"Car même l’endurance des esprits motivés par les plus belles intentions, ne peut que très peu face à un golem d’énergies sombres qui ne semble pas répondre aux lois physiques de la fatigue.",
      text22:"Qui semble ne se nourrir que des ruines matérielles et impalpables qu’il laisse sur son passage. Son seul moteur est l’énergie des vies qu’il détruit.",
      text23:"Et quand le réservoir est au plus vide, un nouveau choix surgit. Une décision qui habituellement demanderait plus de cents nuits du sommeil le plus réparateur avant d’être prise.",
      text24:"Qui ne pourrait être tranchée que dans un moment de quiétude que peu d'humains peuvent se vanter d’avoir connu :",
      text25:"Accéder au statut de réfugié politique et à une intégration renforcée sur le sol français, contre une croix de dix années sur la seule chose qui anime Ina, un retour en Ukraine."

  },
  uk: {
      text1: "Війна - страшний сон, від якого ніколи не прокидаєшся.",
      text2: "Є щонайменше дві ситуації, в яких можна втратити ідентичність, що вибудовувалася рік за роком, досвід за досвідом: сни і війна."
  }
};

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
    
  });

}

const lang = new URL(window.location.href).searchParams.get('lang');
  // Définir la langue initiale
  updateLanguage(lang ?? 'fr');

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

const splitTypes = document.querySelectorAll('.reveal')

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'words' })
  gsap.from(text.words, {
    scrollTrigger: {
      trigger: char,
      start: 'top 35%',
      end: 'top 5%',
      scrub: true,
    },
    opacity: 0,
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




