// // import LocomotiveScroll from 'locomotive-scroll';

// // const scroll = new LocomotiveScroll({
// //     el: document.querySelector('.main'),
// //     smooth: true
// // });

// // gsap.registerPlugin(ScrollTrigger);

function scroll(){
    
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
}

scroll();

var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})


// /* ===============Page1================ */
// /* ===============Page1================ */
// /* ===============Page1================ */

gsap.from(".gsap",{
    stagger:.3,
    y:10,
    duration:2,
    ease: Power3,
    opacity:0,
})

Shery.textAnimate(".img2-text h1", {
    style: 2,
    y: 10,
    delay: 2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".imo-text img",{
    stagger:.6,
    y:-100,
    duration:2,
    delay:1,
    opacity:0,
    ease: Power3,
})

gsap.to(".imo-text p",{
    stagger:.6,
    y:-100,
    duration:2,
    delay:2,
    // opacity:0,
    ease: Power3,
})

gsap.from(".img3",{
    stagger:.6,
    x:100,
    duration:2,
    delay:1,
    opacity:0,
    ease: Power3,
})

gsap.from(".img3 i",{
    // stagger:.6,
    y:500,
    duration:2,
    delay:1,
    opacity:0,
    ease: Power3,
    repeat:-1,
    yoyo:true,
})


gsap.from(".img1",{
    stagger:.6,
    x:-100,
    duration:2,
    delay:1,
    opacity:0,
    ease: Power3,
})


    // Shery.imageEffect("imo-text img",{
    //     style:3,
    //     debug:true,
    
    // })



// /* ===============Page2================ */
// /* ===============Page2================ */
// /* ===============Page2================ */

gsap.from(".motive",{
    stagger:.6,
    x:-100,
    duration:2,
    // delay:1,
    opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 30%",
    }
})


gsap.to(".para h3",{
    stagger:.4,
    y:0,
    duration:2,
    // delay:1.5,
    // opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        // scrub:2,
    }
})

gsap.to(".footprint h1",{
    stagger:.4,
    y:0,
    duration:3,
    delay:2.5,
    // opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        // scrub:2,
    }
})



// /* ===============Page3================ */
// /* ===============Page3================ */
// /* ===============Page3================ */

gsap.to(".page3-img1 img",{
    // stagger:.4,
    x:0,
    duration:2,
    // delay:3,
    opacity:1,
    ease: Power3,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        scrub:1,
    }
})

gsap.to(".page3-img1 h1,p",{
    // stagger:.4,
    y:0,
    duration:2,
    // delay:3,
    // opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        scrub:1,
    }
})


gsap.to(".page3-img2 img",{
    // stagger:.4,
    x:0,
    duration:2,
    // delay:3,
    opacity:1,
    ease: Power3,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        scrub:1,
    }
})

gsap.to(".page3-img2 h1,p",{
    // stagger:.4,
    y:0,
    duration:3,
    // delay:3,
    // opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        scrub:1,
    }
})


// /* ===============Page4================ */
// /* ===============Page4================ */
// /* ===============Page4================ */



gsap.to(".page4-img1 img",{
    // stagger:.4,
    y:0,
    duration:3,
    // delay:3,
    // opacity:0,
    ease: Power3,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        // scrub:2,
    }
})

// /* ===============Page5================ */
// /* ===============Page5================ */
// /* ===============Page5================ */

document.querySelector(".page5text button")
.addEventListener("mouseover",function(){
    // alert();
    gsap.to(".page5 video",{
        opacity:1,
        // duration:1.5,
        // ease:Power5,
    })
})

document.querySelector(".page5text button")
.addEventListener("mouseleave",function(){
    // alert();
    gsap.to(".page5 video",{
        opacity:0,
    })

})