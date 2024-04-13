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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export { navVariant, linkVariant };
