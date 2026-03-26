
gsap.from(".left,.right",{
    y:-100,
    duration:1,
    delay:0.4,
    stagger: 0.4
    })


gsap.from(".container img",{
    x:-1000,
    duration:1,
    delay:0.7,
   
    })



gsap.from(".text h1,.text h3",{
    x:-1000,
    duration:1,
    delay:1,
    stagger: 0.4
    })

gsap.from(".image img",{
x:100,
scale:0,
opacity:0,
delay:4
})

gsap.to(".image img",{
    x:-1000,
    duration:1,
    delay:5,
    opacity:0,

})


gsap.to("body",{
  backgroundColor:"red",
  duration:1,
  delay:7,

})

gsap.from(".ahmi img",{
    scale:0,
    opacity:0,
    duration:1,
   delay:9,
    })