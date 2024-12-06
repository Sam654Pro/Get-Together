// heroSection and projectionRevealSection
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const hero = document.getElementById("hero");
    const characterImage = document.getElementById("characterImage");
    const progressBar = document.querySelector(".progress");
    const startBtn = document.getElementById("startBtn");

    const timeline = gsap.timeline();

    timeline.to(characterImage, {
        scale: .9,
        duration: 1,
        ease: "power2.out"
    });

    timeline.to(progressBar, {
        width: "100%",
        duration: 3,
        ease: "none",
    });

    timeline.to(progressBar, {
        width: "50%",
        duration: 0.3,
        ease: "none",
    }, "+=2");  

    timeline.to(progressBar, {
        width: "75%",
        duration: 0.5,
        ease: "none",
    });

    timeline.to(progressBar, {
        width: "100%",
        duration: 0.5,
        ease: "none",
    });

    timeline.to(startBtn, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
    });
    
});

startBtn.addEventListener("click", function () {
    gsap.to(preloader, {
        opacity: 0,
        duration: 1,
        onComplete: function () {
            preloader.style.display = "none";
            hero.style.display = "flex";
            gsap.from("#hero h1", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
            gsap.from("#hero p", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });
        }
    });
});

const ptl = gsap.timeline(gsap.timeline({
    scrollTrigger: {
        starts: "50% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".beforeImg",
    }}));
    ptl.from("#one", {
    scale: 0,
    opacity: 0,
    duration: 2,
    })
    .from("#two", {
    scale: 0,
    opacity: 0,
    duration: 2,
    }).from("#three", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#four", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#five", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#six", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#seven", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#eight", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#twentyThree", {
    scale: 0,
    opacity: 0,
    duration: 2,

    })
    .from("#twentyFour", {
    scale: 0,
    opacity: 0,
    duration: 2,

    })
    .from("#twentyFive", {
    scale: 0,
    opacity: 0,
    duration: 2,

    }).from("#twentySix", {
    scale: 0,
    opacity: 0,
    duration: 2,

    })
    .from("#thirtyThree", {
    scale: 0,
    opacity: 0,
    duration: 2,

    });



var tlOne = gsap.timeline({
    scrollTrigger: {
        starts: "50% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".heroSect",
    }

}
);

tlOne.to("#videoHero", {
    borderRadius: "0px",
    duration: 5,
    delay:.1,
    scale: 2.5,
    x: 20,
// 
}, "hero")
tlOne.to(".fontSectDiv h1", {
    duration: 5,
    delay:.1,
    fontSize: 70,
    scale: 2,
// 
}, "hero")

var tlTwo = gsap.timeline({
    scrollTrigger: {
        starts: "50% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".hidear",
    }
}
);

tlTwo.from(".organiseheader", {
    x: -100,
    opacity: 0,
})

var tlWot = gsap.timeline({
    scrollTrigger: {
        starts: "50% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".hips",
    }
}
);

tlWot.from("#page2", {
    scale: 0.2,
    duration: 50,
    ease: "power2.inOut",
    delay: 40,
    opacity: 0,
})
tlWot.from(".define", {
    x: -1250,
    duration: 20,
    opacity: 0,
})
.from(".Objective", {
    x: 1250,
    duration: 20,
    delay: 40,
    opacity: 0,
})
.from(".Vision", {
    scale: .5,
    duration: 20,
    delay: 80,
    opacity: 0,

})
.from(".Features", {
    x: 1250,
    duration: 20,
    delay: 80,
    opacity: 0,
})

var tlWto = gsap.timeline({
    scrollTrigger: {
        starts: "150% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".nightoutPhotos",
    }
}
);


tlWto.from(".personasHeader", {
    x: -1400,
    scale: 2.1,
    duration: 50,
    delay: 10,
});
                // photos

                var tlTwo = gsap.timeline({
                    scrollTrigger: {
                        starts: "50% 50%",
                        ends: "50% 50%",
                        scrub: true,
                        trigger: ".power",
                    }
                }
                );
                
                tlTwo.to("#powerRing", {
                    scale: 5,
                    duration: 5,
                    delay: 1,
                    opacity: 0,
                    })
                
        

// .to("#page3", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".jumpToSection", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".projectionRevealSection", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".reviews", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".surveyDiv", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".ctaForm", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero")
// .to(".quiz", {
//     y: -650,
//     duration: 4,
//     delay: .5,
// }, "hero");


// PhotoSection
// var lt = gsap.timeline();

// lt.to("#one", {
//     scale: .8,
//     duration: 2,
//     x: 100,
//     y: 0,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#two", {
//     scale: .8,
//     duration: 2,
//     x: 80,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#three", {
//     scale: .8,
//     duration: 2,
//     x: 170,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#four", {
//     scale: .8,
//     duration: 2,
//     x: 100,
//     zIndex: 9999,
//     rotate: 360,

// })

// lt.to("#five", {
//     scale: .8,
//     duration: 2,
//     x: -140,
//     y: 70,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#six", {
//     scale: .8,
//     duration: 2,
//     x: 80,
//     y: 70,
//     zIndex: 9999,
//     rotate: 360,

