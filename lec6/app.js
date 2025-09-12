function breakTheText(){
  var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split("")

var halfValue = splittedText.length/2
var clutter = ""

splittedText.forEach(function(elem,idx){
  if(idx<halfValue){
     clutter += `<span class="first">${elem}</span>`
  }else{
    clutter += `<span class="second">${elem}</span>`
  }
  
})

h1.innerHTML = clutter
}

 breakTheText()

 gsap.from("h1 .first",{
  y:80,
  opacity:0,
  duration:0.6,
  delay:0.5,
  stagger:0.15,
 }) 

 gsap.from("h1 .second",{
  y:50,
  opacity:0,
  duration:0.8,
  delay:0.5,
  stagger:-0.15,
 }) 