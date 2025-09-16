var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:"true",
    // markers:true
  }
})

tl.to("#fanta",{
  top:"120%",
  left:"8%"
},'orange')
tl.to("#orange-cut",{
  top:"160%",
  left:"23%",
},'orange')

tl.to("#orange",{
  top:"160%",
  width:"15%",
  right:"5%",
},'orange')
tl.to("#leaf",{
  top:"115%",
  rotate:'100%',
  left:"85%",
},'orange')
tl.to("#leaf2",{
  top:"110%",
  rotate:'360%',
  left:"10%",
},'orange')

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"60% 80%",
    scrub:"true",
  }
})

tl2.from(".lemon1",{
  rotate:"-90deg",
  left:"-50%",
  top:"110%"
},'le')

tl2.from(".lemon2",{
  rotate:"-90deg",
  right:"-50%",
  top:"110%"
},'le')

tl2.from('#cocacola',{
  rotate:"90deg",
  top:"110%",
  left:"-100",
},'le')
tl2.from('#pepsi',{
  rotate:"90deg",
  top:"110%",
  right:"-100",
},'le')


tl2.to('#orange-cut',{
  left:"42.5%",
  top:"200%",
},'le')
tl2.to('#fanta',{
  width:"27%",
  top:"210%",
  left:"36.5%",
},'le')