import Input from "../components/Input";
export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Register as a Donor</h1>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" autoComplete="name" required className="w-full p-2 border rounded mb-4" />
        <Input label="Full Name" type="text" autoComplete="name" required />
        <Input label="Email" type="email" autoComplete="email" required />
        <button className="bg-red-600 text-white w-full p-2 rounded">Sign Up</button>
      </div>
    </main>
  );
}
