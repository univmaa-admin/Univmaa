import Boost from "../assets/Boost.png";
import Insight from "../assets/insight.png";
import SocialCare from "../assets/social-care.png";
import DataMigration from "../assets/data-migration.png";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 mt-[-40px] md:mt-[-90px] md:py-24 py-16 px-6 sm:px-10 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold md:mt-[-40px] mt-[-40px] text-blue-950 font-Krub tracking-tight">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-black text-sm md:text-lg mt-4 max-w-3xl mx-auto">
          Empowering businesses with scalable Salesforce solutions that drive
          efficiency, innovation, and growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[-20px] md:mb-[-44px] gap-10 md:gap-14 lg:gap-16">
        {/* Card 1 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 border border-transparent overflow-hidden transition-all duration-500"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <motion.img
              src={Boost}
              alt="efficient boost"
              className="w-24 h-24 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Content */}
          <div className="p-6 text-left">
            <h3 className=" md:text-2xl font-semibold lg:text-xl  text-blue-950 mb-3">
              Salesforce Implementation & Integration
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed font-medium">
              Unlock Salesforce’s full potential with expert implementation &
              seamless integrations to streamline processes and boost
              productivity.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 border border-transparent overflow-hidden transition-all duration-500"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
            <motion.img
              src={Insight}
              alt="customization"
              className="w-24 h-24 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <div className="p-6 text-left">
            <h3 className="text-xl md:text-2xl font-semibold lg:text-xl text-blue-950 mb-3">
              Customization & Configuration
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed font-medium">
              Tailor Salesforce to your business needs—optimize workflows, data,
              and reporting for smarter CRM solutions.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 border border-transparent overflow-hidden transition-all duration-500"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
            <motion.img
              src={SocialCare}
              alt="training"
              className="w-24 h-24 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <div className="p-6 text-left">
            <h3 className="text-xl md:text-2xl font-semibold lg:text-xl text-blue-950 mb-3">
              Training & Support
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed font-medium">
              Empower your team with tailored Salesforce training and dedicated
              support for smooth adoption and maximum ROI.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 border border-transparent overflow-hidden transition-all duration-500"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
            <motion.img
              src={DataMigration}
              alt="data migration"
              className="w-28 h-28 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <div className="p-6 text-left">
            <h3 className="text-xl md:text-2xl font-semibold lg:text-xl text-blue-950 mb-3">
              Data Migration & Cleanup
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed font-medium">
              Ensure data integrity and consistency with our seamless Salesforce
              migration and cleanup services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
