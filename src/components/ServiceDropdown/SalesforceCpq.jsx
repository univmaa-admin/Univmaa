import {
  FaFileInvoice,
  FaChartLine,
  FaHandshake,
  FaMoneyBillWave,
  FaShoppingCart,
  FaRocket,
  FaProjectDiagram,
  FaFileContract,
  FaBoxes,
  FaCheckCircle,
  FaSyncAlt,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import RequestForConsultation from "../RequestForConsultation.jsx";
import ServiceDyanamic from "../ServiceDyanamic.jsx";
import FillTheForm from "../FillTheForm.jsx";
/* ---------------- BENEFITS DATA ---------------- */
const benefits = [
  {
    id: 1,
    icon: <FaFileInvoice className="text-4xl text-blue-400" />,
    title: "Minimize Quote Inaccuracies",
    description: "Ensure accurate quotes every time, reducing costly errors.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-4xl text-blue-400" />,
    title: "Enhanced Pricing & Discount Visibility",
    description:
      "Access clear pricing and discount data for informed decision-making.",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-blue-400" />,
    title: "Improved Negotiation Management",
    description: "Gain better insights to handle negotiations effectively.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className="text-4xl text-blue-400" />,
    title: "Intelligent Invoicing",
    description: "Prevent invoicing errors with automated checks and balances.",
  },
  {
    id: 5,
    icon: <FaShoppingCart className="text-4xl text-blue-400" />,
    title: "Guided Selling",
    description:
      "Equip your sales team with tools to select the best product configurations.",
  },
  {
    id: 6,
    icon: <FaRocket className="text-4xl text-blue-400" />,
    title: "Boost Proposal Productivity",
    description: "Streamline the proposal process for faster turnaround.",
  },
];

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    icon: <FaProjectDiagram size={40} className="text-blue-500" />,
    title: "Guided Selling",
    description:
      "Assist your sales team with step-by-step product selection and configurations for each customer every time.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-blue-500" />,
    title: "Approval Workflows",
    description:
      "Streamline approval processes for discounts, custom deals, and contract approvals.",
  },
  {
    icon: <FaBoxes size={40} className="text-blue-500" />,
    title: "Product Bundling",
    description:
      "Package products and services into custom bundles to offer more value to customers.",
  },
  {
    icon: <FaFileContract size={40} className="text-blue-500" />,
    title: "Contract Management",
    description:
      "Seamlessly integrate quoting with contract creation and lifecycle management.",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-blue-500" />,
    title: "Multi-Currency Support",
    description:
      "Handle global transactions effortlessly with multi-currency quoting capabilities.",
  },
  {
    icon: <FaSyncAlt size={40} className="text-blue-500" />,
    title: "Subscription Management",
    description:
      "Manage subscriptions with automated pricing and streamlined contract renewals.",
  },
  {
    icon: <FaNetworkWired size={40} className="text-blue-500" />,
    title: "Multi-Channel Sales Enablement",
    description:
      "Empower partners and customers with CPQ access via Experience Cloud or B2B Commerce.",
  },
  {
    icon: <FaLayerGroup size={40} className="text-blue-500" />,
    title: "Multi-Dimensional Quoting",
    description:
      "Configure products with multiple price dimensions, enabling independent adjustments.",
  },
];

/* ---------------- MAIN PAGE ---------------- */
export default function SalesforceCpqPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0B0E1A] text-white">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#0D1117] text-white pt-32 px-6  overflow-hidden py-16 grid md:grid-cols-2 gap-10 items-center relative">
          <ServiceDyanamic serviceKey="cpq-cloud" />
          {/* Right Form */}
          <FillTheForm />
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="px-6 md:px-20 py-20 relative">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits of Salesforce CPQ
            </h2>
            <p className="text-gray-300">
              Empower Your Sales Team with Precision and Speed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg p-6 bg-[#0D1117] hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="bg-[#0D1117] text-white px-6 md:px-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Features of Salesforce CPQ
            </h2>
            <p className="text-gray-400 mt-2">
              Eliminate Sales and Billing Bottlenecks for Smoother Operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <RequestForConsultation />
      </div>
      <Footer />
    </>
  );
}
