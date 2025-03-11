/**
 * This object contains lazy-loaded GSAP plugins for use in the application.
 */

const gsapCorePlugins = {
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

/**
 * This object contains lazy-loaded GSAP Club plugins for use in the application.
 */

// const gsapClubPlugins = {
//   DrawSVGPlugin: () => import('gsap/DrawSVGPlugin').then(mod => mod.DrawSVGPlugin),
//   Physics2DPlugin: () => import('gsap/Physics2DPlugin').then(mod => mod.Physics2DPlugin),
//   PhysicsPropsPlugin: () => import('gsap/PhysicsPropsPlugin').then(mod => mod.PhysicsPropsPlugin),
//   ScrambleTextPlugin: () => import('gsap/ScrambleTextPlugin').then(mod => mod.ScrambleTextPlugin),
//   CustomBounce: () => import('gsap/CustomBounce').then(mod => mod.CustomBounce),
//   CustomWiggle: () => import('gsap/CustomWiggle').then(mod => mod.CustomWiggle),
//   ScrollSmoother: () => import('gsap/ScrollSmoother').then(mod => mod.ScrollSmoother),
//   MorphSVGPlugin: () => import('gsap/MorphSVGPlugin').then(mod => mod.MorphSVGPlugin),
//   InertiaPlugin: () => import('gsap/InertiaPlugin').then(mod => mod.InertiaPlugin),
//   SplitText: () => import('gsap/SplitText').then(mod => mod.SplitText),
//   MotionPathHelper: () => import('gsap/MotionPathHelper').then(mod => mod.MotionPathHelper),
//   GSDevTools: () => import('gsap/GSDevTools').then(mod => mod.GSDevTools),
// }

export const gsapPlugins = {
  ...gsapCorePlugins,
  // ...gsapClubPlugins,
}
