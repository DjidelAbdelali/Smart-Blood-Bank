const Button = ({ children, className, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
  
  export default Button;
  