// }) 
// // 
// lt.to("#seven", {
//     scale: .8,
//     duration: 2,
//     x: 16,
//     y: 120,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#eight", {
//     scale: .8,
//     duration: 2,
//     x: -137,
//     y: 132,
//     zIndex: 9999,
//     rotate: 360,

// })
// // 
// lt.to("#twentyThree", {
//     scale: 1,
//     duration: 2,
//     x: 84,
//     y: 270,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#twentyFour", {
//     scale: 1,
//     duration: 2,
//     x: 9,
//     y: 445,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#twentyFive", {
//     scale: 1,
//     duration: 2,
//     x: 214,
//     y: 193,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#twentySix", {
//     scale: 1,
//     duration: 2,
//     x: 120,
//     zIndex: 9999,
//     rotate: 360,

// })
// lt.to("#thirtyThree", {
//     scale: 1,
//     duration: 2,
//     x: -139,
//     y: 135,
//     zIndex: 9999,
//     rotate: 360,
// })



// jump to other section (Laptop)
// document.querySelector(".jumpToSection").addEventListener("click", () => {
//     gsap.timeline()
//       .set("body", { backgroundColor: "#E6DDE3" })
//       .to(".jumpToSection", {
//         scale: 5,
//         x: "-50vw",
//         y: "-30vh",
//         ease: "power2.inOut",
//         duration: 1.5,
//       })
//       .to(".jumpToSection", {
//         autoAlpha: 0, // Smooth hide
//         duration: 0.5,
//       })
//       .to("body", {
//         background: "linear-gradient(135deg, #E6DDE3 0%, #D4C4D2 100%)", // Subtle tint
//         ease: "power2.inOut",
//         duration: 1,
//       }, "<");
//   });
var tlLap = gsap.timeline({
    scrollTrigger: {
        starts: "50% 50%",
        ends: "50% 50%",
        scrub: true,
        trigger: ".wrongPower",
    }
}
);

tlLap.to(".jumpToSection", {
    scale: 5,
    duration: 5,
    delay: 1,
    opacity: 0,
    })






// reviews section
var tl = gsap.timeline();

tl.to(".reviews", {
    duration: 3,
    opacity: 1,
    scale: .6,
}, "hero");
tl.to("#divS1", {
    duration: 3,
    opacity: 1,
    scale: 1.4,
    x: -250,
    transform: "rotateY(180deg)",
});
tl.to("#divS2", {
    duration: 3,
    opacity: 1,
    scale: 1.4,
    x: -10,
    transform: "rotateY(180deg)",
});
tl.to("#divS3", {
    duration: 3,
    opacity: 1,
    scale: 1.4,
    x: 250,
    transform: "rotateY(180deg)",
});

// powerRing Section
// document.querySelector("#powerRing").addEventListener("click", () => {
//     gsap.timeline()
//       .set("body", { backgroundColor: "#E6DDE3" })
//       .to("#powerRing", {
//         scale: 25,
//         x: "10vw",
//         y: "-30vh",
//         ease: "power2.inOut",
//         duration: 2,
//       })
//       .to("#powerRing", {
//         autoAlpha: 0, // Smooth hide
//         duration: 0.5,
//       })
//       .to("body", {
//         background: "linear-gradient(135deg, #E6DDE3 0%, #D4C4D2 100%)", // Subtle tint
//         ease: "power2.inOut",
//         duration: 1,
//       }, "<");
//   });

// //   chatgpt gsap


// counters
document.addEventListener("DOMContentLoaded", () => {
    // counting numbers
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);

});
    });

    // personas
    var tltesti = gsap.timeline({
        scrollTrigger: {
            starts: "50% 50%",
            ends: "50% 50%",
            scrub: true,
            trigger: ".testl",
        }
    }
    );

    tltesti.to(".testiHeader", {
        x: 2500,
        duration: 10,
        delay: 5,
        scale: 2.5,
    });

    var tlinscript = gsap.timeline({
        scrollTrigger: {
            starts: "50% 50%",
            ends: "50% 50%",
            scrub: true,
            trigger: ".inscripy",
        }
    }
    );

    tlinscript.to(".inscriptHeader", {
        x: 5500,
        y: 100,
        duration: 10,
        delay: 5,
        scale: 2.5,
    });

    // personality quiz

    var tlpersonality = gsap.timeline({
        scrollTrigger: {
            starts: "50% 50%",
            ends: "50% 50%",
            scrub: true,
            trigger: ".personality",
        }
    }
    );

    tlpersonality.from(".quizHead", {
        duration: 5,
        delay: 5,
        scale: 0,
        opacity: 0,
    })

    // mediaquery

    gsap.matchMedia().add("(max-width: 600px)", () => {
        // Animations for mobile
        gsap.to(".heroSect h1", {
            fontSize: "30px",
            scale: 1.2,
            duration: 1,
            scrollTrigger: {
                trigger: ".heroSect",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    });
    
    gsap.matchMedia().add("(min-width: 601px)", () => {
        // Animations for larger screens
        gsap.to(".heroSect h1", {
            fontSize: "45px",
            scale: 1.6774,
            duration: 1,
            scrollTrigger: {
                trigger: ".heroSect",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    });
    