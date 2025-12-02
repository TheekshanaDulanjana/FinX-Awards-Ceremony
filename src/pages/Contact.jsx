import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaBuilding, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, message: "" });
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const isValid = Object.values(formData).every((v) => v.trim() !== "");
    setFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModal({ show: true, message: "Message sent successfully!" });
          form.current.reset();
          setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setModal({
            show: true,
            message: `Failed to send message: ${error.message}`,
          });
        }
      );
  };

  const closeModal = () => setModal({ show: false, message: "" });

  return (
    <div
      className="w-full px-4 py-12 md:px-6 lg:px-8"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-alatsi md:mt-20 mb-4 text-[#E29D42]">
          Contact Us
        </h2>

        <p className="text-white font-alata text-sm sm:text-md md:text-lg leading-relaxed mb-10">
          Have questions about nominations, partnerships, media coverage, or event participation?  
          <br />Our team is here to assist you with any inquiries related to the FinX Awards Ceremony  
          and our upcoming initiatives.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/3 space-y-8">
            {/* General Inquiries */}
            <h3 className="text-xl md:text-2xl font-alata mb-2">General Inquiries</h3>

            {/* Phone */}
            <div>
              <div className="flex items-center mb-1">
                <FaPhone className="mr-2 text-[#E29D42] text-lg" />
                <span className="font-alata text-lg">Dial</span>
              </div>
              <div className="flex flex-col ml-6 font-alata space-y-1">
                <a className="text-gray-400 hover:text-[#E29D42] transition"
                   href="tel:+94770000000">
                  +94 77 000 0000
                </a>
                <a className="text-gray-400 hover:text-[#E29D42] transition"
                   href="tel:+94770000001">
                  +94 77 000 0001
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center mb-1">
                <FaEnvelope className="mr-2 text-[#E29D42] text-lg" />
                <span className="font-alata text-lg">Email</span>
              </div>
              <div className="ml-6 font-alata">
                <a
                  href="mailto:info@finaxglobal.com"
                  className="text-gray-400 hover:text-[#E29D42] transition"
                >
                  info@finaxglobal.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center mb-1">
                <FaBuilding className="mr-2 text-[#E29D42] text-lg" />
                <span className="font-alata text-lg">Office Address</span>
              </div>
              <div className="ml-6 font-alata text-gray-400 space-y-1">
                <p>FINAX - Finance & Innovation Excellence</p>
                <p>Level 10, Business Tower,</p>
                <p>Colombo 07, Sri Lanka</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center mb-1">
                <FaClock className="mr-2 text-[#E29D42] text-lg" />
                <span className="font-alata text-lg">Business Hours</span>
              </div>
              <div className="ml-6 font-alata text-gray-400">
                <p>Week Days: 6:00 PM</p>
                <p>Weekend: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:w-2/3 bg-[#535353]/10 border border-white rounded-md shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-alatsi text-[#E29D42] mb-8">
              Send Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 font-alata">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 p-3 outline hover:outline-[#E29D42] rounded-md bg-white/20  focus:outline-[#E29D42] transition"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 p-3 rounded-md outline hover:outline-[#E29D42] bg-white/20  focus:outline-[#E29D42] transition"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  className="flex-1 p-3 rounded-md outline hover:outline-[#E29D42] bg-white/20  focus:outline-[#E29D42] transition"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 p-3 rounded-md outline hover:outline-[#E29D42] bg-white/20  focus:outline-[#E29D42] transition"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                className="w-full h-32 p-3 rounded-md outline hover:outline-[#E29D42] bg-white/20  resize-none focus:outline-[#E29D42] transition"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={!formValid}
                className={`w-full py-3 outline cursor-pointer rounded-lg text-white transition-all ${
                  formValid
                    ? "bg-[#E29D42] hover:bg-[#d18a34]"
                    : "bg-gray-600 opacity-60 cursor-not-allowed"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Modal */}
        {modal.show && (
          <div className="fixed inset-0 bg-[#080B1F]/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-6 w-80 sm:w-96 text-center font-alata">
              <p className="mb-4 text-[#080B1F]">{modal.message}</p>
              <button
                onClick={closeModal}
                className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-[#E29D42] transition"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
