import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

const SmoothScroll: React.FC<Props> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const ref = useRef<HTMLDivElement | null>(null);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    if (ref.current) {
      const bodyHeight = ref.current.getBoundingClientRect().height;
      if (bodyHeight) {
        document.body.style.height = `${bodyHeight}px`;
      }
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ y, position: "fixed", top: 0, left: 0, right: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
