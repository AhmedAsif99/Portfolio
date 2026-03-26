gsap.from(".left-nav img,.mid-nav,.right-nav",{
    y:-100,
    duration:0.4,
    delay:0.4,
    opacity:0,
    stagger:0.5

})

gsap.from(".text h1",{
    x:1000,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5

})

gsap.from(".container>img",{

    rotate:360,
    scale:0,
    opacity:0,
    duration:3,
    delay:3

})

gsap.from(".btn button",{
    y:40,
   repeat:-1,
   duration:1,
   delay:7,
   yoyo:true
})