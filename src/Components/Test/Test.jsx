import { motion } from "framer-motion";

export default function Test() {
  return (
    <div className="course">
      <motion.div
        className="box"
        // animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 2, delay: 0 }}
        whileInView={{opacity: 1, scale: 2}}
        // drag={true}
        cursor={{hover: "pointer"}}
      ></motion.div>
    </div>
  );
}
