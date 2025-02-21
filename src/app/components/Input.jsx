const Input = ({ label, type, ...props }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input type={type} className="w-full p-2 border rounded" {...props} />
    </div>
  );
  
  export default Input;
  