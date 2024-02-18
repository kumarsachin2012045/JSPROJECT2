gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





var menu=document.querySelector("#nav-part2 i");
var full=document.querySelector("#full-scr-nav");
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
    full.style.top="0"
    document.querySelector("#nav h2").style.color="#222"
    document.querySelector("#nav-part2 h2").style.color="#222"
    document.querySelector("#nav-part2 i").style.color="#222"
    flag=1;
    }else{
        full.style.top="-100vh"
        document.querySelector("#nav h2").style.color="#fff"
    document.querySelector("#nav-part2 h2").style.color="#fff"
    document.querySelector("#nav-part2 i").style.color="#fff"
        flag=0;
    }
    
})
var tl=gsap.timeline();
tl.from("#page1 h1",{
    y:60,
    duration:.5,
    opacity:0
})
.from("#page1 h2",{
    y:50,
    duration:.5,
    opacity:0,
    delay:"-.3"
})
.from("#page1 h3",{
    y:50,
    duration:.5,
    opacity:0,
    delay:"-.4"
})
gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        scrub:2  
    }
})
gsap.from("#page2 h3",{
    rotateY:"90deg",
    scrollTrigger:{
        trigger:"#page2 h3",
        scroller:"#main",
      
    }
})

gsap.to("#page5-content img",{
     rotate:360,
     repeat:-1,
     duration:2,
     ease:"linear"
})


var slide1h1=document.querySelectorAll("#page6 .slide1-of-h1 h1");
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:5,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:1 
        }
    })
})
var slide2h1=document.querySelectorAll("#page6 .slide2-of-h1 h1");
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(0%)',
        duration:5,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:1 
        }
    })
})


document.querySelector("#element1").addEventListener("mousemove",function(dets){
     document.querySelector("#element1 img").style.opacity=1;
     document.querySelector("#element1 img").style.left=`${dets.x-200}px`
     document.querySelector("#element1 img").style.top=`${dets.y-300}px`
})
document.querySelector("#element1").addEventListener("mouseleave",function(dets){
    document.querySelector("#element1 img").style.opacity=0;
})

    document.querySelector("#element2").addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.opacity=1;
    document.querySelector("#element2 img").style.left=`${dets.x-800}px`
    document.querySelector("#element2 img").style.top=`${dets.y-300}px`
})


document.querySelector("#element2").addEventListener("mouseleave",function(dets){
    document.querySelector("#element2 img").style.opacity=0;
})



