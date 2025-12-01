import { FaWhatsapp } from "react-icons/fa";

const WhatsappChat = () => {
  const openWhatsApp = () => {
    const phone = "0715526761";
    window.open(`https://wa.me/94${phone.slice(1)}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-10 left-10 w-12 h-12 rounded-full bg-[#E29D42] cursor-pointer hover:bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
    >
      <FaWhatsapp className="text-2xl" />
    </button>
  );
};

export default WhatsappChat;
