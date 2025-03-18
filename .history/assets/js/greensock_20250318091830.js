// Portfolio

gsap.to('.section-1', {
	scrollTrigger: {
		trigger: ".section-1",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".section-1", className: ".portfolio-hide"}

	},
 	duration: 3.0,
 	opacity: 1
})

gsap.to('.section-2', {
	scrollTrigger: {
		trigger: ".section-2",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".section-2", className: ".portfolio-hide"}

	},
 	duration: 3.0,
 	opacity: 1
})

gsap.to('.section-3', {
	scrollTrigger: {
		trigger: ".section-3",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".section-3", className: ".portfolio-hide"}

	},
 	duration: 3.0,
 	opacity: 1
})

gsap.to('.section-4', {
	scrollTrigger: {
		trigger: ".section-4",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".section-4", className: ".portfolio-hide"}

	},
 	duration: 3.0,
 	opacity: 1
})

gsap.to('.section-5', {
	scrollTrigger: {
		trigger: ".section-5",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".section-5", className: ".portfolio-hide"}

	},
 	duration: 3.0,
 	opacity: 1
})

gsap.to('.portfolio-button-link', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in-link",
		start: "bottom 3em",
		end: "bottom 15px",
		markers: "true",
		toggleActions: "play none none reverse",
		toggleClass: {targets: ".portfolio-button-link", className: ".reveal"}

	},
 	duration: 0.5,
 	opacity: 1
})
