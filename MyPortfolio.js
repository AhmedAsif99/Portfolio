
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


function scroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    
}


scroll();

var typingEffect = new Typed(".multitext",{
    strings : ["Ahmed Asif.","Coder.","Designer."],
    loop:true,
    typeSpeed:100,
    backSpeed:40,
    backDelay:1500,

})



var main = document.querySelector("main")
var crsr = document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})

gsap.from(".left-nav,.right-nav",{
    stagger:.3,
    y:10,
    duration:2,
    ease: Power3,
    opacity:0,
})

var sec1 = gsap.timeline({

    scrollTrigger:{
        trigger:".section1",
        scroller:"main",
        // markers:true,
        start:"top 2%",
        end:"top 30%",
    }
});


sec1.from(".left-section",{
    x:-50,
    duration:2,
},"anim")

sec1.from(".leftseclast",{
    y:30,
    yoyo:"true",
    repeat:"-1",
    duration:2,
},"anim")

sec1.from(".right-section img",{
    scale:.5,
    duration:2
},"anim")

sec1.from(".right-section",{
    x:50,
    duration:2
},"anim") 



var sec2 = gsap.timeline({

    scrollTrigger:{
        trigger:".left-section2",
        scroller:"main",
        // markers:true,
        start:"top 100%",
        end:"top 30%",
        scrub:2,
    }
});

sec2.from(".left-section2",{
    x:50,
    duration:2,
},"hey")


sec2.from(".right-section2 h1",{
    x:-50,
    duration:2,
    opacity:0,
},"hey")

sec2.from(".right-section2>p",{
    x:-100,
    duration:2,
    opacity:0,
})


var Project = gsap.timeline({

    scrollTrigger:{
        trigger:".box4",
        scroller:"main",

        // markers:true,
        start:"center 100%",
        end:"top 30%",
        scrub:5,
    }
});

Project.from(".Projects h1",{
    y:-100,
    opacity:0,
    duration:2,

})



Project.from(".box4",{
    y:-60,
    opacity:0,
    duration:2,

})


Project.from(".box4-1 img",{
    x:-400,
    opacity:0,
    // scale:1.6,
    duration:2,
    stagger:1,
})





var Contact = gsap.timeline({

    scrollTrigger:{
        trigger:".Contact",
        scroller:"main",

        // markers:true,
        start:"top 100%",
        end:"top 30%",
        scrub:3,
    }
});


Contact.from(".left-box",{
    x:-100,
    duration:2,
    // delay:10,
},"yes")

Contact.from(".c-right",{
    x:100,
    duration:2,
    // delay:10,
},"yes")


Contact.from(".left-box-icon3",{
    x:-500,
    duration:2,
})

Contact.from(".left-box2",{
    x:-700,
    duration:2,
})