import Floating, { FloatingElement } from "../ui/Floating";
import { motion } from "framer-motion";
import { exampleImages } from "../../utils/demo-images"; // Update if needed

const Header = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Floating sensitivity={-1} className="z-0">
        {exampleImages.slice(0, 5).map((img, index) => (
          <FloatingElement
            key={index}
            depth={(index % 3) + 1}
            className={`top-[${10 + index * 15}%] left-[${15 + index * 10}%]`}
          >
            <motion.img
              src={img.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="w-24 h-24 object-cover rounded-md hover:scale-105 transition-transform"
              alt={`floating-img-${index}`}
            />
          </FloatingElement>
        ))}
      </Floating>

      <div className="absolute z-10 inset-0 flex flex-col justify-center items-center text-white">
        <motion.h1
          className="text-6xl font-bold italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          fancy.
        </motion.h1>
        <motion.button
          className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm hover:scale-105 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Download
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
