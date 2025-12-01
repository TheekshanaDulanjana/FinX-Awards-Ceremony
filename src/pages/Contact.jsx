import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
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

  // validity
  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== "");
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
          setModal({ show: true, message: `Failed to send message: ${error.message}` });
        }
      );
  };

  const closeModal = () => setModal({ show: false, message: "" });

  return (
    <div
      className="w-full py-12 px-4"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Us Header */}
        <h2 className="text-2xl mt-20 md:text-3xl font-alatsi mb-4 text-[#E29D42]">
          Contact Us
        </h2>
        <p className="text-white font-alata md:text-md mb-8"> 
          Have questions about nominations, partnerships, media coverage, or event participation? <br />
          Our team is here to assist you with any inquiries related to the FinX Awards Ceremony <br />
          and our upcoming initiatives.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* General Inquiries*/}
          <div className="lg:w-1/3">
            <h3 className="text-xl md:text-2xl font-alata mb-4 text-white">
              General Inquiries
            </h3>
            
            
              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <FaPhone className="mr-2 text-[#E29D42] text-lg" />
                  <p className="font-alata text-lg">Dial</p>
                </div>
                <div className="ml-6 flex flex-col font-alata">
                  <a href="tel:+94770000000" className="text-gray-400 hover:text-[#E29D42] transition-colors">
                    +94 77 000 0000
                  </a>
                  <a href="tel:+94770000001" className="text-gray-400 hover:text-[#E29D42] transition-colors">
                    +94 77 000 0001
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-1">
                  <FaEnvelope className="mr-2 text-[#E29D42] text-lg" />
                  <p className="font-alata text-lg">Email</p>
                </div>
                <div className="ml-6 flex flex-col font-alata">
                  <a href="mailto:info@finaxglobal.com" className="text-gray-400 hover:text-[#E29D42] transition-colors">
                    info@finaxglobal.com
                  </a>
                </div>
              </div>

               <div className="mb-8">
                <div className="flex items-center mb-1">
                  <FaBuilding className="mr-2 text-[#E29D42] text-lg" />
                  <p className="font-alata text-lg">Office Address</p>
                </div>
                <div className="ml-6 flex flex-col font-alata">
                  <p className=" text-gray-400">FINAX - Finance & Innovation Excellence</p>
                  <p className=" text-gray-400">Level 10, Business Tower,</p>
                  <p className=" text-gray-400">Colombo 07, Sri Lanka</p>
                </div>
              </div>

                <div className="flex items-center mb-1">
                  <FaClock className="mr-2 text-[#E29D42] text-lg" />
                  <p className="font-alata text-lg">Business Hours</p>
                </div>
                <div className="ml-6 flex flex-col font-alata">
                  <p className=" text-gray-400">Week Days 6:00 PM</p>
                  <p className=" text-gray-400">Weekend: Closed</p>
                </div>

          </div>

          {/* Send Messages Form (Right Column - 2/3 width) */}
          <div className="lg:w-2/3 flex-1 bg-[#535353]/20 h-fit outline-1 outline-white rounded-md p-6 sm:p-8 md:p-5 shadow-sm">
            <h2 className="text-3xl mb-10 font-alatsi text-[#E29D42]">Send Message</h2>
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="flex flex-col font-alata sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] transition-all"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] transition-all"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  className="flex-1 p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] transition-all"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 p-3 rounded-md bg-white/20 outline hover:outline-[#E29D42] transition-all"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 mt-4 rounded-md bg-white/20 outline hover:outline-[#E29D42] transition-all h-32 resize-none"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/*Button active/inactive logic */}
              <button
                type="submit"
                disabled={!formValid}
                className={`cursor-pointer mt-4 mb-5 text-white py-3 rounded-lg transition-all ${
                  formValid ? "bg-[#E29D42] hover:bg-[#E29D42]" : "bg-[#555555] opacity-70 cursor-not-allowed"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Modal */}
        {modal.show && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-6 w-96 font-alata text-center">
              <p className="mb-4">{modal.message}</p>
              <button
                onClick={closeModal}
                className="bg-[#555555] text-white px-6 py-2 rounded-md cursor-pointer font-alata hover:bg-[#E29D42] transition-colors"
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
