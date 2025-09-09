import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Services", "Work", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900"
        >
          Crafted<span className="text-indigo-600">Loop</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#4f46e5" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer"
            >
              {item}
              {/* Underline Animation */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 focus:outline-none text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="md:hidden flex flex-col bg-white shadow-md px-6 py-4 space-y-3"
          >
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 250 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
