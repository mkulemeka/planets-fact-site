// Variants for navigation

const navVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};

// Components variants

const componentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.7,
    },
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

const planetItemVariant = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      transform: { translateX: 0, scale: 1, rotate: 0, translateZ: 0 },
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
