// Animation

// gsap.to('#image-sequence', {
// 	scrollTrigger: {
// 		trigger: ".animation-fade-out",
// 		toggleActions: "play none none reverse"
// 	},
//  	opacity: 0,
//  	duration: 0.95,
// })

// gsap.to('.play-button-container', {
// 	scrollTrigger: {
// 		trigger: ".animation-fade-out",
// 		toggleActions: "play none none reverse"
// 	},
//  	opacity: 0,
//  	duration: 0.95,
// })

// Portfolio

gsap.to('.description', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in-link",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".portfolio-button-link", className: ".portfolio-hide"}

	},
 	duration: 0.5,
 	opacity: 1
})

gsap.to('.portfolio-button-link', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in-link",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".portfolio-button-link", className: ".portfolio-hide"}

	},
 	duration: 0.5,
 	opacity: 1
})

gsap.to('.portfolio', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none",
	},
 	opacity: 1,
 	duration: 2
})

gsap.to('#container', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none",
	},
 	opacity: 1,
 	duration: 2
})
