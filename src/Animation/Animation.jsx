import { motion } from "framer-motion";
function Animation({ children , delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 ,y:20}}
      animate={{ opacity: 1,y:0}}
      transition={{ duration: 1,ease:'easeIn',delay:delay }}
    >
      {children}
    </motion.div>
  );
}
export default Animation;
