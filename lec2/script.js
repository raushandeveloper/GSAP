// gsap.from("#page1 #box",{
//   scale:0,
//   delay:1,
//   duration:2,
//   rotate:360,  
// })

// gsap.from("#page2 #box",{
//   scale:0,//initially it will be 0
//   delay:2,
//   duration:2,
//   rotate:360,
//   scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:"body",//locomotive-scroll
//     markers:true,//to show where the trigger is
//     start:"top 60%",
//   }
// })

// gsap.from("#page2 h1",{
//   opacity:0,
//   duration:2,
//   x:500,
//   scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
//   }
// })

// gsap.from("#page2 h2",{
//   opacity:0,
//   duration:2,
//   x:-500,
//   scrollTrigger:{
//     trigger:"#page2 h2",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
//   }
// })


gsap.from("#page2 #box",{
  scale:0,
  opacity:0,
  duration:1,
  rotate:720,
  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2,//it will take 2 seconds to complete the animation after we scroll
    pin:true,//it will pin the box when we reach there
  }
})
