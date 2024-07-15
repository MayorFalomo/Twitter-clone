import React from "react";
import { BsTwitter } from "react-icons/bs";
import { PreloadStyle } from "./Preload.styled";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Preload = (props: any) => {
  return (
    <PreloadStyle>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="preloadContainer"
        >
          <p>
            <BsTwitter className="loginLogo" style={{ color: " #1d9aef" }} />
          </p>
        </motion.div>
      </AnimatePresence>
    </PreloadStyle>
  );
};

export default Preload;
