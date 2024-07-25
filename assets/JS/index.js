gsap.registerPlugin(ScrollTrigger);

function classArray(classe,mode,y=10){
    if(mode=="opac"){
        gsap.utils.toArray(classe).forEach((competence) => {
            gsap.to(competence, {
                opacity: 1,
                duration: 10,
                scrollTrigger: {
                    trigger: competence,
                    start: "top 80%",
                    end: "bottom 20%",
                },
            });
        })
    }
    else if(mode=="down"){
        gsap.utils.toArray(classe).forEach((competence) => {
            gsap.to(competence, {
                y: y,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: competence,
                    start: "top 80%",
                    end: "bottom 20%",
                },
                ease: "bounce.out"
            });
        })
    }
}
function Scroll(elm,x,scrub=true){
    gsap.to(elm, {
        duration: 3,
        x: x,
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: elm,
            start: "top 80%",
            end: "bottom 20%",
            scrub: scrub,
        }
    });
}
gsap.set("#objectifs",{opacity: 0});
gsap.set(".a_propos",{y: 100, opacity: 0});
gsap.set("#interets",{y: -100, opacity: 0})
gsap.set(".compt",{opacity: 0})
gsap.set(".language",{opacity: 0,y: -100})
gsap.set(".framework",{opacity: 0,x: -100})
gsap.set(".img",{opacity:0,y:-100})
gsap.set(".contact",{opacity: 0,y: -100})
gsap.set(".form",{opacity: 0,y: 100})
let timeline = gsap.timeline() ; let front = gsap.timeline() ; let back = gsap.timeline()


gsap.utils.toArray(".front").forEach((framework) => {
    front.to(framework,{opacity: 1, duration: 1, rotate: 360, x: 10})
})
gsap.utils.toArray(".back").forEach((framework) => {
    back.to(framework,{opacity: 1, duration: 1, rotate: 360, x: 10})
})
timeline.to(".a_propos",{y: 0, opacity: 1, duration: 3})
        .to("#objectifs",{opacity: 1, duration: 3})
        .to("#interets",{y: 0, opacity: 1, duration: 3});
classArray(".compt","opac")
classArray(".img","down",0)
classArray(".language","down",10)
ScrollTrigger.create({
    trigger: ".front",
    start: "top 80%",
    end: "bottom 20%",
    animation: front
})
ScrollTrigger.create({
    trigger: ".back",
    start: "top 80%",
    end: "bottom 20%",
    animation: back
})

Scroll(".title_a_propos",50)
Scroll(".title_expertise",50)
Scroll(".title_portfolio",50)
Scroll(".title_new",50)

Scroll(".btn-pmb",100)
Scroll(".btn-maquette",100)
Scroll(".btn-supermarche",100)

Scroll(".contact",0,false)

Scroll(".form",0,false)