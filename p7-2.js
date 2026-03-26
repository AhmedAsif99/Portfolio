

    gsap.to(".page1 .text h1",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        delay:3,
        stagger:0.3,
        
    })
    
    
    gsap.from(".page1 .left,.mid a,.right",{
        scale:0.5,
        duration:2,
        opacity:0,
        stagger:0.5,
    
    })
    
    
    
    gsap.to(".page2 .box1 img",{
        x:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".page2 .box",
            scroller:"body",
         
          }
    })
    
    gsap.to(".page2 .box2 img",{
        y:0,
        duration:2,
        delay:2,
        scrollTrigger:{
            trigger:".page2 .box",
            scroller:"body",
           
          }
    })
    
    gsap.to(".page2 .box3 img",{
        x:0,
        duration:2,
        delay:3,
        scrollTrigger:{
            trigger:".page2 .box",
            scroller:"body",
            
          }
    })
    
    gsap.to(".page3 .tax h1",{
        y:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".page3 .tax",
            scroller:"body",
        
          }
    })
    
    gsap.to(".page3 .tax p",{
        y:-25,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".page3 .tax p",
            scroller:"body",

          }
    })
    
    
    gsap.to(".page4 .boxes1 img",{
        y:0,
       duration:2,
       delay:20,
       scale:1,
       
    })
    
    gsap.to(".page4 .boxes2 img",{
        y:0,
       duration:2,
       delay:21,
       scale:1,
    
    })
    
    gsap.to(".page4 .boxes3 img",{
        y:0,
       duration:2,
       delay:22,
       scale:1,
    
    })
    
    
    gsap.from(".page5 .tex",{
        y:-500,
       duration:2,
       delay:27,
       
    })
    
    gsap.from(".page5 .pf1 img",{
        rotate:-100,
       duration:2,
       delay:28,
    
    })
    
    
    
    gsap.to(".page6 #pp",{
       x:0,
       duration:2,
       delay:32,
    })    


