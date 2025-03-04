/**
 * This object contains lazy-loaded GSAP Club plugins for use in the application.
 */

export const gsapClubPlugins = {
  DrawSVGPlugin: () => import('gsap/DrawSVGPlugin').then(mod => mod.DrawSVGPlugin),
  Physics2DPlugin: () => import('gsap/Physics2DPlugin').then(mod => mod.Physics2DPlugin),
  PhysicsPropsPlugin: () => import('gsap/PhysicsPropsPlugin').then(mod => mod.PhysicsPropsPlugin),
  ScrambleTextPlugin: () => import('gsap/ScrambleTextPlugin').then(mod => mod.ScrambleTextPlugin),
  CustomBounce: () => import('gsap/CustomBounce').then(mod => mod.CustomBounce),
  CustomWiggle: () => import('gsap/CustomWiggle').then(mod => mod.CustomWiggle),
  ScrollSmoother: () => import('gsap/ScrollSmoother').then(mod => mod.ScrollSmoother),
  MorphSVGPlugin: () => import('gsap/MorphSVGPlugin').then(mod => mod.MorphSVGPlugin),
  InertiaPlugin: () => import('gsap/InertiaPlugin').then(mod => mod.InertiaPlugin),
  SplitText: () => import('gsap/SplitText').then(mod => mod.SplitText),
  MotionPathHelper: () => import('gsap/MotionPathHelper').then(mod => mod.MotionPathHelper),
  GSDevTools: () => import('gsap/GSDevTools').then(mod => mod.GSDevTools),
}
