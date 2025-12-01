import Finax from '../assets/FinX.png';

const LoadingSpinner = () => {
  const animationStyle = {
    animation: 'pulseScale 1.5s ease-in-out infinite'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <style>
        {`
          @keyframes pulseScale {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.15);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}
      </style>

      <img
        src={Finax}
        alt="Finax"
        className="w-auto h-auto"
        style={animationStyle}
      />
    </div>
  );
};

export default LoadingSpinner;
