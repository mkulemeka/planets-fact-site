// Variants for navigation

const navVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      delayChildren: 0.15,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, x: "50%" },
  show: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
};

// Components variants

const componentVariant = {
  hidden: { opacity: 0, transform: "translateX(-20px)" },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
    transform: "translateX(0)",
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transform: "translateX(20px)",
  },
};

const planetItemVariant = {
  hidden: {
    opacity: 0,
    transform: "translateX(-20px) rotate(-90deg) scale(0.5) translateZ(0)",
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
    transform: "translateX(0) rotate(0deg) scale(1) translateZ(0)",
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transform: "translateX(20px) rotate(90deg) scale(0.5) translateZ(0)",
  },
};

// Page variants

const pageVariant = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export {
  componentVariant,
  navVariant,
  linkVariant,
  pageVariant,
  planetItemVariant,
};
