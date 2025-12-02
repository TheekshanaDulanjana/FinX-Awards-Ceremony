import { FaWhatsapp } from "react-icons/fa";

const WhatsappChat = () => {
  const openWhatsApp = () => {
    const phone = "0715526761";
    window.open(`https://wa.me/94${phone.slice(1)}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed cursor-pointer rounded-full bottom-8 left-10 w-10 h-10 flex items-center justify-center bg-[#E29D42] text-white  transition-transform transform hover:bg-green-500 group z-60 overflow-hidden"
        >
      <FaWhatsapp className="text-xl" />
    </button>
  );
};

export default WhatsappChat;
