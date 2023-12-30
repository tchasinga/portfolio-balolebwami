import { motion } from 'framer-motion';

export default function Links() {
  const items = [
    "Homepage",
    "Service",
    "Skills",
    "Portfolio",
    "Contact",
  ];

  const variants = {
    open: {
      transition: { staggerChildren: 0.1},
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y : 0,
      opacity: 1,
    },
    closed: {
     y : 150,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a className="font-thin" href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
