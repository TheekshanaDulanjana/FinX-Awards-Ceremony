import React from "react";
import FallbackImg from "../assets/covernomination.png";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion"; 

const Nomination = () => {

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6,
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="overflow-x-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      {/* HERO SECTION */}
      <motion.section
        className="relative flex w-full h-80 md:h-92 items-center justify-center text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <img
          src={FallbackImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#080B1F]/50"></div>

        {/* Content */}
        <div className="relative z-10 flex mt-16 md:mt-24 flex-col items-center justify-center text-center max-w-4xl w-full px-4">
          <h1 className="text-center text-2xl sm:text-2xl md:text-5xl font-alatsi text-[#E29D42] leading-tight">
            Nominate an Individual or Organization
          </h1>

          <p className="text-center text-white font-alata text-sm sm:text-lg md:text-xl mt-4 max-w-3xl">
            Be part of the prestigious FinX Awards Ceremony. Submit your nomination to
            recognize the leaders, innovators, and high-performing individuals shaping the future of fintech and digital finance.
          </p>
        </div>
      </motion.section>

      {/* DETAILS & CRITERIA */}
      <motion.div
        className="w-full px-4 md:px-6 py-12"
        style={{ backgroundColor: "#080B1F", color: "white" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="max-w-5xl text-white font-alata text-sm sm:text-lg md:text-xl leading-relaxed mb-10 text-justify md:text-left">
            The FinX Awards serve as a benchmark for excellence in crypto, blockchain, and 
            fintech performance. We invite nominations from professionals, organizations, 
            and industry peers who have demonstrated outstanding achievements across their 
            respective fields. <br /> <br />
            Whether you're nominating yourself, a colleague, an institution, or a standout
            performer, this registration process ensures that every nominee is evaluated
            with fairness, accuracy, and industry-level scrutiny.
          </p>

          {/* Criteria and Guidelines */}
          <div className="flex flex-col md:flex-row mb-12">
            {/* Criteria */}
            <div
              className="flex-1 p-6 rounded-t-md md:rounded-l-md md:rounded-tr-none"
              style={{ backgroundColor: "#E29D42", color: "#080B1F" }} >
              <h3 className="font-alatsi text-xl md:text-2xl text-left mb-4">
                Eligibility Criteria
              </h3>

              <ul className="space-y-3 font-alata text-left leading-relaxed">
                <li className="flex items-start gap-2">
                  <FaCheck className="mt-1 text-[#080B1F]" />
                  <span>Demonstrated impact or achievement in crypto, blockchain, trading, or fintech.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="mt-1 text-[#080B1F]" />
                  <span>Contributed to innovation, financial technology advancement, or industry growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="mt-1 text-[#080B1F]" />
                  <span>Represent a reputable organization or verifiable professional background.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="mt-1 text-[#080B1F]" />
                  <span>Exhibited leadership, creativity, or measurable performance in the field.</span>
                </li>
              </ul>
            </div>

            {/* Guidelines */}
            <div
              className="flex-1 p-6 border rounded-b-md md:rounded-r-md md:rounded-bl-none"
              style={{ borderColor: "#E29D42" }}
            >
              <h3 className="font-alatsi text-[#E29D42] text-xl md:text-2xl text-left mb-4">
                Submission Guidelines
              </h3>

              <ul className="space-y-3 font-alata text-left leading-relaxed">
                <li className="flex items-start gap-2 text-[#E29D42]">
                  <FaCheck className="mt-1 " />
                  <span>Provide accurate and verifiable details.</span>
                </li>
                <li className="flex items-start gap-2 text-[#E29D42]">
                  <FaCheck className="mt-1 " />
                  <span>Ensure contact details are valid for the review team to reach you.</span>
                </li>
                <li className="flex items-start gap-2 text-[#E29D42]">
                  <FaCheck className="mt-1 " />
                  <span>Company names must match the registered business name (if applicable).</span>
                </li>
                <li className="flex items-start gap-2 text-[#E29D42]">
                  <FaCheck className="mt-1 " />
                  <span>Use official job titles or recognized designations.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.div>

      {/* NOMINATION FORM */}
      <motion.div
        className="w-full flex justify-center py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="lg:w-2/3 bg-[#535353]/10 border border-white rounded-md shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-alatsi text-[#E29D42] mb-8 text-center">
            Nominee Registration Form
          </h2>

          <form className="space-y-6 font-alata">

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full legal name"
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                Enter the nominee’s complete legal name as recognized professionally.
              </p>
            </div>

            {/* Field / Area of Expertise */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Field / Area of Expertise</label>
              <input
                type="text"
                name="expertise"
                placeholder="Example: Crypto Trading, Blockchain Development..."
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                Example: Crypto Trading, Blockchain Development, Fintech Innovation, Digital Payments, AI in Finance, etc.
              </p>
            </div>

            {/* Company / Organization */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Company / Organization</label>
              <input
                type="text"
                name="company"
                placeholder="Enter company or write ‘Independent Professional’"
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                Provide the official company or entity the nominee represents.
              </p>
            </div>

            {/* Position / Title */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Position / Title</label>
              <input
                type="text"
                name="position"
                placeholder="Professional role or designation"
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                State the nominee’s professional title or designation.
              </p>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter nominee’s email"
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                Used for all official communication regarding nomination updates.
              </p>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2">
              <label className="text-white">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="e.g., +94 77 123 4567"
                className="p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] focus:outline-[#E29D42] transition"
                required
              />
              <p className="text-sm text-gray-300">
                Include the country code (e.g., +94 for Sri Lanka).
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-[#E29D42] hover:bg-[#d18a34] text-white rounded-lg transition-all"
            >
              Submit Nomination
            </button>

            {/* Note */}
            <p className="text-sm text-gray-300 mt-2 text-center">
              All nominations will be reviewed by our advisory panel. Only shortlisted nominees will be contacted for the next stage.
            </p>
          </form>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Nomination;
