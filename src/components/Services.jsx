import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import kitchenIcon from "../assets/kitchen.png";
import customerIcon from "../assets/lunch.png";
import billingIcon from "../assets/money.png";
import tableIcon from "../assets/table.png";

const servicesList = [
  {
    id: 1,
    title: "Scan & Order – Hassle-Free, Instant Ordering Management",
    image: kitchenIcon,
    description: "Let your customers skip the wait! With a quick scan of a QR code, they can explore the menu, customize their order, and place it seamlessly—no app downloads, no delays. Kitchen workflow with smart inventory tracking, order queue management, and real-time updates.",
    color: "#000000", // Black
  },
  {
    id: 2,
    title: "Food 3-Step Restaurant Billing – Faster, Smarter, Smoother",
    image: customerIcon,
    description: "Simplify your billing process in just three steps: Take Order → Punch Bills → Generate KOT. Reduce errors, speed up service, and enhance customer satisfaction.",
    color: "#000000", // Black
  },
  {
    id: 3,
    title: "Billing Real-Time Reports – Data-Driven Decisions on the Go",
    image: billingIcon,
    description: "Stay ahead with live insights on sales, inventory, and customer trends. Track revenue and optimize operations with real-time analytics at your fingertips.",
    color: "#000000", // Black
  },
  {
    id: 4,
    title: "Section-Wise KDS – Streamlined Kitchen Operations",
    image: tableIcon,
    description: " Enhance kitchen efficiency with a smart Kitchen Display System (KDS). Orders are automatically sorted by sections (e.g., starters, mains, beverages) ensuring smooth coordination and faster service.",
    color: "#000000", // Black
  },
];

function ServiceSection({ service, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#9CA3AF", "#374151", "#111827"]
  );

  const contentOrder = index % 2 === 0 ? "md:order-last" : "";
  const imageOrder = index % 2 === 0 ? "" : "md:order-last";

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white max-w-7xl mx-auto overflow-x-hidden"
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Service Image */}
        <motion.div
          className={`w-full md:w-1/2 p-12 flex items-center justify-center bg-white ${imageOrder}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[500px] max-w-[600px]">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Service Content */}
        <motion.div
          className={`w-full md:w-1/2 p-12 flex flex-col justify-center ${contentOrder}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="max-w-[600px]">
            <motion.h2
              className="text-4xl font-bold mb-2"
              style={{ color: service.color }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get real-time restaurant
              <span className="block">
                {service.title}
              </span>
            </motion.h2>
            <motion.p
              style={{ color: textColor }}
              className="text-lg my-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="relative bg-white">
      {/* Header Section */}
      <motion.div
        className="text-center bg-white py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-black mx-auto mt-2 mb-6"></div>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          Revolutionize Your Restaurant with Smart Dining Solutions
        </p>
      </motion.div>

      {/* Services in Full Screen Layout */}
      <div>
        {servicesList.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Services;
