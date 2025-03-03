/**
 * This object contains lazy-loaded GSAP plugins for use in the application.
 */

export const gsapCorePlugins = {
  Draggable: () => import('gsap/Draggable').then(mod => mod.Draggable),
  EaselPlugin: () => import('gsap/EaselPlugin').then(mod => mod.EaselPlugin),
  Flip: () => import('gsap/Flip').then(mod => mod.Flip),
  MotionPathPlugin: () => import('gsap/MotionPathPlugin').then(mod => mod.MotionPathPlugin),
  Observer: () => import('gsap/Observer').then(mod => mod.Observer),
  PixiPlugin: () => import('gsap/PixiPlugin').then(mod => mod.PixiPlugin),
  ScrollToPlugin: () => import('gsap/ScrollToPlugin').then(mod => mod.ScrollToPlugin),
  ScrollTrigger: () => import('gsap/ScrollTrigger').then(mod => mod.ScrollTrigger),
  TextPlugin: () => import('gsap/TextPlugin').then(mod => mod.TextPlugin),
  RoughEase: () => import('gsap/EasePack').then(mod => mod.RoughEase),
  ExpoScaleEase: () => import('gsap/EasePack').then(mod => mod.ExpoScaleEase),
  SlowMo: () => import('gsap/EasePack').then(mod => mod.SlowMo),
  CustomEase: () => import('gsap/CustomEase').then(mod => mod.CustomEase),
}
