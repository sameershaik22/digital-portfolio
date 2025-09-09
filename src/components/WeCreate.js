import { motion } from "framer-motion";

const services = [
  { title: "UI/UX Design", desc: "Crafting intuitive and beautiful user experiences." },
  { title: "Web Development", desc: "Modern, fast, and scalable websites." },
  { title: "Mobile Apps", desc: "Cross-platform apps that engage and inspire." },
];

export default function WeCreate() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We <span className="text-indigo-600">Create</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-8 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
