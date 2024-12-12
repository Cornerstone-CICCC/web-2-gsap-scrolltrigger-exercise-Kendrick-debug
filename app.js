gsap.registerPlugin(ScrollTrigger);

const lineOneTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    pin: true,
    scrub: true,
    // markers: true
  },
});

lineOneTL
  .from(".line-one span", {
    y: "100vh",
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })
  .from(".sun", {
    x: "100vw",
    opacity: 0,
    duration: 1,
  })
  .to(
    ".line-one",
    {
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  )
  .to(
    ".sun",
    {
      x: "-100vw",
      duration: 1,
    },
    "+=2"
  )
  .to(
    ".line-one span",
    {
      x: "100vw",
      duration: 1,
    },
    "<"
  )
  .to(
    ".line-one",
    {
      backgroundColor: "white",
      duration: 1,
    },
    "<"
  );

const OrTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    pin: true,
    scrub: true,
    // markers: true,
  },
});

OrTL.from(".line-two span:first-child", {
  x: "-100vw",
  scale: 20,
  opacity: 0,
  duration: 1,
}).from(
  ".line-two span:last-child",
  {
    x: "100vw",
    scale: 20,
    opacity: 0,
    duration: 1,
  },
  "<"
);

OrTL.to(".line-two span:first-child", {
  y: -20,
  duration: 1,
});
OrTL.to(".line-two span:first-child", {
  y: 0,
  duration: 1,
});
OrTL.to(
  ".line-two span:last-child",
  {
    y: -20,
    duration: 1,
  },
  "<"
);
OrTL.to(".line-two span:last-child", {
  y: 0,
  duration: 1,
});

const l3tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    pin: true,
    scrub: true,
    // markers: true
  },
});

l3tl
  .from(".line-three span", {
    y: "100vh",
    stagger: 0.3,
  })
  .to(".line-three", {
    color: "white",
    backgroundPositionX: 0,
    duration: 2,
  })
  .from(
    ".moon",
    {
      x: "100vw",
      duration: 2,
    },
    "<"
  );
