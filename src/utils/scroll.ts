import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 80 },
      ease: "power3.inOut"
    });
  }
};

export const initScrollAnimations = () => {
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};